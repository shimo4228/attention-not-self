# 訳語集：Ganeri『Attention, Not Self』精読

Ganeri, *Attention, Not Self* (Oxford University Press, 2017) を読むときの訳語の台帳。
Ganeri が仏教術語に当てた英語と、Ganeri が使う分析哲学・記憶研究の語について、
採用する日本語と、それがどこまで確かめられているかを記録する。

*English summary: a working glossary for reading Ganeri's* Attention, Not Self *in Japanese.
It records Ganeri's English renderings of Pāli/Sanskrit terms, his analytic vocabulary,
the Japanese rendering adopted in this repo, and how far each entry has been checked
against the book. Buddhist terms themselves are canonical in [`graph.jsonld`](../graph.jsonld).*

## この台帳の位置

- 仏教術語のパーリ・梵・漢訳・英・日の正本は [`graph.jsonld`](../graph.jsonld)（`ans:Dharma` /
  `ans:Concept` ノード）。この台帳はその語を写さず、`graph` 欄で id を指す
- この台帳が正本になるのは次の 2 つだけ: Ganeri 独自の英訳語、Ganeri の分析哲学・記憶研究の語
- 種は 2 箇所: [認識過程モデルの論考 §4.4.1](<../三大アビダルマ認識過程モデルと計算論的現象学（日本語）.md>)
  の対照表と脚注、[第12章ノート](<記憶の三つのモデル - Ganeri第12章（日本語）.md>)
- 載せるのは語の対応と短い注記だけ。Ganeri の定義文や本文は載せない（本文の訳は非公開の
  `.notes/reading/` に置く）

## 欄の意味

- **採用する日本語**: ノート・論考で使う訳。**未決** の行は候補を並べ、著者が決めたら 1 つに絞る
- **別訳・注意**: repo 内で使われている別の訳、避ける訳、衝突する語
- **確認**: その英語が Ganeri の語だとどこまで確かめたか
  - `書評` — NDPR 書評と OUP の紹介文から再構成した。本文は未照合（commit 924f1d6）
  - `ch12` — 第12章の本文を読んで作ったノートから採った。位置No.は未記録
  - `本文 chN` — 本文で確かめた。分かれば Kindle の位置No.を添える
  - `—` — Ganeri の英語を記録していない

第13章以降の行は、Claude が決めた訳語をそのまま載せている（著者の事前確認なし、2026-10-30 の方針）。
著者が変えた行は、その旨を `別訳・注意` 欄に書く。

本文で確かめたら `確認` 欄を `本文 chN` に書き換える。`書評` の行は、エッセイでは開示つきで使えるが、
論文で使う前に本文で確かめる。

## 未決

| 語 | 論点 | 行 |
|---|---|---|
| ālaya-vijñāna の字体 | 阿頼耶識（新字。論考の多く・第12章ノート）と阿賴耶識（旧字。graph.jsonld・一部の論考）が混在している。検索で取りこぼす | 表 1 |
| anuloma | 訳語を決めていない | 表 1 |
| field perspective | 第12章ノートは「観察者視点」だけを訳していて、field の訳がない | 表 2 |
| attentive true belief (ATB) | 第12章ノートは英語のまま使っている | 表 2 |

## 表 1　仏教術語

