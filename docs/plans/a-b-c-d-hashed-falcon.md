# Darshana Graph を参照先として配線し（A）、帰属を 1 回照合する（B）

## Context

daily-research 2026-08-24 レポート（`ans_philosophical-kg-attribution-bias`）が、Joy Bose の
Darshana Graph（arXiv:2606.18222 / 2606.29070 / 2606.25372、HF `joyboseroy/darshana-graph`、
CC-BY-4.0）を報告した。本 repo と同種の成果物 — インド哲学の text-grounded ナレッジグラフ —
でありながら、辺ごとに `source` / `evidence_quote` / `confidence` を持つ点が違う。

本セッションで一次確認した結果、**「参照先に加える」の実体は edges 本体ではなく派生 3 ファイル**
だと分かった。HF Dataset Viewer は 500 で壊れており（parquet job 失敗）API 照会はできないが、
raw file は数十 KB で直接落とせる:

| ファイル | 何を照会できるか |
|---|---|
| `temporal_source_layer.json` (41KB) | 概念の最古文献と年代、学術出典つき。約 120 concept-datings、Pāli↔Skt 対応を含む |
| `occurrences_clustered_v3.json` (16MB) | 52 概念の語義クラスタ（同語異義の分離） |
| `homologues_v7.json` (35KB) | 伝統横断の構造的類似度（nibbāna–saṃsāra 0.954、cetanā–ajīva 0.923） |

同時に、本 repo 側の 2 つの穴が確認された:

1. **Abhidhammattha Saṅgaha が graph.jsonld に不在。** 日英 6 本のエッセイが依拠しているのに
   76 Reference ノードに 1 件も無い（`grep -c` で確認）。
2. **カウント drift。** `llms.txt:11,17` と `CLAUDE.md:8`、`llms-full.txt:167` が「306 ノード」
   のまま（実際は 318）。`llms.txt:17` はさらに「8 themes / 16 essays / 69 references」と古い。

本作業のゴールは (A) 次に何かを疑ったとき機械的に引ける参照先を配線すること、
(B) その参照先を使って repo の帰属主張を実際に 1 回照合し、結果を ledger に残すこと。

C（dharma ノードへの出典欄）と D（相補性の相互言及）は着手せず、タスク台帳に積む。

---

## A. 参照先の配線

### A-1. `graph.jsonld` — 5 ノード追加（318 → 323）

直近の Ward/Nave コミット `6e279b6` が完全なテンプレート。同じ編集形状に揃える。

Reference ノード 4 件（`ans:Reference` + `schema:ScholarlyArticle`、`ward-2026` と同じ形。
`identifier` / `url` / `alternateName[@language:en]` の完全書誌 / `description`）:

- `ans:ref/bose-2026a` — Darshana Graph corpus paper, arXiv:2606.18222
- `ans:ref/bose-2026b` — Attribution bias, arXiv:2606.29070
- `ans:ref/bose-2026c` — Pali Canon stylometry, arXiv:2606.25372
- `ans:ref/anuruddha-sangaha` — Anuruddha, *Abhidhammattha Saṅgaha*（11–12c CE）

`description` には Ward ノードと同じ規律で**留保を書き込む**:
Bose の temporal layer は LLM 支援で構築された二次資料であること、Theravāda 側は 765 edges
（著者自身が「re-extraction の初期段階」と明記）でアビダルマ論書（Visuddhimagga / 俱舎論 /
摂義論）を原典に含まないこと。

Dataset ノード 1 件 — `https://huggingface.co/datasets/joyboseroy/darshana-graph`
（`schema:Dataset`、`license` = CC-BY-4.0、`citation` → bose-2026a/b/c）。
`loadGraph.ts:113` が `Dataset` を描画スキップするので **viewer には出ず機械可読層のみに載る**。
これは repo 自身の Dataset ノードと同じ扱いで、意図通り。

辺の張り方（Ward/Nave の前例に合わせ、視覚的な孤立を避ける）:

- `bose-2026b` → `mentions`: `ans:dharma/cetana`, `ans:concept/nirvana`
  （homology 分析が実際にこの 2 語を測っているため。無関係な辺は張らない）
- `bose-2026c` → `mentions`: `ans:ref/anuruddha-sangaha` ではなく `buildsOn: ans:ref/bose-2026a`
- `anuruddha-sangaha` ← `citation` 辺を、実際に引用している 6 essay ノードから張る
  （`Three Abhidharma Models of Cognition` / `Abhidharma Cognitive Process Models Meets
  Computational Phenomenology` / `Awareness - A Genealogy and Typology` と各日本語版）

