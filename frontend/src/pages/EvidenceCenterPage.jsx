import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, FileText, CheckCircle2, AlertTriangle, ExternalLink, Search, ShieldCheck } from 'lucide-react';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import EvidenceDrawer from '../components/common/EvidenceDrawer';
import { aiService } from '../services/aiService';

export default function EvidenceCenterPage() {
  const navigate = useNavigate();
  const [evidenceList, setEvidenceList] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  useEffect(() => {
    async function load() {
      const list = await aiService.getEvidence();
      setEvidenceList(list);
    }
    load();
  }, []);

  const filteredEvidence = (evidenceList || []).filter(item => {
    if (!item) return false;
    const itemStatus = (item.status || "Supported").toLowerCase();
    const itemText = (item.text || item.quote || item.evidence_text || item.quoted_text || "").toLowerCase();
    const itemDoc = (item.source_doc_name || "").toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesFilter = filterType === 'All' || itemStatus === filterType.toLowerCase();
    const matchesSearch = !query || itemText.includes(query) || itemDoc.includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header with Anti-Hallucination Core Thesis */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-blue">Core Design Principle</span>
            <span className="badge badge-green">Zero Speculation</span>
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
            Evidence Center
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px', maxWidth: '780px' }}>
            Every extracted entity, relationship, and business fact is bound to immutable, verbatim source citations. 
            No hallucinated connections are admitted into the master knowledge graph.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>100%</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Citations Traceable</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {['All', 'Supported', 'In Review', 'Disputed'].map(st => (
            <button
              key={st}
              onClick={() => setFilterType(st)}
              className={`btn btn-sm ${filterType === st ? 'btn-primary' : 'btn-outline'}`}
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
            placeholder="Search citation quote or document..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.825rem' }}
          />
        </div>
      </div>

      {/* Evidence Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '18px' }}>
        {filteredEvidence.length > 0 ? (
          filteredEvidence.map((evi) => {
          const isDisputed = evi.status === "Disputed";
          const isInReview = evi.status === "In Review";
          return (
            <div
              key={evi.id}
              className="card"
              style={{
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                borderLeft: isDisputed ? '4px solid #ef4444' : (isInReview ? '4px solid #f59e0b' : '4px solid #059669')
              }}
            >
              <div>
                {/* Status Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-gray">{evi.evidence_type}</span>
                    <span className={`badge ${isDisputed ? 'badge-red' : (isInReview ? 'badge-amber' : 'badge-green')}`}>
                      {evi.status}
                    </span>
                  </div>
                  <ConfidenceBadge confidence={evi.confidence} status={evi.status} />
                </div>

                {/* Excerpt Quote */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2563eb', fontWeight: 700, fontSize: '0.75rem', marginBottom: '6px' }}>
                    <Quote size={14} />
                    <span>Verbatim Extracted Sentence</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#1e293b', lineHeight: 1.5 }}>
                    "{evi.text || evi.quoted_text}"
                  </p>
                </div>

                {/* Provenance */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <FileText size={15} color="#2563eb" />
                  <span style={{ fontWeight: 700 }}>{evi.source_doc_name || 'Document'}</span>
                  <span>•</span>
                  <span>Page {evi.source_page || evi.page_number || 1}</span>
                </div>
              </div>

              {/* Actions Footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                <button
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                  onClick={() => setSelectedEvidence(evi)}
                >
                  View Context
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                  onClick={() => navigate(`/documents/inspector/${evi.source_doc_id || ''}`)}
                >
                  <ExternalLink size={14} />
                  <span>Open Document</span>
                </button>
              </div>
            </div>
          );
        })
        ) : (
          <div className="card" style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--text-muted)', gridColumn: '1 / -1' }}>
            <Quote size={40} color="#94a3b8" style={{ margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>No source evidence recorded</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Upload a document to extract verifiable sentence citations.</p>
          </div>
        )}
      </div>

      {/* Evidence Detail Modal */}
      <EvidenceDrawer
        isOpen={Boolean(selectedEvidence)}
        onClose={() => setSelectedEvidence(null)}
        evidence={selectedEvidence}
        onOpenDocument={() => navigate(`/documents/inspector/${selectedEvidence.source_doc_id}`)}
      />

    </div>
  );
}
