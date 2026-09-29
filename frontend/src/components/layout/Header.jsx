import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Bell, HelpCircle, Plus, FileText, 
  Layers, ArrowRight, ShieldCheck, Check, Sparkles, X
} from 'lucide-react';
import { aiService } from '../../services/aiService';

export default function Header({ onOpenUpload, onOpenHelp }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const searchRef = useRef(null);

  // Keyboard shortcut Ctrl+K / Cmd+K to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle global search input
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setSearchResults(null);
      setIsSearching(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      const res = await aiService.search(searchQuery);
      setSearchResults(res);
      setIsSearching(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSelectResult = (item, type) => {
    setSearchQuery('');
    setSearchResults(null);
    if (type === 'document') {
      navigate(`/documents/inspector/${item.id}`);
    } else if (type === 'entity') {
      navigate(`/knowledge/entities?highlight=${item.id}`);
    } else if (type === 'relationship') {
      navigate('/knowledge/relationships');
    } else if (type === 'fact') {
      navigate('/knowledge/facts');
    }
  };

  const hasResults = searchResults && (
    searchResults.documents.length > 0 ||
    searchResults.entities.length > 0 ||
    searchResults.relationships.length > 0 ||
    searchResults.facts.length > 0
  );

  return (
    <header style={{
      height: 'var(--header-height)',
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Brand & Subtitle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div 
          onClick={() => navigate('/')} 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            backgroundColor: '#2563eb',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(37, 99, 235, 0.25)'
          }}>
            <Sparkles size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                KnowFlow <span style={{ color: '#2563eb' }}>AI</span>
              </span>
              <span className="badge badge-blue" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>v2.4</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Document Intelligence → Structured Knowledge
            </div>
          </div>
        </div>
      </div>

      {/* Center Search Bar with Dropdown */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f1f5f9',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '6px 12px',
          gap: '8px',
          transition: 'all 0.15s ease'
        }}>
          <Search size={16} color="#64748b" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search documents, entities, relationships, facts... (Ctrl+K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.85rem',
              color: 'var(--text-primary)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); setSearchResults(null); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Global Search Live Results Dropdown */}
        {searchResults && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-light)',
            maxHeight: '440px',
            overflowY: 'auto',
            zIndex: 1000,
            padding: '12px'
          }}>
            {!hasResults ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                No verified records found matching "{searchQuery}"
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {searchResults.documents.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Documents ({searchResults.documents.length})
                    </div>
                    {searchResults.documents.map(d => (
                      <div
                        key={d.id}
                        onClick={() => handleSelectResult(d, 'document')}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'background 0.15s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <FileText size={16} color="#2563eb" />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{d.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{d.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {searchResults.entities.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Entities ({searchResults.entities.length})
                    </div>
                    {searchResults.entities.map(e => (
                      <div
                        key={e.id}
                        onClick={() => handleSelectResult(e, 'entity')}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
                        onMouseEnter={(ev) => ev.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(ev) => ev.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Layers size={16} color="#059669" />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{e.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{e.type} • {e.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {searchResults.facts.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Facts ({searchResults.facts.length})
                    </div>
                    {searchResults.facts.map(f => (
                      <div
                        key={f.id}
                        onClick={() => handleSelectResult(f, 'fact')}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
                        onMouseEnter={(ev) => ev.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(ev) => ev.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <ShieldCheck size={16} color="#d97706" />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{f.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{f.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          className="btn btn-primary btn-sm"
          onClick={onOpenUpload}
        >
          <Plus size={16} />
          <span>Upload Document</span>
        </button>

        <button
          className="btn btn-outline btn-sm"
          onClick={onOpenHelp}
          title="Demo Walkthrough Guide"
        >
          <HelpCircle size={16} />
          <span style={{ display: 'none' }}>Guide</span>
        </button>

        {/* Notifications Popover */}
        <div style={{ position: 'relative' }}>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setShowNotifications(!showNotifications)}
            style={{ position: 'relative', padding: '7px' }}
          >
            <Bell size={16} />
            <span style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ef4444'
            }} />
          </button>

          {showNotifications && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: 'calc(100% + 8px)',
              width: '320px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-light)',
              padding: '16px',
              zIndex: 1000
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Notifications</div>
                <span className="badge badge-amber">3 Pending</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
                <div style={{ padding: '8px', backgroundColor: '#fffbeb', borderRadius: '6px' }}>
                  <strong>Ambiguity Flag:</strong> John Smith CEO_OF ABC Technologies requires review.
                </div>
                <div style={{ padding: '8px', backgroundColor: '#fef2f2', borderRadius: '6px' }}>
                  <strong>Contradiction:</strong> Contract C001 Expiry Date conflict detected.
                </div>
                <div style={{ padding: '8px', backgroundColor: '#eff6ff', borderRadius: '6px' }}>
                  <strong>Model Resolution:</strong> ABC Technologies linked to ORG-1024 (96%).
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar */}
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: '#eff6ff',
          color: '#2563eb',
          fontWeight: 700,
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #bfdbfe'
        }}>
          JD
        </div>
      </div>
    </header>
  );
}
