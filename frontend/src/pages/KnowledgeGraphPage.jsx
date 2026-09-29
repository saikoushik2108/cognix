import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  ReactFlow, 
  Controls, 
  Background, 
  MiniMap,
  Handle,
  Position,
  useNodesState,
  useEdgesState
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { 
  Search, Filter, Sliders, Maximize2, ShieldCheck, 
  AlertTriangle, Quote, X, ExternalLink, Layers, Building2, User, Box, FileText, Download 
} from 'lucide-react';
import EntityBadge from '../components/common/EntityBadge';
import ConfidenceBadge from '../components/common/ConfidenceBadge';
import { aiService } from '../services/aiService';

// Custom Node Component for Knowledge Graph
function CustomKnowledgeNode({ data }) {
  const isSelected = data.isSelected;
  const isPerson = data.type === 'Person';
  const isOrg = data.type === 'Organization';
  const isProduct = data.type === 'Product';
  const isContract = data.type === 'Contract';

  let borderColor = '#93c5fd';
  let bgColor = '#ffffff';

  if (isOrg) { borderColor = '#3b82f6'; }
  else if (isProduct) { borderColor = '#10b981'; }
  else if (isContract) { borderColor = '#f59e0b'; }
  else if (isPerson) { borderColor = '#8b5cf6'; }

  return (
    <div style={{
      padding: '12px 16px',
      borderRadius: '12px',
      backgroundColor: bgColor,
      border: isSelected ? '2px solid #2563eb' : `1.5px solid ${borderColor}`,
      boxShadow: isSelected ? '0 0 0 4px rgba(37, 99, 235, 0.15)' : '0 2px 4px rgba(0,0,0,0.06)',
      minWidth: '160px',
      maxWidth: '240px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      transition: 'all 0.15s ease'
    }}>
      <Handle type="target" position={Position.Top} />
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '6px' }}>
        <EntityBadge type={data.type} size="small" />
        <span style={{ fontSize: '0.675rem', fontWeight: 700, color: '#059669' }}>
          {Math.round(data.confidence * 100)}%
        </span>
      </div>

      <div style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0f172a', lineHeight: 1.3 }}>
        {data.label}
      </div>

      {data.linkedId && (
        <div style={{ fontSize: '0.675rem', fontFamily: 'var(--font-mono)', color: '#2563eb', marginTop: '4px' }}>
          {data.linkedId}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default function KnowledgeGraphPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedElement, setSelectedElement] = useState(null); // node or edge
  const [filterType, setFilterType] = useState('All');
  const [minConfidence, setMinConfidence] = useState(0.5);
  const [searchQuery, setSearchQuery] = useState('');

  const nodeTypes = useMemo(() => ({ customKnowledgeNode: CustomKnowledgeNode }), []);

  useEffect(() => {
    async function loadGraph() {
      const graphData = await aiService.getKnowledgeGraph();
      setNodes(graphData.nodes || []);
      setEdges(graphData.edges || []);
      // Default select the Contract node
      const contractNode = (graphData.nodes || []).find(n => n.id === "ent-005") || graphData.nodes?.[0];
      if (contractNode) {
        setSelectedElement({ type: 'node', data: contractNode.data });
      }
    }
    loadGraph();
  }, []);

  const onNodeClick = useCallback((event, node) => {
    setSelectedElement({ type: 'node', data: node.data });
  }, []);

  const onEdgeClick = useCallback((event, edge) => {
    setSelectedElement({ type: 'edge', data: edge.data, label: edge.label });
  }, []);

  // Filter nodes & edges based on user controls
  const filteredNodes = useMemo(() => {
    return nodes.filter(n => {
      const matchesType = filterType === 'All' || n.data.type.toLowerCase() === filterType.toLowerCase();
      const matchesConf = (n.data.confidence || 1) >= minConfidence;
      const matchesSearch = !searchQuery || n.data.label.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesConf && matchesSearch;
    });
  }, [nodes, filterType, minConfidence, searchQuery]);

  const visibleNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  const filteredEdges = useMemo(() => {
    return edges.filter(e => {
      const bothNodesVisible = visibleNodeIds.has(e.source) && visibleNodeIds.has(e.target);
      const matchesConf = (e.data?.confidence || 1) >= minConfidence;
      return bothNodesVisible && matchesConf;
    });
  }, [edges, visibleNodeIds, minConfidence]);

  const exportGraphJson = () => {
    const exportData = {
      project: "KnowFlow AI",
      exported_at: new Date().toISOString(),
      metadata: {
        total_nodes: filteredNodes.length,
        total_edges: filteredEdges.length,
        filter_type: filterType,
        min_confidence: minConfidence
      },
      nodes: filteredNodes.map(n => ({
        id: n.id,
        label: n.data.label,
        type: n.data.type,
        linked_canonical_id: n.data.linkedId || null,
        confidence: n.data.confidence,
        status: n.data.status,
        source_doc: n.data.source
      })),
      edges: filteredEdges.map(e => ({
        id: e.id,
        source: e.source,
        target: e.target,
        relation_type: e.data?.relation_type || e.label,
        confidence: e.data?.confidence,
        status: e.data?.status,
        evidence_sentence: e.data?.evidence,
        source_doc: e.data?.source_doc,
        source_page: e.data?.source_page,
        warning: e.data?.warning || null
      }))
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `KnowFlow_Knowledge_Graph_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: 'calc(100vh - 120px)' }}>
      
      {/* Top Controls Bar */}
      <div className="card" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        
        {/* Left: Search & Type Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '5px 10px',
            gap: '6px',
            width: '200px'
          }}>
            <Search size={14} color="#64748b" />
            <input
              type="text"
              placeholder="Search graph nodes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.8rem' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {['All', 'Organization', 'Product', 'Person', 'Contract'].map(t => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`btn btn-sm ${filterType === t ? 'btn-primary' : 'btn-outline'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Confidence Threshold Slider & Export */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span>Min Confidence:</span>
            <input 
              type="range" 
              min="0.5" 
              max="0.95" 
              step="0.05"
              value={minConfidence} 
              onChange={e => setMinConfidence(parseFloat(e.target.value))}
              style={{ cursor: 'pointer' }}
            />
            <span style={{ fontWeight: 700, color: '#2563eb', minWidth: '35px' }}>
              {Math.round(minConfidence * 100)}%
            </span>
          </div>

          <span className="badge badge-blue">
            {filteredNodes.length} Nodes • {filteredEdges.length} Edges
          </span>

          <button 
            className="btn btn-secondary btn-sm"
            onClick={exportGraphJson}
            title="Export filtered graph data as JSON"
          >
            <Download size={14} />
            <span>Export Graph</span>
          </button>
        </div>
      </div>

      {/* Graph Visual Area with Right Inspector Drawer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: '16px',
        flex: 1,
        minHeight: 0
      }}>
        
        {/* React Flow Container */}
        <div className="card" style={{ overflow: 'hidden', position: 'relative', backgroundColor: '#fcfdfd' }}>
          <ReactFlow
            nodes={filteredNodes}
            edges={filteredEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            onEdgeClick={onEdgeClick}
            fitView
            attributionPosition="bottom-left"
          >
            <Background color="#cbd5e1" gap={20} size={1} />
            <Controls />
            <MiniMap 
              nodeColor={n => n.data.type === 'Organization' ? '#3b82f6' : (n.data.type === 'Product' ? '#10b981' : '#f59e0b')}
              style={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
            />
          </ReactFlow>

          {/* Graph Legend Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 12px',
            border: '1px solid var(--border-light)',
            fontSize: '0.725rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontWeight: 700, color: 'var(--text-muted)' }}>LEGEND</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '2px', backgroundColor: '#3b82f6' }} />
              <span>Supported Relation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '2px', borderTop: '2px dashed #ef4444' }} />
              <span>Unsupported / Guardrail</span>
            </div>
          </div>
        </div>

        {/* Right Inspector Panel */}
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Knowledge Inspector
            </span>
            <span className="badge badge-blue">Interactive</span>
          </div>

          {selectedElement?.type === 'node' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <EntityBadge type={selectedElement.data.type} />
                <ConfidenceBadge confidence={selectedElement.data.confidence} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                  {selectedElement.data.label}
                </h3>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {selectedElement.data.linkedId ? `Canonical Master ID: ${selectedElement.data.linkedId}` : "Unmatched Candidate"}
                </div>
              </div>

              <div className="card" style={{ padding: '12px', backgroundColor: '#f8fafc' }}>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>Source Provenance</div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', marginTop: '2px' }}>
                  {selectedElement.data.source || 'Contract_001.pdf'}
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Click on any relationship edge to inspect the underlying verifiable sentence evidence.
              </div>
            </div>
          )}

          {selectedElement?.type === 'edge' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-blue">RELATIONSHIP</span>
                <ConfidenceBadge confidence={selectedElement.data.confidence} status={selectedElement.data.status} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: selectedElement.data.status === 'Unsupported' ? '#ef4444' : '#2563eb' }}>
                  {selectedElement.label || selectedElement.data.relation_type}
                </h3>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                  Status: <strong>{selectedElement.data.status}</strong>
                </div>
              </div>

              {/* Warning if unsupported */}
              {selectedElement.data.warning && (
                <div style={{
                  padding: '10px 12px',
                  backgroundColor: '#fee2e2',
                  borderRadius: '6px',
                  color: '#991b1b',
                  fontSize: '0.775rem',
                  lineHeight: 1.4,
                  display: 'flex',
                  gap: '6px'
                }}>
                  <AlertTriangle size={15} style={{ flexShrink: 0 }} />
                  <span>{selectedElement.data.warning}</span>
                </div>
              )}

              {/* Verbatim quote */}
              <div style={{
                backgroundColor: '#eff6ff',
                padding: '14px',
                borderRadius: '8px',
                borderLeft: '3px solid #2563eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.725rem', color: '#1d4ed8', fontWeight: 700, marginBottom: '4px' }}>
                  <Quote size={12} />
                  <span>Supporting Sentence</span>
                </div>
                <div style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#1e3a8a' }}>
                  "{selectedElement.data.evidence}"
                </div>
              </div>

              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                Citation: {selectedElement.data.source_doc} (Page {selectedElement.data.source_page || 2})
              </div>
            </div>
          )}

          {!selectedElement && (
            <div style={{ padding: '30px 10px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Click any node or edge in the graph to inspect its evidentiary pedigree.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
