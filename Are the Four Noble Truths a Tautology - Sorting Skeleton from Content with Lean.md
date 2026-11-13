# Are the Four Noble Truths a Tautology?

*Sorting skeleton from content with Lean, a grading machine for proofs*

## Sentences that are true without looking

"A bachelor is unmarried" is true, and you know it without interviewing anyone. The answer is already inside the meaning of the word "bachelor". A sentence like this is called a tautology. It is guaranteed to be true, and in exchange it tells you nothing new about the world.

"Tanaka is a bachelor" is different. You have to check Tanaka. It can be wrong, and if it is right, it is information.

This text asks one question. The Four Noble Truths are the most basic teaching of Buddhism. Which of the two kinds are they?

## What prompted this

Reading Shinya Moriyama's *Bukkyō tetsugaku josetsu* (*An Introduction to Buddhist Philosophy*, 2021, in Japanese), I met a remark to the effect that the Four Noble Truths are tautological, and I found it fairly convincing.

A caveat first. This attribution rests on my memory of reading the book; I have not yet located the page. What exact form Moriyama's argument takes, and which part of the Four Truths it targets, is not settled here. So this text is not an examination of Moriyama's argument. It is a record of putting to a machine the question that remark raised for me: which parts of the Four Truths are fixed by the definitions of the words alone?

I am not versed in Lean. I had Claude Code write the code, and I read the results by having them explained at high-school level. I write at that level here.

## Background: the Four Noble Truths

The Four Noble Truths are the four truths the Buddha is said to have taught in his first sermon.

- **The truth of suffering (*dukkha*)**: to live is to suffer.
- **The truth of the origin (*samudaya*)**: suffering has a cause, and that cause is craving (*taṇhā*, the thirst that keeps reaching for objects).
- **The truth of cessation (*nirodha*)**: when the cause ceases, suffering ceases.
- **The truth of the path (*magga*)**: there is a path of practice that leads to the cessation of suffering.

They are often compared to a physician's diagnosis: there is an illness, this is its cause, remove the cause and it is cured, and here is the treatment.

Laid out this way, you can see where the suspicion of tautology comes from. "If the cause goes away, the effect goes away" looks as if it follows almost automatically from what "cause" means. It has the same shape as "if fire is the cause of the blaze, put out the fire and the blaze is out".

## Background: Lean

Lean is a grading machine for proofs. A human writes a proof, and the machine checks it line by line; a single gap or sleight of hand produces an error. If the proof passes, the one thing you can be sure of is that it has no holes.

The machine has one more useful feature. You can ask it what a proof assumed. If a convenient assumption was slipped in, it shows up there.

## How the sorting works

We rewrote the Four Truths as something like a word problem in mathematics, in a way that lets us build many different "world settings", much like stages in a game. One stage fixes which states exist, which states are suffering, and which factors are present in which states.

The sorting rule is this.

- **A sentence that is true in every stage** is fixed by the definitions alone. It is a tautology.
- **A sentence for which we can build both a stage where it is true and a stage where it is false** cannot be known without examining reality. It is a claim with content.

"Cause" was defined as "wherever there is suffering, that factor is present": a cause in the sense of a necessary condition. This definition is our choice, and as discussed below, the result depends on it.

## Results

| Sentence | Verdict | Meaning |
|---|---|---|
| Granting the origin, cessation follows | True in every stage | A restatement of the definition |
| Granting the origin, there is no suffering after a practice that removes the cause | True in every stage | A restatement of the definition |
| There is suffering | Both a true stage and a false stage can be built | A claim with content |
| The cause of suffering is craving, and not a rival factor | Both can be built | A claim with content |
| A practice that removes craving exists | Both can be built | A claim with content |

The top two rows are the **skeleton**. Once the truth of the origin is granted, the inferential form of cessation and the path comes out in a one-line proof. There is no new information. This is where the charge of tautology lands.

The bottom three rows are the **content**. We actually built a stage with no suffering, a stage where the cause is another factor and not craving, and a stage with suffering and no way out. Since counterexamples can be built, these are not tautologies.

What the Four Truths actually assert is the bottom three rows: there is suffering, its cause is craving, and there is a way to remove it. So under this formalization the Four Truths, taken as a whole, are not a tautology. Only the skeleton is.

For all six theorems (the five in the table and the one on circularity discussed below) the machine reported that they depend on no axioms. No extra principle such as the law of excluded middle is used; they follow from the definitions alone.

## The code in brief

The whole file is [`lean/FourTruths.lean`](lean/FourTruths.lean). The proof of the first half of the skeleton (from origin to cessation) is just this. The second half has the same shape.