**エッセイ本文は変更しない。** graph と AI 向け doc に閉じた変更にする。

### A-2. `CLAUDE.md` — 「外部照合先」節を新設

`## Graph 更新フロー` の前に置く。書く内容は次の 4 点に限る（手順書ではなく配線）:

- 帰属・年代・語義分岐を疑ったときに引く 3 ファイルと、それぞれ何が答えられるか
- **HF Dataset Viewer は壊れている**ので raw URL を `curl` する旨（`https://huggingface.co/datasets/joyboseroy/darshana-graph/resolve/main/<file>`）
- Bose 側の限界（Theravāda 765 edges、アビダルマ論書なし、LLM 支援の二次資料）
- 照合結果の落とし先は `.notes/daily-research/ledger.md`、昇格は人間承認の別ステップ

### A-3. `README.md` / `README.en.md` — 外部データセットの帰属表示

**CC-BY-4.0 は帰属表示を license 上要求する**ので、人間向け表面での明示は作法であると同時に
義務側にある。ただし既存の `## 参考文献` / `## References` は Ganeri 1 件だけの節で、
「プロジェクト名の由来」という特別枠として機能している。ここに並べると性格が変わるので、
**小節を分ける**。

```markdown
## 参考文献

- Ganeri, Jonardon. *Attention, Not Self*. ...（既存、変更なし）

### 照合に用いる外部データセット

- Bose, Joy. *Darshana Graph: A Text-Grounded Knowledge Graph of Indian Philosophy*.
  Hugging Face Datasets, 2026. [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) —
  <https://huggingface.co/datasets/joyboseroy/darshana-graph>
  本 repo の dharma 帰属・年代・語義分岐の照合先として参照している。**改変・再配布は行っていない**
  （データは本 repo に取り込まず、照合時にのみ取得する）。関連論文: arXiv:2606.18222 /
  arXiv:2606.29070 / arXiv:2606.25372
```

CC-BY の帰属要件（creator / title / license とリンク / 改変の有無）をすべて満たす書式にする。
`README.en.md:74` の `## References` にも同じ構造で英語版を置く。

### A-4. AI 向け doc とカウント同期

- `llms-full.txt` — Prior Research References 表に 4 行追加（76 → 80）、`:167` の「306 nodes」→ 323、`:169` の references 数を更新
- `llms.txt` — `:11` と `:17` の drift を実数に修正（`:17` は themes/essays/frameworks/references も現況に）
- `README.md` / `README.en.md` — 318 → 323（4 箇所）
- `CLAUDE.md` — `:8` の 306 → 323、Status に 2026-08-24 の行を追加

---

## B. temporal_source_layer による帰属の照合

**出力は `.notes/daily-research/ledger.md` への追記のみ。graph とエッセイの中身は変えない**
（既存 ledger ヘッダの規約：昇格は人間承認の別ステップ）。

1. scratchpad に `temporal_source_layer.json` と `homologues_v7.json` を取得
   （`/private/tmp/claude-501/.../scratchpad`。repo には置かない）
2. `graph.jsonld` から照合語彙を抽出 — 140 dharma の `sanskritName` / `paliName`、
   42 concept の `name`。diacritic を落として正規化し、Bose 側の Pāli↔Skt 対応表と突き合わせる
3. **41 件の `uniqueTo` を最優先で照合する。** これは「この法は伝統 X 固有」という repo の
   最も強く、最も反証可能な主張であり、Bose の earliest-tradition と正面から衝突しうる
   （例: `hadaya-vatthu` → theravada、`manas` → yogacara、`avijnapti-rupa` → sarvastivada）
4. 差分を 3 分類して記録する:
   - (a) **帰属衝突** — repo が X 固有とするが Bose はより早い別伝統の出現を記録
   - (b) **年代の含意** — repo が年代を書いていない箇所に Bose が出典つき年代を持つ
   - (c) **語義分岐** — `occurrences_clustered_v3.json` の sense cluster が、repo の
     単一ノード扱い（cross-tradition de-duplication）と衝突する。Theme 5 / 6 の論点に直結
5. ledger に新規 ingest エントリを追記。既存フォーマット（一次検証テーブル / 候補 rank /
   landing slot / やらないと決めたこと）に厳密に合わせる

**判定規律**: ミスマッチが出ても「repo が誤り」とは書かない。Bose の temporal layer は
LLM 支援の二次資料なので、`temporal_source_layer.json` が持つ scholarly citation 欄を
そのまま引き、**一次文献での確認を要する候補**として記録する。ゼロ件でも
「照合済み・不一致なし」という事実を残す — どちらでも価値がある。

