import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, ArrowLeft, ExternalLink, Link2, ShieldCheck, 
  Layers, CheckCircle2, AlertTriangle, Eye, Sparkles, Quote, Search, X
} from 'lucide-react';
import EntityBadge from '../components/common/EntityBadge';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function DocumentInspectorPage() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);
  const [selectedPageNum, setSelectedPageNum] = useState(2); // Page 2 has core contract text
  const [entities, setEntities] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [facts, setFacts] = useState([]);
  const [evidenceList, setEvidenceList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRightTab, setActiveRightTab] = useState("entities"); // entities, relationships, facts, evidence

  useEffect(() => {
    async function load() {
      const currentDoc = await aiService.getDocument(docId || "doc-001");
      const ents = await aiService.getEntities();
      const rels = await aiService.getRelationships();
      const fcts = await aiService.getFacts();
      const evs = await aiService.getEvidence();

      setDoc(currentDoc);
      setEntities(ents);
      setRelationships(rels);
      setFacts(fcts);
      setEvidenceList(evs);

      // Default select ABC Technologies
      const defaultEnt = ents.find(e => e.name.includes("ABC Technologies")) || ents[0];
      setSelectedItem({ type: 'entity', data: defaultEnt, highlightText: defaultEnt?.name });
    }
    load();
  }, [docId]);

  const pages = doc?.pages || [
    { page_number: 1, title: "Cover & Parties", text: "Master Hardware Supply Agreement between ABC Technologies Pvt. Ltd. and XYZ Corporation..." },
    { page_number: 2, title: "Scope & Consideration", text: "ABC Technologies Pvt. Ltd. entered into a supply agreement with XYZ Corporation for the purchase of 500 Dell PowerEdge servers worth INR 2.5 crore. The agreement was signed by John Smith on 15 March 2026 and is valid until 15 March 2028. Deliveries are routed through Bangalore Hub with SLA 99.9%." },
    { page_number: 3, title: "Delivery & Logistics", text: "Delivery routing to Bangalore data centers under staggered quarterly schedules with hardware warranty." },
    { page_number: 4, title: "Signatures & Execution", text: "Signed on behalf of ABC Technologies Pvt. Ltd. by John Smith, Authorized Signatory." }
  ];

  const currentPage = pages.find(p => p.page_number === selectedPageNum) || pages[0];

  // Helper to render text with highlights for entities and active search/selection
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

    let parts = [{ text: text, isEntity: false, target: null }];

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
      const isTargetMatch = selectedItem?.highlightText && p.text.toLowerCase().includes(selectedItem.highlightText.toLowerCase());
      const isSearchMatch = searchTerm.trim().length > 1 && p.text.toLowerCase().includes(searchTerm.toLowerCase());

      if (!p.isEntity) {
        if (isSearchMatch) {
          return (
            <mark key={i} style={{ backgroundColor: '#fef08a', color: '#854d0e', padding: '1px 3px', borderRadius: '2px' }}>
              {p.text}
            </mark>
          );
        }
        if (isTargetMatch) {
          return (
            <mark key={i} style={{ backgroundColor: '#fed7aa', color: '#9a3412', padding: '2px 4px', borderRadius: '4px', fontWeight: 600 }}>
              {p.text}
            </mark>
          );
        }
        return <span key={i}>{p.text}</span>;
      }

      const isCurrentSelected = selectedItem?.data?.name === p.target.text || isTargetMatch;

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
            setSelectedItem({ type: 'entity', data: found, highlightText: found.name });
            setActiveRightTab("entities");
          }}
          style={{
            backgroundColor: isCurrentSelected ? '#fde047' : isSearchMatch ? '#fef08a' : '#dbeafe',
            border: isCurrentSelected ? '2px solid #ca8a04' : '1px solid #93c5fd',
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: 'calc(100vh - 120px)' }}>
      
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
              <span className="badge badge-blue">3-Column Grounded View</span>
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
        gridTemplateColumns: '220px 1fr 420px',
        gap: '16px',
        flex: 1,
        minHeight: 0
      }}>
        
        {/* COLUMN 1: LEFT - Document Navigation & Pages */}
        <div className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            Pages ({pages.length})
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
            Tip: Click any entity or fact in the right panel to locate and highlight it in the text.
          </div>
        </div>

        {/* COLUMN 2: CENTER - Document Text Viewer with Search & Entity Highlights */}
        <div className="card" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', overflowY: 'auto', backgroundColor: '#ffffff' }}>
          
          {/* Document Header & Search Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={18} color="#2563eb" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                Page {selectedPageNum}: {currentPage.title}
              </span>
            </div>

            {/* In-Document Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search within page..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '6px 28px 6px 28px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.8rem',
                  width: '180px'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{ position: 'absolute', right: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <X size={12} color="#94a3b8" />
                </button>
              )}
            </div>
          </div>

          {/* Render Text with Highlights */}
          <div style={{
            fontSize: '1rem',
            lineHeight: 1.85,
            color: '#1e293b',
            whiteSpace: 'pre-wrap',
            fontFamily: 'var(--font-sans)',
            padding: '4px 2px'
          }}>
            {renderHighlightedText(currentPage.text)}
          </div>
        </div>

        {/* COLUMN 3: RIGHT - Extracted Knowledge Tabs (Entities, Relationships, Facts, Evidence) */}
        <div className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', backgroundColor: '#f8fafc' }}>
          
          {/* Tab Selector */}
          <div style={{ display: 'flex', gap: '4px', backgroundColor: '#e2e8f0', padding: '3px', borderRadius: '6px' }}>
            {[
              { id: 'entities', label: 'Entities', count: entities.length },
              { id: 'relationships', label: 'Relations', count: relationships.length },
              { id: 'facts', label: 'Facts', count: facts.length },
              { id: 'evidence', label: 'Evidence', count: evidenceList.length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveRightTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '5px 4px',
                  fontSize: '0.75rem',
                  fontWeight: activeRightTab === tab.id ? 700 : 500,
                  backgroundColor: activeRightTab === tab.id ? '#ffffff' : 'transparent',
                  color: activeRightTab === tab.id ? '#0f172a' : '#64748b',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: activeRightTab === tab.id ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: ENTITIES */}
          {activeRightTab === 'entities' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {entities.map(e => {
                const isSelected = selectedItem?.data?.id === e.id;
                return (
                  <div
                    key={e.id}
                    onClick={() => {
                      setSelectedItem({ type: 'entity', data: e, highlightText: e.name });
                      if (e.source_page) setSelectedPageNum(e.source_page);
                    }}
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#ffffff',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <EntityBadge type={e.type} />
                      <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>
                        {Math.round((e.confidence || 0.95) * 100)}%
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                      {e.name}
                    </div>
                    {e.linked_entity_id && (
                      <div style={{ fontSize: '0.725rem', color: '#2563eb', fontWeight: 600 }}>
                        → Linked: {e.linked_entity_id}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: RELATIONSHIPS */}
          {activeRightTab === 'relationships' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {relationships.map(r => {
                const isSelected = selectedItem?.data?.id === r.id;
                return (
                  <div
                    key={r.id}
                    onClick={() => {
                      setSelectedItem({ type: 'relationship', data: r, highlightText: r.evidence_text || r.source_entity_name });
                      if (r.source_page) setSelectedPageNum(r.source_page);
                    }}
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#ffffff',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="badge badge-purple" style={{ fontSize: '0.675rem' }}>{r.relation_type}</span>
                      <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>{Math.round(r.confidence * 100)}%</span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.8rem', marginTop: '2px' }}>
                      {r.source_entity_name} → {r.target_entity_name}
                    </div>
                    {r.evidence_text && (
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '2px' }}>
                        "{r.evidence_text.slice(0, 60)}..."
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: FACTS */}
          {activeRightTab === 'facts' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {facts.map(f => {
                const isSelected = selectedItem?.data?.id === f.id;
                return (
                  <div
                    key={f.id}
                    onClick={() => {
                      setSelectedItem({ type: 'fact', data: f, highlightText: f.value });
                      if (f.source_page) setSelectedPageNum(f.source_page);
                    }}
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#ffffff',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{f.predicate}</span>
                      <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>{Math.round(f.confidence * 100)}%</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                      {f.value}
                    </div>
                    <div style={{ fontSize: '0.725rem', color: '#2563eb' }}>
                      Subject: {f.subject_name}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 4: EVIDENCE */}
          {activeRightTab === 'evidence' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {evidenceList.map(ev => {
                const isSelected = selectedItem?.data?.id === ev.id;
                return (
                  <div
                    key={ev.id}
                    onClick={() => {
                      setSelectedItem({ type: 'evidence', data: ev, highlightText: ev.quoted_text });
                      if (ev.page_number) setSelectedPageNum(ev.page_number);
                    }}
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#ffffff',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>Page {ev.page_number}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{ev.claim_type}</span>
                    </div>
                    <div style={{ fontSize: '0.775rem', fontStyle: 'italic', color: '#334155', marginTop: '2px' }}>
                      "{ev.quoted_text}"
                    </div>
                    <div style={{ fontSize: '0.725rem', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
                      Claim: {ev.claim_name}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
