# Changelog

All notable changes to this project are documented in this file.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/); versioning follows [SemVer](https://semver.org/).

## v0.4.0 — Theme 8 added: Epistemic luck across traditions (2026-07-01)

Adds an eighth essay theme asking whether the Free Energy Principle's descriptive vocabulary has anything to say about the Gettier problem, and tracing Dharmakīrti's Buddhist epistemology as an independent line that reached a structurally similar problem roughly 1200 years earlier.

### Added

- **Theme 8: *You Got It Right — But You Didn't Know It*** (English canonical + Japanese mirror *正しく言い当てたのに、知っていたとは言えない*). Starts from the finding that the Free Energy Principle (FEP) literature never engages with the Gettier problem (justified true belief that is true only by luck, and so not knowledge). Turns to Dharmakīrti's *pramāṇa-vāda* (*avisaṃvāda*, *arthakriyā*) and its commentator Dharmottara (c. 770 CE), who — via *arthasārūpya*, exclusion of *kākatālīya*, and *santāna* — rejected a mirage/water case as invalid cognition roughly 1200 years before Gettier. Deliberately avoids the "Buddhism had the answer first" framing, instead tracing three independent lineages — the Gettier lineage in analytic philosophy, FEP's descriptive vocabulary and its silence, and Dharmakīrti's *pramāṇa-vāda* — each peering, in a different vocabulary, over the edge of the same problem.
- **`graph.jsonld` expansion** — Theme 8 node (`ans:theme/8-epistemic-luck-gettier-dharmakirti`) + 2 essay nodes (en / ja) + 13 new reference nodes (Gettier 1963, Goldman 1976, IEP Gettier Problems, IEP Reliabilism, Friston et al. 2015, Parr & Friston 2019, Gładziejewski 2021, Ghijsen 2018, SEP Dharmakīrti, Dunne, Wikipedia Gettier problem §Dharmottara, Mandal 2022, Uejima 2020) + 2 new concept nodes (`gettier-luck`, `pramana-vada`). Total node count 289 → 307.
- **`llms-full.txt` Prior Research References backfill** — all 13 new Theme 8 citations added to the self-contained AI-facing bibliography table (a gap left open for Theme 7 is not repeated here).

### Changed

- `README.md` / `README.en.md` / `llms.txt` / `llms-full.txt` / `CLAUDE.md` — entity counts updated (7 → 8 themes, 14 → 16 essays, ~284 → 307 nodes, ~53 → 69 references, ~40 → ~42 concepts); BibTeX `version` 0.3.0 → 0.4.0.
- `.zenodo.json` / `CITATION.cff` / `codemeta.json` — description/abstract updated to Theme 8; `related_identifiers` gains DOIs for Gładziejewski 2021 (`10.1007/s11229-021-03295-1`) and Ghijsen 2018 (`10.1007/s11229-018-1715-x`).
- `viewer/` rebuilt; `docs/` regenerated with the new node count (289 → 307).

### Notes

- A companion draft on the Nyāya school's independent, opposite resolution (Śrīharṣa, Gaṅgeśa) was written alongside the main Theme 8 essay but held back in `.notes/` (not published) — it needs its own English translation and citation verification pass before it is ready to join the collection as future work.

## v0.3.0 — Theme 7 added: Cessation & self-less continuity; relicensed CC0 (2026-06-17)

Adds a seventh essay theme taking meditative cessation (*nirodha samāpatti*) as the sharpest form of the Abhidharma problem of continuity without a self, federates the line into the research-program hub, and relicenses the repository to CC0 1.0.

### Added

- **Theme 7: *When Consciousness Fully Stops — How Does the Mind Return?*** (English canonical + Japanese mirror *意識が完全に止まる瞑想状態（滅尽定）のあとに心はどう戻るのか*). Takes *nirodha samāpatti* — the total stopping of consciousness from the inside — as the sharpest form of the no-self continuity problem, and sets consciousness science's open "how does the mind restart after cessation?" question against four scholastic answers to what carries continuity across the gap: Sarvāstivāda *prāpti* (a "clasp" in the *citta-viprayukta* category), Sautrāntika *bīja* (dormant seeds), Yogācāra *ālaya-vijñāna* (store-consciousness), and Theravāda *bhavaṅga* (life-continuum). Connects to Laukkonen et al. (2023), who model cessation with active inference but explicitly leave "restart" for future research. Opens with the author's positionality (a non-affiliated "nightstand Buddhist" reading the Northern / Chinese-translation Abhidharma) and disavows Buddhist-modernist exceptionalism: not "Buddhism predicted neuroscience," but two inquiries reaching the same hard problem by different roads. Also published on Substack (English).
- **`graph.jsonld` expansion** — Theme 7 node (`ans:theme/7-cessation-continuity`) + 2 essay nodes (en / ja) + 8 new reference nodes (Laukkonen et al. 2023, Thompson 2020, McMahan 2008, Tweed 2002, Crick & Koch 1990, Chalmers 2000, Koch et al. 2016, Buswell & Lopez 2014). Total node count 267 → 284.
- **Research-program hub federation** — a `shimo:EcosystemRepo` hub node + an `isPartOf` edge linking the *Attention, Not Self* `ResearchLine` up to the shimo4228 research-program hub, an author `schema:Person` node (ORCID), and four sibling/upstream `ResearchLine` nodes (AKC, Contemplative Agent, AAP, Authorship Strategy) with Wikidata / DOI `sameAs`.
- **ADR-0001** (`docs/adr/0001-flat-layout-essay-paths-as-canonical-ids.md`) + ADR index — records the decision to keep essays at the repository root with their file paths as canonical `@id`s.

### Changed

- **Relicensed CC BY 4.0 → CC0 1.0** across all surfaces (`LICENSE`, `.zenodo.json`, `CITATION.cff`, `README.md` / `README.en.md` badges, `llms.txt`, `llms-full.txt`). Aligns the line with the ecosystem's audience-based license policy ([Authorship Strategy ADR-0015](https://github.com/shimo4228/authorship-strategy/blob/main/docs/adr/0015-license-selection-by-audience.md)): an LLM-first artifact is mined rather than read, so a public-domain dedication removes attribution-clause ingestion friction while the federated-identifier layer (concept DOI, knowledge graph) carries the credit. Takes effect for the repository and future deposits; existing Zenodo versions retain CC BY 4.0. Third-party material quoted in the essays (primary sources) remains under its own rights; CC0 dedicates only this repository's own authored content.
- **Citation surface synced** — Laukkonen et al. (2023) DOI (`10.1016/bs.pbr.2022.12.007`) added to `.zenodo.json` `related_identifiers` as a machine-readable `references` edge so the citation propagates to the DataCite / OpenAIRE citation graph; `.zenodo.json` description and `CITATION.cff` abstract updated to Theme 7 (fourteen essays / seven themes / ~284 nodes).
- `README.md` / `README.en.md` / `llms.txt` / `llms-full.txt` — graph node count ~283 → ~284; BibTeX `version` 0.2.0 → 0.3.0.
- Theme 7 essay footers (JA / EN) updated to the live Substack URL.
- `viewer/` rebuilt; `docs/` regenerated with the hub node (283 → 284 nodes).

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
