import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, CheckCircle2, ShieldAlert, FileText, 
  ArrowRight, Scale, ExternalLink, HelpCircle, Layers, Split, Info
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

  const handleResolve = async (id, choice, customNote = null) => {
    let note = customNote;
    if (!note) {
      if (choice === 'doc_a') note = 'Marked Document A as authoritative legal source.';
      else if (choice === 'doc_b') note = 'Marked Document B as authoritative current source.';
      else if (choice === 'partial') note = 'Confirmed as legitimate partial billing/delivery installment against master agreement.';
    }
    await aiService.resolveContradiction(id, choice, note);
    await loadContradictions();
    showToast(`Difference resolved: ${note}`);
  };

  const getBadgeForType = (type) => {
    if (type === 'Partial Value') {
      return <span className="badge badge-blue"><Layers size={12} style={{ marginRight: '4px' }} /> Partial Value</span>;
    }
    if (type === 'Contextual Variance') {
      return <span className="badge badge-amber"><Split size={12} style={{ marginRight: '4px' }} /> Contextual Variance</span>;
    }
    return <span className="badge badge-red"><AlertTriangle size={12} style={{ marginRight: '4px' }} /> Direct Contradiction</span>;
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
          <span className="badge badge-blue">Difference vs Contradiction Distinction</span>
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
          Potential Differences & Contradictions
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px', maxWidth: '850px' }}>
          When figures differ across sources (e.g. Master Contract ₹2.5 Cr vs Batch Invoice ₹1.0 Cr), 
          KnowFlow AI does <strong>not</strong> blindly mark it a contradiction. 
          The system evaluates business context—distinguishing <em>direct contradiction</em>, <em>partial value delivery</em>, and <em>contextual variance</em>.
        </p>
      </div>

      {/* Contradictions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {contradictions.map((c) => {
          const isResolved = c.status && (c.status.startsWith("Resolved") || c.status.startsWith("Confirmed"));
          const isPartial = c.difference_type === 'Partial Value';

          return (
            <div
              key={c.id}
              className="card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderLeft: isResolved ? '4px solid #10b981' : isPartial ? '4px solid #3b82f6' : '4px solid #ef4444',
                backgroundColor: isResolved ? '#f0fdf4' : '#ffffff'
              }}
            >
              {/* Conflict Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {isResolved ? (
                    <CheckCircle2 size={22} color="#059669" />
                  ) : isPartial ? (
                    <Layers size={22} color="#2563eb" />
                  ) : (
                    <AlertTriangle size={22} color="#ef4444" />
                  )}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{c.title}</h3>
                      {getBadgeForType(c.difference_type || 'Contradiction')}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Subject: <strong>{c.subject}</strong> • Attribute: <strong>{c.property_name}</strong>
                    </div>
                  </div>
                </div>

                <span className={`badge ${isResolved ? 'badge-green' : isPartial ? 'badge-blue' : 'badge-amber'}`}>
                  {c.status}
                </span>
              </div>

              {/* Interpretation Note */}
              {c.interpretation && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isPartial ? '#eff6ff' : '#fffbeb',
                  border: isPartial ? '1px solid #bfdbfe' : '1px solid #fde68a',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.875rem',
                  color: isPartial ? '#1e40af' : '#92400e'
                }}>
                  <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>System Interpretation: </strong>
                    <span>{c.interpretation}</span>
                  </div>
                </div>
              )}

              {/* Side-by-Side Comparison of Sources */}
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
                    <span className="badge badge-blue">Document A</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Source 1</span>
                  </div>

                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e3a8a' }}>
                    {c.doc_a_name}
                  </div>

                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1d4ed8' }}>
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

                  {!isResolved && !isPartial && (
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
                  border: isPartial ? '1px solid #c7d2fe' : '1px solid #fecdd3',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className={isPartial ? "badge badge-purple" : "badge badge-red"}>
                      {isPartial ? "Document B (Installment)" : "Document B (Secondary Filing)"}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Source 2</span>
                  </div>

                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: isPartial ? '#3730a3' : '#9f1239' }}>
                    {c.doc_b_name}
                  </div>

                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: isPartial ? '#4338ca' : '#be123c' }}>
                    {c.doc_b_value}
                  </div>

                  <div style={{
                    fontSize: '0.825rem',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    backgroundColor: isPartial ? '#eef2ff' : '#fff1f2',
                    padding: '10px',
                    borderRadius: '6px'
                  }}>
                    "{c.doc_b_evidence}"
                  </div>

                  {!isResolved && !isPartial && (
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
                  <strong>Auditor Resolution:</strong> {c.resolution_note}
                </div>
              )}

              {/* Action Buttons for Unresolved */}
              {!isResolved && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
                  {isPartial ? (
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => handleResolve(c.id, 'partial', 'Confirmed as legitimate partial delivery installment (Batch 1: 200 of 500 servers).')}
                    >
                      <CheckCircle2 size={16} /> Confirm Partial Delivery Fulfillment
                    </button>
                  ) : null}
                  <button className="btn btn-secondary btn-sm" onClick={() => showToast("Discrepancy preserved as dual citation for compliance audit.")}>
                    Keep Dual Citation
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
