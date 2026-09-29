import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  AlertOctagon, CheckCircle2, XCircle, AlertTriangle, 
  Link2, ArrowRight, ShieldAlert, Sparkles, Filter 
} from 'lucide-react';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function ReviewCenterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [reviewItems, setReviewItems] = useState([]);
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'unmatched');
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) setActiveTab(tabParam);
  }, [searchParams]);

  async function loadItems() {
    const items = await aiService.getReviewItems();
    setReviewItems(items);
  }

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleApprove = async (itemId) => {
    const res = await aiService.approveReviewItem(itemId);
    await loadItems();
    showToast(`Match approved! Entity linked to master semantic ontology.`);
  };

  const handleReject = async (itemId) => {
    const res = await aiService.rejectReviewItem(itemId);
    await loadItems();
    showToast(`Unsupported inference rejected! Guardrail successfully prevented hallucination.`);
  };

  const pendingCount = reviewItems.filter(r => r.status === "Pending").length;

  const currentTabItems = reviewItems.filter(item => {
    if (activeTab === 'unmatched') return item.category === "Unmatched";
    if (activeTab === 'low_confidence') return item.category === "Low Confidence";
    if (activeTab === 'ambiguous') return item.category === "Ambiguous Relationship";
    return true;
  });

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
          zIndex: 1000,
          animation: 'slideUp 0.2s ease-out'
        }}>
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Review Center</h1>
            <span className="badge badge-amber" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
              {pendingCount} items need attention
            </span>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Human-in-the-loop review queue for ambiguous extractions, low-confidence relations, and semantic links.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => navigate('/contradictions')}
          >
            <span>View Contradiction Resolver (2)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Sub-Tabs Navigation */}
      <div className="card" style={{ padding: '6px', display: 'flex', gap: '4px', backgroundColor: '#f1f5f9' }}>
        <button
          onClick={() => { setActiveTab('unmatched'); setSearchParams({ tab: 'unmatched' }); }}
          className={`btn btn-sm ${activeTab === 'unmatched' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1 }}
        >
          Unmatched Entities ({reviewItems.filter(r => r.category === "Unmatched" && r.status === "Pending").length})
        </button>

        <button
          onClick={() => { setActiveTab('low_confidence'); setSearchParams({ tab: 'low_confidence' }); }}
          className={`btn btn-sm ${activeTab === 'low_confidence' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1 }}
        >
          Low Confidence ({reviewItems.filter(r => r.category === "Low Confidence" && r.status === "Pending").length})
        </button>

        <button
          onClick={() => { setActiveTab('ambiguous'); setSearchParams({ tab: 'ambiguous' }); }}
          className={`btn btn-sm ${activeTab === 'ambiguous' ? 'btn-primary' : 'btn-outline'}`}
          style={{ flex: 1 }}
        >
          Ambiguous Relationships ({reviewItems.filter(r => r.category === "Ambiguous Relationship" && r.status === "Pending").length})
        </button>

        <button
          onClick={() => navigate('/contradictions')}
          className="btn btn-outline btn-sm"
          style={{ flex: 1 }}
        >
          Contradictions (2 Conflicts) →
        </button>
      </div>

      {/* Review Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {currentTabItems.length === 0 ? (
          <div className="card" style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <CheckCircle2 size={40} color="#059669" style={{ margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              All caught up!
            </h3>
            <p style={{ fontSize: '0.875rem', marginTop: '4px' }}>
              No pending review items in this category. All extractions verified.
            </p>
          </div>
        ) : (
          currentTabItems.map(item => {
            const isPending = item.status === "Pending";
            const isApproved = item.status === "Approved";
            const isRejected = item.status === "Rejected";

            return (
              <div
                key={item.id}
                className="card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  opacity: isPending ? 1 : 0.7,
                  backgroundColor: isRejected ? '#fef2f2' : (isApproved ? '#f0fdf4' : '#ffffff'),
                  borderLeft: isRejected ? '4px solid #ef4444' : (isApproved ? '4px solid #10b981' : '4px solid #f59e0b')
                }}
              >
                {/* Item Top Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="badge badge-gray">{item.category}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ConfidenceBadge confidence={item.confidence} status={item.status} />
                    <span className={`badge ${isPending ? 'badge-amber' : (isApproved ? 'badge-green' : 'badge-red')}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Candidate Matching Box */}
                {item.possible_match ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '14px',
                    backgroundColor: '#f8fafc',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Extracted Mention
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                        "{item.extracted_text}"
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Proposed Master Entity ({item.match_id})
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#1d4ed8', marginTop: '2px' }}>
                        "{item.possible_match}"
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Semantic Similarity Match
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
                        {Math.round(item.similarity * 100)}% Match
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{
                    backgroundColor: '#fffbeb',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #fde68a'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#92400e', textTransform: 'uppercase' }}>
                      Candidate Relationship Claim
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#78350f', marginTop: '2px' }}>
                      {item.extracted_text}
                    </div>
                  </div>
                )}

                {/* Warning Guardrail Box */}
                {item.warning && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '12px 14px',
                    backgroundColor: '#fff1f2',
                    border: '1px solid #fecdd3',
                    borderRadius: 'var(--radius-md)',
                    color: '#9f1239',
                    fontSize: '0.85rem',
                    lineHeight: 1.5
                  }}>
                    <ShieldAlert size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Anti-Hallucination Guardrail:</strong> {item.warning}
                    </div>
                  </div>
                )}

                {/* Supporting Source Citation */}
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px' }}>
                    Document Evidence • {item.source_doc} (Page {item.source_page})
                  </div>
                  <div style={{ fontStyle: 'italic', backgroundColor: '#f8fafc', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                    "{item.evidence}"
                  </div>
                </div>

                {/* Action Buttons */}
                {isPending && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                    {item.category === "Low Confidence" ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleReject(item.id)}
                        >
                          <XCircle size={15} />
                          <span>Reject Relationship (Prevent Hallucination)</span>
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleApprove(item.id)}
                        >
                          Keep for Review
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleReject(item.id)}
                        >
                          <XCircle size={14} />
                          <span>Reject</span>
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleApprove(item.id)}
                        >
                          <CheckCircle2 size={14} />
                          <span>Accept Match</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
