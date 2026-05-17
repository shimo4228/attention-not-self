# Changelog

All notable changes to this project are documented in this file.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/); versioning follows [SemVer](https://semver.org/).

## Unreleased

(none)

## v0.1.0 — Initial DOI release (2026-05-18)

First Zenodo deposit. Establishes the canonical concept DOI for the essay collection and its companion knowledge graph.

### Added

- **Five essay themes** (ten files: each theme in English + Japanese):
  1. *Abhidharma Meets Computational Phenomenology* — introductory mapping; central correspondence: *manaskāra* ↔ precision-weighting
  2. *Three Abhidharma Systems Dharma Comparison* — cross-tradition taxonomy (Theravāda 82, Sarvāstivāda 75, Yogācāra 100)
  3. *Three Abhidharma Models of Cognition* — *citta-vīthi* / *saṃprayoga* + *samanantara-pratyaya* / four-*bhāga* + *ālaya-vijñāna*
  4. *Abhidharma Cognitive Process Models Meets Computational Phenomenology* — systematic mapping onto GWT / PDP / PP / FEP / IIT / AST
  5. *Awareness — A Genealogy and Typology* — unpacks *sati* / *sampajañña* / *manasikāra* / *rigpa* / *appamāda*; traces the Western (Rhys Davids → Nyanaponika → MBSR → Sam Harris) and Japanese (Thich Nhat Hanh → 自己啓発) genealogies
- **三大アビダルマ法対照表** — source xlsx + nine per-sheet CSV exports + browser-readable `TABLES.md`
- **`graph.jsonld`** — JSON-LD knowledge graph (~238 nodes: 5 themes, 10 essays, 3 traditions, 10 dharma categories, ~130 dharmas, ~30 concepts, 9 computational frameworks, ~30 references). Uses schema.org + custom `ans:` vocabulary; bilingual labels (en + ja); Sanskrit / Pāli / Chinese fields on dharma nodes
- **Interactive viewer** (`viewer/` source + `docs/` build) — React + Vite + react-force-graph with 2D / 3D toggle, search, type filter chips, side panel for bilingual node details. Served via GitHub Pages at https://shimo4228.github.io/attention-not-self/
- **AI-facing documentation** — `llms.txt`, `llms-full.txt` (FAQ + 30 prior research references + 9 design-choice Q&A entries)
- **Repository governance files** — LICENSE (CC BY 4.0), CITATION.cff, `.zenodo.json`, this CHANGELOG

### Notes

- **License**: CC BY 4.0. Attribution required; derivative works and commercial use allowed.
- **Resource type**: Working paper / essay collection (Zenodo `publication-workingpaper`). Not a peer-reviewed journal article.
- **Methodology**: Developed in collaboration with the Claude language model (Anthropic) for synthesis, cross-tradition dharma mapping, computational framework alignment, and graph encoding. The author retains responsibility for all claims. Primary source verification for individual dharma definitions is ongoing; corrections welcome via GitHub issues.
- **Primary audience**: LLM-mediated channels (direct LLM ingestion and humans reaching the material via LLM search). The `graph.jsonld` is designed for structured citation by AI search engines and crawlers.
