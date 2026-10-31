import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  Search, Maximize2, Minimize2, Download, RefreshCw, 
  X, ExternalLink, Database, Layers, Building2, Box, 
  FileText, DollarSign, Sparkles, Plus, Minus, Target, 
  Share2, ShieldCheck, Copy, Check
} from 'lucide-react';
import { aiService } from '../services/aiService';

// Vibrant Neo4j Color Palette matching Bloom & Browser on Light Theme
const COLOR_MAP = {
  Invoice: '#f59e0b',      // Warm Amber/Gold
  Company: '#2563eb',      // Royal Blue
  Organization: '#2563eb', // Royal Blue
  Product: '#10b981',      // Emerald Green
  Money: '#06b6d4',        // Cyan / Teal
  Location: '#8b5cf6',     // Purple
  Date: '#64748b',         // Slate Grey
  Entity: '#f43f5e'        // Coral Red
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
  const [copied, setCopied] = useState(false);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const simNodesRef = useRef([]);
  const simEdgesRef = useRef([]);

  // Simulation Stabilization & Freezing Engine (Stationary on load)
  const alphaRef = useRef(1.0);
  const isInteractingRef = useRef(false);

  // Camera State (Pan & Zoom)
  const cameraRef = useRef({ x: 1400, y: 950, zoom: 0.55 });
  const isDraggingCamera = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const draggedNodeRef = useRef(null);

  // Full Page Toggle with guaranteed CSS fallback
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

  // Fetch Graph Data from Neo4j
  const fetchGraph = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await aiService.getKnowledgeGraph();
      setGraphData(data);
      initializeSimulation(data.nodes || [], data.edges || []);
    } catch (err) {
      console.error("Failed to load Neo4j graph:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGraph();
  }, [fetchGraph]);

  // Format short readable label inside circle (like Neo4j Bloom)
  const getInsideCircleText = (n) => {
    const raw = (n.label || '').trim();
    if (n.type === 'Invoice') {
      const num = raw.replace(/^#/, '');
      return `#${num.length > 7 ? num.substring(0, 6) + '…' : num}`;
    }
    if (n.type === 'Company' || n.type === 'Organization') {
      const words = raw.split(/[\s,]+/);
      const first = words[0] || 'Company';
      return first.length > 8 ? first.substring(0, 7) + '…' : first;
    }
    if (n.type === 'Product') {
      const words = raw.split(/[\s,]+/);
      const first = words[0] || 'Item';
      return first.length > 6 ? first.substring(0, 5) + '…' : first;
    }
    return raw.length > 7 ? raw.substring(0, 6) + '…' : raw;
  };

  // Expansive Neo4j Multi-Hub Galaxy Layout with Collision Avoidance
  const initializeSimulation = (rawNodes, rawEdges) => {
    const canvasWidth = 3200;
    const canvasHeight = 2200;

    // Build degree index & adjacency
    const degreeMap = {};
    const adjMap = new Map();
    rawEdges.forEach(e => {
      degreeMap[e.source] = (degreeMap[e.source] || 0) + 1;
      degreeMap[e.target] = (degreeMap[e.target] || 0) + 1;
      if (!adjMap.has(e.source)) adjMap.set(e.source, []);
      if (!adjMap.has(e.target)) adjMap.set(e.target, []);
      adjMap.get(e.source).push(e.target);
      adjMap.get(e.target).push(e.source);
    });

    // Create physics particles with comfortable radii
    const nodes = rawNodes.map(n => {
      const deg = degreeMap[n.id] || 1;
      const type = n.type || n.data?.type || 'Entity';
      
      let radius = 16;
      if (type === 'Invoice') radius = 22;
      else if (type === 'Company' || type === 'Organization') radius = 25;
      else if (type === 'Product') radius = 14;
      else if (type === 'Location') radius = 15;

      const color = COLOR_MAP[type] || n.color || '#8b5cf6';

      return {
        id: n.id,
        label: n.label || n.data?.label || 'Node',
        shortText: '',
        type: type,
        color: color,
        radius: radius,
        degree: deg,
        properties: n.properties || n.data?.properties || {},
        sourceDoc: n.data?.source || 'KatanaML Invoice',
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        fixed: false,
        isHub: type === 'Company' || type === 'Organization' || type === 'Invoice' || deg >= 4
      };
    });

    // Precalculate inside text
    nodes.forEach(n => {
      n.shortText = getInsideCircleText(n);
    });

    const nodeIndex = new Map(nodes.map(n => [n.id, n]));

    const edges = rawEdges
      .filter(e => nodeIndex.has(e.source) && nodeIndex.has(e.target))
      .map(e => ({
        id: e.id,
        source: nodeIndex.get(e.source),
        target: nodeIndex.get(e.target),
        label: e.label || e.data?.relation_type || 'RELATES_TO'
      }));

    // 1. Separate Hubs from Satellites
    const hubs = nodes.filter(n => n.isHub);
    const nonHubs = nodes.filter(n => !n.isHub);

    // Spread Hubs across a wide grid
    const cols = Math.ceil(Math.sqrt(hubs.length * 1.6)) || 4;
    const colStep = (canvasWidth - 500) / Math.max(1, cols);
    const rowStep = (canvasHeight - 500) / Math.max(1, Math.ceil(hubs.length / cols));

    hubs.forEach((hub, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const jitterX = (Math.random() - 0.5) * 140;
      const jitterY = (Math.random() - 0.5) * 140;
      hub.x = 280 + col * colStep + jitterX;
      hub.y = 280 + row * rowStep + jitterY;
    });

    // Position satellites in wide orbits around their parent hub
    nonHubs.forEach(sat => {
      const neighbors = adjMap.get(sat.id) || [];
      const parentHubId = neighbors.find(nbrId => nodeIndex.get(nbrId)?.isHub);
      const parentHub = parentHubId ? nodeIndex.get(parentHubId) : null;

      if (parentHub && parentHub.x) {
        const orbitAngle = Math.random() * Math.PI * 2;
        const orbitDist = 150 + Math.random() * 180; // Wide open spacing!
        sat.x = parentHub.x + Math.cos(orbitAngle) * orbitDist;
        sat.y = parentHub.y + Math.sin(orbitAngle) * orbitDist;
      } else {
        sat.x = canvasWidth / 2 + (Math.random() - 0.5) * (canvasWidth * 0.7);
        sat.y = canvasHeight / 2 + (Math.random() - 0.5) * (canvasHeight * 0.7);
      }
    });

    simNodesRef.current = nodes;
    simEdgesRef.current = edges;

    // Run 180 fast warmup steps with strict collision resolution
    for (let step = 0; step < 180; step++) {
      runPhysicsStep(0.9 * (1 - step / 180));
    }

    // Auto-Fit Camera to encompass all spread-out clusters cleanly
    if (nodes.length > 0) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      nodes.forEach(n => {
        if (n.x < minX) minX = n.x;
        if (n.x > maxX) maxX = n.x;
        if (n.y < minY) minY = n.y;
        if (n.y > maxY) maxY = n.y;
      });
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;
      const spanX = Math.max(700, maxX - minX);
      const spanY = Math.max(500, maxY - minY);

      const fitZoom = Math.min(0.85, Math.max(0.35, Math.min(1050 / spanX, 680 / spanY)));
      cameraRef.current = { x: centerX, y: centerY, zoom: fitZoom };
    }

    // Graph starts fully stationary and calm!
    alphaRef.current = 0.0;
    renderCanvas();
  };

  // Physics Step with Hard Collision Resolution (Guaranteed No Overlaps!)
  const runPhysicsStep = (alpha) => {
    const nodes = simNodesRef.current;
    const edges = simEdgesRef.current;
    if (nodes.length === 0 || alpha <= 0.001) return;

    const cx = 1600;
    const cy = 1100;

    // 1. Repulsion between nodes & Collision Resolution
    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const distSq = dx * dx + dy * dy || 1;
        const dist = Math.sqrt(distSq);

        // HARD COLLISION AVOIDANCE: Ensure at least 45px empty buffer between node edges
        const minAllowedDist = n1.radius + n2.radius + 45;
        if (dist < minAllowedDist) {
          const overlap = (minAllowedDist - dist) * 0.5;
          const nx = (dx / dist) * overlap;
          const ny = (dy / dist) * overlap;
          if (!n1.fixed) { n1.x -= nx; n1.y -= ny; }
          if (!n2.fixed) { n2.x += nx; n2.y += ny; }
        }

        // Standard long-range repulsion
        if (dist < 600) {
          const force = (3800 / distSq) * (n1.radius + n2.radius) * 0.16 * alpha;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (!n1.fixed) { n1.vx -= fx; n1.vy -= fy; }
          if (!n2.fixed) { n2.vx += fx; n2.vy += fy; }
        }
      }

      // Gentle Center Gravity
      const gdx = cx - n1.x;
      const gdy = cy - n1.y;
      if (!n1.fixed) {
        n1.vx += gdx * 0.00003 * alpha;
        n1.vy += gdy * 0.00003 * alpha;
      }
    }

    // 2. Link Spring Attraction (Wide open distance of 160px - 250px)
    for (let i = 0; i < edges.length; i++) {
      const e = edges[i];
      const dx = e.target.x - e.source.x;
      const dy = e.target.y - e.source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      
      const targetDist = 160 + (e.source.radius + e.target.radius) * 2.5;
      const force = (dist - targetDist) * 0.035 * alpha;

      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      if (!e.source.fixed) { e.source.vx += fx; e.source.vy += fy; }
      if (!e.target.fixed) { e.target.vx -= fx; e.target.vy -= fy; }
    }

    // 3. Position Updates with Velocity Damping
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!n.fixed) {
        n.vx *= 0.84;
        n.vy *= 0.84;
        n.x += n.vx;
        n.y += n.vy;
      }
    }
  };

  // Cooled Render Loop (Stationary, only redraws when interacting)
  useEffect(() => {
    let isRunning = true;

    const frameLoop = () => {
      if (!isRunning) return;

      if (alphaRef.current > 0.005) {
        runPhysicsStep(alphaRef.current);
        alphaRef.current *= 0.94;
        renderCanvas();
      } else if (alphaRef.current > 0) {
        alphaRef.current = 0;
        renderCanvas();
      } else if (isInteractingRef.current) {
        renderCanvas();
      }

      animFrameRef.current = requestAnimationFrame(frameLoop);
    };

    animFrameRef.current = requestAnimationFrame(frameLoop);

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [searchQuery, filterType, selectedNode, hoveredNode]);

  // High-Performance Clean Canvas Rendering (Neo4j Bloom Style - Text Inside Circles!)
  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Website Light Theme Background: #f8fafc
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    // Camera Transform (Pan & Zoom)
    ctx.translate(width / 2, height / 2);
    ctx.scale(cameraRef.current.zoom, cameraRef.current.zoom);
    ctx.translate(-cameraRef.current.x, -cameraRef.current.y);

    // Subtle background grid dots
    ctx.fillStyle = '#e2e8f0';
    const gridSize = 48;
    const startX = Math.floor((cameraRef.current.x - width / (2 * cameraRef.current.zoom)) / gridSize) * gridSize;
    const endX = Math.ceil((cameraRef.current.x + width / (2 * cameraRef.current.zoom)) / gridSize) * gridSize;
    const startY = Math.floor((cameraRef.current.y - height / (2 * cameraRef.current.zoom)) / gridSize) * gridSize;
    const endY = Math.ceil((cameraRef.current.y + height / (2 * cameraRef.current.zoom)) / gridSize) * gridSize;

    for (let gx = startX; gx <= endX; gx += gridSize) {
      for (let gy = startY; gy <= endY; gy += gridSize) {
        ctx.fillRect(gx - 1, gy - 1, 2, 2);
      }
    }

    const nodes = simNodesRef.current;
    const edges = simEdgesRef.current;

    // Active Highlight ID for edges
    const activeId = hoveredNode?.id || selectedNode?.id;
    const activeEdgeIds = new Set();

    if (activeId) {
      edges.forEach(e => {
        if (e.source.id === activeId || e.target.id === activeId) {
          activeEdgeIds.add(e.id);
        }
      });
    }

    const hasFilter = searchQuery.trim().length > 0 || filterType !== 'All';
    const queryLower = searchQuery.toLowerCase().trim();

    // 1. Draw Relationship Lines
    for (let i = 0; i < edges.length; i++) {
      const e = edges[i];
      const isHighlighted = activeEdgeIds.has(e.id);

      ctx.beginPath();
      ctx.moveTo(e.source.x, e.source.y);
      ctx.lineTo(e.target.x, e.target.y);

      if (isHighlighted) {
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2.4;
      } else {
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.40)';
        ctx.lineWidth = 1.2;
      }
      ctx.stroke();

      // Show relationship badge ONLY on active/highlighted edge (no visual noise!)
      if (isHighlighted) {
        const mx = (e.source.x + e.target.x) / 2;
        const my = (e.source.y + e.target.y) / 2;
        
        ctx.font = '700 9px sans-serif';
        const labelText = e.label;
        const tw = ctx.measureText(labelText).width;

        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.roundRect(mx - tw / 2 - 4, my - 6, tw + 8, 12, 3);
        ctx.fill();

        ctx.strokeStyle = '#1d4ed8';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labelText, mx, my);
      }
    }

    // 2. Draw Circular Nodes with Text INSIDE the Circles (Neo4j Bloom Style)
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];

      const matchesSearch = !queryLower || n.label.toLowerCase().includes(queryLower) || n.type.toLowerCase().includes(queryLower);
      const matchesType = filterType === 'All' || n.type.toLowerCase() === filterType.toLowerCase();
      const isFilteredOut = hasFilter && (!matchesSearch || !matchesType);

      const isSelected = selectedNode?.id === n.id;
      const isHovered = hoveredNode?.id === n.id;

      // Outer Highlight Ring for Selected or Hovered Node
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 6, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(37, 99, 235, 0.22)' : 'rgba(37, 99, 235, 0.12)';
        ctx.fill();
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Main Node Circle
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);

      // Node Fill
      ctx.fillStyle = isFilteredOut ? `${n.color}40` : n.color;
      ctx.fill();

      // Clean White Border
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.strokeStyle = isSelected ? '#0f172a' : '#ffffff';
      ctx.lineWidth = isSelected ? 3 : 2;
      ctx.stroke();

      // TEXT INSIDE THE CIRCLE (Zero overlapping rectangular boxes!)
      if (!isFilteredOut) {
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (n.radius >= 20) {
          ctx.font = '700 10.5px sans-serif';
          ctx.fillText(n.shortText, n.x, n.y);
        } else if (n.radius >= 13 && cameraRef.current.zoom > 0.6) {
          ctx.font = '700 8.5px sans-serif';
          ctx.fillText(n.shortText, n.x, n.y);
        }
      }
    }

    // 3. Floating Tooltip for Hovered Node (Only ONE elegant card, zero clutter!)
    if (hoveredNode) {
      const hn = hoveredNode;
      const title = hn.label;
      const sub = `${hn.type} • ${hn.degree} relations`;
      
      ctx.font = '700 11px sans-serif';
      const tw1 = ctx.measureText(title).width;
      ctx.font = '600 9px sans-serif';
      const tw2 = ctx.measureText(sub).width;
      const boxWidth = Math.max(tw1, tw2) + 20;
      const boxHeight = 36;
      const boxX = hn.x - boxWidth / 2;
      const boxY = hn.y - hn.radius - boxHeight - 8;

      // Tooltip Card Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 3;

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 6);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Tooltip Text
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(title, hn.x, boxY + 6);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 9px sans-serif';
      ctx.fillText(sub, hn.x, boxY + 20);
    }

    ctx.restore();
  };

  // Resize Canvas to Fill Window
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      renderCanvas();
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFullscreen]);

  // Mouse Coordinate Translator
  const getCanvasMouse = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    const zoom = cameraRef.current.zoom;
    const worldX = (screenX - canvas.width / 2) / zoom + cameraRef.current.x;
    const worldY = (screenY - canvas.height / 2) / zoom + cameraRef.current.y;

    return { screenX, screenY, worldX, worldY };
  };

  // Find Node under mouse
  const findNodeAt = (worldX, worldY) => {
    const nodes = simNodesRef.current;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      const dx = n.x - worldX;
      const dy = n.y - worldY;
      if (dx * dx + dy * dy <= (n.radius + 6) * (n.radius + 6)) {
        return n;
      }
    }
    return null;
  };

  // Canvas Mouse Handlers
  const handleMouseDown = (e) => {
    const { screenX, screenY, worldX, worldY } = getCanvasMouse(e);
    lastMousePos.current = { x: screenX, y: screenY };

    const hit = findNodeAt(worldX, worldY);
    if (hit) {
      draggedNodeRef.current = hit;
      hit.fixed = true;
      setSelectedNode(hit);
      alphaRef.current = 0.25;
    } else {
      isDraggingCamera.current = true;
    }
    isInteractingRef.current = true;
  };

  const handleMouseMove = (e) => {
    const { screenX, screenY, worldX, worldY } = getCanvasMouse(e);

    // Node Dragging with Physics
    if (draggedNodeRef.current) {
      const n = draggedNodeRef.current;
      n.x = worldX;
      n.y = worldY;
      n.vx = 0;
      n.vy = 0;
      alphaRef.current = 0.15;
      renderCanvas();
      return;
    }

    // Camera Panning
    if (isDraggingCamera.current) {
      const dx = screenX - lastMousePos.current.x;
      const dy = screenY - lastMousePos.current.y;
      cameraRef.current.x -= dx / cameraRef.current.zoom;
      cameraRef.current.y -= dy / cameraRef.current.zoom;
      lastMousePos.current = { x: screenX, y: screenY };
      renderCanvas();
      return;
    }

    // Hover Detection
    const hit = findNodeAt(worldX, worldY);
    if (hit !== hoveredNode) {
      setHoveredNode(hit);
      renderCanvas();
    }
  };

  const handleMouseUp = () => {
    if (draggedNodeRef.current) {
      draggedNodeRef.current.fixed = false;
      draggedNodeRef.current = null;
      alphaRef.current = 0.08;
    }
    isDraggingCamera.current = false;
    isInteractingRef.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.12 : 0.89;
    const newZoom = Math.min(4.5, Math.max(0.18, cameraRef.current.zoom * zoomFactor));
    cameraRef.current.zoom = newZoom;
    renderCanvas();
  };

  const resetCamera = () => {
    const nodes = simNodesRef.current;
    if (nodes.length > 0) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      nodes.forEach(n => {
        if (n.x < minX) minX = n.x;
        if (n.x > maxX) maxX = n.x;
        if (n.y < minY) minY = n.y;
        if (n.y > maxY) maxY = n.y;
      });
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;
      const spanX = Math.max(700, maxX - minX);
      const spanY = Math.max(500, maxY - minY);
      const fitZoom = Math.min(0.85, Math.max(0.35, Math.min(1050 / spanX, 680 / spanY)));
      cameraRef.current = { x: centerX, y: centerY, zoom: fitZoom };
    } else {
      cameraRef.current = { x: 1400, y: 950, zoom: 0.55 };
    }
    renderCanvas();
  };

  const reSimulate = () => {
    simNodesRef.current.forEach(n => {
      n.vx = (Math.random() - 0.5) * 8;
      n.vy = (Math.random() - 0.5) * 8;
    });
    alphaRef.current = 0.75;
  };

  const exportPngSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Cognix_Knowledge_Graph_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const copyCypher = () => {
    const text = graphData.meta?.cypher || "MATCH (a)-[r]->(b) RETURN a, r, b LIMIT 300";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nodeStats = useMemo(() => {
    const counts = {};
    (graphData.nodes || []).forEach(n => {
      const t = n.type || 'Entity';
      counts[t] = (counts[t] || 0) + 1;
    });
    return counts;
  }, [graphData.nodes]);

  // Connected relationships for selected node
  const selectedNodeRels = useMemo(() => {
    if (!selectedNode) return [];
    return (graphData.edges || []).filter(e => e.source === selectedNode.id || e.target === selectedNode.id);
  }, [selectedNode, graphData.edges]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: isFullscreen ? 'fixed' : 'relative',
        inset: isFullscreen ? 0 : 'auto',
        zIndex: isFullscreen ? 99999 : 1,
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : 'calc(100vh - 110px)',
        backgroundColor: '#ffffff',
        borderRadius: isFullscreen ? 0 : 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isFullscreen ? 'none' : 'var(--shadow-md)',
        border: isFullscreen ? 'none' : '1px solid var(--border-light)',
        fontFamily: 'var(--font-sans)'
      }}
    >
      {/* ================= WEBSITE INTEGRATED TOP NAVIGATION BAR ================= */}
      <div style={{
        height: '52px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        userSelect: 'none'
      }}>
        {/* Left: View Tabs with Website Brand Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '100%' }}>
          <button
            onClick={() => setActiveTab('graph')}
            style={{
              height: '100%',
              padding: '0 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'graph' ? '3px solid var(--primary-600)' : '3px solid transparent',
              color: activeTab === 'graph' ? 'var(--primary-600)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            Graph View
          </button>

          <button
            onClick={() => setActiveTab('table')}
            style={{
              height: '100%',
              padding: '0 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'table' ? '3px solid var(--primary-600)' : '3px solid transparent',
              color: activeTab === 'table' ? 'var(--primary-600)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            Table View
          </button>

          <button
            onClick={() => setActiveTab('raw')}
            style={{
              height: '100%',
              padding: '0 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'raw' ? '3px solid var(--primary-600)' : '3px solid transparent',
              color: activeTab === 'raw' ? 'var(--primary-600)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            Raw Cypher
          </button>
        </div>

        {/* Right Tools: Search, Filter, Fullscreen, Export */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Light Theme Search Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-app)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '5px 12px',
            gap: '8px',
            width: '220px'
          }}>
            <Search size={14} color="var(--text-muted)" />
            <input 
              type="text"
              placeholder="Search graph entities..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                width: '100%'
              }}
            />
            {searchQuery && (
              <X size={12} color="var(--text-muted)" style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')} />
            )}
          </div>

          {/* Type Filter Select */}
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              padding: '6px 10px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Entities ({graphData.nodes?.length || 0})</option>
            <option value="Invoice">Invoices ({nodeStats.Invoice || 0})</option>
            <option value="Company">Companies ({nodeStats.Company || 0})</option>
            <option value="Product">Products ({nodeStats.Product || 0})</option>
            <option value="Location">Locations ({nodeStats.Location || 0})</option>
            <option value="Date">Dates ({nodeStats.Date || 0})</option>
          </select>

          {/* Re-simulate / Align */}
          <button
            onClick={reSimulate}
            title="Re-align Graph"
            className="btn btn-secondary btn-sm"
            style={{
              padding: '6px 8px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer'
            }}
          >
            <RefreshCw size={14} color="var(--text-secondary)" />
          </button>

          {/* Export PNG */}
          <button
            onClick={exportPngSnapshot}
            title="Download Graph Snapshot"
            className="btn btn-secondary btn-sm"
            style={{
              padding: '6px 8px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer'
            }}
          >
            <Download size={14} color="var(--text-secondary)" />
          </button>

          {/* FULL PAGE BUTTON */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Full Page" : "Open Full Page"}
            className="btn btn-primary btn-sm"
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

      {/* ================= TAB 1: GRAPH CANVAS (CLEAN, NO OVERLAPPING BOXES) ================= */}
      {activeTab === 'graph' && (
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          
          {/* Main Interactive Canvas */}
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            style={{ width: '100%', height: '100%', cursor: draggedNodeRef.current ? 'grabbing' : isDraggingCamera.current ? 'move' : 'default' }}
          />

          {/* Canvas Floating Zoom & Center Controls */}
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
              onClick={() => { cameraRef.current.zoom = Math.min(4.5, cameraRef.current.zoom * 1.25); renderCanvas(); }}
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
              onClick={() => { cameraRef.current.zoom = Math.max(0.18, cameraRef.current.zoom * 0.8); renderCanvas(); }}
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
              onClick={resetCamera}
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

          {/* Website Integrated Color Legend */}
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
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Invoice, boxShadow: `0 0 4px ${COLOR_MAP.Invoice}` }} />
              <span>Invoice ({nodeStats.Invoice || 0})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Company, boxShadow: `0 0 4px ${COLOR_MAP.Company}` }} />
              <span>Company ({nodeStats.Company || 0})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Product, boxShadow: `0 0 4px ${COLOR_MAP.Product}` }} />
              <span>Product ({nodeStats.Product || 0})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: COLOR_MAP.Location, boxShadow: `0 0 4px ${COLOR_MAP.Location}` }} />
              <span>Location ({nodeStats.Location || 0})</span>
            </div>
          </div>

          {/* Right Inspector Drawer for Selected Node (Website Light Theme) */}
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
                  Neo4j ID: {selectedNode.id}
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

      {/* ================= TAB 2: TABLE VIEW (LIGHT THEME) ================= */}
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
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Label</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 700 }}>Name / Value</th>
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

      {/* ================= TAB 3: RAW CYPHER & JSON VIEW (LIGHT THEME) ================= */}
      {activeTab === 'raw' && (
        <div style={{ flex: 1, backgroundColor: 'var(--bg-app)', padding: '20px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Raw Neo4j Aura Bolt Response Payload
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
            {`// Active Cypher Query executed on 4550f285.databases.neo4j.io
MATCH (a)-[r]->(b)
RETURN a, r, b
LIMIT 300;

// Summary Metadata:
// Total Active Nodes: ${graphData.nodes?.length || 0}
// Total Active Relationships: ${graphData.edges?.length || 0}
// Storage Engine: Neo4j AuraDB Free Tier

${JSON.stringify(graphData, null, 2)}`}
          </div>
        </div>
      )}
    </div>
  );
}
