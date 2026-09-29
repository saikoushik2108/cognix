import React from 'react';
import { X, CheckCircle, Lightbulb, PlayCircle, HelpCircle } from 'lucide-react';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const steps = [
    { num: 1, title: "Dashboard", desc: "View real-time extraction stats (2,481 entities, 4,820 relationships, 7,342 facts)." },
    { num: 2, title: "Upload / Demo Document", desc: "Click '+ Upload Document' and select 'Try Demo Contract' to run the extraction pipeline." },
    { num: 3, title: "Processing Pipeline", desc: "Observe the 8-stage extraction flow: Text Extraction → Entity Recognition → Relationship Inference → Fact Structuring → Evidence Attachment → Entity Resolution." },
    { num: 4, title: "Document Inspector", desc: "3-column viewer: navigate pages, inspect interactive entity highlights, view verbatim quotes." },
    { num: 5, title: "Knowledge Graph", desc: "Explore the React Flow interactive graph: zoom, pan, search, filter by entity type or confidence." },
    { num: 6, title: "Review Center", desc: "Handle ambiguous entities (ORG-1024 link) and reject unsupported inferences ('John Smith CEO_OF') to prevent hallucinations." },
    { num: 7, title: "Ask Knowledge", desc: "Test natural language queries (e.g. 'What contracts does ABC Technologies have?') and inspect 'How did we get this answer?'" },
    { num: 8, title: "Contradiction Detection", desc: "Examine conflicting expiry dates between Contract C001 (15 Mar 2028) and Annual Report (June 2028)." }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '680px', padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <HelpCircle size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>KnowFlow AI — Walkthrough Guide</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Essential flow for jury evaluation and demonstration
              </p>
            </div>
          </div>
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px'
        }}>
          <Lightbulb size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <strong>Anti-Hallucination Mandate:</strong> Unlike generic chatbots, KnowFlow AI rejects invented connections and binds every single extracted fact directly to verbatim document page citations.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '50vh', overflowY: 'auto' }}>
          {steps.map(s => (
            <div
              key={s.num}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {s.num}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button className="btn btn-primary" onClick={onClose}>
            Got it, Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
}
