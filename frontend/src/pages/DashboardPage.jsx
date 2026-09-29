import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { 
  FileText, Layers, Link2, ShieldCheck, Plus, AlertCircle, 
  ArrowRight, ExternalLink, Sparkles, CheckCircle2, AlertTriangle, Clock
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie 
} from 'recharts';
import KpiCard from '../components/common/KpiCard';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { openUpload } = useOutletContext();
  const [documents, setDocuments] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    async function loadData() {
      const docs = await aiService.getDocuments();
      const stats = await aiService.getAnalytics();
      setDocuments(docs);
      setAnalytics(stats);
    }
    loadData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Good evening 👋
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Your document intelligence workspace • <strong>KnowFlow AI</strong>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/ask')}
          >
            <Sparkles size={16} color="#2563eb" />
            <span>Ask Knowledge</span>
          </button>

          <button 
            className="btn btn-primary"
            onClick={openUpload}
          >
            <Plus size={16} />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
        <KpiCard 
          title="Documents Processed"
          value={analytics?.kpis.documents_processed || 128}
          changeText={`+${analytics?.kpis.documents_processed_today || 12} today`}
          icon={FileText}
          color="blue"
        />
        <KpiCard 
          title="Entities Extracted"
          value={analytics?.kpis.entities_extracted.toLocaleString() || "2,481"}
          changeText={`+${analytics?.kpis.entities_today || 86} today`}
          icon={Layers}
          color="green"
        />
        <KpiCard 
          title="Relationships Discovered"
          value={analytics?.kpis.relationships_discovered.toLocaleString() || "4,820"}
          changeText={`+${analytics?.kpis.relationships_today || 143} today`}
          icon={Link2}
          color="purple"
        />
        <KpiCard 
          title="Facts Extracted"
          value={analytics?.kpis.facts_extracted.toLocaleString() || "7,342"}
          changeText={`+${analytics?.kpis.facts_today || 210} today`}
          icon={ShieldCheck}
          color="amber"
        />
      </div>

      {/* Secondary KPI Badges Bar */}
      <div className="card" style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Needs Review:</span>
            <span className="badge badge-amber" style={{ fontSize: '0.85rem', padding: '3px 10px', cursor: 'pointer' }} onClick={() => navigate('/review')}>
              23 Items
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Unmatched Entities:</span>
            <span className="badge badge-amber" style={{ fontSize: '0.85rem', padding: '3px 10px', cursor: 'pointer' }} onClick={() => navigate('/review?tab=unmatched')}>
              12 Entities
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>High Confidence Index:</span>
            <span className="badge badge-green" style={{ fontSize: '0.85rem', padding: '3px 10px' }}>
              91.4% Verified
            </span>
          </div>
        </div>

        <button 
          className="btn btn-outline btn-sm"
          onClick={() => navigate('/graph')}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <span>View Master Knowledge Graph</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Charts & Attention Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        
        {/* Extraction Activity Timeline */}
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Extraction Activity</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily facts and entities processed</p>
            </div>
            <span className="badge badge-blue">Last 7 Days</span>
          </div>
          <div style={{ width: '100%', height: '220px' }}>
            {analytics?.extraction_activity_timeline && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analytics.extraction_activity_timeline}>
                  <defs>
                    <linearGradient id="colorFacts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="facts" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorFacts)" name="Facts" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Entities by Type */}
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Knowledge by Entity Type</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Distribution across semantic ontology</p>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => navigate('/semantic-model')}>
              Ontology
            </button>
          </div>
          <div style={{ width: '100%', height: '220px' }}>
            {analytics?.entities_by_type && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.entities_by_type} layout="vertical" margin={{ left: 10 }}>
                  <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={85} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {analytics.entities_by_type.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* "Needs Attention" Panel */}
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <AlertTriangle size={18} color="#d97706" />
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Needs Attention</h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Items requiring human verification to safeguard knowledge integrity
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div 
                onClick={() => navigate('/review?tab=unmatched')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fffbeb', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#92400e' }}>Unmatched Entities</span>
                <span className="badge badge-amber">12 items</span>
              </div>

              <div 
                onClick={() => navigate('/review?tab=low_confidence')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fffbeb', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#92400e' }}>Low-Confidence Facts</span>
                <span className="badge badge-amber">5 items</span>
              </div>

              <div 
                onClick={() => navigate('/contradictions')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fef2f2', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#991b1b' }}>Possible Contradictions</span>
                <span className="badge badge-red">2 conflicts</span>
              </div>

              <div 
                onClick={() => navigate('/review?tab=ambiguous')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#334155' }}>Ambiguous Relationships</span>
                <span className="badge badge-gray">4 items</span>
              </div>
            </div>
          </div>

          <button 
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '16px' }}
            onClick={() => navigate('/review')}
          >
            <span>Open Review Center</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>

      {/* Recent Documents Table Section */}
      <div className="card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Recent Documents</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Processed contracts, invoices, and commercial filings
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => navigate('/documents')}>
            View All Documents
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 16px' }}>Document</th>
                <th style={{ padding: '12px 16px' }}>Type</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px' }}>Entities</th>
                <th style={{ padding: '12px 16px' }}>Facts</th>
                <th style={{ padding: '12px 16px' }}>Confidence</th>
                <th style={{ padding: '12px 16px' }}>Uploaded</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr 
                  key={doc.id}
                  style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={18} color="#2563eb" />
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{doc.filename}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{doc.file_size} • {doc.pages_count} pages</div>
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
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>{doc.facts_count}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <ConfidenceBadge confidence={doc.confidence_score} />
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {doc.uploaded_at}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => navigate(`/documents/inspector/${doc.id}`)}
                    >
                      <ExternalLink size={14} />
                      <span>Inspect</span>
                    </button>
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
