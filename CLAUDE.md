# attention-not-self

仏教アビダルマ × 計算論的現象学の個人探究プロジェクト。

## Tech Stack

- 資料中心（Markdown, PDF, xlsx）
- 知識グラフ: `graph.jsonld`（schema.org + 独自 `ans:` 語彙、約 284 ノード）
- Viewer: React + Vite + react-force-graph (2D/3D)、Node.js 20+
- GitHub Pages で `docs/` を配信、live URL: https://shimo4228.github.io/attention-not-self/

## Directory Structure

```
attention-not-self/
├── *.md                       # 7 テーマ × 日英の論考 14 本 + README + TABLES
├── csv/                       # 三大アビダルマ法対照表の per-sheet 出力
├── 三大アビダルマ法対照表.xlsx  # 元データ
├── graph.jsonld               # JSON-LD 知識グラフ（LLM / クローラ向け）
├── viewer/                    # React + Vite + react-force-graph (人間向け viewer ソース)
├── docs/                      # vite build 出力（GitHub Pages 配信元）
├── llms.txt / llms-full.txt   # AI-facing リファレンス
├── README.md / README.en.md   # 人間向け概要
└── CLAUDE.md                  # このファイル
```

## Conventions

- 公開リポジトリ（GitHub public）。X でリンク共有する前提
- PDF・xlsx のソースは Obsidian vault `Attention, Not Self/`（iCloud）
- vault 側で更新したら手動で `cp` し、コミットする
- 日本語・英語の両版を揃えることを優先

## Status

- 2026-04-14: 初期アップロード（論考・対照表 5ファイル）
- 2026-05-18: 知識グラフ（graph.jsonld）+ React viewer 追加。GitHub Pages 配信
- 2026-06-14: テーマ7「滅尽定と自己なき連続性」エッセイ（日英）追加。graph に Laukkonen 2023 引用。Substack 公開（英語）
- 2026-06-17: v0.3.0 release（Zenodo）。CC0 1.0 へ relicense、研究プログラム hub への federation、graph 267→284 ノード

## Graph 更新フロー

1. csv / essays / llms-full.txt の references を更新
2. `graph.jsonld` を編集（または Claude に「グラフを更新して」と依頼）
3. `cd viewer && npm run build` で `docs/` を再生成
4. commit & push（数分後に live URL に反映）

graph.jsonld のスキーマ変更時のみ viewer の `loadGraph.ts` を見直す。普段のノード追加・編集は viewer コード変更不要。
