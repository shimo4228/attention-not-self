import type {
  EdgeType,
  GraphData,
  GraphLink,
  GraphNode,
  JsonLdNode,
  LangLiteral,
  NodeType,
} from './types';

const NODE_TYPE_MAP: Record<string, NodeType> = {
  'ans:Theme': 'Theme',
  'ans:Essay': 'Essay',
  'ans:Tradition': 'Tradition',
  'ans:DharmaCategory': 'DharmaCategory',
  'ans:Dharma': 'Dharma',
  'ans:Concept': 'Concept',
  'ans:Framework': 'Framework',
  'ans:Reference': 'Reference',
  'schema:Dataset': 'Dataset',
};

const EDGE_FIELDS: { field: keyof JsonLdNode; type: EdgeType }[] = [
  { field: 'isPartOf', type: 'isPartOf' },
  { field: 'buildsOn', type: 'buildsOn' },
  { field: 'classifiedIn', type: 'classifiedIn' },
  { field: 'tradition', type: 'tradition' },
  { field: 'uniqueTo', type: 'uniqueTo' },
  { field: 'comparesWith', type: 'comparesWith' },
  { field: 'mapsTo', type: 'mapsTo' },
  { field: 'exemplifies', type: 'exemplifies' },
  { field: 'mentions', type: 'mentions' },
  { field: 'discussesIn', type: 'discussesIn' },
  { field: 'citation', type: 'citation' },
];

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function pickNodeType(rawType: string | string[] | undefined): NodeType | null {
  const types = asArray(rawType);
  for (const t of types) {
    if (NODE_TYPE_MAP[t]) return NODE_TYPE_MAP[t];
  }
  return null;
}

function extractLangValue(
  alt: JsonLdNode['alternateName'],
  lang: string,
): string | undefined {
  if (!alt) return undefined;
  const items = asArray(alt);
  for (const item of items) {
    if (typeof item === 'string') continue;
    const lit = item as LangLiteral;
    if (lit['@language'] === lang) return lit['@value'];
  }
  return undefined;
}

function nodeFromJsonLd(raw: JsonLdNode, type: NodeType): GraphNode {
  const nameJa = extractLangValue(raw.alternateName, 'ja');
  const nameEn = extractLangValue(raw.alternateName, 'en');
  return {
    id: raw['@id'],
    type,
    name: raw.name ?? nameEn ?? nameJa ?? raw['@id'],
    nameJa,
    nameEn,
    sanskritName: raw.sanskritName,
    paliName: raw.paliName,
    chineseName: raw.chineseName,
    description: raw.description,
    url: raw.url,
    raw,
  };
}

function targetFromValue(value: unknown): { target: string; evidenceQuality?: string } | null {
  if (typeof value === 'string') return { target: value };
  if (value && typeof value === 'object' && '@id' in value) {
    const obj = value as { '@id': string; evidenceQuality?: string };
    return { target: obj['@id'], evidenceQuality: obj.evidenceQuality };
  }
  return null;
}

export async function loadGraph(): Promise<GraphData> {
  const url = `${import.meta.env.BASE_URL}graph.jsonld`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  const doc = await res.json();
  const graph: JsonLdNode[] = doc['@graph'] ?? [];

  const merged = new Map<string, JsonLdNode>();
  for (const raw of graph) {
    const id = raw['@id'];
    if (!id) continue;
    const existing = merged.get(id);
    if (existing) {
      merged.set(id, { ...existing, ...raw });
    } else {
      merged.set(id, raw);
    }
  }

  const nodes: GraphNode[] = [];
  for (const raw of merged.values()) {
    const type = pickNodeType(raw['@type']);
    if (!type) continue;
    if (type === 'Dataset') continue;
    nodes.push(nodeFromJsonLd(raw, type));
  }
  const nodeIds = new Set(nodes.map((n) => n.id));

  const links: GraphLink[] = [];
  for (const raw of merged.values()) {
    const source = raw['@id'];
    if (!nodeIds.has(source)) continue;
    for (const { field, type } of EDGE_FIELDS) {
      const value = raw[field];
      if (value === undefined) continue;
      const items = Array.isArray(value) ? value : [value];
      for (const item of items) {
        const t = targetFromValue(item);
        if (!t) continue;
        if (!nodeIds.has(t.target)) continue;
        links.push({
          source,
          target: t.target,
          type,
          ...(t.evidenceQuality ? { evidenceQuality: t.evidenceQuality } : {}),
        });
      }
    }
  }

  const degreeMap = new Map<string, number>();
  for (const link of links) {
    degreeMap.set(link.source, (degreeMap.get(link.source) ?? 0) + 1);
    degreeMap.set(link.target, (degreeMap.get(link.target) ?? 0) + 1);
  }
  for (const node of nodes) {
    node.degree = degreeMap.get(node.id) ?? 0;
  }

  return { nodes, links };
}