```lean
def IsCause (M : Model) (f : M.Factor) : Prop :=
  ∀ s, M.dukkha s → M.present f s

def Nirodha (M : Model) (f : M.Factor) : Prop :=
  ∀ s, ¬ M.present f s → ¬ M.dukkha s

theorem nirodha_of_samudaya (M : Model) (f : M.Factor)
    (h : IsCause M f) : Nirodha M f :=
  fun s hn hd => hn (h s hd)
```

`IsCause` is the origin and `Nirodha` is cessation. The body of the proof is the last line, and all it does is turn "if there is suffering, the factor is present" around into "if the factor is absent, there is no suffering".

The content is shown by setting two stages side by side: one where craving is the cause, and one where the rival factor is.

```lean
theorem samudaya_tanha_contingent :
    (∃ M : Model, IsCause M M.tanha ∧ ¬ IsCause M M.rival) ∧
    (∃ M : Model, ¬ IsCause M M.tanha ∧ IsCause M M.rival)
```

Both stages can be built without contradiction, so "the cause is craving" is not decided by the definitions.

## Inside the tradition, the content was what was contested

This sorting fits well with how later Buddhists handled the Four Truths.

Dharmakīrti, a seventh-century Buddhist logician, discusses the Four Truths at length in the second chapter of his *Pramāṇavārttika* (*Commentary on Valid Cognition*). Since 2021 Shinya Moriyama has been publishing, as a series, an annotated Japanese translation of the commentary by Prajñākaragupta on the part of this chapter that treats the truth of suffering (verses 146cd–178) (Prajñākaragupta was a commentator of around the eighth century).

According to that series, Dharmakīrti spends thirty-two and a half verses on the truth of suffering, and the familiar explanations, such as the list of the eight kinds of suffering, do not appear. What he argues at length is a refutation of opponents who hold that desire and the like arise from the constituents of the body and not from the mind. The view that the three bodily humours (*vāta* and the others) are the cause, and the view that the four elements of earth, water, fire and wind are the cause, are rejected in turn (Moriyama 2022).

What is contested is not the fourth row of the table itself but one step before it. Where do desire and craving, taken to be the root of suffering, arise from: from a continuum of mind reaching back to earlier lives, or from the body? The opponents do not go so far as to deny that craving brings suffering. Even so, this is a question the definitions do not decide. It is a dispute over content, of the same kind as the fourth row's question of what the cause is identified with. The stage named `rivalWorld` in the Lean code is a simplification that merely relocates the cause to another factor; it does not reconstruct these opponents' position. If the matter were settled by definition, there would be no need to give most of the exposition of the truth of suffering to refutation.

One more point. According to another paper by Moriyama, in a passage of his own commentary on the same work (the *Svavṛtti*) on the reliability of scripture, Dharmakīrti gives the Four Truths as an example of something whose truth is established by "inference that does not depend on scripture" (Moriyama 2021a). The Four Truths are treated as a claim to be confirmed by inference, and not as a definition to be believed.

That the skeleton carries no information and that the content was contested are compatible. The weight of the Four Truths does not rest on the skeleton's inference. It rests on three wagers: there is suffering, this is its cause, and it can be removed.

## A word on circularity

There is a second suspicion about the Four Truths: circularity. The content of the truth of the path is the Noble Eightfold Path, whose first limb is right view. Right view is often explained as "knowing the Four Truths". To know the Four Truths you must know the path, and the first step of the path is to know the Four Truths. That makes a loop.

If this loop is written into Lean as a finite construction with no base case (an inductive type), it can be proved that the resulting type "has no inhabitant", meaning that not a single thing of that kind can be constructed. As something assembled in finitely many steps, a loop alone refers to nothing.

The tradition offers a way to undo the loop. The Pāli *Mahācattārīsaka Sutta* (Majjhima Nikāya 117) divides right view into two levels, mundane and supramundane. If the first step does not demand complete knowledge of the Four Truths, the loop becomes a staircase. The staircase is not formalized here.

## What the machine certified, and what it did not

What the machine checked is only this: under this way of rewriting, the proofs have no holes. If you make a mistake in turning the word problem into formulas, the answer is off even when the calculation is right. The step of turning words into formulas lies outside the machine.

At least four choices went into the rewriting.

- **Defining "cause" as a necessary condition.** Buddhist causal theory is dependent origination (*pratītyasamutpāda*, arising in dependence on conditions), which is far more intricate than a single necessary condition. Change the definition and the line between skeleton and content may move.
- **Leaving out the content of cessation and the path.** What state the *nirvāṇa* of the third truth is, and what one concretely does in the Eightfold Path of the fourth, are not in the formalization.
- **Not asking what suffering means.** "Is suffering" is simply posited as one predicate.
- **Writing the circle as an inductive type.** A way of writing that permits never-ending constructions (a coinductive type) would have a self-referring inhabitant. "The loop is empty" is a result about finite constructions only.