| 原語 | Ganeri の英語 | graph | 採用する日本語 | 別訳・注意 | 確認 |
|---|---|---|---|---|---|
| ekaggatā | placing / attentional placing / placed attention | `ans:dharma/samadhi` | 一境性 | 唯識・有部の相当は 定 samādhi（別境）。上座部では遍一切心なので普遍性が非対称。Ganeri の "selective role of placing" は心をどの対象に置くかの選択で、神経科学の選択的注意とは別（§4.4.1 脚注 9） | `書評` |
| manasikāra（梵 manaskāra） | focusing / focal attention | `ans:dharma/manaskara` | 作意 | 「注意」は attention 全般の訳に取っておき、manasikāra には当てない | `書評` |
| āvajjana | orienting | —（心所ではなく心路過程の機能 kicca なので、法のノードはない） | 転向 | 引転（認識過程モデルの論考・日本語版だけが使う）。§4.4.1 の表は attentional capture と対応させている | `書評` |
| anuloma | gate-keeping / ordering（後期の注意） | — | **未決** | §4.4.1 の表には載せていない。第13章本文では Ganeri が mano-dvārika-citta（意門の心）にも "late attentional gate-keeping" を当てている（下の mano-dvāra の行）。gate-keeping が anuloma 固有の訳語かは要確認 | `書評` |
| cetanā | intention | `ans:dharma/cetana` | 思 | Ganeri は注意の一形態に数える | `書評` |
| sati（梵 smṛti） | mindfulness | `ans:dharma/smrti` | 念 | サティ・マインドフルネス・気づきとの多義は意図したもの（念の衝突の論考の主題）。統一しない | `書評` |
| svasaṃvedana | reflexivity | — | 自己認識（自証） | 日本の仏教認識論と、比較研究の論考の用法に揃えた。「自己認識」は autonoetic には当てない（表 2）。Ganeri の英語 reflexivity は「再帰性」 | `ch12` |
| kliṣṭa-manas | — | `ans:dharma/manas` | 染汚意・末那識 | | — |
| ālaya-vijñāna | — | `ans:dharma/alaya-vijnana` | 阿頼耶識 | 阿賴耶識（旧字）。字体の方針は未決 | — |
| vāsanā | — | `ans:concept/vasana` | 薫習 | | — |
| vikalpa | — | — | 分別 | | — |
| āśraya-parāvṛtti | — | `ans:concept/ashraya-paravritti` | 転依 | 第12章ノートは §3-d で「転依」、§3-b で「転識得智」（八識が四智に転じること）と書いている。使い分けは未整理 | — |
| samatā-jñāna | — | — | 平等性智 | | — |
| asaṃjñi-samāpatti | — | `ans:dharma/asamjni-samapatti` | 無想定 | | — |
| samanantara-pratyaya | — | `ans:concept/samanantara-pratyaya` | 等無間縁 | | — |
| ātmamoha / ātmadṛṣṭi / ātmamāna / ātmasneha | — | — | 我癡・我見・我慢・我愛 | 末那識と相応する四煩悩 | — |
| viññatti（kāya- / vacī-） | intimation（bodily / verbal） | `ans:dharma/kaya-vinnatti` / `ans:dharma/vaci-vinnatti` | 表（身表・語表） | 動詞 intimate は「知らしめる」。北方は身表を色処、語表を声処に包摂する | `本文 ch13` |
| mano-dvārika-citta | late attentional gate-keeping（字義 mind-door cognizance） | — | 意門の心（訳文では「後期の注意の門番〔意門の認識〕」と併記） | anuloma の gate-keeping と英語が重なる（上の anuloma の行） | `本文 ch13` |
| karuṇā | compassion | `ans:dharma/karuna` | 悲 | 苦と不善を除きたいという願い。苦を「共にする」ことではない | `本文 ch13` |
| mettā（梵 maitrī） | kindness | — | 慈 | 楽と善をもたらしたいという願い | `本文 ch13` |
| cittakiriyā | conscious action | — | 意識的行為 | 上座部の「唯作心」（kiriya-citta）とは別の用法なので混同しない | `本文 ch13` |
| khaṇa / santati / addhā（現在） | momentary / continuous / extended present | — | 刹那の現在／相続の現在／時期の現在 | graph の `ans:dharma/santati`（相続）は色法の相で、ここの「相続の現在」とは別 | `本文 ch13` |
| javana | — | `ans:concept/javana` | 速行 | 時期の現在の長さの単位として出る | `本文 ch13` |
| adhippāya-ppakāsana | displaying intention | — | 意図を示すこと | 表の働き（rasa） | `本文 ch13` |
| padaṭṭhāna | proximate cause | — | 近因 | 上座部注釈の定訳 | `本文 ch13` |

## 表 2　Ganeri・記憶研究の語

