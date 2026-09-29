import React, { useState, useEffect } from 'react';
import { Settings, ShieldCheck, Cpu, Sliders, CheckCircle2, Save } from 'lucide-react';
import { aiService } from '../services/aiService';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    extraction_model: "Prototype Extraction Engine (v2.4)",
    confidence_threshold: 0.80,
    entity_resolution_threshold: 0.90,
    automatic_extraction: true,
    human_review_enabled: true,
    evidence_tracking_enabled: true,
    strict_hallucination_guardrails: true
  });
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    async function load() {
      const s = await aiService.getSettings();
      if (s) setSettings(s);
    }
    load();
  }, []);

  const handleSave = async () => {
    await aiService.updateSettings(settings);
    setToastMessage("Settings saved successfully.");
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '880px' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          fontSize: '0.875rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000
        }}>
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Settings</h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
          Configure AI extraction engines, confidence thresholds, and anti-hallucination guardrails.
        </p>
      </div>

      {/* AI Configuration Card */}
      <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu size={20} color="#2563eb" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>AI Extraction Engine</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
              Active Extraction Model Architecture
            </label>
            <select
              value={settings.extraction_model}
              onChange={e => setSettings({ ...settings, extraction_model: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                backgroundColor: '#ffffff',
                fontSize: '0.9rem'
              }}
            >
              <option value="Prototype Extraction Engine (v2.4)">Prototype Extraction Engine (Deterministic & Traceable)</option>
              <option value="OpenAI GPT-4o Integration (Pluggable)">OpenAI GPT-4o Integration (Pluggable via AIService)</option>
              <option value="Google Gemini 1.5 Pro (Pluggable)">Google Gemini 1.5 Pro (Pluggable via AIService)</option>
              <option value="Anthropic Claude 3.5 Sonnet (Pluggable)">Anthropic Claude 3.5 Sonnet (Pluggable via AIService)</option>
            </select>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
              Clean service abstraction allows zero-redesign plug-and-play for live LLM providers.
            </span>
          </div>

          {/* Confidence Slider */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Extraction Confidence Minimum Gate
              </label>
              <span style={{ fontWeight: 800, color: '#2563eb', fontSize: '0.9rem' }}>
                {Math.round(settings.confidence_threshold * 100)}%
              </span>
            </div>
            <input 
              type="range"
              min="0.50"
              max="0.95"
              step="0.05"
              value={settings.confidence_threshold}
              onChange={e => setSettings({ ...settings, confidence_threshold: parseFloat(e.target.value) })}
              style={{ width: '100%', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Triples with confidence below {Math.round(settings.confidence_threshold * 100)}% are rerouted to Human Review.
            </span>
          </div>

          {/* Entity Resolution Slider */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Entity Resolution Similarity Gate
              </label>
              <span style={{ fontWeight: 800, color: '#059669', fontSize: '0.9rem' }}>
                {Math.round(settings.entity_resolution_threshold * 100)}%
              </span>
            </div>
            <input 
              type="range"
              min="0.70"
              max="0.99"
              step="0.01"
              value={settings.entity_resolution_threshold}
              onChange={e => setSettings({ ...settings, entity_resolution_threshold: parseFloat(e.target.value) })}
              style={{ width: '100%', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Requires at least {Math.round(settings.entity_resolution_threshold * 100)}% token similarity to automatically link to master records without human signoff.
            </span>
          </div>
        </div>
      </div>

      {/* Processing Policies Card */}
      <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={20} color="#059669" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Processing Policies & Trust Guardrails</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Automatic Multi-stage Extraction</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Trigger 8-stage pipeline immediately on document upload</div>
            </div>
            <input 
              type="checkbox" 
              checked={settings.automatic_extraction}
              onChange={e => setSettings({ ...settings, automatic_extraction: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Mandatory Human Review Gate</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Hold ambiguous or low-confidence triples in review queue</div>
            </div>
            <input 
              type="checkbox" 
              checked={settings.human_review_enabled}
              onChange={e => setSettings({ ...settings, human_review_enabled: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Verbatim Evidence Tracking</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Bind exact sentence character offsets to all extracted facts</div>
            </div>
            <input 
              type="checkbox" 
              checked={settings.evidence_tracking_enabled}
              onChange={e => setSettings({ ...settings, evidence_tracking_enabled: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-md)' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#166534' }}>Strict Anti-Hallucination Guardrails</div>
              <div style={{ fontSize: '0.775rem', color: '#15803d' }}>
                Never invent unsupported relationships (e.g. Reject John Smith CEO_OF without direct evidence)
              </div>
            </div>
            <input 
              type="checkbox" 
              checked={settings.strict_hallucination_guardrails}
              onChange={e => setSettings({ ...settings, strict_hallucination_guardrails: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            <Save size={16} />
            <span>Save Configuration</span>
          </button>
        </div>
      </div>

    </div>
  );
}
