import React, { useState, useEffect } from 'react';
import { Search, ShieldCheck, Eye, ExternalLink, ArrowUpDown } from 'lucide-react';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import EvidenceDrawer from '../components/common/EvidenceDrawer';
import { aiService } from '../services/aiService';

export default function FactExplorerPage() {
  const [facts, setFacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedFact, setSelectedFact] = useState(null);

  useEffect(() => {
    async function load() {
      const f = await aiService.getFacts();
      setFacts(f);
    }
    load();
  }, []);

  const filteredFacts = facts.filter(f => {
    const matchesStatus = filterStatus === 'All' || f.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = f.subject_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.predicate.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.value.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Fact Explorer</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Structured business assertions extracted with exact source evidence traceability.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-green" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
            {facts.length} Verified Facts
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {['All', 'Confirmed Fact', 'Possible', 'Contradictory', 'Unsupported'].map(st => (
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
            placeholder="Search subject, predicate, value..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.825rem' }}
          />
        </div>
      </div>

      {/* Facts Table */}
      <div className="card" style={{ padding: '20px' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 16px' }}>Subject</th>
                <th style={{ padding: '12px 16px' }}>Fact Predicate</th>
                <th style={{ padding: '12px 16px' }}>Extracted Value</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px' }}>Confidence</th>
                <th style={{ padding: '12px 16px' }}>Source Provenance</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Evidence</th>
              </tr>
            </thead>
            <tbody>
              {filteredFacts.map(fact => (
                <tr
                  key={fact.id}
                  style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {fact.subject_name}
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: 600 }}>{fact.predicate}</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      fontWeight: 800,
                      color: '#1e3a8a',
                      backgroundColor: '#eff6ff',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {fact.value}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span className={`badge ${
                      fact.status === 'Confirmed Fact' ? 'badge-green' : 
                      fact.status === 'Contradictory' ? 'badge-red' : 'badge-amber'
                    }`}>
                      {fact.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <ConfidenceBadge confidence={fact.confidence} status={fact.status} />
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {fact.source_doc_name} (p.{fact.source_page})
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setSelectedFact(fact)}
                    >
                      <Eye size={14} color="#2563eb" />
                      <span>View Evidence</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Side Evidence Drawer */}
      <EvidenceDrawer 
        isOpen={Boolean(selectedFact)}
        onClose={() => setSelectedFact(null)}
        fact={selectedFact}
      />

    </div>
  );
}
