import React from 'react';
import { X, FileText, CheckCircle2, AlertTriangle, ExternalLink, Quote } from 'lucide-react';
import ConfidenceBadge from './ConfidenceBadge';

export default function EvidenceDrawer({ isOpen, onClose, evidence, fact, onOpenDocument }) {
  if (!isOpen || (!evidence && !fact)) return null;

  const title = fact ? `${fact.subject_name} • ${fact.predicate}` : "Source Evidence Details";
  const sourceDoc = evidence?.source_doc_name || fact?.source_doc_name || "Contract_001.pdf";
  const sourcePage = evidence?.source_page || fact?.source_page || 2;
  const quoteText = evidence?.text || fact?.evidence_text || "";
  const confidence = evidence?.confidence || fact?.confidence || 0.98;
  const status = evidence?.status || fact?.status || "Supported";
  const evidenceType = evidence?.evidence_type || "Direct Statement";

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
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-blue">Evidence Verification</span>
              <ConfidenceBadge confidence={confidence} status={status} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '6px' }}>
              {title}
            </h3>
          </div>
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ padding: '24px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Fact Value Card if available */}
          {fact && (
            <div className="card" style={{ padding: '16px', backgroundColor: '#f8fafc' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Extracted Fact
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
                {fact.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Subject: <strong>{fact.subject_name}</strong> • Predicate: <strong>{fact.predicate}</strong>
              </div>
            </div>
          )}

          {/* Verbatim Quote Card */}
          <div style={{
            borderLeft: '4px solid var(--primary-600)',
            backgroundColor: '#eff6ff',
            padding: '16px',
            borderRadius: '0 8px 8px 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.825rem', marginBottom: '8px' }}>
              <Quote size={16} />
              <span>Verbatim Document Excerpt</span>
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#1e3a8a', lineHeight: 1.6 }}>
              "{quoteText}"
            </p>
          </div>

          {/* Context Snippet */}
          {evidence?.context_before && (
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Surrounding Document Context
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                backgroundColor: '#f8fafc',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                lineHeight: 1.5,
                border: '1px solid #e2e8f0'
              }}>
                <span style={{ opacity: 0.7 }}>... {evidence.context_before} </span>
                <mark style={{ backgroundColor: '#fed7aa', padding: '1px 4px', borderRadius: '2px' }}>
                  {quoteText}
                </mark>
                <span style={{ opacity: 0.7 }}> {evidence.context_after} ...</span>
              </div>
            </div>
          )}

          {/* Citation Metadata Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="card" style={{ padding: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Source Document</div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <FileText size={14} color="#2563eb" />
                <span>{sourceDoc}</span>
              </div>
            </div>
            <div className="card" style={{ padding: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Document Location</div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '2px' }}>
                Page {sourcePage}
              </div>
            </div>
            <div className="card" style={{ padding: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Evidence Type</div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '2px' }}>
                {evidenceType}
              </div>
            </div>
            <div className="card" style={{ padding: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Validation Status</div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '2px', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} />
                <span>{status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          gap: '12px',
          backgroundColor: '#f8fafc'
        }}>
          {onOpenDocument && (
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={onOpenDocument}>
              <ExternalLink size={16} />
              <span>Open in Document Inspector</span>
            </button>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
