import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Layers, Link2, ShieldCheck, Quote, Search, Filter, 
  ExternalLink, ArrowUpDown, CheckCircle2, AlertTriangle, ArrowRight 
} from 'lucide-react';
import EntityBadge from '../components/common/EntityBadge';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import EntityDrawer from '../components/common/EntityDrawer';
import EvidenceDrawer from '../components/common/EvidenceDrawer';
import { aiService } from '../services/aiService';

export default function KnowledgeRepositoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Active tab state: 'entities' | 'relationships' | 'facts' | 'evidence'
  const initialTab = searchParams.get('tab') || 'entities';
  const [activeTab, setActiveTab] = useState(initialTab);

  // Data states
  const [entities, setEntities] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [facts, setFacts] = useState([]);
  const [evidenceList, setEvidenceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [entityFilter, setEntityFilter] = useState('All');
  const [relFilter, setRelFilter] = useState('All');
  const [factFilter, setFactFilter] = useState('All');
  const [evidenceFilter, setEvidenceFilter] = useState('All');

  // Drawers
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  useEffect(() => {
    async function loadAll() {
      setIsLoading(true);
      try {
        const [ents, rels, fcts, evs] = await Promise.all([
          aiService.getEntities(),
          aiService.getRelationships(),
          aiService.getFacts(),
          aiService.getEvidence()
        ]);
        setEntities(ents || []);
        setRelationships(rels || []);
        setFacts(fcts || []);
        setEvidenceList(evs || []);

        const highlightId = searchParams.get('highlight');
        if (highlightId && ents) {
          const found = ents.find(e => e.id === highlightId);
          if (found) setSelectedEntity(found);
        }
      } catch (err) {
        console.error("Failed to load knowledge repository:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadAll();
  }, [searchParams]);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['entities', 'relationships', 'facts', 'evidence'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
    setSearchQuery('');
  };

  // --- FILTERED DATA ---
  const filteredEntities = entities.filter(ent => {
    const matchesType = entityFilter === 'All' || (ent.type || '').toLowerCase() === entityFilter.toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || (ent.name || '').toLowerCase().includes(q) || (ent.type || '').toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });

  const filteredRelationships = relationships.filter(rel => {
    const matchesType = relFilter === 'All' || (rel.relation_type || '').toLowerCase() === relFilter.toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      (rel.source_entity_name || '').toLowerCase().includes(q) ||
      (rel.target_entity_name || '').toLowerCase().includes(q) ||
      (rel.relation_type || '').toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });

  const filteredFacts = facts.filter(f => {
    const matchesFilter = factFilter === 'All' || (f.status || 'Verified').toLowerCase() === factFilter.toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      (f.subject_name || '').toLowerCase().includes(q) ||
      (f.predicate || '').toLowerCase().includes(q) ||
      (f.value || '').toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const filteredEvidence = evidenceList.filter(item => {
    if (!item) return false;
    const itemStatus = (item.status || "Supported").toLowerCase();
    const itemText = (item.text || item.quote || item.evidence_text || "").toLowerCase();
    const itemDoc = (item.source_doc_name || "").toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesFilter = evidenceFilter === 'All' || itemStatus === evidenceFilter.toLowerCase();
    const matchesSearch = !q || itemText.includes(q) || itemDoc.includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Knowledge Repository</h1>
            <span className="badge badge-purple" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
              Unified Master Index
            </span>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Centralized hub for all business entities, multi-hop relationships, structured facts, and evidentiary citations.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => navigate('/graph')}
          >
            <span>Explore 3D Graph →</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroller Filter Bar (Same as Review Center) */}
      <div className="card" style={{
        padding: '6px',
        display: 'flex',
        gap: '6px',
        backgroundColor: '#f1f5f9',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        boxShadow: 'none'
      }}>
        <button
          onClick={() => handleTabChange('entities')}
          className={`btn btn-sm ${activeTab === 'entities' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1, minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <Layers size={15} />
          <span>Entities ({entities.length})</span>
        </button>

        <button
          onClick={() => handleTabChange('relationships')}
          className={`btn btn-sm ${activeTab === 'relationships' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <Link2 size={15} />
          <span>Relationships ({relationships.length})</span>
        </button>

        <button
          onClick={() => handleTabChange('facts')}
          className={`btn btn-sm ${activeTab === 'facts' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1, minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <ShieldCheck size={15} />
          <span>Facts ({facts.length})</span>
        </button>

        <button
          onClick={() => handleTabChange('evidence')}
          className={`btn btn-sm ${activeTab === 'evidence' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          <Quote size={15} />
          <span>Evidence ({evidenceList.length})</span>
        </button>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="card" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        
        {/* Category Pills depending on active tab */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', maxWidth: '70%' }}>
          {activeTab === 'entities' && ['All', 'Organization', 'Product', 'Invoice', 'Money', 'Date'].map(t => (
            <button
              key={t}
              onClick={() => setEntityFilter(t)}
              className={`btn btn-sm ${entityFilter === t ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.8rem', padding: '4px 10px' }}
            >
              {t}
            </button>
          ))}

          {activeTab === 'relationships' && ['All', 'ISSUED', 'BILLED_TO', 'CONTAINS_ITEM', 'HAS_TOTAL'].map(r => (
            <button
              key={r}
              onClick={() => setRelFilter(r)}
              className={`btn btn-sm ${relFilter === r ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.8rem', padding: '4px 10px' }}
            >
              {r}
            </button>
          ))}

          {activeTab === 'facts' && ['All', 'Verified', 'Needs Review'].map(f => (
            <button
              key={f}
              onClick={() => setFactFilter(f)}
              className={`btn btn-sm ${factFilter === f ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.8rem', padding: '4px 10px' }}
            >
              {f}
            </button>
          ))}

          {activeTab === 'evidence' && ['All', 'Supported', 'In Review', 'Disputed'].map(st => (
            <button
              key={st}
              onClick={() => setEvidenceFilter(st)}
              className={`btn btn-sm ${evidenceFilter === st ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.8rem', padding: '4px 10px' }}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f8fafc',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '6px 12px',
          gap: '8px',
          minWidth: '240px'
        }}>
          <Search size={14} color="#64748b" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.85rem' }}
          />
        </div>
      </div>

      {/* ================= TAB 1: ENTITIES ================= */}
      {activeTab === 'entities' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {filteredEntities.length > 0 ? (
            filteredEntities.slice(0, 100).map(ent => (
              <div 
                key={ent.id}
                className="card card-hover"
                onClick={() => setSelectedEntity(ent)}
                style={{
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <EntityBadge type={ent.type} />
                    <ConfidenceBadge confidence={ent.confidence || 0.98} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {ent.name}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                  <span>{ent.source_doc_name || 'KatanaML Invoice'}</span>
                  <span style={{ color: '#2563eb', fontWeight: 600 }}>Inspect →</span>
                </div>
              </div>
            ))
          ) : (
            <div className="card" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)', gridColumn: '1 / -1' }}>
              <Layers size={36} color="#94a3b8" style={{ margin: '0 auto 12px auto' }} />
              <h3>No entities match criteria</h3>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: RELATIONSHIPS ================= */}
      {activeTab === 'relationships' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredRelationships.length > 0 ? (
            filteredRelationships.slice(0, 100).map(rel => (
              <div 
                key={rel.id}
                className="card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px',
                  borderLeft: '4px solid #2563eb'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    {rel.source_entity_name}
                  </span>
                  <span className="badge badge-blue" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                    → {rel.relation_type} →
                  </span>
                  <span style={{ fontWeight: 800, color: '#059669', fontSize: '0.95rem' }}>
                    {rel.target_entity_name}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {rel.source_doc_name || 'Invoice'}
                  </span>
                  <ConfidenceBadge confidence={rel.confidence || 0.99} />
                </div>
              </div>
            ))
          ) : (
            <div className="card" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Link2 size={36} color="#94a3b8" style={{ margin: '0 auto 12px auto' }} />
              <h3>No relationships found</h3>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 3: FACTS ================= */}
      {activeTab === 'facts' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {filteredFacts.length > 0 ? (
            filteredFacts.slice(0, 100).map(f => (
              <div
                key={f.id}
                className="card"
                style={{
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {f.predicate}
                    </span>
                    <ConfidenceBadge confidence={f.confidence || 0.99} />
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>
                    {f.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    Subject: <strong>{f.subject_name}</strong>
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                  Source: {f.source_doc_name || 'KatanaML Document'}
                </div>
              </div>
            ))
          ) : (
            <div className="card" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)', gridColumn: '1 / -1' }}>
              <ShieldCheck size={36} color="#94a3b8" style={{ margin: '0 auto 12px auto' }} />
              <h3>No facts found</h3>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 4: EVIDENCE ================= */}
      {activeTab === 'evidence' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '16px' }}>
          {filteredEvidence.length > 0 ? (
            filteredEvidence.slice(0, 100).map(evi => (
              <div
                key={evi.id}
                className="card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  borderLeft: '4px solid #059669'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span className="badge badge-green">Supported Sentence</span>
                    <ConfidenceBadge confidence={evi.confidence || 0.99} />
                  </div>

                  <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontSize: '0.875rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                    "{evi.text || evi.quote || evi.evidence_text}"
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                  <span>{evi.source_doc_name || 'Invoice'} • Page {evi.source_page || 1}</span>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedEvidence(evi)}
                    style={{ fontSize: '0.75rem', padding: '2px 8px' }}
                  >
                    View Context
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)', gridColumn: '1 / -1' }}>
              <Quote size={36} color="#94a3b8" style={{ margin: '0 auto 12px auto' }} />
              <h3>No evidence citations found</h3>
            </div>
          )}
        </div>
      )}

      {/* Drawers */}
      <EntityDrawer
        isOpen={Boolean(selectedEntity)}
        onClose={() => setSelectedEntity(null)}
        entity={selectedEntity}
        onOpenDocument={() => navigate(`/documents/inspector/${selectedEntity?.source_doc_id || ''}`)}
      />

      <EvidenceDrawer
        isOpen={Boolean(selectedEvidence)}
        onClose={() => setSelectedEvidence(null)}
        evidence={selectedEvidence}
        onOpenDocument={() => navigate(`/documents/inspector/${selectedEvidence?.source_doc_id || ''}`)}
      />

    </div>
  );
}

