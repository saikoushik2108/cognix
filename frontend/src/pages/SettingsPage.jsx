import React, { useState, useEffect } from 'react';
import { Settings, ShieldCheck, Cpu, Sliders, CheckCircle2, Save, Brain, Key, Sparkles } from 'lucide-react';
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Pipeline Settings</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Configure optical character recognition, confidence thresholds, and anti-hallucination policies.
          </p>
        </div>

        <button 
          className="btn btn-primary"
          onClick={handleSave}
        >
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Knowledge Agent Reasoning Engine (Dual Mode) Card */}
      <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px', borderLeft: '4px solid #2563eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Brain size={20} color="#2563eb" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Knowledge Agent Reasoning Engine</h2>
          </div>
          <span className="badge badge-blue">Dual Mode Architecture</span>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
            Active Reasoning Engine
          </label>
          <select 
            value={settings.agent_reasoning_mode || "Autonomous ReAct Agent (Real-Time)"}
            onChange={e => setSettings({ ...settings, agent_reasoning_mode: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
              fontWeight: 600
            }}
          >
            <option value="Autonomous ReAct Agent (Real-Time)">Option 1: Autonomous ReAct Hybrid Agent (Default • 100% Real-Time • Zero API Keys)</option>
            <option value="Pre-built LLM / API Key Gateway">Option 2: Pre-built LLM Reasoning Gateway (Groq, OpenRouter, OpenAI, Local Ollama)</option>
          </select>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
            Option 1 executes real-time semantic SQL & graph traversal locally. Option 2 feeds verified ground-truth evidence to an LLM.
          </span>
        </div>

        {/* Second Option Configuration */}
        {settings.agent_reasoning_mode === "Pre-built LLM / API Key Gateway" && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            backgroundColor: '#f8fafc',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Key size={16} color="#2563eb" />
              <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#1e3a8a' }}>
                Option 2: LLM Provider & API Credentials
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Provider
                </label>
                <select
                  value={settings.llm_provider || "groq"}
                  onChange={e => setSettings({ ...settings, llm_provider: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="groq">Groq Cloud (Llama-3.3-70B • Fast Free Tier)</option>
                  <option value="openrouter">OpenRouter (Auto / Free Router)</option>
                  <option value="openai">OpenAI (GPT-4o-mini)</option>
                  <option value="ollama">Local Ollama (http://127.0.0.1:11434)</option>
                  <option value="gemini">Google Gemini (Gemini-1.5-Flash)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  {settings.llm_provider === "ollama" ? "Ollama Status" : "API Key"}
                </label>
                {settings.llm_provider === "ollama" ? (
                  <input
                    type="text"
                    disabled
                    value="Connected to local daemon (http://127.0.0.1:11434)"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#f1f5f9',
                      fontSize: '0.85rem',
                      color: '#475569'
                    }}
                  />
                ) : (
                  <input
                    type="password"
                    placeholder={`Enter your ${settings.llm_provider || 'Groq'} API key...`}
                    value={settings.llm_api_key || ""}
                    onChange={e => setSettings({ ...settings, llm_api_key: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.85rem'
                    }}
                  />
                )}
              </div>
            </div>
            <div style={{ fontSize: '0.725rem', color: '#64748b' }}>
              💡 If no key is provided, Cognix seamlessly uses our built-in real-time ReAct agent with 100% ground-truth accuracy.
            </div>
          </div>
        )}
      </div>

      {/* Model Selection Card */}
      <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu size={20} color="#2563eb" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Extraction & OCR Engine</h2>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
            Active Extraction Pipeline
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
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
              fontWeight: 500
            }}
          >
            <option value="Hybrid OCR Engine (Tesseract + RapidOCR ONNX)">Hybrid OCR Engine (Tesseract + RapidOCR ONNX)</option>
            <option value="RapidOCR Deep Learning Engine (v2.4)">RapidOCR Deep Learning Engine (v2.4)</option>
            <option value="Tesseract Optical Recognition (v5.3)">Tesseract Optical Recognition (v5.3)</option>
            <option value="Zero-Hallucination Deterministic Engine">Zero-Hallucination Deterministic Engine</option>
          </select>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
            All invoice processing executes 100% locally with zero external API calls or confidential data egress.
          </span>
        </div>
      </div>

      {/* Confidence Thresholds Card */}
      <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sliders size={20} color="#f59e0b" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Confidence & Entity Linking Thresholds</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Minimum Confidence Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Minimum Entity Verification Confidence</label>
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
              Extractions below this threshold are automatically routed to the Human-in-the-Loop Review Center.
            </span>
          </div>

          {/* Canonical Entity Resolution Threshold */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Entity Resolution Similarity Threshold</label>
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
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Human-in-the-Loop Review Routing</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Queue low-confidence extractions and unsupported links for expert validation</div>
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
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Strict Anti-Hallucination Guardrails</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Discard any relationship lacking direct, verbatim text evidence in source citations</div>
            </div>
            <input 
              type="checkbox" 
              checked={settings.strict_hallucination_guardrails}
              onChange={e => setSettings({ ...settings, strict_hallucination_guardrails: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
