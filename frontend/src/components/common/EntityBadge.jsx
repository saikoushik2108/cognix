import React from 'react';
import { 
  Building2, User, Box, FileText, Receipt, MapPin, Calendar, DollarSign 
} from 'lucide-react';

const TYPE_CONFIG = {
  Organization: { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe', icon: Building2 },
  Person: { bg: '#f5f3ff', color: '#7c3aed', border: '#ddd6fe', icon: User },
  Product: { bg: '#ecfdf5', color: '#059669', border: '#a7f3d0', icon: Box },
  Contract: { bg: '#fffbeb', color: '#d97706', border: '#fde68a', icon: FileText },
  Invoice: { bg: '#ecfeff', color: '#0891b2', border: '#a5f3fc', icon: Receipt },
  Location: { bg: '#fdf2f8', color: '#db2777', border: '#fbcfe8', icon: MapPin },
  Date: { bg: '#f8fafc', color: '#475569', border: '#e2e8f0', icon: Calendar },
  Money: { bg: '#f0fdfa', color: '#0d9488', border: '#99f6e4', icon: DollarSign }
};

export default function EntityBadge({ type = "Organization", name = "", size = "normal" }) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.Organization;
  const Icon = config.icon;

  const style = {
    backgroundColor: config.bg,
    color: config.color,
    border: `1px solid ${config.border}`,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: size === 'small' ? '2px 6px' : '3px 8px',
    borderRadius: '9999px',
    fontSize: size === 'small' ? '0.7rem' : '0.75rem',
    fontWeight: 600,
    lineHeight: 1
  };

  return (
    <span style={style}>
      <Icon size={size === 'small' ? 10 : 12} />
      <span>{name || type}</span>
    </span>
  );
}
