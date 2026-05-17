import type { GraphData, GraphNode } from '../lib/types';
import { NODE_COLOR, NODE_TYPE_LABEL_JA } from '../lib/nodeStyles';

interface SidePanelProps {
  node: GraphNode | null;
  data: GraphData;
  onClose(): void;
  onSelect(id: string): void;
}

export function SidePanel({ node, data, onClose, onSelect }: SidePanelProps) {
  if (!node) return null;

  const outgoing = data.links.filter((l) => {
    const sid = typeof l.source === 'string' ? l.source : (l.source as GraphNode).id;
    return sid === node.id;
  });
  const incoming = data.links.filter((l) => {
    const tid = typeof l.target === 'string' ? l.target : (l.target as GraphNode).id;
    return tid === node.id;
  });
  const byId = new Map(data.nodes.map((n) => [n.id, n] as const));

  return (
    <aside className="sidepanel">
      <button className="close" onClick={onClose} aria-label="Close">×</button>
      <div className="type-chip" style={{ background: NODE_COLOR[node.type] }}>
        {NODE_TYPE_LABEL_JA[node.type]} / {node.type}
      </div>
      <h2>{node.name}</h2>
      {node.nameJa && node.nameJa !== node.name && <p className="alt-ja">{node.nameJa}</p>}
      {node.nameEn && node.nameEn !== node.name && node.nameEn !== node.nameJa && (
        <p className="alt-en">{node.nameEn}</p>
      )}
      <dl className="philological">
        {node.sanskritName && <><dt>Sanskrit</dt><dd>{node.sanskritName}</dd></>}
        {node.paliName && <><dt>Pāli</dt><dd>{node.paliName}</dd></>}
        {node.chineseName && <><dt>漢字</dt><dd>{node.chineseName}</dd></>}
      </dl>
      {node.description && <p className="description">{node.description}</p>}

      {node.id.startsWith('https://github.com/') && (
        <p className="essay-link">
          <a href={node.id} target="_blank" rel="noopener">Open essay on GitHub →</a>
        </p>
      )}

      {outgoing.length > 0 && (
        <section>
          <h3>関係を持つ先 / Outgoing ({outgoing.length})</h3>
          <ul className="edges">
            {outgoing.map((l, i) => {
              const tid = typeof l.target === 'string' ? l.target : (l.target as GraphNode).id;
              const target = byId.get(tid);
              if (!target) return null;
              return (
                <li key={i}>
                  <span className="edge-type">{l.type}</span>
                  <button className="edge-target" onClick={() => onSelect(target.id)}>
                    <span className="dot" style={{ background: NODE_COLOR[target.type] }} />
                    {target.name}
                  </button>
                  {l.evidenceQuality && <span className="evidence">{l.evidenceQuality}</span>}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {incoming.length > 0 && (
        <section>
          <h3>関係を持たれる元 / Incoming ({incoming.length})</h3>
          <ul className="edges">
            {incoming.map((l, i) => {
              const sid = typeof l.source === 'string' ? l.source : (l.source as GraphNode).id;
              const source = byId.get(sid);
              if (!source) return null;
              return (
                <li key={i}>
                  <span className="edge-type">{l.type}</span>
                  <button className="edge-target" onClick={() => onSelect(source.id)}>
                    <span className="dot" style={{ background: NODE_COLOR[source.type] }} />
                    {source.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </aside>
  );
}