| Ganeri の語 | 採用する日本語 | 別訳・注意 | 確認 |
|---|---|---|---|
| autonoetic consciousness / autonoesis | オートノエティック意識／オートノエシス | 「自己認識的意識」は使わない — 「自己認識」は svasaṃvedana の訳（表 1）。「自己知的意識」は self-knowledge（自己知識）・trait self-knowledge（特性的自己知識）と字面が重なる | `ch12` |
| autonoetic retrieval | オートノエティックな検索 | | `ch12` |
| autonoetic attention | オートノエティックな注意 | | `ch12` |
| episodic memory | エピソード記憶 | | `ch12` |
| mental time travel | 心的時間旅行 | 過去の想起と未来志向の思考の両方を含む | `ch12` |
| reliving | 再び生きること | 第12章ノートは「再体験」も使っている | `ch12` |
| ownership / sense of ownership | 所有／所有感 | | `ch12` |
| mineness | 我がもの性 | | `ch12` |
| appropriation | 所有化 | 末那識が阿頼耶識を我として把握する働きを指すときに使う | `ch12` |
| proprietary phenomenology | 固有の現象性 | | `ch12` |
| phenomenal flavour | 現象的風味 | | `ch12` |
| self-knowledge | 自己知識 | 第12章ノート §3-f は「自己知の再帰性モデル」と「自己知」も使っている | `ch12` |
| trait self-knowledge | 特性的自己知識 | | `ch12` |
| self-as-agent | 行為者としての自己 | | `ch12` |
| I-tag | 「私」タグ | | `ch12` |
| storage | 貯蔵 | | `ch12` |
| perspectival information | 視点的情報 | | `ch12` |
| field perspective / observer perspective | **未決**／観察者視点 | 第12章ノートは field を訳していない | `ch12` |
| mind-blind | 心盲 | "not deluded but mind-blind" は「迷妄ではなく心盲」 | `ch12` |
| delusion | 迷妄 | | `ch12` |
| thin / thick | 薄い／厚い | 説明モデルの厚さ（置く機構の多さ）を言う | `ch12` |
| reflexivity | 再帰性 | Dignāga の svasaṃvedana（表 1） | `ch12` |
| attentive true belief (ATB) | **未決** | 第12章ノートは英語のまま使っている | `ch12` |
| empathy (Einfühlung) | 共感 | 「感情移入」は使わない — Ganeri / Zahavi は気持ちを移す含みを退けている。気づかいを含まない点で sympathy と区別する | `本文 ch13` |
| sympathy | 同情 | 気づかい・関心を加えたもの。Buddhaghosa の悲・慈がこれに当たる | `本文 ch13` |
| second-personal | 二人称的 | | `本文 ch13` |
| proprietary kind of attention | 固有の種類の注意 | proprietary phenomenology＝固有の現象性に揃えた | `本文 ch13` |
| experiential access | 経験的接近 | | `本文 ch13` |
| direct acquaintance | 直接見知ること | Russell の acquaintance＝見知りの慣例 | `本文 ch13` |
| theory-theory | 理論説 | 「理論理論」も通用するが使わない | `本文 ch13` |
| simulation | シミュレーション（説） | | `本文 ch13` |
| specious present | 見かけの現在 | James の語 | `本文 ch13` |
| strict presentism | 厳格な現在主義 | | `本文 ch13` |
| causal ground / reason | 因果的根拠／理由 | 知覚は理由ではなく因果的根拠として働く、という Ganeri の要点 | `本文 ch13` |
| attention-enabling / inference-enabling condition | 注意を可能にする条件／推論を可能にする条件 | | `本文 ch13` |
| causal medium | 因果的媒体 | | `本文 ch13` |
| solicitation | 誘い | アフォーダンスと同型 | `本文 ch13` |
| expressive phenomena | 表出現象 | Scheler | `本文 ch13` |
| attentionalist | 注意説（的） | | `本文 ch13` |
| dual / double aspect theory | 二重側面説 | | `本文 ch13` |
| joint attention | 共同注意 | | `本文 ch13` |
| social cognition | 社会的認知 | | `本文 ch13` |
