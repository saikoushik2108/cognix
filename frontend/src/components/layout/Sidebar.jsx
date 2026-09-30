import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Network, HelpCircle, AlertOctagon, 
  Share2, BarChart3, Settings, ChevronLeft, ChevronRight, 
  Layers, Link2, ShieldCheck, Quote, AlertTriangle, Cpu, GitMerge
} from 'lucide-react';

export default function Sidebar({ isCollapsed, onToggleCollapse, reviewCount = 23 }) {
  const navLinkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 12px',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.85rem',
    fontWeight: isActive ? 700 : 500,
    color: isActive ? 'var(--primary-600)' : 'var(--text-secondary)',
    backgroundColor: isActive ? 'var(--primary-50)' : 'transparent',
    transition: 'all 0.15s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  });

  const sectionHeaderStyle = {
    fontSize: '0.675rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    padding: '12px 12px 4px 12px',
    marginTop: '4px'
  };

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
      <div style={{ flex: 1, padding: isCollapsed ? '16px 8px' : '12px 10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        
        {/* ================= OVERVIEW ================= */}
        {!isCollapsed && <div style={sectionHeaderStyle}>Overview</div>}
        <NavLink to="/" style={navLinkStyle} title={isCollapsed ? "Dashboard" : undefined}>
          <LayoutDashboard size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>

        {/* ================= KNOWLEDGE ================= */}
        {!isCollapsed && <div style={sectionHeaderStyle}>Knowledge</div>}
        <NavLink to="/documents" style={navLinkStyle} title={isCollapsed ? "Documents" : undefined}>
          <FileText size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Documents</span>}
        </NavLink>
        <NavLink to="/knowledge/entities" style={navLinkStyle} title={isCollapsed ? "Entities" : undefined}>
          <Layers size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Entities</span>}
        </NavLink>
        <NavLink to="/knowledge/relationships" style={navLinkStyle} title={isCollapsed ? "Relationships" : undefined}>
          <Link2 size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Relationships</span>}
        </NavLink>
        <NavLink to="/knowledge/facts" style={navLinkStyle} title={isCollapsed ? "Facts" : undefined}>
          <ShieldCheck size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Facts</span>}
        </NavLink>
        <NavLink to="/knowledge/evidence" style={navLinkStyle} title={isCollapsed ? "Evidence" : undefined}>
          <Quote size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Evidence</span>}
        </NavLink>
        <NavLink to="/graph" style={navLinkStyle} title={isCollapsed ? "Knowledge Graph" : undefined}>
          <Network size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Knowledge Graph</span>}
        </NavLink>

        {/* ================= INTELLIGENCE ================= */}
        {!isCollapsed && <div style={sectionHeaderStyle}>Intelligence</div>}
        <NavLink to="/ask" style={navLinkStyle} title={isCollapsed ? "Ask Knowledge" : undefined}>
          <HelpCircle size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Ask Knowledge</span>}
        </NavLink>
        <NavLink to="/review" style={navLinkStyle} title={isCollapsed ? `Review Center (${reviewCount})` : undefined}>
          <AlertOctagon size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span>Review Center</span>
              <span className="badge badge-amber" style={{ fontSize: '0.675rem', padding: '1px 5px' }}>
                {reviewCount}
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to="/contradictions" style={navLinkStyle} title={isCollapsed ? "Contradictions" : undefined}>
          <AlertTriangle size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span>Contradictions</span>
              <span className="badge badge-red" style={{ fontSize: '0.65rem' }}>3</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/semantic-model" style={navLinkStyle} title={isCollapsed ? "Semantic Model" : undefined}>
          <Share2 size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Semantic Model</span>}
        </NavLink>

        {/* ================= SYSTEM ================= */}
        {!isCollapsed && <div style={sectionHeaderStyle}>System</div>}
        <NavLink to="/analytics" style={navLinkStyle} title={isCollapsed ? "Analytics" : undefined}>
          <BarChart3 size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Analytics</span>}
        </NavLink>
        <NavLink to="/architecture" style={navLinkStyle} title={isCollapsed ? "Architecture" : undefined}>
          <Cpu size={17} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Architecture</span>}
        </NavLink>
        <NavLink to="/settings" style={navLinkStyle} title={isCollapsed ? "Settings" : undefined}>
          <Settings size={17} style={{ flexShrink: 0 }} />
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
            KnowFlow v1.0 Demo
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
