# README 全面書き直し計画 — attention-not-self

## Context

現在の README.md / README.en.md は、lead 直後・収録資料より前に「動画」セクション（YouTube 2 本、計 13 行）が一等地を占めており、「エッセイ集 + 知識グラフの研究 repo」という趣旨が歪んで見える。加えてテーマ 5〜8 の説明が 5〜8 行の長文段落で、テーマごとの言語別テーブルが 8 個並び、走査性が低い（収録資料セクションだけで約 80 行）。

ユーザー確認済みの方針:
- **動画**: テーマ 8 の行に動画リンク（🎬）を統合 + README 下部に小さな「動画」節（62 秒ショートはこちらのみ）
- **テーマ一覧**: 1 テーマ 1 行の一覧表に圧縮（テーマ名 + 一行要約 + 日英リンク）

種別: `writing` → readme-writer chain（Writing Chain 準拠）。

## 対象ファイル

- `README.md`（日本語・正本）
- `README.en.md`（英語・従属版。同じ構造で書き直す）

## 新しい構成（両言語共通）

1. Language 行 + badge 4 個（DOI / DeepWiki / GitMCP / CC0）— 現状維持
2. H1 `Attention, Not Self`
3. `<details>` AI-facing reading order — 現状維持（変更なし）
4. **Lead** — 現状の 3 段落（identity 文 + 視点 + 構造対応の主張）はフロアとして良質なのでほぼ維持。軽く磨く程度
5. **収録資料 / Contents**
   - 論考: **8 行の一覧表**。列 = `# | テーマ | 一行要約 | 日本語 | English`。テーマ 8 の行に 🎬（9 分ビデオエッセイ https://youtu.be/c2WuG9l5CJA）リンクを追加。各テーマの長文説明は削除（詳細は各エッセイ冒頭が担う — relocate でなく、エッセイ本体に既にある情報なので README 側は要約のみで情報損失なし）
   - 対照表データ表（TABLES.md / csv/ / xlsx）— 現状維持
6. **知識グラフ** — 現状維持（Live viewer / graph.jsonld / viewer/ / docs/ + エンティティ数の一文）
7. **テーマ**（3 つの core concept 定義: Attention over Self / Dharma Theory / Computational Phenomenology）— フロア要素（core concept 定義）なので維持
8. **動画**（新しい下部小節・コンパクト）
   - 62 秒縦型ショート: 一行説明 + リンク
   - 9 分ビデオエッセイ「You Got It Right」: 一行説明 + リンク（テーマ 8 エッセイ基盤である旨）
   - CC0 1.0 / graph.jsonld に `schema:VideoObject` として登録済み、を 1 行にまとめる（現在は動画ごとに 2 行ずつ重複）
9. 参考文献（Ganeri 2017）— 現状維持
10. 引用 / How to cite（BibTeX + CITATION.cff / codemeta.json ポインタ）— 現状維持（フロア: DOI + how-to-cite）
11. メソドロジー — 現状維持（軽く整えるのみ。主張は変えない）
12. 関連する研究エコシステム — 現状維持
13. License — 現状維持

### フロア保全（readme-writer の非交渉コア）

- identity 文（lead 冒頭）・DOI + BibTeX・core concept 定義（テーマ節）・エンティティ数値・動画の VideoObject 登録事実は**削らない**
- 事実・主張は一切変えない（cloaking 回避 — llms.txt / graph.jsonld との fact 一致を崩さない）。梱包（配置・圧縮）のみ変更
- 一行要約は現行の長文説明から抽出（新しい主張を作らない）

## Chain（Writing Chain / readme-writer workflow）

1. **Draft**: README.md → README.en.md の順に書き直し（日本語が正本）
2. **Code filter**: `uv run --directory ~/.claude/skills/readme-writer python -m scripts.readme_lint <絶対パス>` を両ファイルに実行。exit 0 必須
3. **LLM review（並列）**:
   - Parallel Group: [readme-reviewer agent, codex-review（prompt-driven モード — 公開 repo README なので条件付き Y）]
   - MAJOR ISSUES → 停止・報告 / NEEDS REVISION → 修正して継続
4. **Fact 一致確認**: 書き直しで数値・事実を変えていないことを確認（307 ノード、エンティティ数、DOI、動画 URL 等は現行値をそのまま使用）
5. **人間 gate**: diff 提示 → 承認後に commit（`docs: rewrite README — demote videos, compress theme catalog`）

## Verification

- `readme_lint.py` が両ファイルで exit 0（single_h1 / heading_levels / local_link / alt_text）
- 一覧表の全リンク（日英 16 エッセイ + 動画 2 本）が実ファイル / 実 URL に解決すること（local_link チェック + 日本語ファイル名の URL エンコードに注意 — 現行 README のエンコード済みリンクを再利用）
- readme-reviewer verdict が GOOD 以上
- `git status` で README.md / README.en.md のみが変更されていること（graph.jsonld / llms.txt は触らない）
