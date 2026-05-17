import type { NodeType } from '../lib/types';
import { NODE_COLOR, NODE_TYPE_LABEL_JA } from '../lib/nodeStyles';

const TYPES: NodeType[] = [
  'Theme',
  'Essay',
  'Tradition',
  'DharmaCategory',
  'Dharma',
  'Concept',
  'Framework',
  'Reference',
];

interface FilterPanelProps {
  hidden: Set<string>;
  onToggle(type: NodeType): void;
}

export function FilterPanel({ hidden, onToggle }: FilterPanelProps) {
  return (
    <div className="filters">
      {TYPES.map((t) => {
        const isShown = !hidden.has(t);
        return (
          <label key={t} className={`filter-chip ${isShown ? 'on' : 'off'}`}>
            <input
              type="checkbox"
              checked={isShown}
              onChange={() => onToggle(t)}
            />
            <span className="dot" style={{ background: NODE_COLOR[t] }} />
            {NODE_TYPE_LABEL_JA[t]}
          </label>
        );
      })}
    </div>
  );
}
