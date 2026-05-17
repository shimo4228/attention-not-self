import type { EdgeType, NodeType } from './types';

export const NODE_COLOR: Record<NodeType, string> = {
  Theme: '#ff6b6b',
  Essay: '#ffd93d',
  Dharma: '#6bcb77',
  Concept: '#4d96ff',
  Framework: '#9b59b6',
  Tradition: '#ff9f43',
  DharmaCategory: '#5fbf9f',
  Reference: '#aaaaaa',
  Dataset: '#ffffff',
};

export const NODE_TYPE_LABEL_JA: Record<NodeType, string> = {
  Theme: 'テーマ',
  Essay: 'エッセイ',
  Dharma: '法 (dharma)',
  Concept: '概念',
  Framework: 'フレームワーク',
  Tradition: '伝統',
  DharmaCategory: '法の範疇',
  Reference: '参考文献',
  Dataset: 'データセット',
};

export const EDGE_COLOR: Record<EdgeType, string> = {
  isPartOf: '#888888',
  buildsOn: '#ffaa00',
  classifiedIn: '#7fc97f',
  tradition: '#ff9f43',
  uniqueTo: '#ff5577',
  comparesWith: '#cccccc',
  mapsTo: '#bf6bff',
  exemplifies: '#4d96ff',
  mentions: '#5577aa',
  discussesIn: '#5577aa',
  citation: '#888888',
};

export const EDGE_DASH: Partial<Record<EdgeType, [number, number]>> = {
  comparesWith: [4, 4],
  mentions: [2, 4],
  citation: [2, 6],
  discussesIn: [2, 4],
};

export function nodeRadius(degree: number): number {
  return Math.min(20, 4 + Math.sqrt(degree) * 2);
}
