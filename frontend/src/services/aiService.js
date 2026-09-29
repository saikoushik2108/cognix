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
    this.apiBase = '/api';
    // Local fallback reactive store
    this.documents = [...INITIAL_DOCUMENTS];
    this.entities = [...INITIAL_ENTITIES];
    this.relationships = [...INITIAL_RELATIONSHIPS];
    this.facts = [...INITIAL_FACTS];
    this.evidence = [...INITIAL_EVIDENCE];
    this.reviewItems = [...INITIAL_REVIEW_ITEMS];
    this.contradictions = [...INITIAL_CONTRADICTIONS];
    this.semanticModel = [...SEMANTIC_MODEL_DATA];
    this.analytics = { ...INITIAL_ANALYTICS };
    this.settings = {
      extraction_model: "Prototype Extraction Engine (v2.4)",
      confidence_threshold: 0.80,
      entity_resolution_threshold: 0.90,
      automatic_extraction: true,
      human_review_enabled: true,
      evidence_tracking_enabled: true,
      strict_hallucination_guardrails: true
    };
  }

  // --- CORE AI EXTRACTION ABSTRACTIONS (As defined in requirements) ---

  async extractEntities(documentText, docId = "doc-custom", docName = "Uploaded_Document") {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}/entities`);
      if (res.ok) return await res.json();
    } catch (_) {}

    // Clean client-side regex extraction fallback
    const entities = [];
    const lower = documentText.toLowerCase();

    if (lower.includes("abc technologies")) {
      entities.push({
        id: `ent-${Date.now()}-1`,
        name: "ABC Technologies Pvt. Ltd.",
        type: "Organization",
        mentions_count: 18,
        linked_entity_id: "ORG-1024",
        linked_entity_name: "ABC Technologies Group",
        confidence: 0.98,
        status: "Verified",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "ABC Technologies Pvt. Ltd. entered into a supply agreement with XYZ Corporation...",
        properties: { Industry: "Information Technology", Country: "India" }
      });
    }

    if (lower.includes("xyz corporation")) {
      entities.push({
        id: `ent-${Date.now()}-2`,
        name: "XYZ Corporation",
        type: "Organization",
        mentions_count: 12,
        linked_entity_id: "ORG-1028",
        linked_entity_name: "XYZ Corp Enterprise Electronics",
        confidence: 0.95,
        status: "Verified",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "...supply agreement with XYZ Corporation for the purchase of 500 Dell PowerEdge servers...",
        properties: { Industry: "Hardware & Manufacturing", Region: "Asia Pacific" }
      });
    }

    if (lower.includes("dell poweredge") || lower.includes("servers")) {
      entities.push({
        id: `ent-${Date.now()}-3`,
        name: "Dell PowerEdge servers",
        type: "Product",
        mentions_count: 14,
        linked_entity_id: "PROD-509",
        linked_entity_name: "Dell PowerEdge Enterprise Rack Server",
        confidence: 0.97,
        status: "Verified",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "...for the purchase of 500 Dell PowerEdge servers worth INR 2.5 crore.",
        properties: { Category: "Data Center Compute", OEM: "Dell Technologies" }
      });
    }

    if (lower.includes("john smith")) {
      entities.push({
        id: `ent-${Date.now()}-4`,
        name: "John Smith",
        type: "Person",
        mentions_count: 4,
        linked_entity_id: null,
        linked_entity_name: null,
        confidence: 0.82,
        status: "Needs Review",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "The agreement was signed by John Smith on 15 March 2026...",
        properties: { Role: "Authorised Signatory" }
      });
    }

    if (lower.includes("2.5 crore") || lower.includes("inr")) {
      entities.push({
        id: `ent-${Date.now()}-5`,
        name: "INR 2.5 crore",
        type: "Money",
        mentions_count: 6,
        linked_entity_id: "MON-25M",
        linked_entity_name: "₹25,000,000 INR",
        confidence: 0.99,
        status: "Verified",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "...worth INR 2.5 crore.",
        properties: { NumericValue: 25000000, Currency: "INR" }
      });
    }

    if (lower.includes("15 march 2026")) {
      entities.push({
        id: `ent-${Date.now()}-6`,
        name: "15 March 2026",
        type: "Date",
        mentions_count: 8,
        linked_entity_id: "DATE-20260315",
        linked_entity_name: "2026-03-15 ISO",
        confidence: 0.98,
        status: "Verified",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "The agreement was signed by John Smith on 15 March 2026...",
        properties: { StandardDate: "2026-03-15" }
      });
    }

    if (lower.includes("15 march 2028")) {
      entities.push({
        id: `ent-${Date.now()}-7`,
        name: "15 March 2028",
        type: "Date",
        mentions_count: 5,
        linked_entity_id: "DATE-20280315",
        linked_entity_name: "2028-03-15 ISO",
        confidence: 0.98,
        status: "Verified",
        source_doc_id: docId,
        source_doc_name: docName,
        source_page: 2,
        evidence_text: "...and is valid until 15 March 2028.",
        properties: { StandardDate: "2028-03-15" }
      });
    }

    return entities.length > 0 ? entities : INITIAL_ENTITIES.slice(0, 5);
  }

  async extractRelationships(documentText, entities = [], docId = "doc-custom", docName = "Uploaded_Document") {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}/relationships`);
      if (res.ok) return await res.json();
    } catch (_) {}

    return INITIAL_RELATIONSHIPS.filter(r => r.source_doc_name === "Contract_001.pdf");
  }

  async extractFacts(documentText, docId = "doc-custom", docName = "Uploaded_Document") {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}/facts`);
      if (res.ok) return await res.json();
    } catch (_) {}

    return INITIAL_FACTS.filter(f => f.source_doc_name === "Contract_001.pdf");
  }

  async resolveEntities(entities, semanticModel) {
    return entities.map(e => ({
      ...e,
      status: e.linked_entity_id ? "Verified" : "Needs Review"
    }));
  }

  async answerKnowledgeQuery(query, knowledgeBase = null) {
    try {
      const res = await fetch(`${this.apiBase}/knowledge/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      if (res.ok) return await res.json();
    } catch (_) {}

    // Client-side structured answer simulation
    const qLower = query.toLowerCase();
    const steps = [
      {
        step: 1,
        name: "Question Understanding",
        description: "Analyze semantic intent, target predicate, and constraint filters.",
        detail: `Detected query intent regarding contracts, values, or entities in prompt: "${query}"`
      },
      {
        step: 2,
        name: "Entity Identification",
        description: "Ground named entities in the query against master semantic model.",
        detail: "Identified 'ABC Technologies' -> Grounded to ORG-1024 (ABC Technologies Pvt. Ltd.)"
      },
      {
        step: 3,
        name: "Knowledge Retrieval",
        description: "Traverse relationships in knowledge graph across contracts, suppliers, and terms.",
        detail: "Traversed: ABC Technologies (ORG-1024) -[SIGNED]-> Contract C001 -[CONTAINS]-> Dell PowerEdge servers"
      },
      {
        step: 4,
        name: "Evidence Collection",
        description: "Assemble verbatim document citations and verify confidence scores.",
        detail: "Gathered direct statements from Contract_001.pdf (Page 2) with 98% average confidence."
      },
      {
        step: 5,
        name: "Answer Generation",
        description: "Synthesize factual answer strictly constrained by evidence without speculation.",
        detail: "Generated evidence-backed answer with 0 hallucinated claims."
      }
    ];

    let answer = "";
    let matched_entities = [];
    let matched_facts = [];
    let evidence_citations = [];

    if (qLower.includes("who signed") || qLower.includes("sign")) {
      answer = "Contract C001 was signed by **John Smith** (Authorised Signatory for ABC Technologies Pvt. Ltd.) and **Robert Vance** (Managing Director for XYZ Corporation) on 15 March 2026.";
      matched_entities = this.entities.filter(e => ["John Smith", "Contract C001", "Robert Vance"].includes(e.name));
      matched_facts = this.facts.filter(f => ["Start Date", "Governing Jurisdiction"].includes(f.predicate));
      evidence_citations = [
        {
          source: "Contract_001.pdf (Page 2 & 4)",
          quote: "The agreement was signed by John Smith on 15 March 2026... For XYZ Corporation: Signed: Robert Vance",
          confidence: 0.98
        }
      ];
    } else if (qLower.includes("value") || qLower.includes("worth") || qLower.includes("how much") || qLower.includes("total")) {
      answer = "The total value of Contract C001 between ABC Technologies Pvt. Ltd. and XYZ Corporation is **INR 2.5 Crore (₹25,000,000)**. An initial invoice (INV-2026-034) of **INR 1.0 Crore** has been issued for 200 delivered units.";
      matched_entities = this.entities.filter(e => ["INR 2.5 crore", "Contract C001", "INR 1.0 Crore"].includes(e.name));
      matched_facts = this.facts.filter(f => ["Contract Value", "Invoice Payable Amount", "Quantity"].includes(f.predicate));
      evidence_citations = [
        {
          source: "Contract_001.pdf (Page 2)",
          quote: "...for the purchase of 500 Dell PowerEdge servers worth INR 2.5 crore.",
          confidence: 0.99
        },
        {
          source: "Invoice_034.pdf (Page 1)",
          quote: "Total amount payable: INR 1,00,00,000 (INR 1.0 Crore). Due date: 30 April 2026.",
          confidence: 0.99
        }
      ];
    } else if (qLower.includes("product") || qLower.includes("purchase") || qLower.includes("servers")) {
      answer = "ABC Technologies Pvt. Ltd. purchased **500 Dell PowerEdge servers** configured with dual Intel Xeon processors, 256GB ECC DDR5 RAM, and redundant titanium power supplies under Contract C001.";
      matched_entities = this.entities.filter(e => ["Dell PowerEdge servers", "ABC Technologies Pvt. Ltd.", "Contract C001"].includes(e.name));
      matched_facts = this.facts.filter(f => ["Quantity", "Processor Architecture", "RAM Specification"].includes(f.predicate));
      evidence_citations = [
        {
          source: "Contract_001.pdf (Page 2)",
          quote: "ABC Technologies Pvt. Ltd. entered into a supply agreement with XYZ Corporation for the purchase of 500 Dell PowerEdge servers...",
          confidence: 0.97
        }
      ];
    } else if (qLower.includes("expire") || qLower.includes("expiry") || qLower.includes("2028") || qLower.includes("valid")) {
      answer = "Contract C001 is valid until **15 March 2028** according to the executed agreement. *Note:* A potential reporting discrepancy in Annual_Report_2026.pdf cites June 2028, currently flagged for human review.";
      matched_entities = this.entities.filter(e => ["15 March 2028", "Contract C001", "June 2028"].includes(e.name));
      matched_facts = this.facts.filter(f => f.predicate.includes("Expiry"));
      evidence_citations = [
        {
          source: "Contract_001.pdf (Page 2)",
          quote: "...and is valid until 15 March 2028.",
          confidence: 0.98
        },
        {
          source: "Annual_Report_2026.pdf (Page 7)",
          quote: "...with an operational expiration recorded as June 2028 (Under Review).",
          confidence: 0.74
        }
      ];
    } else {
      answer = "ABC Technologies Pvt. Ltd. currently holds **Contract C001** (Supply Agreement with XYZ Corporation for 500 Dell PowerEdge servers, value INR 2.5 Crore / ₹2.5 Cr, valid until 15 March 2028). 200 units have been billed under Invoice INV-2026-034.";
      matched_entities = this.entities.slice(0, 4);
      matched_facts = this.facts.slice(0, 4);
      evidence_citations = [
        {
          source: "Contract_001.pdf (Page 2)",
          quote: "ABC Technologies Pvt. Ltd. entered into a supply agreement with XYZ Corporation for the purchase of 500 Dell PowerEdge servers worth INR 2.5 crore.",
          confidence: 0.98
        }
      ];
    }

    return {
      query,
      answer,
      confidence: 0.96,
      pipeline_steps: steps,
      matched_entities,
      matched_facts,
      evidence_citations
    };
  }

  // --- API / STATE WRAPPERS ---

  async getDocuments() {
    try {
      const res = await fetch(`${this.apiBase}/documents`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.documents;
  }

  async getDocument(docId) {
    try {
      const res = await fetch(`${this.apiBase}/documents/${docId}`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.documents.find(d => d.id === docId) || this.documents[0];
  }

  async uploadDemoDocument() {
    try {
      const formData = new FormData();
      formData.append('is_demo', 'true');
      const res = await fetch(`${this.apiBase}/documents/upload`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json();
        return data.document;
      }
    } catch (_) {}

    const newDoc = {
      ...INITIAL_DOCUMENTS[0],
      id: `doc-${Date.now().toString().slice(-4)}`,
      uploaded_at: new Date().toISOString().split('T')[0]
    };
    this.documents.unshift(newDoc);
    return newDoc;
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
        return data.document;
      }
    } catch (_) {}

    // Fallback: parse text client side if txt
    const newDoc = {
      id: `doc-${Date.now().toString().slice(-4)}`,
      filename: file.name,
      file_type: file.name.split('.').pop().toUpperCase(),
      file_size: `${Math.round(file.size / 1024) || 12} KB`,
      uploaded_at: new Date().toISOString().split('T')[0],
      status: "Completed",
      pages_count: 2,
      chunks_count: 6,
      entities_count: 5,
      relationships_count: 4,
      facts_count: 5,
      confidence_score: 0.95,
      needs_review_count: 1,
      summary: `Uploaded ${file.name} - Extracted entities, relationships, and business facts with source traceability.`,
      text_content: "Uploaded document content parsed into structured knowledge representations.",
      pages: [
        {
          page_number: 1,
          title: "Page 1",
          text: "Uploaded document content parsed into structured knowledge representations."
        }
      ]
    };
    this.documents.unshift(newDoc);
    return newDoc;
  }

  async getEntities(filter = "All") {
    try {
      const url = filter && filter !== "All" ? `${this.apiBase}/entities?type_filter=${filter}` : `${this.apiBase}/entities`;
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch (_) {}

    if (filter && filter !== "All") {
      return this.entities.filter(e => e.type.toLowerCase() === filter.toLowerCase());
    }
    return this.entities;
  }

  async getRelationships() {
    try {
      const res = await fetch(`${this.apiBase}/relationships`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.relationships;
  }

  async getFacts() {
    try {
      const res = await fetch(`${this.apiBase}/facts`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.facts;
  }

  async getEvidence() {
    try {
      const res = await fetch(`${this.apiBase}/evidence`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.evidence;
  }

  async getKnowledgeGraph() {
    try {
      const res = await fetch(`${this.apiBase}/knowledge/graph`);
      if (res.ok) return await res.json();
    } catch (_) {}

    // Client fallback graph nodes & edges
    const nodes = this.entities.slice(0, 9).map((e, idx) => {
      const positions = {
        "ent-001": { x: 80, y: 140 },
        "ent-002": { x: 780, y: 140 },
        "ent-005": { x: 420, y: 280 },
        "ent-003": { x: 420, y: 480 },
        "ent-004": { x: 140, y: 440 },
        "ent-006": { x: 720, y: 320 },
        "ent-007": { x: 420, y: 100 },
        "ent-008": { x: 620, y: 100 },
        "ent-009": { x: 680, y: 480 },
      };
      return {
        id: e.id,
        type: 'customKnowledgeNode',
        position: positions[e.id] || { x: 100 + (idx % 3) * 260, y: 80 + Math.floor(idx / 3) * 160 },
        data: {
          id: e.id,
          label: e.name,
          type: e.type,
          linkedId: e.linked_entity_id,
          confidence: e.confidence,
          status: e.status,
          source: e.source_doc_name
        }
      };
    });

    const edges = this.relationships.slice(0, 10).map(r => ({
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
        confidence: r.confidence,
        status: r.status,
        evidence: r.evidence_text,
        source_doc: r.source_doc_name,
        source_page: r.source_page,
        warning: r.warning
      }
    }));

    return { nodes, edges };
  }

  async getReviewItems() {
    try {
      const res = await fetch(`${this.apiBase}/review/items`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.reviewItems;
  }

  async approveReviewItem(itemId) {
    try {
      const res = await fetch(`${this.apiBase}/review/${itemId}/approve`, { method: 'POST' });
      if (res.ok) return await res.json();
    } catch (_) {}

    const item = this.reviewItems.find(r => r.id === itemId);
    if (item) {
      item.status = "Approved";
      if (item.category === "Unmatched" && item.match_id) {
        const ent = this.entities.find(e => e.name.includes(item.extracted_text));
        if (ent) {
          ent.linked_entity_id = item.match_id;
          ent.status = "Verified";
        }
      }
    }
    return { success: true, item };
  }

  async rejectReviewItem(itemId) {
    try {
      const res = await fetch(`${this.apiBase}/review/${itemId}/reject`, { method: 'POST' });
      if (res.ok) return await res.json();
    } catch (_) {}

    const item = this.reviewItems.find(r => r.id === itemId);
    if (item) {
      item.status = "Rejected";
    }
    return { success: true, item };
  }

  async getContradictions() {
    try {
      const res = await fetch(`${this.apiBase}/contradictions`);
      if (res.ok) return await res.json();
    } catch (_) {}
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
    } catch (_) {}

    const item = this.contradictions.find(c => c.id === contraId);
    if (item) {
      item.status = `Resolved (${choice === 'doc_a' ? 'Doc A' : 'Doc B'})`;
      item.resolution_note = note || `User confirmed ${choice === 'doc_a' ? 'Doc A' : 'Doc B'} as authoritative reference.`;
    }
    return { success: true, contradiction: item };
  }

  async getSemanticModel() {
    try {
      const res = await fetch(`${this.apiBase}/semantic-model`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.semanticModel;
  }

  async getAnalytics() {
    try {
      const res = await fetch(`${this.apiBase}/analytics`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.analytics;
  }

  async getSettings() {
    try {
      const res = await fetch(`${this.apiBase}/settings`);
      if (res.ok) return await res.json();
    } catch (_) {}
    return this.settings;
  }

  async updateSettings(newSettings) {
    try {
      const res = await fetch(`${this.apiBase}/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSettings)
      });
      if (res.ok) return await res.json();
    } catch (_) {}
    this.settings = { ...this.settings, ...newSettings };
    return { success: true, settings: this.settings };
  }

  async search(query) {
    if (!query || query.trim().length < 2) {
      return { documents: [], entities: [], relationships: [], facts: [] };
    }
    try {
      const res = await fetch(`${this.apiBase}/search?q=${encodeURIComponent(query)}`);
      if (res.ok) return await res.json();
    } catch (_) {}

    const term = query.toLowerCase().trim();
    return {
      documents: this.documents
        .filter(d => d.filename.toLowerCase().includes(term) || d.summary.toLowerCase().includes(term))
        .map(d => ({ id: d.id, title: d.filename, type: "document", subtitle: d.summary.slice(0, 90) }))
        .slice(0, 5),
      entities: this.entities
        .filter(e => e.name.toLowerCase().includes(term) || e.type.toLowerCase().includes(term))
        .map(e => ({ id: e.id, title: e.name, type: e.type, subtitle: `Linked: ${e.linked_entity_id || 'Unmatched'} • ${Math.round(e.confidence * 100)}% conf` }))
        .slice(0, 6),
      relationships: this.relationships
        .filter(r => r.source_entity_name.toLowerCase().includes(term) || r.target_entity_name.toLowerCase().includes(term) || r.relation_type.toLowerCase().includes(term))
        .map(r => ({ id: r.id, title: `${r.source_entity_name} → ${r.relation_type} → ${r.target_entity_name}`, type: "relationship", subtitle: `${r.status} • ${r.source_doc_name}` }))
        .slice(0, 5),
      facts: this.facts
        .filter(f => f.subject_name.toLowerCase().includes(term) || f.predicate.toLowerCase().includes(term) || f.value.toLowerCase().includes(term))
        .map(f => ({ id: f.id, title: `${f.subject_name}: ${f.predicate} = ${f.value}`, type: "fact", subtitle: `${f.status} • ${f.source_doc_name}` }))
        .slice(0, 5)
    };
  }
}

export const aiService = new AIService();
