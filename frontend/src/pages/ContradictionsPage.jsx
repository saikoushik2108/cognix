import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, CheckCircle2, ShieldAlert, FileText, 
  ArrowRight, Scale, ExternalLink, HelpCircle 
} from 'lucide-react';
import { aiService } from '../services/aiService';

export default function ContradictionsPage() {
  const [contradictions, setContradictions] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    loadContradictions();
  }, []);

  async function loadContradictions() {
    const list = await aiService.getContradictions();
    setContradictions(list);
  }

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleResolve = async (id, choice) => {
    await aiService.resolveContradiction(id, choice);
    await loadContradictions();
    showToast(`Discrepancy resolved: ${choice === 'doc_a' ? 'Document A' : 'Document B'} marked as authoritative source.`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          fontSize: '0.875rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000
        }}>
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-red">Human Adjudication Gate</span>
          <span className="badge badge-amber">Contradiction Detection</span>
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
          Contradictions
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
          When multiple documents state conflicting business facts, KnowFlow AI never arbitrarily guesses. 
          It isolates the conflicting claims and requires human-in-the-loop adjudication.
        </p>
      </div>

      {/* Contradictions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {contradictions.map((c) => {
          const isResolved = c.status.startsWith("Resolved");
          return (
            <div
              key={c.id}
              className="card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderLeft: isResolved ? '4px solid #10b981' : '4px solid #ef4444',
                backgroundColor: isResolved ? '#f0fdf4' : '#ffffff'
              }}
            >
              {/* Conflict Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <AlertTriangle size={20} color={isResolved ? "#059669" : "#ef4444"} />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{c.title}</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Subject: <strong>{c.subject}</strong> • Attribute: <strong>{c.property_name}</strong>
                    </div>
                  </div>
                </div>

                <span className={`badge ${isResolved ? 'badge-green' : 'badge-red'}`}>
                  {c.status}
                </span>
              </div>

              {/* Side-by-Side Comparison of Conflicting Sources */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                
                {/* Document A */}
                <div style={{
                  padding: '18px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#ffffff',
                  border: '1px solid #bfdbfe',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="badge badge-blue">Document A (Executed Contract)</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Original Source</span>
                  </div>

                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e3a8a' }}>
                    {c.doc_a_name}
                  </div>

                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1d4ed8' }}>
                    {c.doc_a_value}
                  </div>

                  <div style={{
                    fontSize: '0.825rem',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    backgroundColor: '#eff6ff',
                    padding: '10px',
                    borderRadius: '6px'
                  }}>
                    "{c.doc_a_evidence}"
                  </div>

                  {!isResolved && (
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ marginTop: 'auto' }}
                      onClick={() => handleResolve(c.id, 'doc_a')}
                    >
                      Mark Document A Correct
                    </button>
                  )}
                </div>

                {/* Document B */}
                <div style={{
                  padding: '18px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#ffffff',
                  border: '1px solid #fecdd3',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="badge badge-red">Document B (Secondary Filing)</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Conflicting Report</span>
                  </div>

                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#9f1239' }}>
                    {c.doc_b_name}
                  </div>

                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#be123c' }}>
                    {c.doc_b_value}
                  </div>

                  <div style={{
                    fontSize: '0.825rem',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    backgroundColor: '#fff1f2',
                    padding: '10px',
                    borderRadius: '6px'
                  }}>
                    "{c.doc_b_evidence}"
                  </div>

                  {!isResolved && (
                    <button
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: 'auto' }}
                      onClick={() => handleResolve(c.id, 'doc_b')}
                    >
                      Mark Document B Correct
                    </button>
                  )}
                </div>

              </div>

              {/* Resolution Note if resolved */}
              {c.resolution_note && (
                <div style={{
                  padding: '10px 14px',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: 'var(--radius-md)',
                  color: '#065f46',
                  fontSize: '0.85rem'
                }}>
                  <strong>Human Auditor Resolution:</strong> {c.resolution_note}
                </div>
              )}

              {/* Keep Unresolved Action */}
              {!isResolved && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => showToast("Discrepancy preserved as unresolved for legal audit.")}>
                    Keep Unresolved (Dual Citation)
                  </button>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
