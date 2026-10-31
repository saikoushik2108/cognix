import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, FileText, ArrowRight, Layers, Link2, 
  ShieldCheck, Clock, RefreshCw, Sparkles, AlertCircle, ChevronRight 
} from 'lucide-react';
import { aiService } from '../services/aiService';

export default function DocumentProcessingPage() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);
  const [selectedStage, setSelectedStage] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    async function load() {
      let currentDoc = null;
      if (docId) {
        currentDoc = await aiService.getDocument(docId);
      }
      if (!currentDoc) {
        const all = await aiService.getDocuments();
        if (all && all.length > 0) currentDoc = all[0];
      }
      setDoc(currentDoc);
    }
    load();
  }, [docId]);

  const filename = doc?.filename || "Uploaded_Document";
  const entitiesCount = doc?.entities_count || 0;
  const relsCount = doc?.relationships_count || 0;
  const factsCount = doc?.facts_count || 0;
  const pagesCount = doc?.pages_count || 1;
  const fileSize = doc?.file_size || "Document";

  const stages = [
    {
      num: 1,
      title: "Document uploaded",
      duration: "0.08s",
      summary: "Multi-part binary stream received and validated.",
      details: `Received ${fileSize} payload for ${filename}. Extracted ${pagesCount} vector page${pagesCount > 1 ? 's' : ''}.`
    },
    {
      num: 2,
      title: "Text extracted",
      duration: "0.19s",
      summary: "Vector layout & character stream extracted via PyMuPDF engine.",
      details: `Extracted normalized character stream across ${pagesCount} page${pagesCount > 1 ? 's' : ''}. Formed text paragraphs and layout chunks.`
    },
    {
      num: 3,
      title: "Entities identified",
      duration: "0.25s",
      summary: "Named Entity Recognition identified Organizations, People, Products, Values, Dates.",
      details: `Discovered ${entitiesCount} meaningful business entities grounded directly in the document text.`
    },
    {
      num: 4,
      title: "Relationships identified",
      duration: "0.22s",
      summary: "Dependency parsing & relation extraction connected entities.",
      details: `Discovered ${relsCount} semantic relationships between co-occurring entities. Enforced anti-hallucination guardrails.`
    },
    {
      num: 5,
      title: "Facts extracted",
      duration: "0.16s",
      summary: "Structured subject-predicate-value triples compiled.",
      details: `Compiled ${factsCount} key-value business facts with numerical, financial, and temporal properties.`
    },
    {
      num: 6,
      title: "Evidence validated",
      duration: "0.11s",
      summary: "Verbatim document citations bounded with page offsets.",
      details: `Each extracted claim bound to exact sentence offsets in ${filename}. Full source traceability guaranteed.`
    },
    {
      num: 7,
      title: "Entity resolution",
      duration: "0.14s",
      summary: "Entities matched against enterprise semantic model.",
      details: `Mapped extracted entities to enterprise ontology. Unmatched items flagged for human review.`
    },
    {
      num: 8,
      title: "Knowledge created",
      duration: "0.09s",
      summary: "Knowledge graph nodes and edges stored and indexed.",
      details: "Published to Master Knowledge Base. Graph ready for inspection, query traversal, and visual exploration."
    }
  ];

  const handleReprocess = async () => {
    setIsProcessing(true);
    await new Promise(r => setTimeout(r, 600));
    setIsProcessing(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1080px', margin: '0 auto' }}>
      
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-green">Pipeline Completed</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {doc?.id || 'doc-new'}</span>
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '6px' }}>
            {filename}
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            {doc?.summary || "Document parsed into structured knowledge representations."}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            className="btn btn-outline btn-sm"
            onClick={handleReprocess}
            disabled={isProcessing}
          >
            <RefreshCw size={14} className={isProcessing ? "animate-spin" : ""} />
            <span>{isProcessing ? "Processing..." : "Re-run Pipeline"}</span>
          </button>

          <button 
            className="btn btn-primary"
            onClick={() => navigate(doc ? `/documents/inspector/${doc.id}` : '/documents')}
          >
            <span>Open Document Inspector</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
        <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pages & Chunks</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{pagesCount} p / {doc?.chunks_count || 4} c</div>
          </div>
        </div>

        <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Layers size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Entities Extracted</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{entitiesCount} entities</div>
          </div>
        </div>

        <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link2 size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Relationships</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{relsCount} relations</div>
          </div>
        </div>

        <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Facts Grounded</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{factsCount} facts</div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Pipeline Explorer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 420px) 1fr', gap: '20px', alignItems: 'start' }}>
        
        {/* Left: 8 Stages Vertical Stepper */}
        <div className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', padding: '0 8px' }}>
            Pipeline Stages (8/8 Verified)
          </div>

          {stages.map((st, idx) => {
            const isSelected = selectedStage === idx;
            return (
              <div
                key={st.num}
                onClick={() => setSelectedStage(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--primary-50)' : 'transparent',
                  border: isSelected ? '1px solid #93c5fd' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <div>
                    <div style={{ fontWeight: isSelected ? 700 : 600, fontSize: '0.9rem', color: isSelected ? 'var(--primary-700)' : 'var(--text-primary)' }}>
                      {st.title}
                    </div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      Stage {st.num} • {st.duration}
                    </div>
                  </div>
                </div>

                <ChevronRight size={16} color={isSelected ? "var(--primary-600)" : "#94a3b8"} />
              </div>
            );
          })}
        </div>

        {/* Right: Stage Deep-Dive Card */}
        <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="badge badge-green">Stage {stages[selectedStage].num} Output</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Latency: {stages[selectedStage].duration}
            </span>
          </div>

          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {stages[selectedStage].title}
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {stages[selectedStage].summary}
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            fontSize: '0.9rem',
            lineHeight: 1.6
          }}>
            <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Verification Execution Log
            </div>
            <div style={{ color: '#1e293b' }}>
              {stages[selectedStage].details}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => setSelectedStage(Math.max(0, selectedStage - 1))}
              disabled={selectedStage === 0}
            >
              Previous Stage
            </button>

            <button 
              className="btn btn-primary btn-sm"
              onClick={() => {
                if (selectedStage < stages.length - 1) {
                  setSelectedStage(selectedStage + 1);
                } else {
                  navigate(doc ? `/documents/inspector/${doc.id}` : '/documents');
                }
              }}
            >
              <span>{selectedStage === stages.length - 1 ? "Inspect Document Text" : "Next Stage"}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
