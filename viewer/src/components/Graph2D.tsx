import { useCallback, useMemo, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import type { GraphData, GraphLink, GraphNode } from '../lib/types';
import { EDGE_COLOR, EDGE_DASH, NODE_COLOR, nodeRadius } from '../lib/nodeStyles';

interface Graph2DProps {
  data: GraphData;
  highlight: Set<string>;
  fadeOthers: boolean;
  hiddenTypes: Set<string>;
  selectedId: string | null;
  onNodeClick(node: GraphNode): void;
}

export function Graph2D({
  data,
  highlight,
  fadeOthers,
  hiddenTypes,
  selectedId,
  onNodeClick,
}: Graph2DProps) {
  const fgRef = useRef<any>(undefined);

  const visibleData = useMemo(() => {
    const nodes = data.nodes.filter((n) => !hiddenTypes.has(n.type));
    const ids = new Set(nodes.map((n) => n.id));
    const links = data.links.filter((l) => ids.has(l.source as string) && ids.has(l.target as string));
    return { nodes, links };
  }, [data, hiddenTypes]);

  const nodeCanvas = useCallback(
    (node: GraphNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const radius = nodeRadius(node.degree ?? 0);
      const isHighlighted = highlight.has(node.id);
      const isSelected = node.id === selectedId;
      const opacity = fadeOthers && !isHighlighted ? 0.18 : 1;
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(node.x ?? 0, node.y ?? 0, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = NODE_COLOR[node.type];
      ctx.fill();
      if (isSelected) {
        ctx.lineWidth = 2.5 / globalScale;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      }

      if (globalScale > 1.6 || isHighlighted || isSelected) {
        const label = node.name;
        const fontSize = Math.max(10, 12 / globalScale);
        ctx.font = `${fontSize}px -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#e8e8ea';
        ctx.fillText(label, (node.x ?? 0) + radius + 3, node.y ?? 0);
      }
      ctx.globalAlpha = 1;
    },
    [highlight, fadeOthers, selectedId],
  );

  const linkColor = useCallback(
    (link: GraphLink) => {
      const sourceId = typeof link.source === 'string' ? link.source : (link.source as GraphNode).id;
      const targetId = typeof link.target === 'string' ? link.target : (link.target as GraphNode).id;
      if (fadeOthers && !(highlight.has(sourceId) && highlight.has(targetId))) {
        return 'rgba(120,120,140,0.08)';
      }
      return EDGE_COLOR[link.type] + 'aa';
    },
    [highlight, fadeOthers],
  );

  const linkDash = useCallback((link: GraphLink) => EDGE_DASH[link.type] ?? null, []);

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={visibleData}
      backgroundColor="#0e0f14"
      nodeCanvasObject={nodeCanvas}
      nodePointerAreaPaint={(node, color, ctx) => {
        const radius = nodeRadius(node.degree ?? 0);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x ?? 0, node.y ?? 0, radius + 2, 0, 2 * Math.PI, false);
        ctx.fill();
      }}
      linkColor={linkColor}
      linkLineDash={linkDash}
      linkWidth={(link) => (link.type === 'buildsOn' || link.type === 'mapsTo' ? 1.6 : 0.8)}
      onNodeClick={(n) => onNodeClick(n as GraphNode)}
      cooldownTicks={120}
      d3VelocityDecay={0.32}
    />
  );
}
