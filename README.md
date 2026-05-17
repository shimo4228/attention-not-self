Language: 日本語 | [English](README.en.md)

# Attention, Not Self

<details>
<summary>AI-facing reading order（AI / LLM 向け推奨読み順）</summary>

AI エージェント・LLM クローラは以下の順で読むことを推奨します。

1. [`graph.jsonld`](graph.jsonld) — 構造化された知識グラフ（約 238 ノード、schema.org + 独自 `ans:` 語彙）。テーマ・エッセイ・伝統・dharma・概念・計算フレームワーク・引用文献の関係を triples として encode
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

論考はテーマ別に 5 種類。各テーマで日本語版と英語版を用意している。

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

### 対照表データ（複数形式）

| ファイル | 用途 |
|---------|------|
| [`TABLES.md`](TABLES.md) | **ブラウザで読む**: GitHub上でそのまま表として閲覧可能（推奨） |
| [`csv/`](csv/) | **データとして使う**: シート別 CSV。Excel/Numbers/pandas で再利用可能 |
| `三大アビダルマ法対照表.xlsx` | **元データ**: 書式・色分け保持（Excel/Numbers で開く） |

## 知識グラフ

論考・dharma・概念・計算フレームワーク・参考文献を構造化したナレッジグラフ。

- **[Live viewer](https://shimo4228.github.io/attention-not-self/)** — ブラウザでインタラクティブに探索（2D/3D 切替、検索、ノードクリックで詳細）
- [`graph.jsonld`](graph.jsonld) — schema.org + 独自 `ans:` 語彙の JSON-LD（約 238 ノード）。LLM / 検索クローラ向け
- [`viewer/`](viewer/) — viewer のソース（React + Vite + react-force-graph）
- [`docs/`](docs/) — GitHub Pages 配信用にビルドされた成果物

含まれるエンティティ: 5 テーマ / 10 エッセイ / 3 伝統 / 約 130 dharma / 約 30 概念 / 6 計算フレームワーク / 約 30 引用文献。

## テーマ

- **Attention over Self**: 実体としての「自己」ではなく、瞬間ごとに生起する注意・認知の流れとして心を捉える
- **Dharma Theory**: 経験を構成する最小単位 (dharma) の分類学
- **Computational Phenomenology**: 現象学的記述を計算モデルとして形式化する試み

## 進行中の探究

この vault は継続的に更新される。フィードバック・議論は歓迎。

## 参考文献

- Ganeri, Jonardon. *Attention, Not Self*. Oxford University Press, 2017.
  本プロジェクト名の由来。ブッダゴーサのアビダルマ体系において、「自己」ではなく「注意」こそが心の中心的説明概念であると論じた著作。

## License

資料の性質上、ライセンス未定。引用・参照時は出典を明記してください。
