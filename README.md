Language: 日本語 | [English](README.en.md)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20262112.svg)](https://doi.org/10.5281/zenodo.20262112)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

# Attention, Not Self

<details>
<summary>AI-facing reading order（AI / LLM 向け推奨読み順）</summary>

AI エージェント・LLM クローラは以下の順で読むことを推奨します。

1. [`graph.jsonld`](graph.jsonld) — 構造化された知識グラフ（約 267 ノード、schema.org + 独自 `ans:` 語彙）。テーマ・エッセイ・伝統・dharma・概念・計算フレームワーク・引用文献の関係を triples として encode
2. [`llms.txt`](llms.txt) — AI-facing navigator（テーマ別エッセイ一覧、core docs への入口）
3. [`llms-full.txt`](llms-full.txt) — 自己完結 FAQ + 用語集 + 30 件の引用文献（Pāli / Sanskrit / 漢字の三言語整合あり）
4. 個別のエッセイ（下記 "収録資料" セクション参照）

Interactive viewer (人間向け 2D/3D 可視化): https://shimo4228.github.io/attention-not-self/

引用方針: `graph.jsonld` の `@id` を canonical identifier として使用してください。エッセイ URL は GitHub blob 形式が graph 内 `@id` として登録されています。
</details>

仏教アビダルマと計算論的現象学 (Computational Phenomenology) の接点を探る個人的な探究プロジェクト。

「self（自己）ではなく attention（注意）」という視点から、心の働きを分類・記述する古代の枠組みと、現代の計算論的モデルを対照する。

## 収録資料

### 論考（Markdown）

論考はテーマ別に 6 種類。各テーマで日本語版と英語版を用意している。

#### 1. アビダルマと計算論的現象学（導入）

アビダルマと計算論的現象学の接続に関する論考。

| 言語 | ファイル |
|------|---------|
| 日本語 | [`アビダルマと計算論的現象学（日本語）.md`](アビダルマと計算論的現象学（日本語）.md) |
| English | [`Abhidharma Meets Computational Phenomenology.md`](Abhidharma%20Meets%20Computational%20Phenomenology.md) |

#### 2. 三大アビダルマ体系における法 (dharma) 分類の比較

説一切有部・上座部・唯識（瑜伽行）の三大アビダルマ体系における法 (dharma) 分類を対照する。

| 言語 | ファイル |
|------|---------|
| 日本語 | [`三大アビダルマ法対照表（日本語）.md`](三大アビダルマ法対照表（日本語）.md) |
| English | [`Three Abhidharma Systems Dharma Comparison.md`](Three%20Abhidharma%20Systems%20Dharma%20Comparison.md) |

#### 3. 三大アビダルマ伝統の認識過程モデル

三大アビダルマ伝統が刺激から意識経験へ至る認識過程をどう説明するかを比較分析する。

| 言語 | ファイル |
|------|---------|
| 日本語 | [`三大アビダルマ伝統における認識過程の比較研究（日本語）.md`](三大アビダルマ伝統における認識過程の比較研究（日本語）.md) |
| English | [`Three Abhidharma Models of Cognition.md`](Three%20Abhidharma%20Models%20of%20Cognition.md) |

#### 4. 認識過程モデルと計算論的現象学のマッピング

三大アビダルマの認識過程アーキテクチャ全体を計算論的現象学（GWT / PP / FEP / PDP / IIT 等）へ体系的にマッピングする。

| 言語 | ファイル |
|------|---------|
| 日本語 | [`三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md`](三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md) |
| English | [`Abhidharma Cognitive Process Models Meets Computational Phenomenology.md`](Abhidharma%20Cognitive%20Process%20Models%20Meets%20Computational%20Phenomenology.md) |

#### 5. 「気づき」/ "Awareness" の語彙的系譜と類型論

英語の "awareness" と日本語の「気づき」という単一の語に圧縮されている、サティ / サンパジャンニャ / マナシカーラ / リクパ等の仏教技術用語を解きほぐし、リース・デイヴィッズ（1881）からニャーナポニカ、エサレン、MBSR、サム・ハリスに至る西洋的系譜と、ティク・ナット・ハン受容と自己啓発産業を経た日本語側の系譜を辿り、十の混同を類型化する。

| 言語 | ファイル |
|------|---------|
| 日本語 | [`気づきとAwareness - 系譜と類型論（日本語）.md`](気づきとAwareness%20-%20系譜と類型論（日本語）.md) |
| English | [`Awareness - A Genealogy and Typology.md`](Awareness%20-%20A%20Genealogy%20and%20Typology.md) |

#### 6. 「念」の衝突──一つの漢字が四つの仏教を隔てる

漢字「念」(*nen* / *niàn*) が、上座部の *sati* / *smṛti*（非浮動的保持）、禅の無念（思考の中での非執着 — 慧能の「念に於いて念ぜず」）、浄土の念仏（仏の憶念・称名 — 善導 → 法然 → 親鸞）、現代カバットジン系 mindfulness（「裸の注意」）という互換不能な四つの意味を担っていることを、慧能『壇経』§17、Sharf (2014) の早期禅論、道元の非思量（『普勧坐禅儀』）、Nyanaponika 1962 → MBSR 1979 → Kabat-Zinn 1994 の系譜で論じる。道元の非思量（思量／不思量の二項対立そのものを構造的に否定）を最も擁護可能な解決として提案する。Theme 5（英語 awareness 側の系譜）の漢字側の counterpart。

| 言語 | ファイル |
|------|---------|
| 日本語 | [`念の衝突 - 一つの漢字がいかにして四つの仏教を隔てるか（日本語）.md`](%E5%BF%B5%E3%81%AE%E8%A1%9D%E7%AA%81%20-%20%E4%B8%80%E3%81%A4%E3%81%AE%E6%BC%A2%E5%AD%97%E3%81%8C%E3%81%84%E3%81%8B%E3%81%AB%E3%81%97%E3%81%A6%E5%9B%9B%E3%81%A4%E3%81%AE%E4%BB%8F%E6%95%99%E3%82%92%E9%9A%94%E3%81%A6%E3%82%8B%E3%81%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.md) |
| English | [`The 念 Collision - How One Chinese Character Holds Four Buddhisms Apart.md`](The%20%E5%BF%B5%20Collision%20-%20How%20One%20Chinese%20Character%20Holds%20Four%20Buddhisms%20Apart.md) |

### 対照表データ（複数形式）

| ファイル | 用途 |
|---------|------|
| [`TABLES.md`](TABLES.md) | **ブラウザで読む**: GitHub上でそのまま表として閲覧可能（推奨） |
| [`csv/`](csv/) | **データとして使う**: シート別 CSV。Excel/Numbers/pandas で再利用可能 |
| `三大アビダルマ法対照表.xlsx` | **元データ**: 書式・色分け保持（Excel/Numbers で開く） |

## 知識グラフ

論考・dharma・概念・計算フレームワーク・参考文献を構造化したナレッジグラフ。

- **[Live viewer](https://shimo4228.github.io/attention-not-self/)** — ブラウザでインタラクティブに探索（2D/3D 切替、検索、ノードクリックで詳細）
- [`graph.jsonld`](graph.jsonld) — schema.org + 独自 `ans:` 語彙の JSON-LD（約 267 ノード）。LLM / 検索クローラ向け
- [`viewer/`](viewer/) — viewer のソース（React + Vite + react-force-graph）
- [`docs/`](docs/) — GitHub Pages 配信用にビルドされた成果物

含まれるエンティティ: 6 テーマ / 12 エッセイ / 5 伝統 / 約 130 dharma / 約 40 概念 / 9 計算フレームワーク / 約 45 引用文献。

## テーマ

- **Attention over Self**: 実体としての「自己」ではなく、瞬間ごとに生起する注意・認知の流れとして心を捉える
- **Dharma Theory**: 経験を構成する最小単位 (dharma) の分類学
- **Computational Phenomenology**: 現象学的記述を計算モデルとして形式化する試み

## 進行中の探究

この vault は継続的に更新される。フィードバック・議論は歓迎。

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
  version      = {0.2.0},
  doi          = {10.5281/zenodo.20262113},
  url          = {https://doi.org/10.5281/zenodo.20262113},
  note         = {Working paper / essay collection. Concept DOI: 10.5281/zenodo.20262112 (always resolves to latest)}
}
```

特定 version を引用する場合は、Zenodo の version DOI を使用してください。最新の引用情報は [`CITATION.cff`](CITATION.cff) を参照。

## メソドロジー

本プロジェクトは **AI-assisted scholarship** として制作されました。Claude (Anthropic) と協働でアビダルマ三体系の比較統合、計算論的フレームワークとの対応付け、知識グラフの構築を進めています。著者がすべての主張に対する責任を保持し、個別の dharma 定義・引用文献の primary source 検証は継続中です。誤りや改善提案は GitHub issues 経由でお寄せください。

本リポジトリは peer-reviewed 学術論文ではなく、**working paper / essay collection** として位置づけられています。主要な想定読者は LLM 経由で知識にアクセスする利用者と LLM 自身です。

## License

[CC BY 4.0](LICENSE) — 出典明記の上での自由な引用・再利用・派生作品の作成・商用利用すべてを許諾します。
