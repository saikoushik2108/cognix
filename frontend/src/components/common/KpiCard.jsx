import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function KpiCard({ title, value, changeText, icon: Icon, badge, color = "blue" }) {
  const colorMap = {
    blue: { iconBg: '#eff6ff', iconColor: '#2563eb' },
    green: { iconBg: '#ecfdf5', iconColor: '#059669' },
    amber: { iconBg: '#fffbeb', iconColor: '#d97706' },
    purple: { iconBg: '#f5f3ff', iconColor: '#7c3aed' },
  };

  const current = colorMap[color] || colorMap.blue;

  return (
    <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          {title}
        </span>
        {Icon && (
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: current.iconBg,
            color: current.iconColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon size={18} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          {value}
        </span>
        {badge && (
          <span className="badge badge-amber">{badge}</span>
        )}
      </div>

      {changeText && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.775rem', color: '#059669', fontWeight: 600 }}>
          <TrendingUp size={14} />
          <span>{changeText}</span>
        </div>
      )}
    </div>
  );
}
