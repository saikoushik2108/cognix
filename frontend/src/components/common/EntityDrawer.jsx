import React from 'react';
import { X, Building2, Link, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import EntityBadge from './EntityBadge';
import ConfidenceBadge from './ConfidenceBadge';

export default function EntityDrawer({ isOpen, onClose, entity, onSelectRelationship }) {
  if (!isOpen || !entity) return null;

  const properties = entity.properties || {};

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          height: '100vh',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInRight 0.25s ease-out'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <EntityBadge type={entity.type} />
              <ConfidenceBadge confidence={entity.confidence} status={entity.status} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', color: 'var(--text-primary)' }}>
              {entity.name}
            </h3>
          </div>
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Linked Business Entity Card */}
          <div className="card" style={{ padding: '16px', backgroundColor: entity.linked_entity_id ? '#f0fdf4' : '#fffbeb', border: `1px solid ${entity.linked_entity_id ? '#bbf7d0' : '#fde68a'}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: entity.linked_entity_id ? '#15803d' : '#b45309' }}>
                <Link size={14} />
                <span>Semantic Model Resolution</span>
              </div>
              <span className={`badge ${entity.linked_entity_id ? 'badge-green' : 'badge-amber'}`}>
                {entity.linked_entity_id ? "Resolved & Linked" : "Unmatched / Review Required"}
              </span>
            </div>

            <div style={{ marginTop: '10px' }}>
              {entity.linked_entity_id ? (
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#14532d' }}>
                    {entity.linked_entity_id} — {entity.linked_entity_name || entity.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#166534', marginTop: '2px' }}>
                    Linked to verified master enterprise entity record
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#78350f' }}>
                    No canonical entity match confirmed
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#92400e', marginTop: '2px' }}>
                    Flagged in Review Center for human verification to avoid hallucinating business links.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Source Document Citation */}
          <div className="card" style={{ padding: '16px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Source Provenance
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
              <FileText size={16} color="#2563eb" />
              <span style={{ fontWeight: 700 }}>{entity.source_doc_name || 'Contract_001.pdf'}</span>
              <span className="badge badge-gray">Page {entity.source_page || 2}</span>
            </div>
            {entity.evidence_text && (
              <div style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)', backgroundColor: '#f8fafc', padding: '10px', borderRadius: 'var(--radius-md)', fontStyle: 'italic', border: '1px solid #e2e8f0' }}>
                "{entity.evidence_text}"
              </div>
            )}
          </div>

          {/* Properties Grid */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Extracted Properties & Attributes
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Entity Type</span>
                <span style={{ fontWeight: 700 }}>{entity.type}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Document Mentions</span>
                <span style={{ fontWeight: 700 }}>{entity.mentions_count || 1} occurrences</span>
              </div>
              {Object.entries(properties).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{key.replace('_', ' ')}</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{String(val)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: '#f8fafc'
        }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
