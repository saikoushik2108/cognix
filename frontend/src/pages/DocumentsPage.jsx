import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { 
  FileText, Plus, Sparkles, UploadCloud, Search, 
  ExternalLink, Play, CheckCircle2, AlertTriangle, Filter, ArrowRight 
} from 'lucide-react';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function DocumentsPage() {
  const navigate = useNavigate();
  const { openUpload } = useOutletContext();
  const [documents, setDocuments] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessingDemo, setIsProcessingDemo] = useState(false);

  useEffect(() => {
    loadDocs();
  }, []);

  async function loadDocs() {
    const list = await aiService.getDocuments();
    setDocuments(list);
  }

  const handleDemoContract = async () => {
    setIsProcessingDemo(true);
    try {
      const doc = await aiService.uploadDemoDocument();
      await loadDocs();
      navigate(`/processing/${doc.id}`);
    } catch (_) {}
    setIsProcessingDemo(false);
  };

  const filteredDocs = documents.filter(doc => {
    const matchesStatus = filterStatus === 'All' || doc.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = doc.filename.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Page Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Documents</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Upload and transform business documents into structured knowledge.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn btn-secondary"
            onClick={handleDemoContract}
            disabled={isProcessingDemo}
          >
            <Sparkles size={16} color="#2563eb" />
            <span>{isProcessingDemo ? "Loading Demo..." : "Try Demo Document"}</span>
          </button>

          <button 
            className="btn btn-primary"
            onClick={openUpload}
          >
            <Plus size={16} />
            <span>+ Upload Document</span>
          </button>
        </div>
      </div>

      {/* Hero Dropzone Banner */}
      <div 
        onClick={openUpload}
        style={{
          border: '2px dashed #93c5fd',
          backgroundColor: '#eff6ff',
          borderRadius: 'var(--radius-xl)',
          padding: '32px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: '#dbeafe',
            color: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <UploadCloud size={28} />
          </div>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e3a8a' }}>
              Drop documents here
            </div>
            <div style={{ fontSize: '0.85rem', color: '#3b82f6', marginTop: '2px' }}>
              PDF, DOCX or TXT • Automated multi-stage extraction pipeline
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={(e) => { e.stopPropagation(); handleDemoContract(); }}
          >
            <Sparkles size={14} color="#2563eb" />
            <span>Try Demo Contract</span>
          </button>
          <button className="btn btn-primary btn-sm">
            Select File
          </button>
        </div>
      </div>

      {/* Document Table Card with Search & Filters */}
      <div className="card" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          {/* Status Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {['All', 'Completed', 'Needs Review', 'Processing'].map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`btn btn-sm ${filterStatus === st ? 'btn-primary' : 'btn-outline'}`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Search Box */}
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
              placeholder="Search by filename or content..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '0.825rem'
              }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 16px' }}>Document Name</th>
                <th style={{ padding: '12px 16px' }}>Type</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px' }}>Entities</th>
                <th style={{ padding: '12px 16px' }}>Relationships</th>
                <th style={{ padding: '12px 16px' }}>Facts</th>
                <th style={{ padding: '12px 16px' }}>Confidence</th>
                <th style={{ padding: '12px 16px' }}>Uploaded Date</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((doc) => (
                <tr 
                  key={doc.id}
                  style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <FileText size={18} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                          {doc.filename}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {doc.file_size} • {doc.pages_count} pages • {doc.chunks_count} chunks
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span className="badge badge-gray">{doc.file_type}</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span className={`badge ${doc.status === 'Completed' ? 'badge-green' : 'badge-amber'}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>{doc.entities_count}</td>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>{doc.relationships_count}</td>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>{doc.facts_count}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <ConfidenceBadge confidence={doc.confidence_score} />
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {doc.uploaded_at}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate(`/documents/inspector/${doc.id}`)}
                        title="Open Document Inspector"
                      >
                        <ExternalLink size={14} />
                        <span>Inspect</span>
                      </button>
                      <button 
                        className="btn btn-outline btn-sm"
                        onClick={() => navigate(`/processing/${doc.id}`)}
                        title="View Extraction Pipeline"
                      >
                        Pipeline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
