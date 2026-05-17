import { useMemo, useRef } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import type { GraphData, GraphLink, GraphNode } from '../lib/types';
import { EDGE_COLOR, NODE_COLOR, nodeRadius } from '../lib/nodeStyles';

interface Graph3DProps {
  data: GraphData;
  highlight: Set<string>;
  fadeOthers: boolean;
  hiddenTypes: Set<string>;
  selectedId: string | null;
  onNodeClick(node: GraphNode): void;
}

export function Graph3D({
  data,
  highlight,
  fadeOthers,
  hiddenTypes,
  selectedId: _selectedId,
  onNodeClick,
}: Graph3DProps) {
  const fgRef = useRef<any>(undefined);

  const visibleData = useMemo(() => {
    const nodes = data.nodes.filter((n) => !hiddenTypes.has(n.type));
    const ids = new Set(nodes.map((n) => n.id));
    const links = data.links.filter((l) => ids.has(l.source as string) && ids.has(l.target as string));
    return { nodes, links };
  }, [data, hiddenTypes]);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={visibleData}
      backgroundColor="#0a0b10"
      nodeLabel={(n) => {
        const node = n as GraphNode;
        const ja = node.nameJa ? `<br/><span style="color:#aaa">${node.nameJa}</span>` : '';
        const skt = node.sanskritName ? `<br/><span style="color:#999;font-size:11px">${node.sanskritName}</span>` : '';
        return `<div style="padding:6px 10px;background:#1a1d28;border-radius:4px;color:#e8e8ea;font-family:-apple-system,sans-serif;font-size:13px">${node.name}${ja}${skt}</div>`;
      }}
      nodeColor={(n) => {
        const node = n as GraphNode;
        const isHighlighted = highlight.has(node.id);
        if (fadeOthers && !isHighlighted) return '#33333a';
        return NODE_COLOR[node.type];
      }}
      nodeVal={(n) => {
        const node = n as GraphNode;
        const r = nodeRadius(node.degree ?? 0);
        return r * r * 0.15;
      }}
      nodeOpacity={0.9}
      linkColor={(l) => {
        const link = l as GraphLink;
        const sourceId = typeof link.source === 'string' ? link.source : (link.source as GraphNode).id;
        const targetId = typeof link.target === 'string' ? link.target : (link.target as GraphNode).id;
        if (fadeOthers && !(highlight.has(sourceId) && highlight.has(targetId))) {
          return 'rgba(80,80,100,0.06)';
        }
        return EDGE_COLOR[link.type] + 'cc';
      }}
      linkWidth={(l) => {
        const link = l as GraphLink;
        return link.type === 'buildsOn' || link.type === 'mapsTo' ? 0.8 : 0.3;
      }}
      linkOpacity={0.5}
      onNodeClick={(n) => onNodeClick(n as GraphNode)}
      enableNodeDrag={false}
      controlType="orbit"
    />
  );
}