---

## C / D — タスク台帳に登録

`.notes/TASKS.md` を新規作成（単一表形式。この repo は小さく、store 形式は過剰。
`.notes/` は `.gitignore:18` 配下なのでローカル限定 — 既存 2 ledger と同じ扱い）。

- **C: dharma ノードの帰属に出典欄** — `state: candidate`。
  当初「死んだ `evidenceQuality` を復活」と見たが**誤りで、`mapsTo` 辺の 5 箇所で既に生きている**
  （`graph.jsonld:2426` ほか）。よって C は新語彙の導入ではなく、**既存の辺修飾パターンを
  `tradition` 辺へ広げる**話になる。`loadGraph.ts:82` の `targetFromValue` が
  `{@id, evidenceQuality}` を全辺フィールドで汎用にパースするため viewer は壊れない
  （`source` / `evidenceQuote` は黙って捨てられるだけ、表示には loadGraph 改修が要る）。
  420 の帰属を一括で埋めるのは非現実的なので、段階案（新規ノードは必須 + 既存は対照表の
  sheet 単位）を ADR に書いてから着手。B の結果が動機の実測になる。
  **license 制約（ADR に必ず書く）**: 本 repo は CC0 1.0、Darshana Graph は CC-BY-4.0。
  Bose の `evidence_quote` / `source` の値を `graph.jsonld` へ写すと、CC0 を掲げた成果物に
  CC-BY コンテンツが混入する。出典欄は**この repo 自身の対照表・一次文献を典拠に自前で書く**。
  Bose は「別の主張と突き合わせるための照合先」であって出典欄の供給源ではない。
- **D: Darshana Graph との相補性の相互言及** — `state: candidate`。
  `shimo4228/attention-not-self`（HF、DL 91）が既にあり、双方 CC ライセンス。
  Bose 側は Theravāda 765 edges でアビダルマ法体系を持たず、本 repo の 140 dharma ×
  三言語整合はその空白側。dataset カードでの相互言及が実行可能。skill `hf-sync` が既存。

---

## 検証

```bash
# A: JSON-LD の妥当性とノード数
python3 -c "import json; g=json.load(open('graph.jsonld')); print(len(g['@graph']))"   # 323
python3 -c "
import json; g=json.load(open('graph.jsonld'))
refs=[n for n in g['@graph'] if 'ans:Reference' in (n.get('@type') or [])]; print(len(refs))  # 80
ids={n['@id'] for n in g['@graph']}
bad=[(n['@id'],t) for n in g['@graph'] for f in ('citation','mentions','buildsOn')
     for v in ([n[f]] if isinstance(n.get(f),(str,dict)) else n.get(f,[]))
     for t in [v if isinstance(v,str) else v.get('@id')] if t not in ids]
print('dangling:', bad)   # []
"
# viewer 再ビルド（public/ へのコピーは vite plugin が buildStart で行う）
cd viewer && npm run build && cd ..
cmp graph.jsonld docs/graph.jsonld && echo "docs 同期 OK"
grep -c "bose-2026b" docs/index.html   # 埋め込み JSON-LD に載っているか

# カウント drift が残っていないか
grep -rn "306 nodes\|306 ノード\|69 references\|76 prior" README.md README.en.md CLAUDE.md llms.txt llms-full.txt   # 0 hit

# CC-BY 帰属が人間向け表面に出ているか（日英とも）
grep -n "darshana-graph\|CC BY 4.0" README.md README.en.md   # 各 2 hit
# 逆に、CC-BY データを取り込んでいないこと
git status --porcelain | grep -i "darshana\|temporal_source\|homologues"   # 0 hit

# B: ledger に追記されたか
tail -40 .notes/daily-research/ledger.md
```

コミットは A（graph + doc）と B（ledger は gitignore 下なので commit 対象外）で分ける。
A のコミットメッセージは `6e279b6` の形式に合わせ、Source 行に daily-research 2026-08-24 を書く。

## 触らないもの

- **エッセイ本文 16 本** — 帰属衝突が出ても本文改稿は人間承認の別ステップ
- **`docs/adr/`** — C の ADR は B の結果を見てから書く
- **既存 dharma ノードの `tradition` / `uniqueTo`** — C の範囲
- **Darshana の raw file を repo に置くこと** — scratchpad 限定。理由は 2 つあり、容量
  （corpus は 86MB）だけでなく **license 衛生**が本命: 本 repo は CC0 1.0 を掲げており、
  CC-BY-4.0 のデータを取り込むとその主張が濁る。B でも「読む」だけで、値は写さない
