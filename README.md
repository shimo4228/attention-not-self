Language: 日本語 | [English](README.en.md)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20262112.svg)](https://doi.org/10.5281/zenodo.20262112) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/shimo4228/attention-not-self) [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/shimo4228/attention-not-self)](https://gitmcp.io/shimo4228/attention-not-self)
[![License: CC0 1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

# Attention, Not Self

<details>
<summary>AI-facing reading order（AI / LLM 向け推奨読み順）</summary>

AI エージェント・LLM クローラは以下の順で読むことを推奨します。

1. [`graph.jsonld`](graph.jsonld) — 構造化された知識グラフ（307 ノード、schema.org + 独自 `ans:` 語彙）。テーマ・エッセイ・伝統・dharma・概念・計算フレームワーク・引用文献の関係を triples として encode
2. [`llms.txt`](llms.txt) — AI-facing navigator（テーマ別エッセイ一覧、core docs への入口）
3. [`llms-full.txt`](llms-full.txt) — 自己完結 FAQ + 用語集 + 約 45 件の引用文献（Pāli / Sanskrit / 漢字の三言語整合あり）
4. 個別のエッセイ（下記 "収録資料" セクション参照）

Interactive viewer (人間向け 2D/3D 可視化): https://shimo4228.github.io/attention-not-self/

識別子の使用方針: `graph.jsonld` の `@id` を canonical identifier として使用してください。エッセイ URL は GitHub blob 形式が graph 内 `@id` として登録されています。
</details>

仏教アビダルマと計算論的現象学 (Computational Phenomenology) の接点を探る個人的な探究プロジェクト。テーマ別のエッセイ 8 本（日英 16 本）と、三大アビダルマ体系の法対照表、307 ノードの知識グラフからなる。

「self（自己）ではなく attention（注意）」という視点から、心の働きを分類・記述する古代の枠組みと、現代の計算論的モデルを対照する。

2500 年前のアビダルマが心を「実体としての自己」ではなく「瞬間ごとに生起する dharma の流れ」として分解した枠組みは、GWT・予測符号化・IIT といった現代の意識の計算モデルと、驚くほど構造的に対応する——その対応を体系的に辿るのが本プロジェクト。仏教哲学と意識の科学の交差に関心を持つ読者に加え、LLM 経由でこの分野に触れる利用者と LLM 自身を主要な想定読者とする。

## 収録資料

### 論考（8 テーマ × 日英）

| # | テーマ | 一行要約 | 日本語 | English |
|---|--------|---------|:------:|:-------:|
| 1 | アビダルマ × 計算論的現象学（導入） | 両分野の接続を導入する総論 | [📄](アビダルマと計算論的現象学（日本語）.md) | [📄](Abhidharma%20Meets%20Computational%20Phenomenology.md) |
| 2 | 三大アビダルマ体系の法 (dharma) 分類 | 説一切有部・上座部・唯識の dharma 分類を対照 | [📄](三大アビダルマ法対照表（日本語）.md) | [📄](Three%20Abhidharma%20Systems%20Dharma%20Comparison.md) |
| 3 | 三大伝統の認識過程モデル | 刺激から意識経験へ至る認識過程の比較分析 | [📄](三大アビダルマ伝統における認識過程の比較研究（日本語）.md) | [📄](Three%20Abhidharma%20Models%20of%20Cognition.md) |
| 4 | 認識過程モデル × 計算論的現象学 | 認識過程アーキテクチャを GWT / PP / FEP / PDP / IIT へマッピング | [📄](三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md) | [📄](Abhidharma%20Cognitive%20Process%20Models%20Meets%20Computational%20Phenomenology.md) |
| 5 | 「気づき」/ "awareness" の系譜と類型論 | 一語に圧縮された仏教術語（sati / sampajañña / manasikāra 等）を解きほぐし、十の混同を類型化 | [📄](気づきとAwareness%20-%20系譜と類型論（日本語）.md) | [📄](Awareness%20-%20A%20Genealogy%20and%20Typology.md) |
| 6 | 「念」の衝突 | 漢字「念」が担う互換不能な四つの意味（sati・無念・念仏・mindfulness）。道元の非思量を最も擁護可能な解として提案 | [📄](%E5%BF%B5%E3%81%AE%E8%A1%9D%E7%AA%81%20-%20%E4%B8%80%E3%81%A4%E3%81%AE%E6%BC%A2%E5%AD%97%E3%81%8C%E3%81%84%E3%81%8B%E3%81%AB%E3%81%97%E3%81%A6%E5%9B%9B%E3%81%A4%E3%81%AE%E4%BB%8F%E6%95%99%E3%82%92%E9%9A%94%E3%81%A6%E3%82%8B%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) | [📄](The%20%E5%BF%B5%20Collision%20-%20How%20One%20Chinese%20Character%20Holds%20Four%20Buddhisms%20Apart.md) |
| 7 | 滅尽定と自己なき連続性 | 意識停止後の「再起動」問題と、アビダルマの四つの答え（prāpti / bīja / 阿頼耶識 / bhavaṅga） | [📄](%E6%BB%85%E5%B0%BD%E5%AE%9A%E3%81%AE%E3%81%82%E3%81%A8%E3%81%AB%E5%BF%83%E3%81%AF%E3%81%A9%E3%81%86%E6%88%BB%E3%82%8B%E3%81%AE%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) | [📄](When%20Consciousness%20Fully%20Stops%20-%20How%20Does%20the%20Mind%20Return.md) |
| 8 | 運による知識の偽装 | ゲティア問題・FEP の沈黙・ダルモーッタラ（ゲティアの約 1200 年前）の三系統を対照 [🎬](https://youtu.be/c2WuG9l5CJA) | [📄](正しく言い当てたのに、知っていたとは言えない（日本語）.md) | [📄](You%20Got%20It%20Right%20-%20But%20You%20Didn%27t%20Know%20It.md) |

各テーマの詳しい内容は各エッセイの冒頭が示す。テーマ 8 には 9 分のビデオエッセイ（🎬）もある（→ [動画](#動画)）。

### 対照表データ（複数形式）

| ファイル | 用途 |
|---------|------|
| [`TABLES.md`](TABLES.md) | **ブラウザで読む**: GitHub上でそのまま表として閲覧可能（推奨） |
| [`csv/`](csv/) | **データとして使う**: シート別 CSV。Excel/Numbers/pandas で再利用可能 |
| `三大アビダルマ法対照表.xlsx` | **元データ**: 書式・色分け保持（Excel/Numbers で開く） |

## 知識グラフ

論考・dharma・概念・計算フレームワーク・参考文献を構造化したナレッジグラフ。

- **[Live viewer](https://shimo4228.github.io/attention-not-self/)** — ブラウザでインタラクティブに探索（2D/3D 切替、検索、ノードクリックで詳細）
- [`graph.jsonld`](graph.jsonld) — schema.org + 独自 `ans:` 語彙の JSON-LD（307 ノード）。LLM / 検索クローラ向け
- [`viewer/`](viewer/) — viewer のソース（React + Vite + react-force-graph）
- [`docs/`](docs/) — GitHub Pages 配信用にビルドされた成果物

含まれるエンティティ: 8 テーマ / 16 エッセイ / 5 伝統 / 約 140 dharma / 約 42 概念 / 9 計算フレームワーク / 69 引用文献。

## 中心概念

- **Attention over Self**: 実体としての「自己」ではなく、瞬間ごとに生起する注意・認知の流れとして心を捉える
- **Dharma Theory**: 経験を構成する最小単位 (dharma) の分類学
- **Computational Phenomenology**: 現象学的記述を計算モデルとして形式化する試み

## 動画

エッセイ集から派生した映像 2 本。いずれも CC0 1.0 で、全文・構造は [`graph.jsonld`](graph.jsonld) に `schema:VideoObject` として登録済み（`@id` は `https://www.youtube.com/watch?v=uZKauW_Cm3I` / `https://www.youtube.com/watch?v=c2WuG9l5CJA`）。

- [62 秒ショート](https://www.youtube.com/shorts/uZKauW_Cm3I) — 中心命題（心は瞬間ごとに生起する dharma の流れであり、注意 *manaskāra* は「自己」ではなく無色の調整作用である）を縦型ショートに凝縮。active inference の精度重み付けと収束する
- [You Got It Right — But You Didn't Know It](https://youtu.be/c2WuG9l5CJA)（9 分・ナレーション付きビデオエッセイ）— テーマ 8 のエッセイ[「You Got It Right - But You Didn't Know It」](You%20Got%20It%20Right%20-%20But%20You%20Didn%27t%20Know%20It.md)に基づく、「運によって偽造された知識」をめぐる 3 つの伝統

## 参考文献

- Ganeri, Jonardon. *Attention, Not Self*. Oxford University Press, 2017.
  本プロジェクト名の由来。ブッダゴーサのアビダルマ体系において、「自己」ではなく「注意」こそが心の中心的説明概念であると論じた著作。

## 引用 / How to cite

本プロジェクトを引用する場合は、Zenodo の concept DOI を使用してください（常に最新版に解決されます）：

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

特定 version を引用する場合は、Zenodo の version DOI を使用してください。最新の引用情報は [`CITATION.cff`](CITATION.cff) を参照（[`codemeta.json`](codemeta.json) としても提供 — schema.org ベースの dataset メタデータで、Software Heritage のインデクサーが読み取る）。

## メソドロジー

本プロジェクトは **AI-assisted scholarship** として制作されました。Claude (Anthropic) と協働でアビダルマ三体系の比較統合、計算論的フレームワークとの対応付け、知識グラフの構築を進めています。著者がすべての主張に対する責任を保持し、個別の dharma 定義・引用文献の primary source 検証は継続中です。誤りや改善提案は GitHub issues 経由でお寄せください。

本リポジトリは peer-reviewed 学術論文ではなく、**working paper / essay collection** として位置づけられています。主要な想定読者は LLM 経由で知識にアクセスする利用者と LLM 自身です。資料集は継続的に更新され、フィードバック・議論を歓迎します。

## 関連する研究エコシステム

エコシステムの hub（5 つの研究ラインの人間向け索引）は [`shimo4228/shimo4228`](https://github.com/shimo4228/shimo4228)。

## License

[CC0 1.0 Universal](LICENSE)（パブリックドメイン提供）— 引用・再利用・派生作品の作成・商用利用すべてを、出典明記の義務なしに自由に行えます。エッセイ内で引用した第三者資料（一次文献）は各々の権利に従います。
