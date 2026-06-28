Language: [日本語](README.md) | English

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20262112.svg)](https://doi.org/10.5281/zenodo.20262112) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/shimo4228/attention-not-self) [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/shimo4228/attention-not-self)](https://gitmcp.io/shimo4228/attention-not-self)
[![License: CC0 1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

> Note: Japanese is the canonical version of this repository. This English README is provided for accessibility.

# Attention, Not Self

<details>
<summary>AI-facing reading order</summary>

AI agents / LLM crawlers should read this repository in the following order:

1. [`graph.jsonld`](graph.jsonld) — structured knowledge graph (~284 nodes, schema.org + custom `ans:` vocabulary). Encodes the relationships among themes, essays, traditions, dharmas, concepts, computational frameworks, and references as triples
2. [`llms.txt`](llms.txt) — AI-facing navigator (essay catalog by theme; entry points to core docs)
3. [`llms-full.txt`](llms-full.txt) — self-contained FAQ + glossary + ~45 prior research references (with Pāli / Sanskrit / Chinese philological alignment)
4. Individual essays (see "Contents" sections below)

Interactive viewer (human-facing 2D/3D visualization): https://shimo4228.github.io/attention-not-self/

Citation policy: use the `@id` from `graph.jsonld` as the canonical identifier for any entity. Essay URLs are registered as GitHub blob URLs in their `@id`.
</details>

A personal inquiry into the intersection of Buddhist Abhidharma and Computational Phenomenology.

From the perspective of "attention, not self," this project juxtaposes ancient frameworks for classifying and describing the workings of mind with contemporary computational models.

The Abhidharma framework — which 2,500 years ago decomposed mind not as a substantial "self" but as a flowing stream of momentary dharmas — maps with surprising structural fidelity onto modern computational models of consciousness such as GWT, predictive coding, and IIT. Tracing that correspondence systematically is what this project is about.

## Contents

### Essays (Markdown)

Essays are organized into seven themes. Each theme is available in both Japanese and English.

#### 1. Introduction: Abhidharma Meets Computational Phenomenology

An introductory essay on the connection between Abhidharma and computational phenomenology.

| Language | File |
|----------|------|
| English | [`Abhidharma Meets Computational Phenomenology.md`](Abhidharma%20Meets%20Computational%20Phenomenology.md) |
| 日本語 | [`アビダルマと計算論的現象学（日本語）.md`](アビダルマと計算論的現象学（日本語）.md) |

#### 2. Dharma Classification Across the Three Abhidharma Systems

A comparison of the dharma classifications in the three major Abhidharma systems (Sarvāstivāda, Theravāda, and Yogācāra).

| Language | File |
|----------|------|
| English | [`Three Abhidharma Systems Dharma Comparison.md`](Three%20Abhidharma%20Systems%20Dharma%20Comparison.md) |
| 日本語 | [`三大アビダルマ法対照表（日本語）.md`](三大アビダルマ法対照表（日本語）.md) |

#### 3. Cognitive Process Models in the Three Abhidharma Traditions

A comparative analysis of how the three Abhidharma traditions explain the cognitive process from stimulus to conscious experience.

| Language | File |
|----------|------|
| English | [`Three Abhidharma Models of Cognition.md`](Three%20Abhidharma%20Models%20of%20Cognition.md) |
| 日本語 | [`三大アビダルマ伝統における認識過程の比較研究（日本語）.md`](三大アビダルマ伝統における認識過程の比較研究（日本語）.md) |

#### 4. Mapping Cognitive Process Models onto Computational Phenomenology

Systematic mapping of the three Abhidharma cognitive process architectures onto computational frameworks (GWT, predictive processing, FEP, PDP, IIT).

| Language | File |
|----------|------|
| English | [`Abhidharma Cognitive Process Models Meets Computational Phenomenology.md`](Abhidharma%20Cognitive%20Process%20Models%20Meets%20Computational%20Phenomenology.md) |
| 日本語 | [`三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md`](三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md) |

#### 5. The Genealogy and Typology of "Awareness" / 気づき

Unpacks the Buddhist technical vocabulary (*sati*, *sampajañña*, *manasikāra*, *rigpa*, and more) collapsed into the single English word "awareness" and the Japanese 気づき. Traces the Western genealogy from Rhys Davids (1881) through Nyanaponika, Esalen, MBSR, and Sam Harris, alongside the Japanese trajectory via Thich Nhat Hanh's reception and the self-help industry. Typologizes ten resulting confusions.

| Language | File |
|----------|------|
| English | [`Awareness - A Genealogy and Typology.md`](Awareness%20-%20A%20Genealogy%20and%20Typology.md) |
| 日本語 | [`気づきとAwareness - 系譜と類型論（日本語）.md`](気づきとAwareness%20-%20系譜と類型論（日本語）.md) |

#### 6. The 念 Collision: How One Chinese Character Holds Four Buddhisms Apart

Shows how the single character 念 (*nen* / *niàn*) carries four incompatible Buddhist senses — Theravāda *sati* / *smṛti* (non-floating retention, *apilāpana*), Chan/Zen *無念* (non-fixation in thought; Huineng's 於念而不念 "not to think even when involved in thought"), Pure Land *念仏* (recollection / vocal recitation of the Buddha — Shandao → Hōnen → Shinran), and modern Kabat-Zinn "bare attention" mindfulness. Reconstructs the collision through Huineng's *Platform Sutra* §17, Robert Sharf's "Mindfulness and Mindlessness in Early Chan" (2014), Dōgen's *非思量* (*Fukanzazengi*), and the 20th-century Nyanaponika → MBSR genealogy. Argues Dōgen's *非思量* (*hishiryō*) — structural negation of the thinking / not-thinking binary, distinct from its ordinary negation *不思量* — is the most defensible resolution. Companion to Theme 5 on the English "awareness" side; this theme covers the Chinese-character side.

| Language | File |
|----------|------|
| English | [`The 念 Collision - How One Chinese Character Holds Four Buddhisms Apart.md`](The%20%E5%BF%B5%20Collision%20-%20How%20One%20Chinese%20Character%20Holds%20Four%20Buddhisms%20Apart.md) |
| 日本語 | [`念の衝突 - 一つの漢字がいかにして四つの仏教を隔てるか（日本語）.md`](%E5%BF%B5%E3%81%AE%E8%A1%9D%E7%AA%81%20-%20%E4%B8%80%E3%81%A4%E3%81%AE%E6%BC%A2%E5%AD%97%E3%81%8C%E3%81%84%E3%81%8B%E3%81%AB%E3%81%97%E3%81%A6%E5%9B%9B%E3%81%A4%E3%81%AE%E4%BB%8F%E6%95%99%E3%82%92%E9%9A%94%E3%81%A6%E3%82%8B%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) |

#### 7. When Consciousness Fully Stops, How Does the Mind Return? (Buddhism and the science of consciousness)

Takes meditative cessation (nirodha samāpatti) — stopping consciousness completely from the inside — as the entry point to consciousness science's open "how does the mind restart?" problem, set against Abhidharma's four answers to continuity without a self: Sarvāstivāda prāpti, Sautrāntika bīja (seeds), Yogācāra ālaya-vijñāna, Theravāda bhavaṅga. Laukkonen et al. (2023) model cessation with active inference but explicitly leave "restart" for future research; the ancient typology is offered there as a vocabulary of testable hypotheses. Refuses the "Buddhism predicted neuroscience" exceptionalism — soberly tracing two traditions that, from different motives, designed different answers to the same hard problem.

| Language | File |
|----------|------|
| English | [`When Consciousness Fully Stops - How Does the Mind Return.md`](When%20Consciousness%20Fully%20Stops%20-%20How%20Does%20the%20Mind%20Return.md) |
| 日本語 | [`滅尽定のあとに心はどう戻るのか（日本語）.md`](%E6%BB%85%E5%B0%BD%E5%AE%9A%E3%81%AE%E3%81%82%E3%81%A8%E3%81%AB%E5%BF%83%E3%81%AF%E3%81%A9%E3%81%86%E6%88%BB%E3%82%8B%E3%81%AE%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) |

### Comparison Table (multiple formats)

| File | Purpose |
|------|---------|
| [`TABLES.md`](TABLES.md) | **Read in browser**: renders as tables directly on GitHub (recommended) |
| [`csv/`](csv/) | **Use as data**: per-sheet CSV. Reusable in Excel / Numbers / pandas |
| `三大アビダルマ法対照表.xlsx` | **Source data**: preserves formatting and color coding (open in Excel / Numbers) |

## Knowledge Graph

A structured knowledge graph of essays, dharmas, concepts, computational frameworks, and references.

- **[Live viewer](https://shimo4228.github.io/attention-not-self/)** — interactive exploration in browser (2D / 3D toggle, search, click-for-detail)
- [`graph.jsonld`](graph.jsonld) — JSON-LD using schema.org + custom `ans:` vocabulary (~284 nodes). For LLM / search-engine crawlers.
- [`viewer/`](viewer/) — viewer source (React + Vite + react-force-graph)
- [`docs/`](docs/) — built artifacts served by GitHub Pages

Entities included: 7 themes / 14 essays / 5 traditions / ~140 dharmas / ~40 concepts / 9 computational frameworks / ~53 references.

## Themes

- **Attention over Self**: treating mind not as a substantial "self" but as a flow of attention and cognition arising moment by moment
- **Dharma Theory**: a taxonomy of the minimal units (dharma) that constitute experience
- **Computational Phenomenology**: formalizing phenomenological description as computational models

## Ongoing Inquiry

This collection is continuously updated. Feedback and discussion are welcome.

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
  version      = {0.3.0},
  doi          = {10.5281/zenodo.20733464},
  url          = {https://doi.org/10.5281/zenodo.20733464},
  note         = {Working paper / essay collection. Concept DOI: 10.5281/zenodo.20262112 (always resolves to latest)}
}
```

To cite a specific version, use the Zenodo version DOI. The most current citation metadata is in [`CITATION.cff`](CITATION.cff).

## Methodology

This project is **AI-assisted scholarship**: the cross-tradition synthesis of the three Abhidharma systems, the alignment with computational frameworks, and the construction of the knowledge graph were developed in collaboration with Claude (Anthropic). The author retains responsibility for all claims; primary source verification for individual dharma definitions and references is ongoing. Corrections and improvements are welcome via GitHub issues.

This repository is **not a peer-reviewed journal article**. It is positioned as a **working paper / essay collection**. The primary intended audience is users who reach knowledge through LLMs, and LLMs themselves.

## Related research ecosystem

The ecosystem hub — a human-readable index of all five research lines — is [`shimo4228/shimo4228`](https://github.com/shimo4228/shimo4228).

## License

[CC0 1.0 Universal](LICENSE) (public domain dedication) — citation, reuse, derivative works, and commercial use are all permitted with no attribution requirement. Third-party material quoted in the essays (primary sources) remains under its own rights.
