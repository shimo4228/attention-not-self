export type NodeType =
  | 'Theme'
  | 'Essay'
  | 'Tradition'
  | 'DharmaCategory'
  | 'Dharma'
  | 'Concept'
  | 'Framework'
  | 'Reference'
  | 'Dataset';

export type EdgeType =
  | 'isPartOf'
  | 'buildsOn'
  | 'classifiedIn'
  | 'tradition'
  | 'uniqueTo'
  | 'comparesWith'
  | 'mapsTo'
  | 'exemplifies'
  | 'mentions'
  | 'discussesIn'
  | 'citation';

export interface LangLiteral {
  '@value': string;
  '@language': string;
}

export interface JsonLdNode {
  '@id': string;
  '@type'?: string | string[];
  name?: string;
  alternateName?: LangLiteral[] | LangLiteral | string;
  description?: string;
  inLanguage?: string;
  sanskritName?: string;
  paliName?: string;
  chineseName?: string;
  isPartOf?: string | string[];
  buildsOn?: string | string[];
  classifiedIn?: string | string[];
  tradition?: string | string[];
  uniqueTo?: string | string[];
  comparesWith?: string | string[];
  mapsTo?: string | string[] | { '@id': string; evidenceQuality?: string } | ({ '@id': string; evidenceQuality?: string } | string)[];
  exemplifies?: string | string[];
  mentions?: string | string[];
  discussesIn?: string | string[];
  citation?: string | string[];
  url?: string;
  mainEntity?: string | string[];
}

export interface GraphNode {
  id: string;
  type: NodeType;
  name: string;
  nameJa?: string;
  nameEn?: string;
  sanskritName?: string;
  paliName?: string;
  chineseName?: string;
  description?: string;
  url?: string;
  raw: JsonLdNode;
  degree?: number;
  // mutated by force-graph at runtime
  x?: number;
  y?: number;
  z?: number;
  vx?: number;
  vy?: number;
  vz?: number;
  fx?: number;
  fy?: number;
  fz?: number;
}

export interface GraphLink {
  source: string;
  target: string;
  type: EdgeType;
  evidenceQuality?: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
