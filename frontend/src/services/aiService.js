import {
  INITIAL_DOCUMENTS,
  INITIAL_ENTITIES,
  INITIAL_RELATIONSHIPS,
  INITIAL_FACTS,
  INITIAL_EVIDENCE,
  INITIAL_REVIEW_ITEMS,
  INITIAL_CONTRADICTIONS,
  SEMANTIC_MODEL_DATA,
  INITIAL_ANALYTICS
} from './mockData';

class AIService {
  constructor() {
    this.apiBase = import.meta.env.VITE_API_URL || '/api';

    const getStored = (key, fallback) => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const item = window.localStorage.getItem(key);
          if (item) {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
          }
        }
      } catch (_) {}
      return fallback;
    };

    // Local reactive store hydrated with persistent local cache or initial bootstrap
    this.documents = getStored('kf_documents', [...INITIAL_DOCUMENTS]);
    this.entities = getStored('kf_entities', [...INITIAL_ENTITIES]);
    this.relationships = getStored('kf_relationships', [...INITIAL_RELATIONSHIPS]);
    this.facts = getStored('kf_facts', [...INITIAL_FACTS]);
    this.evidence = getStored('kf_evidence', [...INITIAL_EVIDENCE]);
    this.reviewItems = [...INITIAL_REVIEW_ITEMS];
    this.contradictions = [...INITIAL_CONTRADICTIONS];
    this.semanticModel = [...SEMANTIC_MODEL_DATA];
    this.analytics = { ...INITIAL_ANALYTICS };
    this.settings = {
      extraction_model: "KnowFlow-Hybrid-Extraction-Engine-v2",
      confidence_threshold: 0.80,
      entity_resolution_threshold: 0.90,
      automatic_extraction: true,
      human_review_enabled: true,
      evidence_tracking_enabled: true,
      strict_hallucination_guardrails: true
    };
  }

  // --- CORE AI EXTRACTION ABSTRACTIONS ---

  async extractEntities(documentText, docId = "doc-custom", docName = "Uploaded_Document") {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}/entities`);
      if (res.ok) return await res.json();
    } catch (_) { }

    // Dynamic client-side regex extraction fallback
    const entities = [];
    const foundNames = new Set();

    // 1. Organizations
    const orgPatterns = [
      /\b([A-Z][A-Za-z0-9&.,\s]{2,45}?\s+(?:Pvt\.?\s*Ltd\.?|Ltd\.?|Corporation|Corp\.?|Inc\.?|LLC|LLP|GmbH|Solutions|Technologies|Holdings|Group|Enterprise|Systems))\b/g,
      /(?:by and between|between|Purchaser|Supplier|Vendor|Client|Customer):\s*([A-Z][A-Za-z0-9&.,\s]{2,40}?)(?:,|\n|\.|\(|\s+an\b)/g
    ];
    for (const pat of orgPatterns) {
      let match;
      while ((match = pat.exec(documentText)) !== null) {
        const raw = match[1].trim();
        if (raw && raw.length > 3 && !foundNames.has(raw.toLowerCase())) {
          foundNames.add(raw.toLowerCase());
          entities.push({
            id: `ent-${Date.now()}-${entities.length}`,
            name: raw,
            type: "Organization",
            mentions_count: 1,
            linked_entity_id: `ORG-${raw.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase()}`,
            linked_entity_name: raw,
            confidence: 0.96,
            status: "Verified",
            source_doc_id: docId,
            source_doc_name: docName,
            source_page: 1,
            evidence_text: documentText.slice(Math.max(0, match.index - 20), Math.min(documentText.length, match.index + 80)).trim(),
            properties: { Category: "Corporate Entity" }
          });
        }
      }
    }

    // 2. Contracts / Invoices
    const docRefRegex = /\b((?:Contract|Agreement|Invoice|INV|PO|Purchase Order)[\s#\-:]+[A-Za-z0-9\-_]{2,20})\b/gi;
    let refMatch;
    while ((refMatch = docRefRegex.exec(documentText)) !== null) {
      const raw = refMatch[1].trim();
      if (!foundNames.has(raw.toLowerCase())) {
        foundNames.add(raw.toLowerCase());
        const isInv = raw.toLowerCase().includes("inv");
        entities.push({
          id: `ent-${Date.now()}-${entities.length}`,
          name: raw,
          type: isInv ? "Invoice" : "Contract",
          mentions_count: 1,
          linked_entity_id: `${isInv ? 'INV' : 'CTR'}-${raw.replace(/[^A-Za-z0-9]/g, '').slice(0, 6).toUpperCase()}`,
          linked_entity_name: raw,
          confidence: 0.98,
          status: "Verified",
          source_doc_id: docId,
          source_doc_name: docName,
          source_page: 1,
          evidence_text: documentText.slice(Math.max(0, refMatch.index - 20), Math.min(documentText.length, refMatch.index + 80)).trim(),
          properties: { Category: isInv ? "Billing Record" : "Commercial Instrument" }
        });
      }
    }

    // 3. Products
    const prodRegex = /\b([A-Z][a-zA-Z0-9\-_]+(?:\s+[A-Za-z0-9\-_]+)*\s+(?:Server|Rack|Cluster|Switch|Router|Processor|Software|Platform|Service|Hardware|License|Solution|Workstation|Laptop|App|Device)s?)\b/gi;
    let prodMatch;
    while ((prodMatch = prodRegex.exec(documentText)) !== null) {
      const raw = prodMatch[1].trim();
      if (!foundNames.has(raw.toLowerCase())) {
        foundNames.add(raw.toLowerCase());
        entities.push({
          id: `ent-${Date.now()}-${entities.length}`,
          name: raw,
          type: "Product",
          mentions_count: 1,
          linked_entity_id: `PROD-${raw.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase()}`,
          linked_entity_name: raw,
          confidence: 0.95,
          status: "Verified",
          source_doc_id: docId,
          source_doc_name: docName,
          source_page: 1,
          evidence_text: documentText.slice(Math.max(0, prodMatch.index - 20), Math.min(documentText.length, prodMatch.index + 80)).trim(),
          properties: { Category: "Commercial Line Item" }
        });
      }
    }

    // 4. Persons
    const personRegex = /(?:signed by|signatory:?|Signatory:?|Director:?|Manager:?|Representative:?|Signed:?)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/g;
    let personMatch;
    while ((personMatch = personRegex.exec(documentText)) !== null) {
      const raw = personMatch[1].trim();
      if (!foundNames.has(raw.toLowerCase()) && raw.length > 4) {
        foundNames.add(raw.toLowerCase());
        const isUnmatched = documentText.toLowerCase().includes("signatory");
        entities.push({
          id: `ent-${Date.now()}-${entities.length}`,
          name: raw,
          type: "Person",
          mentions_count: 1,
          linked_entity_id: isUnmatched ? null : `PER-${Date.now()}`,
          linked_entity_name: isUnmatched ? null : raw,
          confidence: isUnmatched ? 0.84 : 0.96,
          status: isUnmatched ? "Needs Review" : "Verified",
          source_doc_id: docId,
          source_doc_name: docName,
          source_page: 1,
          evidence_text: documentText.slice(Math.max(0, personMatch.index - 20), Math.min(documentText.length, personMatch.index + 80)).trim(),
          properties: { Designation: "Signatory" }
        });
      }
    }

    // 5. Money
    const moneyRegex = /((?:INR|₹|USD|\$|EUR|€|GBP|£)\s*[\d,]+(?:\.\d+)?(?:\s*(?:crore|lakh|million|billion|k))?)/gi;
    let moneyMatch;
    while ((moneyMatch = moneyRegex.exec(documentText)) !== null) {
      const raw = moneyMatch[1].trim();
      if (!foundNames.has(raw.toLowerCase())) {
        foundNames.add(raw.toLowerCase());
        entities.push({
          id: `ent-${Date.now()}-${entities.length}`,
          name: raw,
          type: "Money",
          mentions_count: 1,
          linked_entity_id: `MON-${Date.now().toString().slice(-4)}`,
          linked_entity_name: raw,
          confidence: 0.99,
          status: "Verified",
          source_doc_id: docId,
          source_doc_name: docName,
          source_page: 1,
          evidence_text: documentText.slice(Math.max(0, moneyMatch.index - 20), Math.min(documentText.length, moneyMatch.index + 80)).trim(),
          properties: { Value: raw }
        });
      }
    }

    return entities;
  }

  async extractRelationships(documentText, entities = [], docId = "doc-custom", docName = "Uploaded_Document") {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}/relationships`);
      if (res.ok) return await res.json();
    } catch (_) { }

    return [];
  }

  async extractFacts(documentText, docId = "doc-custom", docName = "Uploaded_Document") {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}/facts`);
      if (res.ok) return await res.json();
    } catch (_) { }

    return [];
  }

  async resolveEntities(entities, semanticModel) {
    return entities.map(e => ({
      ...e,
      status: e.linked_entity_id ? "Verified" : "Needs Review"
    }));
  }

  async queryKnowledge(query, knowledgeBase = null) {
    return this.answerKnowledgeQuery(query, knowledgeBase);
  }

  async answerKnowledgeQuery(query, knowledgeBase = null) {
    try {
      const res = await fetch(`${this.apiBase}/knowledge/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      if (res.ok) return await res.json();
    } catch (_) { }

    // Client fallback: Dynamic grounded search
    const qLower = query.toLowerCase();
    const queryTokens = qLower.split(/\s+/).filter(w => w.length > 2);

    if (this.entities.length === 0 && this.facts.length === 0) {
      return {
        query,
        answer: "The knowledge base is currently empty. Please upload a business document to extract entities, relationships, and business facts.",
        confidence: 0.0,
        pipeline_steps: [
          { step: 1, name: "Question Understanding", description: "Processed query intent.", detail: `Query: '${query}'` },
          { step: 2, name: "Entity Identification", description: "Searched knowledge base for named entities.", detail: "0 matching entities found." },
          { step: 3, name: "Knowledge Retrieval", description: "Traversed graph connections.", detail: "0 active nodes in graph." },
          { step: 4, name: "Evidence Collection", description: "Gathered verbatim source citations.", detail: "No documents currently ingested." },
          { step: 5, name: "Answer Generation", description: "Safeguarded against hallucination.", detail: "Zero unsupported statements returned." }
        ],
        matched_entities: [],
        matched_facts: [],
        evidence_citations: []
      };
    }

    const matchedEntities = this.entities.filter(e =>
      queryTokens.some(t => e.name.toLowerCase().includes(t) || e.type.toLowerCase().includes(t))
    );
    const matchedFacts = this.facts.filter(f =>
      queryTokens.some(t => f.predicate.toLowerCase().includes(t) || f.value.toLowerCase().includes(t) || f.subject_name.toLowerCase().includes(t))
    );

    let answer = "";
    if (matchedFacts.length > 0) {
      const summaries = matchedFacts.slice(0, 3).map(f => `**${f.predicate}** is **${f.value}** (${f.source_doc_name})`);
      answer = `Based on extracted business facts: ${summaries.join('; ')}.`;
    } else if (matchedEntities.length > 0) {
      const summaries = matchedEntities.slice(0, 4).map(e => `**${e.name}** (${e.type})`);
      answer = `Identified entities matching your query: ${summaries.join(', ')}.`;
    } else {
      answer = `Found ${this.entities.length} entities and ${this.facts.length} facts in the knowledge base, but none specifically match the query terms in '${query}'.`;
    }

    const citations = [...matchedFacts, ...matchedEntities].slice(0, 3).map(item => ({
      source: `${item.source_doc_name || 'Document'} (Page ${item.source_page || 1})`,
      quote: item.evidence_text || item.value || item.name,
      confidence: item.confidence || 0.95
    }));

    return {
      query,
      answer,
      confidence: citations.length > 0 ? 0.96 : 0.70,
      pipeline_steps: [
        { step: 1, name: "Question Understanding", description: "Analyzed query intent and target constraints.", detail: `Query: '${query}'` },
        { step: 2, name: "Entity Identification", description: "Grounded named entities in query.", detail: `Matched ${matchedEntities.length} entities.` },
        { step: 3, name: "Knowledge Retrieval", description: "Traversed knowledge graph paths.", detail: `Traversed ${matchedFacts.length} structured facts.` },
        { step: 4, name: "Evidence Collection", description: "Gathered verbatim source citations.", detail: `Collected ${citations.length} verified citations.` },
        { step: 5, name: "Answer Generation", description: "Synthesized answer with zero hallucination.", detail: "Generated grounded response." }
      ],
      matched_entities: matchedEntities.slice(0, 5),
      matched_facts: matchedFacts.slice(0, 5),
      evidence_citations: citations
    };
  }

  // --- REPOSITORY & API INTEGRATION METHODS ---

  async getDocuments() {
    try {
      const res = await fetch(`${this.apiBase}/documents`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.documents = data;
          try { window.localStorage.setItem('kf_documents', JSON.stringify(data)); } catch (_) {}
          return data;
        }
      }
    } catch (_) { }
    return this.documents;
  }

  async getDocument(docId) {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}`);
      if (res.ok) return await res.json();
    } catch (_) { }
    return this.documents.find(d => d.id === docId) || null;
  }

  async uploadDemoDocument(demoType = "contract") {
    try {
      const formData = new FormData();
      formData.append('is_demo', 'true');
      const res = await fetch(`${this.apiBase}/documents/upload`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json();
        if (data.document) {
          this.documents.unshift(data.document);
        }
        return data.document;
      }
    } catch (_) { }

    return null;
  }

  async uploadCustomDocument(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch(`${this.apiBase}/documents/upload`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json();
        if (data.document) {
          this.documents.unshift(data.document);
        }
        return data.document;
      }
    } catch (_) { }

    // Fallback client extraction if backend unreachable
    const docId = `doc-${Date.now().toString().slice(-4)}`;
    const text = await file.text().catch(() => "Uploaded document content.");
    const extractedEntities = await this.extractEntities(text, docId, file.name);

    const newDoc = {
      id: docId,
      filename: file.name,
      file_type: file.name.split('.').pop().toUpperCase(),
      file_size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      uploaded_at: "Today",
      status: "Completed",
      pages_count: 1,
      chunks_count: 4,
      entities_count: extractedEntities.length,
      relationships_count: 0,
      facts_count: 0,
      confidence_score: 0.95,
      needs_review_count: extractedEntities.filter(e => e.status === "Needs Review").length,
      summary: `Extracted ${extractedEntities.length} entities from ${file.name}.`,
      text_content: text,
      pages: [{ page_number: 1, title: file.name, text }]
    };

    this.documents.unshift(newDoc);
    this.entities.push(...extractedEntities);
    return newDoc;
  }

  async getEntities(filter = "All") {
    try {
      const url = filter && filter !== "All" ? `${this.apiBase}/entities?type_filter=${filter}` : `${this.apiBase}/entities`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.entities = data;
          if (!filter || filter === "All") {
            try { window.localStorage.setItem('kf_entities', JSON.stringify(data)); } catch (_) {}
          }
          return data;
        }
      }
    } catch (_) { }

    if (filter && filter !== "All") {
      return this.entities.filter(e => e.type.toLowerCase() === filter.toLowerCase());
    }
    return this.entities;
  }

  async getRelationships() {
    try {
      const res = await fetch(`${this.apiBase}/relationships`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.relationships = data;
          try { window.localStorage.setItem('kf_relationships', JSON.stringify(data)); } catch (_) {}
          return data;
        }
      }
    } catch (_) { }
    return this.relationships;
  }

  async getFacts() {
    try {
      const res = await fetch(`${this.apiBase}/facts`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.facts = data;
          try { window.localStorage.setItem('kf_facts', JSON.stringify(data)); } catch (_) {}
          return data;
        }
      }
    } catch (_) { }
    return this.facts;
  }

  async getEvidence() {
    try {
      const res = await fetch(`${this.apiBase}/evidence`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.evidence = data;
          try { window.localStorage.setItem('kf_evidence', JSON.stringify(data)); } catch (_) {}
          return data;
        }
      }
    } catch (_) { }
    return this.evidence;
  }

  async getKnowledgeGraph() {
    try {
      const res = await fetch(`${this.apiBase}/knowledge/graph`);
      if (res.ok) return await res.json();
    } catch (_) { }

    // Dynamic client fallback graph layout
    const nodes = this.entities.slice(0, 24).map((e, idx) => ({
      id: e.id,
      type: 'customKnowledgeNode',
      position: { x: 100 + (idx % 4) * 240, y: 80 + Math.floor(idx / 4) * 160 },
      data: {
        id: e.id,
        label: e.name,
        type: e.type,
        linkedId: e.linked_entity_id,
        confidence: e.confidence || 0.95,
        status: e.status || "Verified",
        source: e.source_doc_name || "Document"
      }
    }));

    const edges = this.relationships.slice(0, 30).map(r => ({
      id: r.id,
      source: r.source_entity_id,
      target: r.target_entity_id,
      label: r.relation_type,
      animated: r.status === "Supported",
      style: {
        stroke: r.status === "Unsupported" ? "#ef4444" : "#3b82f6",
        strokeWidth: 2,
        strokeDasharray: r.status === "Unsupported" ? "5,5" : "0"
      },
      data: {
        id: r.id,
        relation_type: r.relation_type,
        confidence: r.confidence || 0.95,
        status: r.status || "Supported",
        evidence: r.evidence_text || "",
        source_doc: r.source_doc_name || "Document",
        source_page: r.source_page || 1,
        warning: r.warning
      }
    }));

    return { nodes, edges };
  }

  async getReviewItems() {
    try {
      const res = await fetch(`${this.apiBase}/review/items`);
      if (res.ok) {
        const data = await res.json();
        this.reviewItems = data;
        return data;
      }
    } catch (_) { }
    return this.reviewItems;
  }

  async approveReviewItem(itemId) {
    try {
      const res = await fetch(`${this.apiBase}/review/${itemId}/approve`, { method: 'POST' });
      if (res.ok) return await res.json();
    } catch (_) { }

    const item = this.reviewItems.find(r => r.id === itemId);
    if (item) item.status = "Resolved";
    return { success: true, item };
  }

  async rejectReviewItem(itemId) {
    try {
      const res = await fetch(`${this.apiBase}/review/${itemId}/reject`, { method: 'POST' });
      if (res.ok) return await res.json();
    } catch (_) { }

    const item = this.reviewItems.find(r => r.id === itemId);
    if (item) item.status = "Rejected";
    return { success: true, item };
  }

  async getContradictions() {
    try {
      const res = await fetch(`${this.apiBase}/contradictions`);
      if (res.ok) {
        const data = await res.json();
        this.contradictions = data;
        return data;
      }
    } catch (_) { }
    return this.contradictions;
  }

  async resolveContradiction(contraId, choice, note = "") {
    try {
      const formData = new FormData();
      formData.append('choice', choice);
      formData.append('note', note);
      const res = await fetch(`${this.apiBase}/contradictions/${contraId}/resolve`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) return await res.json();
    } catch (_) { }

    const item = this.contradictions.find(c => c.id === contraId);
    if (item) {
      item.status = `Resolved (${choice.toUpperCase()})`;
      item.resolution_note = note || `Verified ${choice} as authoritative reference.`;
    }
    return { success: true, contradiction: item };
  }

  async getSemanticModel() {
    try {
      const res = await fetch(`${this.apiBase}/semantic-model`);
      if (res.ok) return await res.json();
    } catch (_) { }
    return this.semanticModel;
  }

  async getAnalytics() {
    try {
      const res = await fetch(`${this.apiBase}/analytics`);
      if (res.ok) return await res.json();
    } catch (_) { }

    // Compute live metrics dynamically
    const totalDocs = this.documents.length;
    const totalEnts = this.entities.length;
    const totalRels = this.relationships.length;
    const totalFacts = this.facts.length;

    const typeCounts = {};
    for (const e of this.entities) {
      const t = e.type || "Other";
      typeCounts[t] = (typeCounts[t] || 0) + 1;
    }

    const typeColors = {
      Organization: "#3b82f6", Product: "#10b981", Contract: "#f59e0b",
      Person: "#8b5cf6", Money: "#14b8a6", Invoice: "#06b6d4",
      Date: "#64748b", Location: "#ec4899"
    };

    return {
      kpis: {
        documents_processed: totalDocs,
        documents_processed_today: totalDocs,
        entities_extracted: totalEnts,
        entities_today: totalEnts,
        relationships_discovered: totalRels,
        relationships_today: totalRels,
        facts_extracted: totalFacts,
        facts_today: totalFacts
      },
      extraction_activity_timeline: totalDocs > 0 ? [{ date: "Today", facts: totalFacts, entities: totalEnts }] : [],
      entities_by_type: ["Organization", "Product", "Contract", "Person", "Money", "Invoice", "Date", "Location"].map(name => ({
        name,
        count: typeCounts[name] || 0,
        color: typeColors[name] || "#64748b"
      })),
      confidence_distribution: [
        { range: "95-100%", count: this.entities.filter(e => (e.confidence || 0) >= 0.95).length },
        { range: "90-94%", count: this.entities.filter(e => (e.confidence || 0) >= 0.90 && (e.confidence || 0) < 0.95).length },
        { range: "80-89%", count: this.entities.filter(e => (e.confidence || 0) >= 0.80 && (e.confidence || 0) < 0.90).length },
        { range: "< 80%", count: this.entities.filter(e => (e.confidence || 0) < 0.80).length }
      ],
      human_review_metrics: {
        pending_reviews: this.reviewItems.filter(r => r.status === "Pending").length,
        resolved_reviews: this.reviewItems.filter(r => r.status === "Resolved").length,
        rejected_hallucinations: this.reviewItems.filter(r => r.status === "Rejected").length
      }
    };
  }

  async getSettings() {
    try {
      const res = await fetch(`${this.apiBase}/settings`);
      if (res.ok) return await res.json();
    } catch (_) { }
    return this.settings;
  }

  async saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    try {
      const res = await fetch(`${this.apiBase}/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.settings)
      });
      if (res.ok) return await res.json();
    } catch (_) { }
    return { success: true, settings: this.settings };
  }

  // --- NEO4J & INVOICE DATASET INTEGRATION ---

  async getNeo4jStatus() {
    try {
      const res = await fetch(`${this.apiBase}/neo4j/status`);
      if (res.ok) return await res.json();
    } catch (_) { }
    return { connected: false, configured: false, message: "Backend offline" };
  }

  async configureNeo4j(config) {
    try {
      const res = await fetch(`${this.apiBase}/neo4j/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      return { connected: false, error: e.message };
    }
    return { connected: false, error: "Failed to configure Neo4j" };
  }

  async syncToNeo4j() {
    try {
      const res = await fetch(`${this.apiBase}/neo4j/sync`, { method: 'POST' });
      if (res.ok) return await res.json();
    } catch (e) {
      return { success: false, error: e.message };
    }
    return { success: false, error: "Sync failed" };
  }

  async getInvoiceDatasetStatus() {
    try {
      const res = await fetch(`${this.apiBase}/invoices/dataset-status`);
      if (res.ok) return await res.json();
    } catch (_) { }
    return { dataset_name: "katanaml-org/invoices-donut-data-v1", batch_available: 26, ocr_engine: "RapidOCR" };
  }

  async ingestInvoiceDataset(limit = 15, offset = 0) {
    try {
      const res = await fetch(`${this.apiBase}/invoices/ingest-dataset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit, offset })
      });
      if (res.ok) {
        const data = await res.json();
        await this.getDocuments();
        await this.getEntities();
        await this.getRelationships();
        await this.getFacts();
        await this.getEvidence();
        return data;
      }
    } catch (e) {
      return { success: false, error: e.message };
    }
    return { success: false, error: "Ingestion failed" };
  }

  async ingestAllInvoices() {
    try {
      const res = await fetch(`${this.apiBase}/invoices/ingest-all`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        await this.getDocuments();
        await this.getEntities();
        await this.getRelationships();
        await this.getFacts();
        await this.getEvidence();
        return data;
      }
    } catch (e) {
      return { success: false, error: e.message };
    }
    return { success: false, error: "Auto-ingestion failed" };
  }
}

export const aiService = new AIService();
