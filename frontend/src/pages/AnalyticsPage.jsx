import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Legend 
} from 'recharts';
import { 
  BarChart3, TrendingUp, ShieldCheck, FileText, Layers, 
  Link2, CheckCircle2, AlertOctagon, Sparkles 
} from 'lucide-react';
import KpiCard from '../components/common/KpiCard';
import { aiService } from '../services/aiService';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await aiService.getAnalytics();
      setAnalytics(data);
    }
    load();
  }, []);

  if (!analytics) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-blue">Telemetry & Performance</span>
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
          Knowledge Analytics
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
          Real-time metrics on document ingestion volume, semantic entity extraction, and confidence metrics.
        </p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <KpiCard 
          title="Documents Processed"
          value={analytics.kpis.documents_processed}
          changeText={`+${analytics.kpis.documents_processed_today} today`}
          icon={FileText}
          color="blue"
        />
        <KpiCard 
          title="Entities Extracted"
          value={analytics.kpis.entities_extracted.toLocaleString()}
          changeText={`+${analytics.kpis.entities_today} today`}
          icon={Layers}
          color="green"
        />
        <KpiCard 
          title="Relationships"
          value={analytics.kpis.relationships_discovered.toLocaleString()}
          changeText={`+${analytics.kpis.relationships_today} today`}
          icon={Link2}
          color="purple"
        />
        <KpiCard 
          title="Average Confidence"
          value={`${analytics.kpis.high_confidence_pct}%`}
          changeText="High Evidentiary Reliability"
          icon={ShieldCheck}
          color="amber"
        />
      </div>

      {/* Charts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '20px' }}>
        
        {/* Documents & Facts Processed Over Time */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Extraction Throughput Over Time</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily volume of documents and structured facts</p>
            </div>
            <span className="badge badge-blue">7-Day Trajectory</span>
          </div>

          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analytics.extraction_activity_timeline}>
                <defs>
                  <linearGradient id="areaFacts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="areaEntities" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend verticalAlign="top" height={36} />
                <Area type="monotone" dataKey="facts" stroke="#2563eb" strokeWidth={2} fill="url(#areaFacts)" name="Facts Extracted" />
                <Area type="monotone" dataKey="entities" stroke="#10b981" strokeWidth={2} fill="url(#areaEntities)" name="Entities Identified" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Confidence Score Distribution */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Confidence Distribution</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Distribution of extraction confidence scores</p>
            </div>
            <span className="badge badge-green">91.4% ≥ 90%</span>
          </div>

          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.confidence_distribution}>
                <XAxis dataKey="range" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {analytics.confidence_distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Entity Type Distribution */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Entity Breakdown by Category</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proportion of extracted semantic types</p>
            </div>
          </div>

          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.entities_by_type} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={90} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {analytics.entities_by_type.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Review Status Breakdown */}
        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Human-in-the-Loop Review Status</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Resolution audit across all extracted items</p>
            </div>
          </div>

          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.review_status_breakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="count"
                >
                  {analytics.review_status_breakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}
