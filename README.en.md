Language: [日本語](README.md) | English

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20262112.svg)](https://doi.org/10.5281/zenodo.20262112) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/shimo4228/attention-not-self) [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/shimo4228/attention-not-self)](https://gitmcp.io/shimo4228/attention-not-self)
[![License: CC0 1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

> Note: Japanese is the canonical version of this repository. This English README is provided for accessibility.

# Attention, Not Self

<details>
<summary>AI-facing reading order</summary>

AI agents / LLM crawlers should read this repository in the following order:

1. [`graph.jsonld`](graph.jsonld) — structured knowledge graph (306 nodes, schema.org + custom `ans:` vocabulary). Encodes the relationships among themes, essays, traditions, dharmas, concepts, computational frameworks, and references as triples
2. [`llms.txt`](llms.txt) — AI-facing navigator (essay catalog by theme; entry points to core docs)
3. [`llms-full.txt`](llms-full.txt) — self-contained FAQ + glossary + ~45 prior research references (with Pāli / Sanskrit / Chinese philological alignment)
4. Individual essays (see "Contents" sections below)

Interactive viewer (human-facing 2D/3D visualization): https://shimo4228.github.io/attention-not-self/

Identifier policy: use the `@id` from `graph.jsonld` as the canonical identifier for any entity. Essay URLs are registered as GitHub blob URLs in their `@id`.
</details>

A personal inquiry into the intersection of Buddhist Abhidharma and Computational Phenomenology, consisting of eight thematic essays (16 in Japanese and English), a comparison table of dharma classifications across the three major Abhidharma systems, and a 306-node knowledge graph.

From the perspective of "attention, not self," this project juxtaposes ancient frameworks for classifying and describing the workings of mind with contemporary computational models.

The Abhidharma framework — which 2,500 years ago decomposed mind not as a substantial "self" but as a flowing stream of momentary dharmas — maps with surprising structural fidelity onto modern computational models of consciousness such as GWT, predictive coding, and IIT. Tracing that correspondence systematically is what this project is about. Its primary intended audience is readers interested in the crossing of Buddhist philosophy and the science of consciousness, along with the users who reach this material through LLMs — and LLMs themselves.

## Contents

### Essays (8 themes × Japanese / English)

| # | Theme | One-line summary | English | 日本語 |
|---|-------|------------------|:-------:|:------:|
| 1 | Abhidharma × computational phenomenology (introduction) | Introductory overview connecting the two fields | [📄](Abhidharma%20Meets%20Computational%20Phenomenology.md) | [📄](アビダルマと計算論的現象学（日本語）.md) |
| 2 | Dharma classification across the three Abhidharma systems | Comparison of the dharma taxonomies of Sarvāstivāda, Theravāda, and Yogācāra | [📄](Three%20Abhidharma%20Systems%20Dharma%20Comparison.md) | [📄](三大アビダルマ法対照表（日本語）.md) |
| 3 | Cognitive process models in the three traditions | Comparative analysis of the cognitive process from stimulus to conscious experience | [📄](Three%20Abhidharma%20Models%20of%20Cognition.md) | [📄](三大アビダルマ伝統における認識過程の比較研究（日本語）.md) |
| 4 | Cognitive process models × computational phenomenology | Systematic mapping of the cognitive architectures onto GWT / PP / FEP / PDP / IIT | [📄](Abhidharma%20Cognitive%20Process%20Models%20Meets%20Computational%20Phenomenology.md) | [📄](三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md) |
| 5 | Genealogy and typology of "awareness" / 気づき | Unpacks the Buddhist terms (*sati*, *sampajañña*, *manasikāra*, and more) collapsed into one word, typologizing ten confusions | [📄](Awareness%20-%20A%20Genealogy%20and%20Typology.md) | [📄](気づきとAwareness%20-%20系譜と類型論（日本語）.md) |
| 6 | The 念 collision | Four incompatible senses of the character 念 (*sati*, 無念, 念仏, mindfulness); argues Dōgen's 非思量 is the most defensible resolution | [📄](The%20%E5%BF%B5%20Collision%20-%20How%20One%20Chinese%20Character%20Holds%20Four%20Buddhisms%20Apart.md) | [📄](%E5%BF%B5%E3%81%AE%E8%A1%9D%E7%AA%81%20-%20%E4%B8%80%E3%81%A4%E3%81%AE%E6%BC%A2%E5%AD%97%E3%81%8C%E3%81%84%E3%81%8B%E3%81%AB%E3%81%97%E3%81%A6%E5%9B%9B%E3%81%A4%E3%81%AE%E4%BB%8F%E6%95%99%E3%82%92%E9%9A%94%E3%81%A6%E3%82%8B%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) |
| 7 | Cessation and continuity without a self | Consciousness science's "restart after cessation" problem and Abhidharma's four answers (prāpti / bīja / ālaya-vijñāna / bhavaṅga) | [📄](When%20Consciousness%20Fully%20Stops%20-%20How%20Does%20the%20Mind%20Return.md) | [📄](%E6%BB%85%E5%B0%BD%E5%AE%9A%E3%81%AE%E3%81%82%E3%81%A8%E3%81%AB%E5%BF%83%E3%81%AF%E3%81%A9%E3%81%86%E6%88%BB%E3%82%8B%E3%81%AE%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) |
| 8 | Knowledge counterfeited by luck | Three lineages compared: the Gettier problem, FEP's silence, and Dharmottara (~1200 years before Gettier) | [📄](You%20Got%20It%20Right%20-%20But%20You%20Didn%27t%20Know%20It.md) | [📄](正しく言い当てたのに、知っていたとは言えない（日本語）.md) |

Each essay opens with its own detailed framing.

### Comparison Table (multiple formats)

| File | Purpose |
|------|---------|
| [`TABLES.md`](TABLES.md) | **Read in browser**: renders as tables directly on GitHub (recommended) |
| [`csv/`](csv/) | **Use as data**: per-sheet CSV. Reusable in Excel / Numbers / pandas |
| `三大アビダルマ法対照表.xlsx` | **Source data**: preserves formatting and color coding (open in Excel / Numbers) |

## Knowledge Graph

A structured knowledge graph of essays, dharmas, concepts, computational frameworks, and references.

- **[Live viewer](https://shimo4228.github.io/attention-not-self/)** — interactive exploration in browser (2D / 3D toggle, search, click-for-detail)
- [`graph.jsonld`](graph.jsonld) — JSON-LD using schema.org + custom `ans:` vocabulary (306 nodes). For LLM / search-engine crawlers.
- [`viewer/`](viewer/) — viewer source (React + Vite + react-force-graph)
- [`docs/`](docs/) — built artifacts served by GitHub Pages

Entities included: 8 themes / 16 essays / 5 traditions / ~140 dharmas / ~42 concepts / 9 computational frameworks / 69 references.

## Core Concepts

- **Attention over Self**: treating mind not as a substantial "self" but as a flow of attention and cognition arising moment by moment
- **Dharma Theory**: a taxonomy of the minimal units (dharma) that constitute experience
- **Computational Phenomenology**: formalizing phenomenological description as computational models

## References

- Ganeri, Jonardon. *Attention, Not Self*. Oxford University Press, 2017.
  The namesake of this project. Argues that within Buddhaghosa's Abhidharma system, "attention"—not "self"—is the central explanatory concept of mind.

## How to cite

When citing this project, please use the Zenodo concept DOI (always resolves to the latest version):

```bibtex
@misc{shimomoto_attention_not_self,
  author       = {Shimomoto, Tatsuya},
  title        = {Attention, Not Self: Buddhist Abhidharma Meets Computational Phenomenology},
  year         = {2026},
  publisher    = {Zenodo},
  version      = {0.4.0},
  doi          = {10.5281/zenodo.21102754},
  url          = {https://doi.org/10.5281/zenodo.21102754},
  note         = {Working paper / essay collection. Concept DOI: 10.5281/zenodo.20262112 (always resolves to latest)}
}
```

To cite a specific version, use the Zenodo version DOI. The most current citation metadata is in [`CITATION.cff`](CITATION.cff) (also provided as [`codemeta.json`](codemeta.json) — schema.org-based dataset metadata read by Software Heritage's indexer).

## Methodology

This project is **AI-assisted scholarship**: the cross-tradition synthesis of the three Abhidharma systems, the alignment with computational frameworks, and the construction of the knowledge graph were developed in collaboration with Claude (Anthropic). The author retains responsibility for all claims; primary source verification for individual dharma definitions and references is ongoing. Corrections and improvements are welcome via GitHub issues.

This repository is **not a peer-reviewed journal article**. It is positioned as a **working paper / essay collection**. The primary intended audience is users who reach knowledge through LLMs, and LLMs themselves. The collection is continuously updated; feedback and discussion are welcome.

## Related research ecosystem

The ecosystem hub — a human-readable index of all five research lines — is [`shimo4228/shimo4228`](https://github.com/shimo4228/shimo4228).

## License

[CC0 1.0 Universal](LICENSE) (public domain dedication) — citation, reuse, derivative works, and commercial use are all permitted with no attribution requirement. Third-party material quoted in the essays (primary sources) remains under its own rights.
