# ADR-0001: Flat repository layout — essay file paths as canonical citation @ids

## Status

Accepted

## Date

2026-06-14

## Context

attention-not-self is a DOI-registered (Zenodo) personal research repository exploring Buddhist Abhidharma × computational phenomenology. The content is resource-centric: Markdown essays, a JSON-LD knowledge graph (`graph.jsonld`), and a React viewer.

All essays — currently 14 essays across 7 themes, approximately 16 `.md` files — live flat in the repository root rather than in per-theme subfolders. `graph.jsonld` registers each essay's GitHub blob URL as that essay's canonical `@id` and citation identifier. The blob URL embeds the flat file path directly, e.g. `https://github.com/shimo4228/attention-not-self/blob/main/<urlencoded-filename>.md`. The README states this citation policy explicitly: cite via the `@id` in `graph.jsonld`, which is the GitHub blob URL.

These flat blob URLs are load-bearing across multiple surfaces simultaneously: the interactive viewer, internal links in `README.md`, `README.en.md`, and `llms.txt`, `.zenodo.json` metadata, and external citations already in circulation — including a live Substack post that links to the Japanese essay's blob URL. GitHub does not issue redirects for renamed or moved blob paths; a path change produces a permanent 404.

As the essay corpus grows, the flat root accumulates files and there is a recurring temptation to reorganize essays into per-theme subfolders for navigability. A concrete incident reinforced the risk: a newly added essay's blob URL returned 404 because the repository had not yet been pushed — the same failure class that any permanent path change would cause.

## Decision

Keep all essays flat in the repository root. Do not move existing or future essays into per-theme subfolders.

Achieve navigability through documentation layers that do not alter file paths:

1. The README `収録資料` essay index.
2. The `llms.txt` theme sections.
3. `graph.jsonld` and the interactive viewer (`docs/` via GitHub Pages).

## Alternatives Considered

### Move essays into `essays/<theme>/` subfolders

Rejected. Renaming or moving any essay breaks its `@id` in `graph.jsonld`, the live Substack link to the Japanese essay, all internal cross-references in the viewer, `llms.txt`, and both README files, `.zenodo.json`, and any external citation already in circulation. GitHub does not redirect renamed blob paths — they 404 permanently.

### Hybrid — new essays in subfolders, existing essays remain flat

Rejected. The resulting inconsistency across the corpus is worse than uniform flatness; it provides navigability for only part of the archive while multiplying the maintenance surface.

### Decouple `@id` from file path first, then reorganize

Migrate essay `@id` values to a path-independent URI scheme (e.g., a DOI- or w3id-based resolver) before restructuring the filesystem. This is the correct prerequisite for any future reorganization. Not done now due to cost and scope; noted as the required first step for any future folder restructure and deferred to a separate ADR.

## Consequences

### Positive

- Canonical citation `@id` values remain stable; no existing external citation breaks.
- The published Substack link and all other in-circulation blob URLs continue to resolve.
- Zero migration cost and no risk of silently corrupting the citation graph.

### Negative

- The repository root accumulates `.md` files as the essay corpus grows, reading as flat and cluttered by filesystem conventions.
- Navigation depends on the documentation index (`README`, `llms.txt`) and the interactive viewer rather than on the directory hierarchy.

### Neutral / Follow-ups

- Any future folder reorganization must be preceded by migrating essay `@id` values to a path-independent URI scheme, updating `graph.jsonld`, `.zenodo.json`, and all navigation documents accordingly, and accepting that old blob URLs will return 404 unless a redirect layer is introduced. That work must be recorded as its own ADR.
