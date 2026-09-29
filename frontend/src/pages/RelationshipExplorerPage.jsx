import React, { useState, useEffect } from 'react';
import { Link2, Search, ArrowRight, AlertTriangle, CheckCircle2, Quote, ExternalLink, Filter } from 'lucide-react';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import EvidenceDrawer from '../components/common/EvidenceDrawer';
import { aiService } from '../services/aiService';

export default function RelationshipExplorerPage() {
  const [relationships, setRelationships] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRel, setSelectedRel] = useState(null);

  useEffect(() => {
    async function load() {
      const rels = await aiService.getRelationships();
      setRelationships(rels);
    }
    load();
  }, []);

  const filteredRels = relationships.filter(r => {
    const matchesStatus = filterStatus === 'All' || r.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = r.source_entity_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.target_entity_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.relation_type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Relationship Explorer</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Extracted connections between business entities with strict evidentiary grounding.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-blue" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
            {relationships.length} Total Relationships
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {['All', 'Supported', 'Unsupported', 'Disputed'].map(st => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`btn btn-sm ${filterStatus === st ? 'btn-primary' : 'btn-outline'}`}
            >
              {st}
            </button>
          ))}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f8fafc',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '6px 12px',
          gap: '8px',
          width: '280px'
        }}>
          <Search size={14} color="#64748b" />
          <input 
            type="text"
            placeholder="Search entities or relation..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.825rem' }}
          />
        </div>
      </div>

      {/* Relationship Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '16px' }}>
        {filteredRels.map(rel => {
          const isUnsupported = rel.status === "Unsupported" || rel.status === "Disputed";
          return (
            <div
              key={rel.id}
              className="card"
              onClick={() => setSelectedRel(rel)}
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                cursor: 'pointer',
                borderLeft: isUnsupported ? '4px solid #ef4444' : '4px solid #2563eb',
                backgroundColor: isUnsupported ? '#fef2f2' : '#ffffff'
              }}
            >
              {/* Top row: Status and confidence */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className={`badge ${isUnsupported ? 'badge-red' : 'badge-green'}`}>
                  {rel.status}
                </span>
                <ConfidenceBadge confidence={rel.confidence} status={rel.status} />
              </div>

              {/* Visual Triple Flow */}
              <div style={{
                backgroundColor: isUnsupported ? '#fee2e2' : '#f8fafc',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                textAlign: 'center'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {rel.source_entity_name}
                </div>
                
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: isUnsupported ? '#fca5a5' : '#dbeafe',
                  color: isUnsupported ? '#991b1b' : '#1e40af',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  <span>↓</span>
                  <span>{rel.relation_type}</span>
                  <span>↓</span>
                </div>

                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {rel.target_entity_name}
                </div>
              </div>

              {/* Warning if unsupported */}
              {rel.warning && (
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  padding: '8px 12px',
                  backgroundColor: '#fee2e2',
                  borderRadius: '6px',
                  color: '#991b1b',
                  fontSize: '0.775rem',
                  lineHeight: 1.4
                }}>
                  <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{rel.warning}</span>
                </div>
              )}

              {/* Evidence Snippet */}
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                "{rel.evidence_text}"
              </div>

              {/* Source Document Citation Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '10px',
                borderTop: '1px solid var(--border-light)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}>
                <span>{rel.source_doc_name} (Page {rel.source_page || 1})</span>
                <span style={{ color: 'var(--primary-600)', fontWeight: 600 }}>Inspect Evidence →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Evidence Side-panel */}
      <EvidenceDrawer 
        isOpen={Boolean(selectedRel)}
        onClose={() => setSelectedRel(null)}
        fact={selectedRel ? {
          subject_name: `${selectedRel.source_entity_name} → ${selectedRel.target_entity_name}`,
          predicate: selectedRel.relation_type,
          value: selectedRel.status,
          confidence: selectedRel.confidence,
          status: selectedRel.status,
          evidence_text: selectedRel.evidence_text,
          source_doc_name: selectedRel.source_doc_name,
          source_page: selectedRel.source_page
        } : null}
      />

    </div>
  );
}
