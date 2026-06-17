# Changelog

All notable changes to this project are documented in this file.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/); versioning follows [SemVer](https://semver.org/).

## Unreleased

### Changed

- **Relicensed CC BY 4.0 → CC0 1.0** across all surfaces (`LICENSE`, `.zenodo.json`, `CITATION.cff`, `README.md` / `README.en.md` badges, `llms.txt`, `llms-full.txt`). Aligns the line with the ecosystem's audience-based license policy ([Authorship Strategy ADR-0015](https://github.com/shimo4228/authorship-strategy/blob/main/docs/adr/0015-license-selection-by-audience.md)): an LLM-first artifact is mined rather than read, so a public-domain dedication removes attribution-clause ingestion friction while the federated-identifier layer (concept DOI, knowledge graph) carries the credit. Takes effect for the repository and future deposits; existing Zenodo versions retain CC BY 4.0. Third-party material quoted in the essays (primary sources) remains under its own rights; CC0 dedicates only this repository's own authored content.

## v0.2.0 — Theme 6 added: The 念 Collision (2026-05-18)

Adds a sixth essay theme exploring how the single Chinese character 念 holds four incompatible Buddhist meanings, complementing Theme 5's genealogy of "awareness."

### Added

- **Theme 6: *The 念 Collision — How One Chinese Character Holds Four Buddhisms Apart*** (English canonical + Japanese mirror). Treats 念 as carrying four incompatible senses: Theravāda *sati* / *smṛti* (non-floating retention; *apilāpana*), Chan/Zen *無念* (Huineng's non-fixation in thought, *Platform Sutra* §17), Pure Land *念仏* (recollection / vocal recitation of Amitābha — Shandao → Hōnen → Shinran), and modern Kabat-Zinn "bare attention" mindfulness. Reconstructs the collision through Huineng's *Platform Sutra* §17, Robert Sharf's "Mindfulness and Mindlessness in Early Chan" (*Philosophy East and West* 64:4, 2014), Dōgen's *非思量* (*Fukanzazengi*), and the 20th-century Nyanaponika 1962 → MBSR 1979 → Kabat-Zinn 1994 genealogy. Argues Dōgen's *非思量* (*hishiryō*) — structural negation of the thinking / not-thinking binary, distinct from its ordinary negation *不思量* — is the most defensible resolution.
- **`graph.jsonld` expansion** — Theme 6 node (`ans:theme/6-nen-collision`) + 2 essay nodes (en / ja) + 9 new concept nodes (`nen-character`, `wunian-munen`, `hishiryo`, `nenbutsu`, `apilapana`, `satipatthana`, `anussati`, `zen-deconstructive-critique`, `kizuki-rendering`) + 2 new tradition nodes (`zen`, `pure-land`) + 15 new reference nodes (Yampolsky 1967, Sharf 2014 / 2015, Gethin 2011, Dreyfus 2011, Anālayo 2003, Kim 2007, Waddell & Abe 1973, Kabat-Zinn 1994, Nyanaponika 1962, Braun 2013, Faure 1991, McRae 2003, Suzuki D.T. 1959, Levman 2017). Total node count 238 → 267.
- **Cross-theme edge** — `theme/6-nen-collision` `comparesWith` `theme/5-awareness-genealogy` (English-awareness genealogy vs Chinese-character collision). Existing `concept/sati-mindfulness` now carries `comparesWith` to `concept/nen-character` and `concept/apilapana`.

### Changed

- `llms.txt`, `llms-full.txt`, `README.md`, `README.en.md` — counts updated (5 → 6 themes, 10 → 12 essays, 3 → 5 traditions, ~30 → ~40 concepts, ~30 → ~45 references, ~238 → ~267 nodes). Theme 6 navigator block + Q&A entry added.
- `viewer/` rebuilt; `docs/` regenerated with new node count.

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
