# attention-not-self

仏教アビダルマ × 計算論的現象学の個人探究プロジェクト。

## Tech Stack

- 資料中心（Markdown, PDF, xlsx）
- 知識グラフ: `graph.jsonld`（schema.org + 独自 `ans:` 語彙、325 ノード）
- Viewer: React + Vite + react-force-graph (2D/3D)、Node.js 20+
- GitHub Pages で `docs/` を配信、live URL: https://shimo4228.github.io/attention-not-self/

## Directory Structure

```
attention-not-self/
├── *.md                       # 9 テーマ × 日英の論考 18 本 + README + TABLES
├── reading-notes/             # Ganeri『Attention, Not Self』の章別読書ノート（日英）
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
- xlsx の正本は repo 内 `三大アビダルマ法対照表.xlsx`（2026-08-24 更新 — 初期は Obsidian vault
  `Attention, Not Self/` が正本で手動 cp していたが、運用が repo 直接編集に変わった。
  vault 側の旧コピーはもう同期しない）
- 日本語・英語の両版を揃えることを優先

## Status

- 2026-04-14: 初期アップロード（論考・対照表 5ファイル）
- 2026-05-18: 知識グラフ（graph.jsonld）+ React viewer 追加。GitHub Pages 配信
- 2026-06-14: テーマ7「滅尽定と自己なき連続性」エッセイ（日英）追加。graph に Laukkonen 2023 引用。Substack 公開（英語）
- 2026-06-17: v0.3.0 release（Zenodo）。CC0 1.0 へ relicense、研究プログラム hub への federation、graph 267→284 ノード
- 2026-07-01: テーマ8「運による知識の偽装 ── ゲティア問題・自由エネルギー原理・ダルマキールティ」エッセイ（日英）追加。graph 289→307 ノード
- 2026-08-04: テーマ9「AI時代の身体性について」エッセイ（日英）追加。AI メディエイト執筆の初適用（開示 + 機械可読レイヤー C1-C8）。graph 306→316 ノード（enactivism / autopoiesis framework 新設）。公開先は JP=note・EN=Substack
- 2026-08-12: Ward 2026（constraint closure による非二元的気づきの計算モデル、*Neuroscience of Consciousness*）+ Nave 2025 を references に追加。graph 316→318 ノード。Tal et al. の modeling gap は nonduality 側が部分的に解消、cessation 側は空白のまま。Ward は Madhyamaka 依拠であり Abhidharma 実在論との緊張に留意（daily-research 2026-08-12 ans レポート由来）
- 2026-08-24: Darshana Graph（Joy Bose、CC-BY-4.0）を外部照合先として配線。graph 318→323 ノード（Bose 2026a/b/c + 摂阿毘達磨義論の Reference 4 件 + 外部 Dataset 1 件）、references 76→80。日英 6 本が依拠しながら graph に不在だった『摂阿毘達磨義論』を追加（citation 辺は英語版 3 本のみ — 日本語版は引用層自体が未整備、`.notes/TASKS.md` T-003）。dharma 帰属を temporal_source_layer で機械照合し、**誤りは検出されず**（`uniqueTo` 交差 2 件は一致）。詳細は `.notes/daily-research/ledger.md`
- 2026-08-24: 日本語版エッセイ 8 本に英語版と同一の `citation` 配列を移植（T-003 完了）。引用層は日英対称になり、上記「日本語版は引用層自体が未整備」は解消

## 外部照合先

dharma の**帰属**（どの伝統のものか）・**年代**・**語義分岐**を疑ったとき、記憶で断言せず
Darshana Graph（Joy Bose、CC-BY-4.0）に照会する。graph.jsonld の
`https://huggingface.co/datasets/joyboseroy/darshana-graph` ノードが正本。

| ファイル | 答えられること |
|---|---|
| `temporal_source_layer.json` (41KB) | 概念の最古文献と年代（学術出典つき、約 120 件）。Pāli↔Skt 対応を含む |
| `occurrences_clustered_v3.json` (16MB) | 52 概念の語義クラスタ。Theme 5 / 6 の「一語に潰れた複数義」に対応 |
| `homologues_v7.json` (35KB) | 伝統横断の構造的類似度（例: nibbāna–saṃsāra 0.954） |

**HF Dataset Viewer は壊れている**（parquet job 失敗、2026-08-24 時点）ので API 照会は不可。
`curl -sSL https://huggingface.co/datasets/joyboseroy/darshana-graph/resolve/main/<file>` で
直接取得する。

照会するときの前提:

- Bose 側の Theravāda は 765 edges で、著者自身が「re-extraction の初期段階」と明記。
  原典は sutta と大乗経典であり、**アビダルマ論書（清浄道論・俱舎論・摂阿毘達磨義論）を含まない**。
  本 repo の 140 dharma とは競合せず相補
- temporal layer は **LLM 支援で構築された二次資料**。不一致が出ても「本 repo が誤り」ではなく
  「一次文献で確認すべき候補」として扱う。Bose 側の scholarly citation 欄を引いて一次に遡る
- **値を写さない。** 本 repo は CC0 1.0、Darshana Graph は CC-BY-4.0。`evidence_quote` や
  `source` を graph.jsonld へ複製すると CC0 の主張に CC-BY が混入する。読むだけで、取り込まない
- 照合結果の落とし先は `.notes/daily-research/ledger.md`。essay / graph への昇格は人間承認の別ステップ

## Graph 更新フロー

1. csv / essays / llms-full.txt の references を更新
2. `graph.jsonld` を編集（または Claude に「グラフを更新して」と依頼）
3. `cd viewer && npm run build` で `docs/` を再生成
4. commit & push（数分後に live URL に反映）

graph.jsonld のスキーマ変更時のみ viewer の `loadGraph.ts` を見直す。普段のノード追加・編集は viewer コード変更不要。