Whether this answers Moriyama's remark is also undecided. If he meant the skeleton, the remark is correct and compatible with this result. If he meant the whole, this formalization exhibits counterexamples. I will add which it is once I have checked the passage.

## Similar attempts

Several attempts to formalize Buddhist teachings in proof assistants were published in 2026. As far as I looked (as of 2026-11-11, at the level of reading the public pages and READMEs), I found none that formally sorts whether the Four Truths are a tautology.

- **Nimble Ariake's buddhist-comparative-logic** (Lean 4 and Isabelle/HOL). A machine-checked corpus centred on the Heart Sutra. The Four Truths are defined as a data type with four elements, and their content is not what is being formalized. The README states that the proofs show that conclusions follow from the stated definitions and assumptions, and not that the doctrine is true.
- **Chance Chapman's modal catuṣkoṭi** (Lean 4). A formalization of Nāgārjuna's tetralemma in modal logic. It includes a reply to the objection that the proof is merely a tautology, so the shape of the issue is close to this one, but its target is Madhyamaka emptiness, and it does not treat the Four Truths.

Both say themselves that what the machine guarantees stops at "the conclusion follows from the premises". This text stands in the same place.

## How to reproduce

If you have Lean 4 installed (4.35.0 was used here), the following one line checks it. No additional library such as Mathlib is needed.

```bash
lean lean/FourTruths.lean
```

If no error appears and each of the six theorems is reported with `does not depend on any axioms`, you have reproduced the result above.

---

**This article was written with AI mediation (AI-mediated).** On the basis of a dialogue between the author and Claude Code (2026-11-11 to 13), Claude Code wrote the text and the Lean code. The question, the judgments, and responsibility for them belong to the author. Of the references to Moriyama's work, the one to *Bukkyō tetsugaku josetsu* rests on the author's memory of reading it and the passage has not been checked; the paper on Prajñākaragupta's view of truth and parts (1)–(5) of the series on the truth of suffering are summarized after Claude Code read their publicly available full texts. This disclosure follows the AI-assisted scholarship policy of [attention-not-self](https://github.com/shimo4228/attention-not-self).

## Sources and references

**What prompted this**

- Moriyama, S. (2021). *Bukkyō tetsugaku josetsu* [An Introduction to Buddhist Philosophy]. Mirai Tetsugaku Kenkyūjo (distributed by Pneuma-sha). ISBN 9784910154152. In Japanese. Referred to from the author's memory of reading; the passage has not been checked.

**Dharmakīrti on the Four Truths (full texts checked)**

- Moriyama, S. (2021a). Prajñākaragupta no shinrikan: shitai to funichi o megutte [Prajñākaragupta's view of truth: on the Four Truths and non-dual cognition]. *Journal of Indian and Buddhist Studies (Indogaku Bukkyōgaku Kenkyū)* 70(1), 115–122. In Japanese. https://doi.org/10.4259/ibk.70.1_408
- Moriyama, S. (2021b). Prajñākaragupta no kutairon (1) [Prajñākaragupta on the truth of suffering (1)]: annotated translation of *Pramāṇavārttikālaṅkāra* ad *Pramāṇavārttika* II 146cd–149. *Shinshu Studies in Humanities* 9(1), 47–72. In Japanese. https://hdl.handle.net/10091/0002000384
- Moriyama, S. (2022). Prajñākaragupta no kutairon (2): annotated translation of *Pramāṇavārttikālaṅkāra* ad *Pramāṇavārttika* II 150–159. *Shinshu Studies in Humanities* 10(1), 29–48. In Japanese. https://hdl.handle.net/10091/0002001064
  - The series has been published up to part (5) (PV II 174cd–178; March 2026 according to researchmap), which completes the translation of the part on the truth of suffering. The author's publication list: https://researchmap.jp/read0149697

**Similar attempts (checked at the level of public pages and READMEs, 2026-11-11)**

- Ariake, N. (2026). *buddhist-comparative-logic*: Machine-checked formalizations of Buddhist and comparative Asian logic in Lean 4 and Isabelle/HOL. https://github.com/takuya50/buddhist-comparative-logic
- Chapman, C. (2026). The Internal Logic of Buddhism Is Verifiably Correct. https://rollofthedice2.substack.com/p/the-internal-logic-of-buddhism-is

**Tool**

- Lean 4. https://lean-lang.org/

**Related essay in this repository**

- Theme 8, "You Got It Right — But You Didn't Know It" (Dharmakīrti's theory of valid cognition, *avisaṃvāda* and *arthakriyā*)

*Japanese version（日本語版）: [四諦はトートロジーか](<四諦はトートロジーか - Leanで骨組みと中身を仕分ける（日本語）.md>)*
