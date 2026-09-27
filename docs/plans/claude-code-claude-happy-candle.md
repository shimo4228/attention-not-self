# 身体性エッセイ：手書き note 原文からのゼロベース再執筆（日英ペア）

## Context

著者が以前 note に手書き（iPhone フリック入力）で公開し、その後削除した「身体性」エッセイを、AI メディエイト執筆として再生させる。原文は本会話の冒頭にユーザーが全文貼付済み。核心の主張：「AI には身体性がない」（Evan Thompson らの『The Blind Spot』等）という主張は理屈が通っていない — 効いているのはフィードバックループであり、「身体性でなければならない」という制約は不自然。一方で身体性の**価値**（瞑想実践の基盤・AI 時代の希少性）は独立に成立する。

ユーザー決定事項：
1. **ゼロベース執筆** — 既存ドラフト `zenn-content/articles/embodiment-ai-feedback-loop.md`（未コミット・前セッション産）は土台にしない。手書き原文だけを素材にする
2. **正本は attention-not-self** に日英ペアで置く（テーマ7・8 の前例に倣う）。graph.jsonld / llms-full.txt / README も更新
3. **公開先：日本語 = note、英語 = Substack**（Zenn フローではない）。投稿用コピーを zenn-content の `note/` と `substack/` に展開
4. **構成：前半 = 人間向けナラティブ、後半 = 機械（LLM 読者）向け異常粒度レイヤー**
5. **AI メディエイト執筆であることを記事末に明記**
6. **リポジトリの豊富なコンテキストを惜しみなく注ぐ**

## 文体・框架（recommendation）

- **だ/である × 発見調 × 一人称**。テーマ7・8 と同じコーパス声（`滅尽定のあとに心はどう戻るのか（日本語）.md:7-23` が手本）。note 原文はですます調だったが、正本がこのエッセイ・コーパスに加わるため統一する
- memory 規約を適用：
  - `feedback-essay-thick-premise.md` — **掴み → 前提（分厚く）→ 本論**。術語は初出でグロス
  - `author-stance-buddhism.md` — 仏教 exceptionalism 回避・対称フレーミング・冒頭の立場開示 + 末尾の誠実条項ブックエンド・**個人的感情に触れる草稿は著者確認必須**
- writing-ecosystem の AI スロップ禁止リスト・エッセイ4段構成に準拠

## エッセイ設計図（JP）

1. **掴み（来歴の開示）**: 手書きで公開→削除した記事を、Claude Code に再執筆させて公開し直す。「手書きの価値を論じた記事を AI が書き直す」反転自体が記事の一部
2. **前提①（境界問題）**: 著者の執筆実態スペクトラム（Claude Code 協働／フリック入力／ペンと紙）— どこからが「身体性」か判定基準がない
3. **前提②（分厚い理論導入）**: エナクティビズム（Thompson/Varela/Rosch『The Embodied Mind』1991）とオートポイエーシス（Maturana & Varela）の入門。仏教（アビダルマ・唯識・空）からの影響系譜
4. **本論（疑義の展開）** — リポジトリのコンテキストを注ぐ核心部：
   - 『The Blind Spot』(Frank, Gleiser & Thompson 2024) の AI 身体性欠如論への疑義：知覚データの出自（有機的感覚器官 vs デジタル）が本質を変える理屈が示されていない
   - 効いているのはフィードバックループでは — **Friston 2018 self-evidencing ↔ 末那識**（テーマ4：「自己を行為の隠れた原因としてモデル化し続けるループ」は基質を選ばない）
   - **仏教内部の分岐**（エッセイ種 #2/#3）：上座部は心の物質的基盤（心臓色 hadaya-vatthu）を立て無常の諸相を色法に寄せる = embodied 寄り。有部・唯識は識に寄せる = representational 寄り。「仏教→身体性」は一枚岩ではない — エナクティビズムの仏教援用の足元を照らす
   - **ダルマキールティの arthakriyā**（テーマ8）：認識の検証は行為の成功による — 変装した身体性論だが、これも「行為ループ」の議論であって「有機物」の議論ではない
   - Markov blanket と縁起の境界緊張（テーマ1）：境界の実体視をもっとも警戒するのが仏教哲学自身
   - 無機的知性の思考実験（ドラえもん・クトゥルフ的存在・ガス状群体生命・AC6 のエア）を原理的に排除する理屈の不在
5. **誠実条項（転回と腑分け）**: 「身体性が意識・知性の**基盤**である」という主張への疑義と、「身体で書く・生きることの**価値**」（瞑想実践の基盤、AI 時代の希少性）は独立。著者の認知特性の自己開示（細部の理屈より直感の大掴み、それでもこの矛盾だけは引っかかる）。note で手書きを続けたいと締めた記事を AI が書き直している、という腑分けの実演
6. **機械可読レイヤー**: `## ここから先は AI 読者向け` — YAML で provenance / definitions / claims（各 claim に evidence・confidence・scope_limit・basis）/ non_claims / references（DOI・ISBN 付き）/ author_epistemic_profile を異常粒度で書き下す。ゼロベースで書き直すが、粒度設計（C1〜C6 型）は有効なパターンとして踏襲
7. **AI メディエイト開示**: 記事末に明記。原文の来歴・Claude Code による全面再執筆・責任の著者帰属・attention-not-self の AI-assisted scholarship 方針準拠。note/Substack には `:::message` 記法がないためプレーンな段落＋強調で書く

