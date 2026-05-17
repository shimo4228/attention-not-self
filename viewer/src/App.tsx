import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import type { GraphData, GraphNode, NodeType } from './lib/types';
import { loadGraph } from './lib/loadGraph';
import { Graph2D } from './components/Graph2D';
import { SidePanel } from './components/SidePanel';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';

const Graph3D = lazy(() => import('./components/Graph3D').then((m) => ({ default: m.Graph3D })));

type ViewMode = '2d' | '3d';

export default function App() {
  const [data, setData] = useState<GraphData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<ViewMode>('2d');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [hidden, setHidden] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadGraph().then(setData).catch((e) => setError(String(e)));
  }, []);

  const highlight = useMemo(() => {
    const set = new Set<string>();
    if (!data) return set;
    if (selectedId) {
      set.add(selectedId);
      for (const link of data.links) {
        const sid = typeof link.source === 'string' ? link.source : (link.source as GraphNode).id;
        const tid = typeof link.target === 'string' ? link.target : (link.target as GraphNode).id;
        if (sid === selectedId) set.add(tid);
        if (tid === selectedId) set.add(sid);
      }
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      for (const node of data.nodes) {
        const haystacks = [
          node.name,
          node.nameJa ?? '',
          node.nameEn ?? '',
          node.sanskritName ?? '',
          node.paliName ?? '',
          node.chineseName ?? '',
          node.id,
        ];
        if (haystacks.some((h) => h.toLowerCase().includes(q))) {
          set.add(node.id);
        }
      }
    }
    return set;
  }, [data, selectedId, search]);

  const fadeOthers = highlight.size > 0;
  const selectedNode = data && selectedId ? data.nodes.find((n) => n.id === selectedId) ?? null : null;

  const toggleType = (type: NodeType) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  if (error) {
    return (
      <div className="error">
        <h1>Failed to load graph</h1>
        <pre>{error}</pre>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="loading">
        <p>Loading graph…</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="title-block">
          <h1>Attention, Not Self <span className="subtitle">— Knowledge Graph</span></h1>
          <p className="meta">{data.nodes.length} ノード · {data.links.length} エッジ</p>
        </div>
        <div className="controls">
          <SearchBar value={search} onChange={setSearch} />
          <div className="view-toggle">
            <button
              className={mode === '2d' ? 'active' : ''}
              onClick={() => setMode('2d')}
            >
              2D
            </button>
            <button
              className={mode === '3d' ? 'active' : ''}
              onClick={() => setMode('3d')}
            >
              3D
            </button>
          </div>
        </div>
        <FilterPanel hidden={hidden} onToggle={toggleType} />
      </header>

      <main className="graph-wrap">
        {mode === '2d' ? (
          <Graph2D
            data={data}
            highlight={highlight}
            fadeOthers={fadeOthers}
            hiddenTypes={hidden}
            selectedId={selectedId}
            onNodeClick={(n) => setSelectedId(n.id)}
          />
        ) : (
          <Suspense fallback={<div className="loading">Loading 3D…</div>}>
            <Graph3D
              data={data}
              highlight={highlight}
              fadeOthers={fadeOthers}
              hiddenTypes={hidden}
              selectedId={selectedId}
              onNodeClick={(n) => setSelectedId(n.id)}
            />
          </Suspense>
        )}
      </main>

      <SidePanel
        node={selectedNode}
        data={data}
        onClose={() => setSelectedId(null)}
        onSelect={setSelectedId}
      />
    </div>
  );
}
