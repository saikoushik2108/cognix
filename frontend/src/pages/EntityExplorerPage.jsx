import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Layers, ExternalLink, ArrowUpDown, ShieldCheck } from 'lucide-react';
import EntityBadge from '../components/common/EntityBadge';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import EntityDrawer from '../components/common/EntityDrawer';
import { aiService } from '../services/aiService';

export default function EntityExplorerPage() {
  const [searchParams] = useSearchParams();
  const [entities, setEntities] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('mentions_count');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedEntity, setSelectedEntity] = useState(null);

  useEffect(() => {
    async function load() {
      const list = await aiService.getEntities();
      setEntities(list);

      // Check if highlight parameter passed
      const highlightId = searchParams.get('highlight');
      if (highlightId) {
        const found = list.find(e => e.id === highlightId);
        if (found) setSelectedEntity(found);
      }
    }
    load();
  }, [searchParams]);

  const filterTabs = [
    'All', 'Organization', 'Person', 'Product', 'Contract', 'Invoice', 'Location', 'Money', 'Date'
  ];

  const filteredEntities = entities.filter(ent => {
    const matchesType = activeFilter === 'All' || ent.type.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = ent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (ent.linked_entity_id && ent.linked_entity_id.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          ent.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  }).sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();
    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Entity Explorer</h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Catalog of business entities extracted and linked to semantic master records.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-blue" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
            {entities.length} Total Master Entities
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        
        {/* Type Filter Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`btn btn-sm ${activeFilter === tab ? 'btn-primary' : 'btn-outline'}`}
            >
              {tab === 'All' ? 'All Entities' : tab}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f8fafc',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '6px 12px',
          gap: '8px',
          width: '260px'
        }}>
          <Search size={14} color="#64748b" />
          <input 
            type="text"
            placeholder="Search entity name, ID..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.825rem' }}
          />
        </div>
      </div>

      {/* Entities Table */}
      <div className="card" style={{ padding: '20px' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                <th 
                  style={{ padding: '12px 16px', cursor: 'pointer' }}
                  onClick={() => toggleSort('name')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Entity Name</span>
                    <ArrowUpDown size={12} />
                  </div>
                </th>
                <th 
                  style={{ padding: '12px 16px', cursor: 'pointer' }}
                  onClick={() => toggleSort('type')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Type</span>
                    <ArrowUpDown size={12} />
                  </div>
                </th>
                <th 
                  style={{ padding: '12px 16px', cursor: 'pointer' }}
                  onClick={() => toggleSort('mentions_count')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Mentions</span>
                    <ArrowUpDown size={12} />
                  </div>
                </th>
                <th style={{ padding: '12px 16px' }}>Linked Semantic Entity</th>
                <th 
                  style={{ padding: '12px 16px', cursor: 'pointer' }}
                  onClick={() => toggleSort('confidence')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Confidence</span>
                    <ArrowUpDown size={12} />
                  </div>
                </th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntities.map(ent => (
                <tr
                  key={ent.id}
                  style={{ borderBottom: '1px solid var(--border-light)', transition: 'background 0.15s', cursor: 'pointer' }}
                  onClick={() => setSelectedEntity(ent)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      {ent.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Source: {ent.source_doc_name} (Page {ent.source_page || 1})
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <EntityBadge type={ent.type} />
                  </td>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>
                    {ent.mentions_count || 1}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    {ent.linked_entity_id ? (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: '#1d4ed8' }}>
                        {ent.linked_entity_id}
                      </span>
                    ) : (
                      <span className="badge badge-amber">Unmatched</span>
                    )}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <ConfidenceBadge confidence={ent.confidence} status={ent.status} />
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span className={`badge ${ent.status === 'Verified' ? 'badge-green' : 'badge-amber'}`}>
                      {ent.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={(e) => { e.stopPropagation(); setSelectedEntity(ent); }}
                    >
                      <ExternalLink size={14} />
                      <span>Inspect</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Entity Slide-out Drawer */}
      <EntityDrawer 
        isOpen={Boolean(selectedEntity)}
        onClose={() => setSelectedEntity(null)}
        entity={selectedEntity}
      />

    </div>
  );
}
