import React from 'react';
import { 
  Cpu, FileText, Search, Share2, ShieldCheck, Database, 
  GitMerge, CheckCircle2, ArrowDown, HelpCircle, Layers, Sparkles, Terminal
} from 'lucide-react';

export default function ArchitecturePage() {
  const stages = [
    {
      step: 1,
      title: "Document Ingestion & Text Extraction",
      type: "Deterministic",
      badgeClass: "badge-blue",
      icon: FileText,
      description: "Extracts raw text streams, structural bounding boxes, and byte offsets directly from PDF, DOCX, or TXT documents using PyMuPDF and python-docx.",
      guarantee: "100% faithful representation of raw document text. No AI paraphrasing or hallucinations at byte level.",
      tech: "PyMuPDF (fitz) / python-docx / UTF-8 stream parser",
      example: "Extracted 1,420 words from Contract_001.pdf with page index 1 & 2 markers."
    },
    {
      step: 2,
      title: "Entity Extraction",
      type: "AI",
      badgeClass: "badge-purple",
      icon: Sparkles,
      description: "Identifies named real-world business entities (Organizations, Persons, Products, Invoices, Contracts) constrained strictly to the predefined Semantic Schema.",
      guarantee: "Entities must be anchored to exact substrings with character offsets in the extracted document text.",
      tech: "Structured JSON schema extraction / Prompt-constrained NER",
      example: "'ABC Technologies Pvt. Ltd.' (Organization), 'Dell PowerEdge Servers' (Product)"
    },
    {
      step: 3,
      title: "Relationship Extraction",
      type: "AI",
      badgeClass: "badge-purple",
      icon: Share2,
      description: "Extracts directional semantic triples [Subject] → (PREDICATE) → [Object] explicitly described between extracted entities.",
      guarantee: "Only explicitly stated relationships are extracted. Unverified assumptions (e.g. 'John Smith is CEO') are blocked or flagged.",
      tech: "Ontology-guided triple parser / Schema validation",
      example: "ABC Technologies → (SIGNED) → Contract C001"
    },
    {
      step: 4,
      title: "Fact Extraction",
      type: "AI",
      badgeClass: "badge-purple",
      icon: Layers,
      description: "Extracts discrete commercial, financial, and operational facts with structured property names, values, and units of measurement.",
      guarantee: "Every extracted fact requires an exact verbatim quotation as source evidence.",
      tech: "Key-value predicate extraction / Datatype normalization",
      example: "Contract C001 · Contract Value = INR 2.5 Crore (Confidence 98%)"
    },
    {
      step: 5,
      title: "Evidence Mapping & Validation",
      type: "Deterministic",
      badgeClass: "badge-blue",
      icon: ShieldCheck,
      description: "Performs deterministic substring verification: validates that the quoted evidence string actually exists character-for-character within the extracted document text.",
      guarantee: "Any claim lacking an exact source quotation is immediately flagged as 'Evidence Unavailable · Requires Review'.",
      tech: "Deterministic string matching / Substring offset locator",
      example: "Verified 'worth INR 2.5 crore' at Contract_001.pdf (Page 2, Char 842-864)"
    },
    {
      step: 6,
      title: "Entity Resolution & Canonical Linking",
      type: "Hybrid",
      badgeClass: "badge-amber",
      icon: GitMerge,
      description: "Normalizes company names, strips legal suffixes, executes rapid fuzzy string matching (Levenshtein / Token Sort), and links variations to canonical registry IDs.",
      guarantee: "High confidence matches (≥90%) are linked automatically. Borderline matches require Human-in-the-Loop review.",
      tech: "Fuzzy matching / Deterministic legal entity normalization",
      example: "'ABC Technologies Pvt Ltd' → linked to ORG-1024 ('ABC Technologies Pvt. Ltd.')"
    },
    {
      step: 7,
      title: "Knowledge Store & Graph Construction",
      type: "Deterministic",
      badgeClass: "badge-blue",
      icon: Database,
      description: "Stores canonical entities, resolved relationships, validated facts, and verified evidence into indexed graph models ready for visual exploration and JSON export.",
      guarantee: "Pure deterministic graph serialization. Graph edges mirror validated evidence triples 1-to-1.",
      tech: "In-memory Graph Engine / React Flow / JSON Knowledge Graph Exporter",
      example: "Knowledge graph constructed with 6 canonical nodes and 5 directed edges."
    },
    {
      step: 8,
      title: "Evidence-Backed Query Engine (Ask Knowledge)",
      type: "Hybrid",
      badgeClass: "badge-amber",
      icon: HelpCircle,
      description: "Answers user questions by first performing deterministic graph traversal to retrieve verified facts and citations, then generating answers strictly from that evidence.",
      guarantee: "Zero unsupported answers. Includes a transparent 'How did we get this answer?' audit trail.",
      tech: "Graph Path Retrieval + Grounded Synthesizer",
      example: "Query: 'What is the contract value?' → Answer: 'INR 2.5 Crore' (Source: Contract_001.pdf Page 2)"
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '1100px' }}>
      
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-purple">System Architecture</span>
          <span className="badge badge-blue">Hybrid AI & Deterministic Engineering</span>
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
          How KnowFlow AI Works
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px', maxWidth: '850px' }}>
          KnowFlow AI combines <strong>AI-driven pattern extraction</strong> with <strong>deterministic validation guardrails</strong>. 
          Unstructured text is transformed into auditable business knowledge where every single fact is traceable to its source.
        </p>
      </div>

      {/* Legend Card */}
      <div className="card" style={{ padding: '16px 20px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
          Architectural Execution Paradigms:
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-blue">Deterministic</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Rule-based, 100% reproducible, zero hallucination</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-purple">AI</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>LLM semantic extraction constrained by strict schemas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-amber">Hybrid</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>AI inference checked by deterministic scoring & human gates</span>
          </div>
        </div>
      </div>

      {/* Step by Step Pipeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <React.Fragment key={stage.step}>
              <div 
                className="card"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderLeft: stage.type === 'Deterministic' ? '4px solid #3b82f6' : stage.type === 'AI' ? '4px solid #8b5cf6' : '4px solid #f59e0b',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
              >
                {/* Top Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: stage.type === 'Deterministic' ? '#eff6ff' : stage.type === 'AI' ? '#f5f3ff' : '#fffbeb',
                      color: stage.type === 'Deterministic' ? '#2563eb' : stage.type === 'AI' ? '#7c3aed' : '#d97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Pipeline Stage {stage.step}
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`badge ${stage.badgeClass}`} style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                    [{stage.type}]
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {stage.description}
                </p>

                {/* Guarantees & Tech info grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '12px',
                  backgroundColor: '#f8fafc',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.825rem'
                }}>
                  <div>
                    <span style={{ fontWeight: 700, color: '#0f172a' }}>Anti-Hallucination Guardrail: </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{stage.guarantee}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: '#0f172a' }}>Real Execution Output: </span>
                    <span style={{ color: '#0369a1', fontFamily: 'monospace' }}>{stage.example}</span>
                  </div>
                </div>
              </div>

              {/* Arrow Connector between steps */}
              {idx < stages.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                  <ArrowDown size={18} color="#94a3b8" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

    </div>
  );
}
