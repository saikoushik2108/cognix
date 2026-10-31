import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FileText, CheckCircle2, Sparkles, X, AlertCircle, Database, ScanLine } from 'lucide-react';
import { aiService } from '../../services/aiService';

export default function UploadModal({ isOpen, onClose, onUploadSuccess }) {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [isIngestingInvoices, setIsIngestingInvoices] = useState(false);

  if (!isOpen) return null;

  const handleDemoContract = async () => {
    setIsUploading(true);
    setUploadError(null);
    try {
      const doc = await aiService.uploadDemoDocument();
      if (onUploadSuccess) onUploadSuccess(doc);
      onClose();
      navigate(`/processing/${doc.id}`);
    } catch (err) {
      setUploadError("Failed to load demo document.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleIngestInvoices = async (count = 30) => {
    setIsIngestingInvoices(true);
    setUploadError(null);
    try {
      const res = await aiService.ingestInvoiceDataset(count, 0);
      if (res && res.success) {
        if (onUploadSuccess) onUploadSuccess();
        onClose();
        navigate('/documents');
      } else {
        setUploadError(res?.error || "Failed to ingest invoice dataset.");
      }
    } catch (err) {
      setUploadError("Failed to ingest invoice dataset.");
    } finally {
      setIsIngestingInvoices(false);
    }
  };

  const handleFileDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = async (file) => {
    setIsUploading(true);
    setUploadError(null);
    try {
      const doc = await aiService.uploadCustomDocument(file);
      if (onUploadSuccess) onUploadSuccess(doc);
      onClose();
      navigate(`/processing/${doc.id}`);
    } catch (err) {
      setUploadError("Failed to upload document. Please ensure valid file format.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Upload Document</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Transform unstructured business documents into structured knowledge graphs.
            </p>
          </div>
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {uploadError && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 14px',
            backgroundColor: 'var(--danger-50)',
            color: 'var(--danger-600)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.85rem',
            marginBottom: '16px'
          }}>
            <AlertCircle size={16} />
            <span>{uploadError}</span>
          </div>
        )}

        {/* Demo Document Quick Option */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px dashed #93c5fd',
          borderRadius: 'var(--radius-lg)',
          padding: '16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#dbeafe',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#1e3a8a' }}>
                Load Sample Document
              </div>
              <div style={{ fontSize: '0.8rem', color: '#3b82f6' }}>
                Parses Contract_001.pdf from sample_documents/ via PyMuPDF vector engine
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleDemoContract}
            disabled={isUploading || isIngestingInvoices}
          >
            {isUploading ? "Extracting..." : "Parse Sample File"}
          </button>
        </div>

        {/* KatanaML Invoices Dataset OCR & Neo4j Ingestion */}
        <div style={{
          backgroundColor: '#faf5ff',
          border: '1px dashed #c084fc',
          borderRadius: 'var(--radius-lg)',
          padding: '16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#f3e8ff',
              color: '#9333ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ScanLine size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#581c87' }}>
                KatanaML Invoices Dataset (15-Invoice Batch)
              </div>
              <div style={{ fontSize: '0.8rem', color: '#7e22ce' }}>
                Pure OCR text extraction (RapidOCR) • Builds Knowledge Triples • Syncs to Neo4j
              </div>
            </div>
          </div>
          <button
            className="btn btn-sm"
            onClick={handleIngestInvoices}
            disabled={isUploading || isIngestingInvoices}
            style={{
              backgroundColor: '#9333ea',
              color: '#ffffff',
              fontWeight: 700,
              border: 'none',
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              cursor: isIngestingInvoices ? 'not-allowed' : 'pointer'
            }}
          >
            {isIngestingInvoices ? "OCR Ingesting..." : "⚡ Ingest Invoices via OCR"}
          </button>
        </div>

        {/* Drag & Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleFileDrop}
          style={{
            border: isDragging ? '2px dashed var(--primary-600)' : '2px dashed var(--border-subtle)',
            backgroundColor: isDragging ? 'var(--primary-50)' : 'var(--bg-app)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('file-upload-input').click()}
        >
          <input
            id="file-upload-input"
            type="file"
            accept=".pdf,.docx,.doc,.txt"
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />

          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: '#ffffff',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-600)'
          }}>
            <UploadCloud size={28} />
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
              Drop documents here
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              Supports PDF, DOCX or TXT (Up to 25MB)
            </div>
          </div>

          <button className="btn btn-secondary btn-sm" type="button" style={{ marginTop: '8px' }}>
            Browse Files from Computer
          </button>
        </div>

        {/* Feature Highlights */}
        <div style={{
          marginTop: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#059669" />
            <span>Traceable Evidence</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#059669" />
            <span>Entity Resolution</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#059669" />
            <span>Anti-Hallucination Gate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