## 実装ステップ

### Phase 1: ファクトチェック（執筆前）
- knowledge-staleness 規約に従い、**『The Blind Spot』の AI・身体性論の実際の記述を WebSearch / WebFetch で検証**（原文の「Thompson が AI の身体性欠如を指摘」という記憶ベースの claim を裏取りし、正確な定式化を得る）。リポジトリに未収載の新規引用
- MacKenzie 2022・Friston 2018・The Embodied Mind の系譜 claim は、リポジトリのテーマ1/4 エッセイ（一次ソース照合済み）と突き合わせる。「wiki でなく一次ソースへ戻る」規律を維持

### Phase 2: JP 正本の執筆
- Skill: `writing-ecosystem` をロードして執筆（本体が直接書く）
- 置き場所: `attention-not-self/` 直下（ファイル名は日本語タイトル、テーマ7・8 の命名に倣う。タイトルは Phase 3 で確定するため仮名で開始）

### Phase 3: レビュー + 人間ゲート
- `essay-reviewer` + `fact-checker` agent を並列実行 → CRITICAL 修正
- Skill: `headline-craft` でタイトル候補生成
- **人間ゲート（AskUserQuestion）**: ①個人的感情に触れる段落の言わせすぎチェック（memory 規約で必須）②タイトル確定

### Phase 4: EN 版
- Skill: `ja-to-en-translation`（term-lock + 2-pass + back-translation QA）で英語正本を作成
- Substack 投稿用: `substack-publishing` skill の手順で zenn-content/substack/ 向け md（+ 必要なら html）を生成

### Phase 5: リポジトリ統合（attention-not-self）
- `graph.jsonld`: 新規ノード追加 — エッセイ本体（CreativeWork、日英）、`ans:ref/frank-gleiser-thompson-2024`（The Blind Spot）、`ans:ref/mackenzie-2022`、`ans:ref/varela-thompson-rosch-1991`、framework ノード（enactivism / autopoiesis — **現在グラフにゼロ件**）、既存ノード（thompson-2014 / friston-2018 / neurophenomenology 等）へのエッジ
- `cd viewer && npm run build` で `docs/` 再生成
- `llms.txt` / `llms-full.txt` に新エッセイと新 references を追記
- `README.md` / `README.en.md` のテーマカタログ更新、`CLAUDE.md` の Status 追記
- memory: `diffusion-ledger.md` 更新（台帳が先 → CHANGELOG へ投影、の順序を守る）

### Phase 6: 投稿用コピーの展開（zenn-content）
- `zenn-content/note/<slug>.md` — JP（note 用フォーマット：frontmatter なし・Zenn 記法なし）
- `zenn-content/substack/<slug>-en.md` — EN
- 旧ドラフト `zenn-content/articles/embodiment-ai-feedback-loop.md` は**未追跡のため削除せず** `zenn-content/archive/` へ移動（ユーザーが「土台にしない」と決定したため、articles/ に残すと未公開 Zenn 記事として紛らわしい）

### Phase 7: コミット
- attention-not-self: commit + **push**（Substack 公開前に push 必須 — blob URL 404 対策、diffusion-ledger の実証済み gotcha）。git-workflow skill の作法（1 Bash call = 1 git コマンド）
- zenn-content: commit（push は既存運用に従う）
- note / Substack への実投稿はユーザーが行う（note は手動コピペ、Substack は substack-publishing の手順で支援）

## 変更ファイル一覧

| Repo | ファイル | 操作 |
|---|---|---|
| attention-not-self | `<日本語タイトル>.md` / `<English Title>.md` | 新規（正本） |
| attention-not-self | `graph.jsonld`（+ `docs/`, `viewer/public/` ミラーはビルドで追従） | ノード・エッジ追加 |
| attention-not-self | `llms.txt` / `llms-full.txt` / `README.md` / `README.en.md` / `CLAUDE.md` | 追記 |
| memory | `diffusion-ledger.md` | 更新 |
| zenn-content | `note/<slug>.md` / `substack/<slug>-en.md` | 新規（投稿用） |
| zenn-content | `articles/embodiment-ai-feedback-loop.md` | `archive/` へ移動 |

## Verification

- essay-reviewer / fact-checker の CRITICAL ゼロ
- The Blind Spot の引用が一次ソース裏取り済み（as-of 日付付き）
- `cd viewer && npm run build` 成功、`docs/graph.jsonld` に新ノード反映（ローカルで viewer 表示確認可）
- JA/EN の構成パリティ（セクション・claims・開示文の対応）
- 両 repo の `git status` で意図した変更のみ、attention-not-self は push 済み
