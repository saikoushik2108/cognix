import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Network, HelpCircle, AlertOctagon, 
  Share2, BarChart3, Settings, ChevronLeft, ChevronRight, 
  ChevronDown, Layers, Link2, ShieldCheck, Quote, AlertTriangle
} from 'lucide-react';

export default function Sidebar({ isCollapsed, onToggleCollapse, reviewCount = 23 }) {
  const location = useLocation();
  const [knowledgeOpen, setKnowledgeOpen] = useState(
    location.pathname.startsWith('/knowledge')
  );
  const [reviewOpen, setReviewOpen] = useState(
    location.pathname.startsWith('/review') || location.pathname.startsWith('/contradictions')
  );

  const navLinkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 14px',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.875rem',
    fontWeight: isActive ? 700 : 500,
    color: isActive ? 'var(--primary-600)' : 'var(--text-secondary)',
    backgroundColor: isActive ? 'var(--primary-50)' : 'transparent',
    transition: 'all 0.15s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  });

  const subNavLinkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '7px 12px 7px 34px',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.825rem',
    fontWeight: isActive ? 700 : 500,
    color: isActive ? 'var(--primary-600)' : 'var(--text-muted)',
    backgroundColor: isActive ? 'var(--primary-50)' : 'transparent',
    transition: 'all 0.15s ease',
    textDecoration: 'none'
  });

  return (
    <aside style={{
      width: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
      backgroundColor: 'var(--bg-surface)',
      borderRight: '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - var(--header-height))',
      position: 'sticky',
      top: 'var(--header-height)',
      transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 90,
      flexShrink: 0
    }}>
      {/* Scrollable Nav Area */}
      <div style={{ flex: 1, padding: isCollapsed ? '16px 8px' : '16px 12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        
        {/* Dashboard */}
        <NavLink to="/" style={navLinkStyle} title={isCollapsed ? "Dashboard" : undefined}>
          <LayoutDashboard size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>

        {/* Documents */}
        <NavLink to="/documents" style={navLinkStyle} title={isCollapsed ? "Documents" : undefined}>
          <FileText size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Documents</span>}
        </NavLink>

        {/* Knowledge Accordion */}
        <div>
          <div
            onClick={() => !isCollapsed && setKnowledgeOpen(!knowledgeOpen)}
            style={{
              ...navLinkStyle({ isActive: location.pathname.startsWith('/knowledge') }),
              cursor: 'pointer',
              justifyContent: 'space-between'
            }}
            title={isCollapsed ? "Knowledge" : undefined}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Layers size={18} style={{ flexShrink: 0 }} />
              {!isCollapsed && <span>Knowledge</span>}
            </div>
            {!isCollapsed && (
              <ChevronDown 
                size={14} 
                style={{ 
                  transform: knowledgeOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.15s ease' 
                }} 
              />
            )}
          </div>

          {/* Submenu for Knowledge */}
          {!isCollapsed && knowledgeOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
              <NavLink to="/knowledge/entities" style={subNavLinkStyle}>
                <Layers size={14} />
                <span>Entities</span>
              </NavLink>
              <NavLink to="/knowledge/relationships" style={subNavLinkStyle}>
                <Link2 size={14} />
                <span>Relationships</span>
              </NavLink>
              <NavLink to="/knowledge/facts" style={subNavLinkStyle}>
                <ShieldCheck size={14} />
                <span>Facts</span>
              </NavLink>
              <NavLink to="/knowledge/evidence" style={subNavLinkStyle}>
                <Quote size={14} />
                <span>Evidence</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* Knowledge Graph */}
        <NavLink to="/graph" style={navLinkStyle} title={isCollapsed ? "Knowledge Graph" : undefined}>
          <Network size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Knowledge Graph</span>}
        </NavLink>

        {/* Ask Knowledge */}
        <NavLink to="/ask" style={navLinkStyle} title={isCollapsed ? "Ask Knowledge" : undefined}>
          <HelpCircle size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Ask Knowledge</span>}
        </NavLink>

        {/* Review Center Accordion */}
        <div>
          <div
            onClick={() => !isCollapsed && setReviewOpen(!reviewOpen)}
            style={{
              ...navLinkStyle({ isActive: location.pathname.startsWith('/review') || location.pathname.startsWith('/contradictions') }),
              cursor: 'pointer',
              justifyContent: 'space-between'
            }}
            title={isCollapsed ? `Review Center (${reviewCount})` : undefined}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertOctagon size={18} style={{ flexShrink: 0 }} />
              {!isCollapsed && <span>Review Center</span>}
            </div>
            {!isCollapsed && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="badge badge-amber" style={{ fontSize: '0.675rem', padding: '1px 5px' }}>
                  {reviewCount}
                </span>
                <ChevronDown 
                  size={14} 
                  style={{ 
                    transform: reviewOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.15s ease' 
                  }} 
                />
              </div>
            )}
          </div>

          {!isCollapsed && reviewOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
              <NavLink to="/review?tab=unmatched" style={subNavLinkStyle}>
                <span>Unmatched Entities</span>
              </NavLink>
              <NavLink to="/review?tab=low_confidence" style={subNavLinkStyle}>
                <span>Low Confidence</span>
              </NavLink>
              <NavLink to="/contradictions" style={subNavLinkStyle}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span>Contradictions</span>
                  <span className="badge badge-red" style={{ fontSize: '0.65rem' }}>2</span>
                </div>
              </NavLink>
            </div>
          )}
        </div>

        {/* Semantic Model */}
        <NavLink to="/semantic-model" style={navLinkStyle} title={isCollapsed ? "Semantic Model" : undefined}>
          <Share2 size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Semantic Model</span>}
        </NavLink>

        {/* Analytics */}
        <NavLink to="/analytics" style={navLinkStyle} title={isCollapsed ? "Analytics" : undefined}>
          <BarChart3 size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Analytics</span>}
        </NavLink>

        {/* Settings */}
        <NavLink to="/settings" style={navLinkStyle} title={isCollapsed ? "Settings" : undefined}>
          <Settings size={18} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>

      </div>

      {/* Collapse Toggle Footer */}
      <div style={{
        padding: '12px',
        borderTop: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'space-between'
      }}>
        {!isCollapsed && (
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Enterprise Workspace
          </div>
        )}
        <button
          className="btn btn-outline btn-sm"
          onClick={onToggleCollapse}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{ padding: '6px' }}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </aside>
  );
}
