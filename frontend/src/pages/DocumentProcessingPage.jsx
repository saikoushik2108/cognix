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
      const currentDoc = await aiService.getDocument(docId || "doc-001");
      setDoc(currentDoc);
    }
    load();
  }, [docId]);

  const stages = [
    {
      num: 1,
      title: "Document uploaded",
      duration: "0.12s",
      summary: "Multi-part binary stream received and validated.",
      details: "Received 342 KB PDF payload. Validated checksum and file integrity. Extracted 4 vector pages."
    },
    {
      num: 2,
      title: "Text extracted",
      duration: "0.34s",
      summary: "Vector layout & character stream extracted via PyMuPDF engine.",
      details: "Extracted 1,480 tokens across 4 pages. Normalized character encoding (UTF-8). Formed 18 discrete paragraph chunks."
    },
    {
      num: 3,
      title: "Entities identified",
      duration: "0.45s",
      summary: "Named Entity Recognition identified Organizations, People, Products, Values, Dates.",
      details: "Discovered 8 core entities: ABC Technologies Pvt. Ltd., XYZ Corporation, Dell PowerEdge servers, John Smith, INR 2.5 crore, 15 March 2026, 15 March 2028."
    },
    {
      num: 4,
      title: "Relationships identified",
      duration: "0.38s",
      summary: "Dependency parsing & relation extraction connected entities.",
      details: "Discovered SIGNED, PURCHASED, SUPPLIES, CONTAINS, HAS_VALUE, STARTS_ON, EXPIRES_ON. Flagged unsupported 'CEO_OF' for human review."
    },
    {
      num: 5,
      title: "Facts extracted",
      duration: "0.29s",
      summary: "Structured subject-predicate-value triples compiled.",
      details: "Extracted: Contract Value = ₹2.5 Cr; Quantity = 500 Units; Start Date = 15 Mar 2026; Expiry Date = 15 Mar 2028."
    },
    {
      num: 6,
      title: "Evidence validated",
      duration: "0.19s",
      summary: "Verbatim document citations bounded with page offsets.",
      details: "Each of the 5 extracted facts bound to exact sentence offsets on Page 2 and Page 4. Traceability guaranteed."
    },
    {
      num: 7,
      title: "Entity resolution",
      duration: "0.22s",
      summary: "Entities matched against enterprise semantic model.",
      details: "Linked 'ABC Technologies Pvt. Ltd.' to master record ORG-1024 (96% similarity). Linked 'XYZ Corporation' to ORG-1028. 'John Smith' marked unmatched for review."
    },
    {
      num: 8,
      title: "Knowledge created",
      duration: "0.15s",
      summary: "Knowledge graph nodes and edges stored and indexed.",
      details: "Published to Master Knowledge Base. Graph ready for inspection, query traversal, and visual exploration."
    }
  ];

  const handleReprocess = async () => {
    setIsProcessing(true);
    await new Promise(r => setTimeout(r, 600));
    setIsProcessing(false);
  };

  const filename = doc?.filename || "Contract_001.pdf";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{filename}</h1>
            <span className="badge badge-green" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
              Processed successfully
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Multi-stage extraction pipeline execution breakdown • 8 of 8 stages complete
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn btn-secondary"
            onClick={handleReprocess}
            disabled={isProcessing}
          >
            <RefreshCw size={15} className={isProcessing ? "animate-spin" : ""} />
            <span>{isProcessing ? "Reprocessing..." : "Reprocess Document"}</span>
          </button>

          <button 
            className="btn btn-primary"
            onClick={() => navigate(`/documents/inspector/${docId || 'doc-001'}`)}
          >
            <span>Open Document Inspector</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px' }}>
        <div className="card" style={{ padding: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pages</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
            {doc?.pages_count || 4}
          </div>
        </div>

        <div className="card" style={{ padding: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Text Chunks</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
            {doc?.chunks_count || 18}
          </div>
        </div>

        <div className="card" style={{ padding: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Entities</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
            {doc?.entities_count || 8}
          </div>
        </div>

        <div className="card" style={{ padding: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Relationships</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', marginTop: '2px' }}>
            {doc?.relationships_count || 8}
          </div>
        </div>

        <div className="card" style={{ padding: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Facts</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d97706', marginTop: '2px' }}>
            {doc?.facts_count || 5}
          </div>
        </div>

        <div className="card" style={{ padding: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Needs Review</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626', marginTop: '2px' }}>
            {doc?.needs_review_count || 2}
          </div>
        </div>
      </div>

      {/* Interactive Pipeline Stages Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 420px) 1fr', gap: '20px', alignItems: 'start' }}>
        
        {/* Stages List (Left) */}
        <div className="card" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Pipeline Execution Flow (Click to inspect)
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
                  backgroundColor: isSelected ? 'var(--primary-50)' : '#ffffff',
                  border: isSelected ? '1px solid #93c5fd' : '1px solid var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <div>
                    <div style={{ fontWeight: isSelected ? 700 : 600, fontSize: '0.875rem', color: isSelected ? 'var(--primary-700)' : 'var(--text-primary)' }}>
                      {st.num}. {st.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Completed in {st.duration}
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} color={isSelected ? "var(--primary-600)" : "#94a3b8"} />
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel (Right) */}
        <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-green">Stage {stages[selectedStage].num} of 8</span>
              <span className="badge badge-blue">{stages[selectedStage].duration}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '8px' }}>
              {stages[selectedStage].title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {stages[selectedStage].summary}
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: 'var(--text-primary)'
          }}>
            <div style={{ fontWeight: 700, marginBottom: '6px', color: 'var(--text-secondary)' }}>
              Execution Details & Log Output:
            </div>
            <p>{stages[selectedStage].details}</p>
          </div>

          {/* Quick Action in stage */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              All integrity checks passed with 0 fatal errors.
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => navigate(`/documents/inspector/${docId || 'doc-001'}`)}
            >
              <span>Explore Extracted Knowledge</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
