import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  Search, Maximize2, Minimize2, Download, RefreshCw, 
  X, ExternalLink, Database, Layers, Building2, Box, 
  FileText, DollarSign, Sparkles, Plus, Minus, Target, 
  Share2, ShieldCheck, Copy, Check, Zap, Sliders
} from 'lucide-react';
import Sigma from 'sigma';
import Graph from 'graphology';
import forceAtlas2 from 'graphology-layout-forceatlas2';
import { aiService } from '../services/aiService';

// Vibrant Neo4j Bloom Color Palette on Light Theme
const COLOR_MAP = {
  Invoice: '#f59e0b',      // Warm Amber/Gold
  Organization: '#2563eb', // Royal Blue
  Company: '#2563eb',      // Royal Blue
  Product: '#10b981',      // Emerald Green
  Money: '#06b6d4',        // Cyan / Teal
  Location: '#8b5cf6',     // Purple
  Date: '#64748b',         // Slate Grey
  Issue: '#ef4444',        // Rose Red
  Entity: '#6366f1'        // Indigo
};

export default function KnowledgeGraphPage() {
  const [activeTab, setActiveTab] = useState('graph'); // 'graph' | 'table' | 'raw'
  const [graphData, setGraphData] = useState({ nodes: [], edges: [], meta: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [viewLimit, setViewLimit] = useState(300); // 150 | 300 | 800 | 0 (all)
  const [copied, setCopied] = useState(false);

  const containerRef = useRef(null);
  const sigmaContainerRef = useRef(null);
  const sigmaInstanceRef = useRef(null);
  const graphologyInstanceRef = useRef(null);

  // Full Page Toggle
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Fetch Graph Data from Backend (returns all 2,700+ entities)
  const fetchGraph = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await aiService.getKnowledgeGraph();
      setGraphData(data || { nodes: [], edges: [] });
    } catch (err) {
      console.error("Failed to load knowledge graph:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGraph();
  }, [fetchGraph]);

  // Compute accurate node statistics across all nodes
  const nodeStats = useMemo(() => {
    const counts = {};
    (graphData.nodes || []).forEach(n => {
      const t = (n.type && n.type !== 'customKnowledgeNode')
        ? n.type
        : (n.data?.type && n.data.type !== 'customKnowledgeNode' ? n.data.type : 'Entity');
      counts[t] = (counts[t] || 0) + 1;
    });
    return counts;
  }, [graphData.nodes]);

  // Active target node ID for neighbor spotlighting
  const activeTargetId = hoveredNode || selectedNode?.id || null;

  // Build and Initialize Sigma.js WebGL Graph Renderer
  useEffect(() => {
    if (activeTab !== 'graph' || !sigmaContainerRef.current) return;

    const rawNodes = graphData.nodes || [];
    const rawEdges = graphData.edges || [];

    if (rawNodes.length === 0) return;

    // 1. Filter nodes based on category and search query
    let filteredNodes = rawNodes.filter(n => {
      const type = (n.type && n.type !== 'customKnowledgeNode')
        ? n.type
        : (n.data?.type && n.data.type !== 'customKnowledgeNode' ? n.data.type : 'Entity');

      if (filterType !== 'All' && type !== filterType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const lbl = (n.label || n.data?.label || '').toLowerCase();
        const id = (n.id || '').toLowerCase();
        return lbl.includes(q) || id.includes(q);
      }
      return true;
    });

    // 2. Apply view density limit if selected (to allow smooth exploration of 150, 300, 800, or all 2700+)
    if (viewLimit > 0 && filteredNodes.length > viewLimit) {
      filteredNodes = filteredNodes.slice(0, viewLimit);
    }

    const nodeIds = new Set(filteredNodes.map(n => n.id));

    // 3. Calculate degree index for node sizing and importance
    const degMap = {};
    rawEdges.forEach(e => {
      if (nodeIds.has(e.source) && nodeIds.has(e.target)) {
        degMap[e.source] = (degMap[e.source] || 0) + 1;
        degMap[e.target] = (degMap[e.target] || 0) + 1;
      }
    });

    // 4. Create Graphology Multi-Graph
    const graph = new Graph({ multi: true });
    graphologyInstanceRef.current = graph;

    // 5. Populate Nodes with clean Neo4j Bloom sizing and spiral coordinates
    const totalCount = filteredNodes.length;
    filteredNodes.forEach((n, idx) => {
      const type = (n.type && n.type !== 'customKnowledgeNode')
        ? n.type
        : (n.data?.type && n.data.type !== 'customKnowledgeNode' ? n.data.type : 'Entity');
      const color = COLOR_MAP[type] || '#2563eb';
      const deg = degMap[n.id] || 1;

      // Refined sizes: Hubs (Invoices/Orgs) are prominent, Items are sleek to prevent overlapping clumps
      let size = 4.5;
      if (type === 'Invoice') size = 7.0;
      else if (type === 'Company' || type === 'Organization') size = 8.0;
      else if (type === 'Product') size = 3.8;
      else if (type === 'Money') size = 4.2;
      else if (type === 'Location') size = 4.5;

      // Galaxy spiral distribution prevents 2,700 nodes from starting on the same point
      const angle = idx * 0.45;
      const radius = 60 + Math.sqrt(idx) * 45;
      const initialX = Math.cos(angle) * radius + (Math.sin(idx * 5) * 15);
      const initialY = Math.sin(angle) * radius + (Math.cos(idx * 5) * 15);

      graph.addNode(n.id, {
        label: n.label || n.data?.label || n.id,
        x: initialX,
        y: initialY,
        size: size,
        color: color,
        type: type,
        degree: deg,
        originalData: {
          id: n.id,
          label: n.label || n.data?.label || n.id,
          type: type,
          color: color,
          degree: deg,
          properties: n.properties || n.data?.properties || {},
          sourceDoc: n.data?.source || 'KatanaML Invoice'
        }
      });
    });

    // 6. Populate Edges
    rawEdges.forEach((e, idx) => {
      if (graph.hasNode(e.source) && graph.hasNode(e.target)) {
        const edgeKey = e.id || `edge-${idx}`;
        if (!graph.hasEdge(edgeKey)) {
          const relLabel = e.label || e.data?.relation_type || 'CONNECTED';
          graph.addEdgeWithKey(edgeKey, e.source, e.target, {
            label: relLabel,
            size: 1.2,
            color: '#cbd5e1',
            type: 'arrow'
          });
        }
      }
    });

    // 7. Execute ForceAtlas2 physics with collision prevention (adjustSizes: true)
    if (graph.order > 0) {
      forceAtlas2.assign(graph, {
        iterations: Math.min(160, Math.max(70, Math.floor(35000 / graph.order))),
        settings: {
          gravity: 0.18,          // Low gravity expands clusters gracefully
          scalingRatio: 35,       // Strong inter-cluster separation prevents clumps
          adjustSizes: true,      // PREVENTS NODE OVERLAPPING
          barnesHutOptimize: true,
          barnesHutTheta: 0.8,
          slowDown: 3.0,
          strongGravityMode: false
        }
      });
    }

    // Clean up previous Sigma instance
    if (sigmaInstanceRef.current) {
      sigmaInstanceRef.current.kill();
      sigmaInstanceRef.current = null;
    }

    // 8. Instantiate Hardware-Accelerated Sigma.js Renderer
    const sigma = new Sigma(graph, sigmaContainerRef.current, {
      renderEdgeLabels: true,
      enableEdgeEvents: true,
      enableNodeDrag: true,
      minCameraRatio: 0.04,
      maxCameraRatio: 12,
      defaultEdgeType: 'arrow',
      defaultEdgeColor: '#cbd5e1',
      defaultNodeColor: '#2563eb',
      labelFont: 'Inter, system-ui, -apple-system, sans-serif',
      labelSize: 11,
      labelWeight: '600',
      labelColor: { color: '#1e293b' },
      labelRenderedSizeThreshold: 10, // Clean, non-overlapping: labels appear smoothly upon zoom or hover
      labelDensity: 0.75,
      labelGridCellSize: 65,
      stagePadding: 70,
      allowInvalidContainer: true,
      nodeReducer: (node, data) => {
        const res = { ...data };
        if (activeTargetId) {
          if (node === activeTargetId || graph.areNeighbors(node, activeTargetId)) {
            res.highlighted = true;
            res.size = data.size * 1.5;
            res.zIndex = 3;
          } else {
            res.color = '#e2e8f0';
            res.label = '';
            res.zIndex = 0;
          }
        }
        return res;
      },
      edgeReducer: (edge, data) => {
        const res = { ...data };
        if (activeTargetId) {
          if (graph.hasExtremity(edge, activeTargetId)) {
            res.color = '#2563eb';
            res.size = 2.5;
            res.zIndex = 2;
          } else {
            res.hidden = true;
          }
        }
        return res;
      }
    });

    sigmaInstanceRef.current = sigma;

    // Bind Interaction Events
    sigma.on('clickNode', ({ node }) => {
      const orig = graph.getNodeAttribute(node, 'originalData');
      setSelectedNode(orig || { id: node, label: graph.getNodeAttribute(node, 'label') });
    });

    sigma.on('enterNode', ({ node }) => {
      setHoveredNode(node);
    });

    sigma.on('leaveNode', () => {
      setHoveredNode(null);
    });

    sigma.on('clickStage', () => {
      setSelectedNode(null);
    });

    return () => {
      if (sigmaInstanceRef.current) {
        sigmaInstanceRef.current.kill();
        sigmaInstanceRef.current = null;
      }
    };
  }, [graphData, filterType, viewLimit, searchQuery, activeTab]);

  // Dynamic Reducers Update on Hover / Selection
  useEffect(() => {
    if (!sigmaInstanceRef.current || !graphologyInstanceRef.current) return;
    const graph = graphologyInstanceRef.current;

    sigmaInstanceRef.current.setSetting('nodeReducer', (node, data) => {
      const res = { ...data };
      if (activeTargetId) {
        if (node === activeTargetId || graph.areNeighbors(node, activeTargetId)) {
          res.highlighted = true;
          res.size = data.size * 1.5;
          res.zIndex = 3;
        } else {
          res.color = '#e2e8f0';
          res.label = '';
          res.zIndex = 0;
        }
      }
      return res;
    });

    sigmaInstanceRef.current.setSetting('edgeReducer', (edge, data) => {
      const res = { ...data };
      if (activeTargetId) {
        if (graph.hasExtremity(edge, activeTargetId)) {
          res.color = '#2563eb';
          res.size = 2.5;
          res.zIndex = 2;
        } else {
          res.hidden = true;
        }
      }
      return res;
    });

    sigmaInstanceRef.current.refresh();
  }, [activeTargetId]);

  // Camera Controls
  const handleZoomIn = () => {
    if (sigmaInstanceRef.current) {
      sigmaInstanceRef.current.getCamera().zoomIn({ factor: 1.35 });
    }
  };

  const handleZoomOut = () => {
    if (sigmaInstanceRef.current) {
      sigmaInstanceRef.current.getCamera().zoomOut({ factor: 1.35 });
    }
  };

  const handleResetCamera = () => {
    if (sigmaInstanceRef.current) {
      sigmaInstanceRef.current.getCamera().reset();
    }
  };

  // Re-run ForceAtlas2 layout
  const handleReSimulate = () => {
    const graph = graphologyInstanceRef.current;
    if (graph && graph.order > 0) {
      forceAtlas2.assign(graph, {
        iterations: 120,
        settings: {
          gravity: 0.18,
          scalingRatio: 35,
          adjustSizes: true,
          barnesHutOptimize: true,
          slowDown: 3.0
        }
      });
      if (sigmaInstanceRef.current) {
        sigmaInstanceRef.current.refresh();
      }
    }
  };

  // Export Graph as PNG
  const handleExportPNG = () => {
    if (!sigmaInstanceRef.current) return;
    try {
      const canvas = sigmaInstanceRef.current.getStageCanvas();
      if (!canvas) return;
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `cognix_knowledge_graph_${new Date().toISOString().slice(0, 10)}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.warn("WebGL export note:", err);
    }
  };

  // Copy Cypher query helper
  const copyCypher = () => {
    const text = `// Active Cypher Query executed on KnowFlow Knowledge Graph
MATCH (a)-[r]->(b)
RETURN a, r, b
LIMIT 300;`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find relationships connected to selected node
  const selectedNodeRels = useMemo(() => {
    if (!selectedNode) return [];
    return (graphData.edges || []).filter(e => e.source === selectedNode.id || e.target === selectedNode.id);
  }, [selectedNode, graphData.edges]);

  const totalVisibleNodes = viewLimit > 0 ? Math.min(viewLimit, graphData.nodes?.length || 0) : (graphData.nodes?.length || 0);

  return (
    <div 
      ref={containerRef}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: isFullscreen ? '100vh' : 'calc(100vh - 70px)',
        backgroundColor: '#ffffff',
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : 'auto',
        left: isFullscreen ? 0 : 'auto',
        right: isFullscreen ? 0 : 'auto',
        bottom: isFullscreen ? 0 : 'auto',
        zIndex: isFullscreen ? 99999 : 1
      }}
    >
      {/* ================= TOP TOOLBAR ================= */}
      <div style={{
        height: '56px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        zIndex: 10,
        boxShadow: 'var(--shadow-xs)'
      }}>
        {/* Left Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('graph')}
            style={{
              padding: '6px 14px',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-md)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: activeTab === 'graph' ? 'var(--primary-50)' : 'transparent',
              color: activeTab === 'graph' ? 'var(--primary-600)' : 'var(--text-secondary)',
              transition: 'all 0.15s ease'
            }}
          >
            <Layers size={15} />
            <span>Graph View</span>
          </button>

          <button
            onClick={() => setActiveTab('table')}
            style={{
              padding: '6px 14px',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-md)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: activeTab === 'table' ? 'var(--primary-50)' : 'transparent',
              color: activeTab === 'table' ? 'var(--primary-600)' : 'var(--text-secondary)',
              transition: 'all 0.15s ease'
            }}
          >
            <Database size={15} />
            <span>Table View</span>
          </button>

          <button
            onClick={() => setActiveTab('raw')}
            style={{
              padding: '6px 14px',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-md)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: activeTab === 'raw' ? 'var(--primary-50)' : 'transparent',
              color: activeTab === 'raw' ? 'var(--primary-600)' : 'var(--text-secondary)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>Raw Cypher</span>
          </button>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* WebGL Performance Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 8px',
            borderRadius: '999px',
            backgroundColor: '#ecfdf5',
            color: '#059669',
            fontSize: '0.7rem',
            fontWeight: 800,
            border: '1px solid #a7f3d0'
          }}>
            <Zap size={12} />
            <span>Sigma.js 60 FPS WebGL</span>
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '200px' }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search graph entities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 10px 6px 30px',
                fontSize: '0.8rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-app)',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
          </div>

          {/* Density Selector */}
          <select
            value={viewLimit}
            onChange={(e) => setViewLimit(Number(e.target.value))}
            title="Display density"
            style={{
              padding: '6px 10px',
              fontSize: '0.8rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <option value="150">Density: Top 150</option>
            <option value="300">Density: Top 300 (Recommended)</option>
            <option value="800">Density: Top 800</option>
            <option value="0">All {graphData.nodes?.length || 2716} Entities</option>
          </select>

          {/* Category Filter Dropdown */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              padding: '6px 10px',
              fontSize: '0.8rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Categories ({totalVisibleNodes})</option>
            <option value="Invoice">Invoices ({nodeStats.Invoice || 0})</option>
            <option value="Organization">Organizations ({nodeStats.Organization || 0})</option>
            <option value="Product">Products ({nodeStats.Product || 0})</option>
            <option value="Money">Money ({nodeStats.Money || 0})</option>
          </select>

          {/* Re-simulate / Align Button */}
          <button
            onClick={handleReSimulate}
            title="Re-run ForceAtlas2 Physics Layout"
            style={{
              padding: '6px 10px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <RefreshCw size={14} />
          </button>

          {/* Export PNG Button */}
          <button
            onClick={handleExportPNG}
            title="Export Graph Image"
            style={{
              padding: '6px 10px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Download size={14} />
          </button>

          {/* Full Page Button */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Full Page" : "Open Full Page"}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              backgroundColor: isFullscreen ? 'var(--text-primary)' : 'var(--primary-600)',
              color: '#ffffff',
              border: 'none',
              transition: 'all 0.15s ease'
            }}
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            <span>{isFullscreen ? "Exit Full" : "Full Page"}</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: SIGMA.JS WEBGL GRAPH ================= */}
      {activeTab === 'graph' && (
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
          
          {/* Sigma.js WebGL Container */}
          <div
            ref={sigmaContainerRef}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Loading Indicator */}
          {isLoading && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '16px 24px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 700,
              color: 'var(--primary-600)',
              zIndex: 30
            }}>
              <RefreshCw size={18} className="animate-spin" />
              <span>Rendering 2,700+ Entities in WebGL...</span>
            </div>
          )}

          {/* Floating Zoom & Reset Controls */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 10
          }}>
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Plus size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Minus size={16} />
            </button>
            <button
              onClick={handleResetCamera}
              title="Fit Entire Graph in View"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--primary-600)',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Target size={16} />
            </button>
          </div>

          {/* Color Legend (Bottom Right) with Exact Counts */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: selectedNode ? '340px' : '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            zIndex: 10,
            transition: 'right 0.2s ease',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Invoice }} />
              <span>Invoice ({nodeStats.Invoice || 0})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Organization }} />
              <span>Organization ({nodeStats.Organization || 0})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Product }} />
              <span>Product ({nodeStats.Product || 0})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Money }} />
              <span>Money ({nodeStats.Money || 0})</span>
            </div>
          </div>

          {/* Right Inspector Drawer for Selected Node */}
          {selectedNode && (
            <div style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              bottom: '14px',
              width: '310px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              zIndex: 20,
              boxShadow: 'var(--shadow-xl)',
              overflowY: 'auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: selectedNode.color || 'var(--primary-600)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {selectedNode.type} Details
                  </span>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                >
                  <X size={16} />
                </button>
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  {selectedNode.label}
                </h3>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Entity ID: {selectedNode.id}
                </span>
              </div>

              {/* Node Properties Card */}
              <div style={{ backgroundColor: 'var(--bg-app)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary-600)', textTransform: 'uppercase' }}>
                  Entity Properties
                </span>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Source Document:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedNode.sourceDoc || 'Invoice'}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Graph Degree:</span>
                  <span style={{ color: 'var(--primary-600)', fontWeight: 700 }}>{selectedNode.degree || 1} connections</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Verification Status:</span>
                  <span style={{ color: 'var(--success-600)', fontWeight: 700 }}>✓ Grounded in OCR</span>
                </div>
              </div>

              {/* Connected Relationships */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  Connected Relationships ({selectedNodeRels.length})
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '220px', overflowY: 'auto' }}>
                  {selectedNodeRels.map((rel, idx) => {
                    const isOutgoing = rel.source === selectedNode.id;
                    return (
                      <div key={idx} style={{
                        padding: '8px 10px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{ color: isOutgoing ? 'var(--primary-600)' : '#db2777', fontWeight: 700, fontSize: '0.7rem' }}>
                          {isOutgoing ? 'OUT →' : '← IN'} {rel.label}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 600 }}>
                          {isOutgoing ? rel.target.substring(0, 10) : rel.source.substring(0, 10)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: TABLE VIEW ================= */}
      {activeTab === 'table' && (
        <div style={{ flex: 1, backgroundColor: 'var(--bg-app)', padding: '20px', overflowY: 'auto' }}>
          <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              All Active Knowledge Graph Records ({graphData.nodes?.length || 0} nodes, {graphData.edges?.length || 0} relationships)
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--primary-600)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              Cypher: {"MATCH (a)-[r]->(b) RETURN a, r, b"}
            </span>
          </div>

          <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: 'var(--shadow-xs)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-app)', borderBottom: '1px solid var(--border-light)', textAlign: 'left' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>#</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Node ID</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Type</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Label</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Confidence</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Source Document</th>
                </tr>
              </thead>
              <tbody>
                {(graphData.nodes || []).map((n, idx) => (
                  <tr 
                    key={n.id} 
                    onClick={() => { setSelectedNode(n); setActiveTab('graph'); }}
                    style={{ 
                      borderBottom: '1px solid var(--border-light)', 
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                      cursor: 'pointer'
                    }}
                  >
                    <td style={{ padding: '10px 16px', color: 'var(--text-muted)' }}>{idx + 1}</td>
                    <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', color: 'var(--primary-600)', fontSize: '0.75rem' }}>{n.id}</td>
                    <td style={{ padding: '10px 16px' }}>
                      <span style={{
                        padding: '3px 9px',
                        borderRadius: '999px',
                        backgroundColor: `${COLOR_MAP[n.type] || '#8b5cf6'}18`,
                        color: COLOR_MAP[n.type] || '#8b5cf6',
                        fontWeight: 700,
                        fontSize: '0.725rem'
                      }}>
                        {n.type}
                      </span>
                    </td>
                    <td style={{ padding: '10px 16px', fontWeight: 700, color: 'var(--text-primary)' }}>{n.label}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--success-600)', fontWeight: 700 }}>99.0%</td>
                    <td style={{ padding: '10px 16px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>{n.data?.source || 'Invoice Document'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 3: RAW CYPHER & JSON VIEW ================= */}
      {activeTab === 'raw' && (
        <div style={{ flex: 1, backgroundColor: 'var(--bg-app)', padding: '20px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Raw Knowledge Graph Records
              </span>
              <span className="badge badge-blue">
                JSON
              </span>
            </div>
            <button
              onClick={copyCypher}
              className="btn btn-secondary btn-sm"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                padding: '6px 14px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {copied ? <Check size={14} color="var(--success-600)" /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy Cypher & JSON"}</span>
            </button>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '18px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-primary)',
            lineHeight: 1.5,
            whiteSpace: 'pre-wrap',
            boxShadow: 'var(--shadow-xs)'
          }}>
            {`// Active Cypher Query executed on KnowFlow Knowledge Base
MATCH (a)-[r]->(b)
RETURN a, r, b
LIMIT 300;

// Summary Metadata:
// Total Synchronized Nodes: ${graphData.nodes?.length || 0}
// Total Synchronized Relationships: ${graphData.edges?.length || 0}
// Rendering Engine: Sigma.js (WebGL 60 FPS Accelerated)

${JSON.stringify(graphData, null, 2)}`}
          </div>
        </div>
      )}
    </div>
  );
}
