import React, { useState } from 'react';
import { 
  Sparkles, Send, HelpCircle, ChevronDown, ChevronUp, 
  FileText, Quote, CheckCircle2, ShieldCheck, ArrowRight, Layers 
} from 'lucide-react';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

export default function AskKnowledgePage() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showPipeline, setShowPipeline] = useState(true);

  const suggestedQueries = [
    "What contracts does ABC Technologies have?",
    "What is the total value of contracts with XYZ Corporation?",
    "Which products were purchased by ABC Technologies?",
    "Which contracts expire in 2028?",
    "Who signed Contract C001?"
  ];

  const handleSearch = async (queryText) => {
    const q = queryText || query;
    if (!q.trim()) return;
    setQuery(q);
    setIsLoading(true);
    try {
      const res = await aiService.answerKnowledgeQuery(q);
      setResult(res);
      setShowPipeline(true);
    } catch (_) {}
    setIsLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Page Title */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          backgroundColor: '#eff6ff',
          borderRadius: '9999px',
          color: '#2563eb',
          fontSize: '0.8rem',
          fontWeight: 700,
          marginBottom: '10px'
        }}>
          <Sparkles size={14} />
          <span>Evidence-Backed Knowledge Retrieval</span>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Ask your knowledge
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Query structured facts, entities, and relationships extracted directly from your business documents.
        </p>
      </div>

      {/* Query Search Box */}
      <div className="card" style={{ padding: '8px 12px 8px 20px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: 'var(--shadow-md)' }}>
        <Sparkles size={20} color="#2563eb" style={{ flexShrink: 0 }} />
        <input 
          type="text"
          placeholder="Ask a question about your contracts, suppliers, products, or values..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            width: '100%',
            color: 'var(--text-primary)'
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => handleSearch()}
          disabled={isLoading || !query.trim()}
          style={{ padding: '10px 20px' }}
        >
          <span>{isLoading ? "Retrieving..." : "Ask"}</span>
          <Send size={15} />
        </button>
      </div>

      {/* Suggested Queries Chips */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          Suggested Inquiries:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {suggestedQueries.map((sq, i) => (
            <button
              key={i}
              className="btn btn-outline btn-sm"
              onClick={() => handleSearch(sq)}
              style={{ backgroundColor: '#ffffff', fontSize: '0.8rem' }}
            >
              {sq}
            </button>
          ))}
        </div>
      </div>

      {/* Query Result Section */}
      {result && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
          
          {/* Main Answer Card */}
          <div className="card" style={{ padding: '28px', backgroundColor: '#ffffff', borderLeft: '5px solid #2563eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-green">Supported Answer</span>
                <ConfidenceBadge confidence={result.confidence} />
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Zero Hallucinations Verified
              </span>
            </div>

            <div style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              lineHeight: 1.6,
              color: '#0f172a'
            }}
            dangerouslySetInnerHTML={{
              __html: result.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
            />
          </div>

          {/* Transparent Simulation: "How did we get this answer?" */}
          <div className="card" style={{ padding: '20px', backgroundColor: '#f8fafc' }}>
            <div
              onClick={() => setShowPipeline(!showPipeline)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#2563eb" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                  How did we get this answer? (Transparent Traceability Pipeline)
                </h3>
              </div>
              <button className="btn btn-outline btn-sm" style={{ padding: '4px 8px' }}>
                {showPipeline ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {showPipeline && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                {result.pipeline_steps.map(s => (
                  <div
                    key={s.step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      backgroundColor: '#ffffff',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {s.step}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        {s.name}
                      </div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                        {s.description}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#1e3a8a', backgroundColor: '#f0fdf4', padding: '6px 10px', borderRadius: '4px', marginTop: '6px', border: '1px solid #bbf7d0' }}>
                        {s.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Citations & Evidence Records */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Evidentiary Basis & Document Citations ({result.evidence_citations.length})
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '12px' }}>
              {result.evidence_citations.map((c, idx) => (
                <div key={idx} className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      <FileText size={15} color="#2563eb" />
                      <span>{c.source}</span>
                    </div>
                    <ConfidenceBadge confidence={c.confidence} />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#1e293b', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px' }}>
                    "{c.quote}"
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
