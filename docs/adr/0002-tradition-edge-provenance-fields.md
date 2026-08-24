# ADR-0002: tradition 辺の意味論定義と出典欄（provenance fields）

## Status

Accepted

## Date

2026-08-24

## Context

`graph.jsonld` は 140 の `ans:Dharma` ノードを持ち、各ノードは計 257 本の `tradition` 辺で
いずれかの部派・学派に紐付けられている（2026-08-24 実測、全ノードが 1 本以上の `tradition`
辺を持つ）。一方で、その帰属の根拠を記録する欄は 0 件である — `citation` フィールドを持つ
Dharma ノードは存在しない。257 本の帰属主張はすべて、検証可能な出典なしに公開されている。

さらに `tradition` 辺の意味論はスキーマのどこにも明文化されていない。外部の読み手（人間・
crawler・LLM いずれも）は、明示の定義が無い以上、この辺を「起源（origination）の主張」——
すなわち「その法はこの伝統に由来する」——として素朴に読んでしまう余地がある。

この読み違いのリスクは仮説ではなく実例で確認されている。2026-08-24 の Darshana Graph
（Joy Bose、CC-BY-4.0）照合（`.notes/daily-research/ledger.md`）で次が判明した:

- `ans:dharma/ahimsa` は本 repo では説一切有部・唯識に帰属しているが、ahiṃsā という語の
  最古出現はジャイナ教『アーチャーラーンガ経』（500–400 BCE）である。説一切有部・唯識への
  帰属を起源の主張として読むと、この最古出現と矛盾する。
- `ans:dharma/citta` も同様に sarvastivada 単独への帰属であり、同じ誤読リスクを抱える。

これらの帰属自体は本 repo の三大アビダルマ法対照表（`csv/`, `三大アビダルマ法対照表.xlsx`）に
基づく list-membership（当該伝統の法リストに独立項目として載っているという事実）としては
成立している。問題は、その意味論が読み手に伝わる形で書かれておらず、かつ根拠となる一次文献が
記録されていない点にある。

## Decision

1. `tradition` 辺の意味論を **list-membership**（「その伝統の法リストに独立項目として
   載っている」）として定義し、起源（origination）の主張ではないことをスキーマ記述に明記する。
2. 出典欄は既存の辺修飾パターンを拡張して追加する。`mapsTo` 辺は既に
   `{"@id": "ans:framework/gwt", "evidenceQuality": "strong"}` という形式で辺自体を
   修飾している（graph.jsonld 実例）。`tradition` 辺にも同じ形式 —
   `{"@id": ..., "source": ...}` — で出典を付与できるようにする。viewer の
   `targetFromValue`（`viewer/src/lib/loadGraph.ts:82`）は `{@id, ...}` を全辺フィールドに
   ついて汎用的にパースするため、この拡張は非破壊である — 追加フィールドは表示されず
   単に捨てられる。表示への対応は本 ADR の対象外とし、将来の別判断とする。
3. license 境界を設ける。出典値は本 repo 自身の対照表（`csv/`、
   `三大アビダルマ法対照表.xlsx`）と一次文献のみを典拠として自前で記述する。Darshana Graph
   （CC-BY-4.0）の `evidence_quote` や `source` の値はそのまま複製しない — 本 repo の
   CC0 1.0 を維持するためである。Darshana Graph は突き合わせる相手であって、出典欄の
   供給源ではない。
4. 段階的に導入する。(a) 新規に追加する Dharma ノードは出典を必須とする。(b) 既存の
   257 本の辺は、対照表の sheet 単位で backfill する。いずれの作業も `@id` は変更しない
   （`@id` の安定性は [ADR-0001](./0001-flat-layout-essay-paths-as-canonical-ids.md) の
   別レイヤーの判断であり、本 ADR はそこに触れない）。

## Review-when

- viewer で辺修飾（`source` 等）を実際に表示する改修に着手した時（`loadGraph.ts` 側の
  改修が必要になる）。
- `{@id, ...}` 形式の辺修飾によって外部 consumer（schema.org 系 crawler 等）が壊れる
  実例が観測された時。
- list-membership という定義では不十分だと、外部照合（Darshana Graph 等）によって
  判明した時。

## Alternatives Considered

### 帰属ごとの reified ノード化

例えば `ans:attribution/xxx` のような中間ノードを作り、帰属ごとに独立したエンティティとして
表現する案。表現力は最大だが、ノード数が +257 になり、viewer の描画負荷と `graph.jsonld` の
ファイルサイズへの負担が過大になる。却下。

### 出典を別ファイル（`sources.json` 等）に分離

帰属の出典情報を `graph.jsonld` の外に置く案。`graph.jsonld` を単体で self-contained に保ち
LLM / crawler が単一ファイルから読める、という既存設計と矛盾する。却下。

### 現状維持（何もしない）

出典欄を追加せず、`tradition` 辺の意味論も定義しないまま据え置く案。誤読の実例（ahimsa,
citta）が既に確認されており、257 本の帰属主張が根拠不明のまま公開され続けることになる。却下。

## Consequences

### Positive

- 帰属の検証可能性が上がる — `tradition` 辺に出典を辿れる。
- Darshana Graph など外部グラフとの突き合わせがしやすくなる。
- list-membership ≠ origination という定義により、誤読（ahimsa, citta のような実例）を
  防止できる。

### Negative

- 新規 Dharma ノード追加のコストが増える（出典必須化）。
- `graph.jsonld` のファイルサイズが増える。
- 既存 257 辺の backfill が完了するまで、出典の有無が混在した状態が続く。

### Neutral / Follow-ups

- viewer 側での辺修飾（`source` 等）の表示対応は本 ADR の対象外。着手時は上記 Review-when
  に該当するため、本 ADR の妥当性を再確認すること。
- 既存 257 辺の backfill は対照表の sheet 単位で段階的に行う。進捗管理は
  `.notes/TASKS.md` を参照。
