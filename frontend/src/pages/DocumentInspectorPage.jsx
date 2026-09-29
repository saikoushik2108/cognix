import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, ArrowLeft, ExternalLink, Link2, ShieldCheck, 
  Layers, CheckCircle2, AlertTriangle, Eye, Sparkles, Quote
} from 'lucide-react';
import EntityBadge from '../components/common/EntityBadge';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function DocumentInspectorPage() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);
  const [selectedPageNum, setSelectedPageNum] = useState(2); // Page 2 has the core demo contract text
  const [entities, setEntities] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [facts, setFacts] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);

  useEffect(() => {
    async function load() {
      const currentDoc = await aiService.getDocument(docId || "doc-001");
      const ents = await aiService.getEntities();
      const rels = await aiService.getRelationships();
      const fcts = await aiService.getFacts();

      setDoc(currentDoc);
      setEntities(ents);
      setRelationships(rels);
      setFacts(fcts);

      // Default select ABC Technologies
      const defaultEnt = ents.find(e => e.name.includes("ABC Technologies")) || ents[0];
      setSelectedEntity(defaultEnt);
    }
    load();
  }, [docId]);

  const pages = doc?.pages || [
    { page_number: 1, title: "Cover & Parties", text: "Master Hardware Supply Agreement..." },
    { page_number: 2, title: "Scope & Consideration", text: "ABC Technologies Pvt. Ltd. entered into a supply agreement with XYZ Corporation..." },
    { page_number: 3, title: "Delivery & Logistics", text: "Delivery routing to Bangalore..." },
    { page_number: 4, title: "Signatures", text: "For ABC Technologies: Signed John Smith..." }
  ];

  const currentPage = pages.find(p => p.page_number === selectedPageNum) || pages[0];

  // Helper to highlight entities in text
  const renderHighlightedText = (text) => {
    // Entities to highlight
    const highlightTargets = [
      { text: "ABC Technologies Pvt. Ltd.", type: "Organization", id: "ent-001" },
      { text: "XYZ Corporation", type: "Organization", id: "ent-002" },
      { text: "Dell PowerEdge servers", type: "Product", id: "ent-003" },
      { text: "John Smith", type: "Person", id: "ent-004" },
      { text: "INR 2.5 crore", type: "Money", id: "ent-006" },
      { text: "15 March 2026", type: "Date", id: "ent-007" },
      { text: "15 March 2028", type: "Date", id: "ent-008" },
      { text: "Bangalore", type: "Location", id: "ent-010" }
    ];

    let parts = [{ text: text, isEntity: false }];

    highlightTargets.forEach(target => {
      let nextParts = [];
      parts.forEach(part => {
        if (part.isEntity) {
          nextParts.push(part);
          return;
        }

        const idx = part.text.indexOf(target.text);
        if (idx !== -1) {
          const before = part.text.substring(0, idx);
          const match = part.text.substring(idx, idx + target.text.length);
          const after = part.text.substring(idx + target.text.length);

          if (before) nextParts.push({ text: before, isEntity: false });
          nextParts.push({ text: match, isEntity: true, target });
          if (after) nextParts.push({ text: after, isEntity: false });
        } else {
          nextParts.push(part);
        }
      });
      parts = nextParts;
    });

    return parts.map((p, i) => {
      if (!p.isEntity) {
        return <span key={i}>{p.text}</span>;
      }

      const isCurrentSelected = selectedEntity?.name === p.target.text;
      return (
        <span
          key={i}
          onClick={() => {
            const found = entities.find(e => e.name === p.target.text) || {
              id: p.target.id,
              name: p.target.text,
              type: p.target.type,
              confidence: 0.98,
              status: "Verified",
              linked_entity_id: p.target.type === "Organization" ? "ORG-1024" : null,
              source_doc_name: doc?.filename || "Contract_001.pdf",
              source_page: selectedPageNum
            };
            setSelectedEntity(found);
          }}
          style={{
            backgroundColor: isCurrentSelected ? '#fde047' : '#dbeafe',
            border: isCurrentSelected ? '1px solid #ca8a04' : '1px solid #93c5fd',
            borderRadius: '4px',
            padding: '2px 6px',
            margin: '0 2px',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '4px',
            transition: 'all 0.15s ease'
          }}
          title={`Click to inspect ${p.target.type}`}
        >
          <span>{p.text}</span>
          <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#1e40af', fontWeight: 800 }}>
            [{p.target.type.slice(0, 4)}]
          </span>
        </span>
      );
    });
  };

  // Connected relationships for selected entity
  const connectedRelationships = selectedEntity ? relationships.filter(
    r => r.source_entity_name.includes(selectedEntity.name) || r.target_entity_name.includes(selectedEntity.name)
  ) : [];

  // Connected facts for selected entity
  const connectedFacts = selectedEntity ? facts.filter(
    f => f.subject_name.includes(selectedEntity.name) || (selectedEntity.name.includes("Contract") && f.subject_name.includes("Contract"))
  ) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: 'calc(100vh - 130px)' }}>
      
      {/* Top Breadcrumb Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => navigate('/documents')}
          >
            <ArrowLeft size={14} />
            <span>Documents</span>
          </button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{doc?.filename || 'Contract_001.pdf'}</h2>
              <span className="badge badge-green">Document Inspector</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Interactive 3-Column Grounded Extraction Viewer
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => navigate('/graph')}
          >
            <span>Open in Knowledge Graph</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>

      {/* 3-Column Main Inspector Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr 380px',
        gap: '16px',
        flex: 1,
        minHeight: 0
      }}>
        
        {/* COLUMN 1: LEFT - Document Navigation & Pages */}
        <div className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            Document Pages ({pages.length})
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {pages.map((p) => {
              const isSelected = p.page_number === selectedPageNum;
              return (
                <div
                  key={p.page_number}
                  onClick={() => setSelectedPageNum(p.page_number)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'var(--primary-50)' : '#f8fafc',
                    border: isSelected ? '1px solid #93c5fd' : '1px solid var(--border-light)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: isSelected ? 700 : 600, fontSize: '0.85rem', color: isSelected ? 'var(--primary-700)' : 'var(--text-primary)' }}>
                      Page {p.page_number}
                    </span>
                    {p.page_number === 2 && (
                      <span className="badge badge-blue" style={{ fontSize: '0.65rem' }}>Demo Focus</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {p.title || `Page Section ${p.page_number}`}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-light)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Tip: Click any highlighted entity in the viewer to inspect grounded knowledge.
          </div>
        </div>

        {/* COLUMN 2: CENTER - Document Text Viewer with Entity Highlights */}
        <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', overflowY: 'auto', backgroundColor: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--border-light)', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={18} color="#2563eb" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                Page {selectedPageNum}: {currentPage.title}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interactive Highlight Layer</span>
              <span className="badge badge-green">Active</span>
            </div>
          </div>

          {/* Render Text with Highlights */}
          <div style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#1e293b',
            whiteSpace: 'pre-wrap',
            fontFamily: 'var(--font-sans)',
            padding: '8px 4px'
          }}>
            {renderHighlightedText(currentPage.text)}
          </div>
        </div>

        {/* COLUMN 3: RIGHT - Grounded Knowledge Inspector */}
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', backgroundColor: '#f8fafc' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Entity Inspection
            </span>
            <span className="badge badge-blue">Grounded</span>
          </div>

          {selectedEntity ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Entity Main Card */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <EntityBadge type={selectedEntity.type} />
                  <ConfidenceBadge confidence={selectedEntity.confidence} status={selectedEntity.status} />
                </div>

                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {selectedEntity.name}
                </div>

                {/* Linked Semantic Entity */}
                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: selectedEntity.linked_entity_id ? '#eff6ff' : '#fffbeb', borderRadius: '6px', fontSize: '0.8rem' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>Semantic Model Link</div>
                  <div style={{ fontWeight: 700, color: selectedEntity.linked_entity_id ? '#1d4ed8' : '#b45309' }}>
                    {selectedEntity.linked_entity_id ? `${selectedEntity.linked_entity_id} (${selectedEntity.linked_entity_name || selectedEntity.name})` : "Unmatched (Requires Review)"}
                  </div>
                </div>

                {/* Source Excerpt */}
                <div style={{ marginTop: '12px' }}>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Source Evidence</div>
                  <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-secondary)', backgroundColor: '#f8fafc', padding: '8px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                    "{selectedEntity.evidence_text || 'ABC Technologies entered into a supply agreement with XYZ Corporation...'}"
                  </div>
                </div>
              </div>

              {/* Connected Relationships */}
              {connectedRelationships.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Discovered Relationships ({connectedRelationships.length})
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {connectedRelationships.map(r => (
                      <div 
                        key={r.id} 
                        style={{ padding: '8px 10px', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.775rem' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span className="badge badge-blue">{r.relation_type}</span>
                          <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>{Math.round(r.confidence * 100)}%</span>
                        </div>
                        <div style={{ marginTop: '4px', fontWeight: 600 }}>
                          {r.source_entity_name} → {r.target_entity_name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Associated Facts */}
              {connectedFacts.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Extracted Business Facts
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {connectedFacts.map(f => (
                      <div 
                        key={f.id} 
                        style={{ padding: '8px 10px', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.775rem' }}
                      >
                        <div style={{ color: 'var(--text-muted)' }}>{f.predicate}</div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>{f.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div style={{ padding: '30px 10px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Select any highlighted entity from the document text to inspect its structured knowledge.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
