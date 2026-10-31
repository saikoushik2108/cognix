import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { 
  FileText, Layers, Link2, ShieldCheck, Plus, AlertCircle, 
  ArrowRight, ExternalLink, Sparkles, CheckCircle2, AlertTriangle, Clock
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell
} from 'recharts';
import KpiCard from '../components/common/KpiCard';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { openUpload } = useOutletContext();
  const [documents, setDocuments] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    async function loadData() {
      const docs = await aiService.getDocuments();
      const stats = await aiService.getAnalytics();
      const revs = await aiService.getReviewItems();
      setDocuments(docs || []);
      setAnalytics(stats);
      setReviewCount(revs ? revs.filter(r => r.status === "Pending").length : 0);
    }
    loadData();
  }, []);

  const totalDocs = analytics?.kpis?.documents_processed ?? documents.length;
  const totalEnts = analytics?.kpis?.entities_extracted ?? 0;
  const totalRels = analytics?.kpis?.relationships_discovered ?? 0;
  const totalFacts = analytics?.kpis?.facts_extracted ?? 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Knowledge Dashboard 👋
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
          title="Documents Ingested"
          value={totalDocs}
          changeText={totalDocs > 0 ? `${totalDocs} active` : "No documents yet"}
          icon={FileText}
          color="blue"
        />
        <KpiCard 
          title="Entities Extracted"
          value={totalEnts.toLocaleString()}
          changeText={totalEnts > 0 ? `${totalEnts} extracted` : "Awaiting documents"}
          icon={Layers}
          color="green"
        />
        <KpiCard 
          title="Relationships"
          value={totalRels.toLocaleString()}
          changeText={totalRels > 0 ? `${totalRels} connected` : "Awaiting documents"}
          icon={Link2}
          color="purple"
        />
        <KpiCard 
          title="Facts Extracted"
          value={totalFacts.toLocaleString()}
          changeText={totalFacts > 0 ? `${totalFacts} grounded` : "Awaiting documents"}
          icon={ShieldCheck}
          color="amber"
        />
      </div>

      {/* Secondary KPI Badges Bar */}
      <div className="card" style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Review Queue:</span>
            <span className={`badge ${reviewCount > 0 ? 'badge-amber' : 'badge-green'}`} style={{ fontSize: '0.85rem', padding: '3px 10px', cursor: 'pointer' }} onClick={() => navigate('/review')}>
              {reviewCount} {reviewCount === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Knowledge Base:</span>
            <span className="badge badge-blue" style={{ fontSize: '0.85rem', padding: '3px 10px' }}>
              {totalDocs > 0 ? 'Active' : 'Empty'}
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
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Facts and entities volume</p>
            </div>
            <span className="badge badge-blue">Activity</span>
          </div>
          <div style={{ width: '100%', height: '220px' }}>
            {analytics?.extraction_activity_timeline?.length > 0 ? (
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
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Area type="monotone" dataKey="facts" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorFacts)" name="Facts" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Clock size={32} color="#94a3b8" style={{ marginBottom: '8px' }} />
                <span>No extraction activity yet.</span>
                <span style={{ fontSize: '0.75rem', marginTop: '2px' }}>Upload a document to view analytics.</span>
              </div>
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
            {totalEnts > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics?.entities_by_type || []} layout="vertical" margin={{ left: 10 }}>
                  <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={85} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {(analytics?.entities_by_type || []).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Layers size={32} color="#94a3b8" style={{ marginBottom: '8px' }} />
                <span>No entities extracted yet.</span>
              </div>
            )}
          </div>
        </div>

        {/* "Needs Attention" Panel */}
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <AlertTriangle size={18} color="#d97706" />
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Review & Governance</h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Human-in-the-loop verification to safeguard knowledge integrity
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div 
                onClick={() => navigate('/review?tab=unmatched')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fffbeb', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#92400e' }}>Unmatched Entities</span>
                <span className="badge badge-amber">{reviewCount} items</span>
              </div>

              <div 
                onClick={() => navigate('/contradictions')}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fef2f2', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#991b1b' }}>Contradictions & Variance</span>
                <span className="badge badge-red">Adjudication</span>
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
              Ingested business contracts, invoices, and reports
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
              {documents.length > 0 ? (
                documents.map((doc) => (
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
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{doc.entities_count || 0}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{doc.facts_count || 0}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <ConfidenceBadge confidence={doc.confidence_score || 0.95} />
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {doc.uploaded_at || "Recent"}
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
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No documents ingested yet. Click "+ Upload Document" above or load a sample document to begin.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
