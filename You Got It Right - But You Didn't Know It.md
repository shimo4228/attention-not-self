# You Got It Right — But You Didn't Know It

*The Free Energy Principle has no vocabulary for this puzzle. A seventh-century Buddhist logician's commentator already ruled on a strikingly similar case.*

## 1. Why I'm Writing This

I need to state my own position up front. Let me explain where this inquiry began.

It started with a single book — Yoshinori Uejima's *Introduction to Contemporary Epistemology* (Keisō Shobō, 2020). Built around the Gettier problem, it traces the sixty years of theoretical development that followed the challenge to the standard "justified true belief" analysis of knowledge — causal theories, reliabilism, and other externalist responses; evidentialist internalism; contextualism; virtue epistemology; knowledge-first epistemology — as a single unfolding story.

What drew me in while reading wasn't the content of any particular position so much as the shape of the whole movement. Every position thinks, for a moment, that it has caught hold of knowledge. Then, a little further down the road, it breaks down somewhere. A counter-example appears, a revision follows, and the revision draws its own counter-example. Something about this repeating structure — caught, and then, the instant you think you've caught it, it slips away again — snagged on me.

I should be honest, though: by the time I read this book, I already held a somewhat detached view of the matter. I'd already been exposed to Buddhist epistemology going back to Dignāga before Dharmakīrti, and to the Madhyamaka (Middle Way) view of emptiness. I had already suspected — from the outset — that trying to describe the process of cognition deductively, as a fixed combination of conditions ("justification + truth + belief"), was simply the wrong kind of approach to begin with. I was already persuaded that cognitive processes are, in essence, a continuous stream of Bayesian inference, and that conviction only deepened this suspicion further: that the very framework the Gettier problem presupposes — knowledge as the satisfaction or non-satisfaction of discrete conditions — might be misaligned with reality at the level of description itself.

What has decisively deepened this suspicion, quite recently, is the free energy principle (FEP). Learning of this framework — which describes cognition as the updating of probability distributions — turned my earlier intuition ("knowledge isn't a deductive combination of conditions; it's a matter of the continuous updating of confidence") from a mere philosophical preference into a conviction backed by a concrete computational framework.

And yet I couldn't put the book down. The post-Gettier debate seemed to keep reaching, again and again, for something that no amount of words could quite pin down — something whose outline kept shifting each time you tried to grasp it. That felt, somehow, like the structure by which the Middle Way is forced into silence about ultimate truth, or the way the no-self (anātman) doctrine makes the ātman — the "subject who cognizes" — recede further the harder you search for it. It might even be the very thing this project's own title points at: *attention, not self*. I suspected the deductive vocabulary itself was the wrong tool for the job, and yet I felt an oddly stubborn attachment to the movement of that something repeatedly slipping away within the very vocabulary I thought was wrong.

This essay starts from that double stance. On one side: a fundamental skepticism toward the deductive, discrete vocabulary of knowledge theories like JTB — a skepticism equally supported by Dharmakīrti and Dignāga's causal, realist epistemology and by descriptive, probabilistic cognitive models like FEP. On the other: an attachment I can't quite shake to the recurring movement of "something that can't be caught" within that same vocabulary. Ordinarily you'd pick one of these and write from there. This essay deliberately refuses to let go of either.

I have used the vocabulary of the free energy principle (FEP) and predictive processing — precision, expected free energy, generative model — as a tool for comparing against the Buddhist Abhidharma's classification of dharmas. Somewhere along the way, it struck me: within the vocabulary I use every day, the normative question analytic philosophy has wrestled with for over sixty years — "what is knowledge?" — never once shows up.

This was a strange gap. FEP handles something like belief (the posterior belief). It handles how confidently that belief is held (precision). But the question at the heart of knowledge theory — whether that belief is held for the right reasons, whether it might just be a lucky hit — has no entry point anywhere in the vocabulary.

In Theme 7, I stated a wary position against the easy move of claiming "Buddhism is scientific." This essay attempts the opposite direction: it starts from the question of what computational phenomenology *cannot* say, epistemically. And to trace the outline of that silent region, I bring in Dharmakīrti (7th-century Indian Buddhist logician) and his *pramāṇa-vāda* — the system concerned with the means of valid cognition.

But let me flag this up front too: I am not writing toward a predetermined conclusion that "Buddhism had the answer." The motive is heuristic — I want to lay out, side by side, what a different tradition was asking in the place where FEP falls silent.

This essay asks two questions. First: can FEP answer the Gettier problem (below), or is it simply the wrong category to begin with? Second: how does Dharmakīrti's *pramāṇa-vāda* connect to this problem? (Indian philosophy also has an entirely independent Gettier-type lineage in the Nyāya school, reaching the opposite ending from Dharmakīrti's *pramāṇa-vāda* — I leave that for another essay.)

Let's take these in order.

## 2. Introducing the Puzzle: "You Got It Right, But You Can't Say You Knew"

Everyone has had the vaguely uncomfortable experience of blurting out a guess on a quiz and having it turn out to be correct. What this essay calls the feeling of "you can't say you knew" is best described as the philosophical formalization of exactly that discomfort.

In everyday life we use the word "know" quite loosely. But philosophically, breaking the word down, on the traditional analysis, yields three conditions: (1) the proposition is true; (2) one believes the proposition; (3) that belief is supported by adequate reasons. This combination is called "justified true belief" (JTB), and for a long time it stood as the standard definition of knowledge.

In 1963, Edmund Gettier blew a hole in this definition in a paper just three pages long. Gettier himself cites the formulations of both Chisholm and Ayer, but the skeleton common to both is often summarized in the later secondary literature as follows (what follows is not a verbatim quote, but the standard formulation):

> "(a) S knows that P IFF (i) P is true, (ii) S believes that P, and (iii) S is justified in believing that P."

Source: Gettier, E. (1963). *Is Justified True Belief Knowledge?* Analysis 23(6), 121–123 (a standard summary in the secondary literature, drawing on Chisholm and Ayer's formulations).

Gettier constructed two counter-examples against this definition. The first (often called the "coin-counting case") runs like this: Smith has what looks like solid evidence that Jones will get the job at their company, and has also counted ten coins in Jones's pocket. From this, Smith validly infers and believes the proposition "the man who will get the job has ten coins in his pocket." But in fact, Smith himself gets the job, not Jones — and (entirely unrelated to Jones's coins) Smith himself also happens to have ten coins in his pocket. The proposition is true. Smith believes it. His reasons for believing it look perfectly justified. And yet no one's intuition says "Smith knew it." Smith was simply lucky.

The second counter-example (the "Ford/Barcelona case") has a different structure: a proposition validly derived — by the logically valid move of disjunction introduction — from a false premise turns out to be true purely by an unrelated coincidence.

What both share is a strange remainder: all three conditions — belief, justification, and truth as it happens — are satisfied, and yet we still can't say "he knew." This essay, in its entirety, unfolds around that remainder — the luck that slips in between justification and truth.

## 3. Premise 1: Why the Gettier Problem Hasn't Been Solved in Sixty Years

Gettier's paper runs only three pages, but analytic philosophy has kept working the problem for more than sixty years since then, without settling it. To summarize the Internet Encyclopedia of Philosophy's (IEP) entry on "Gettier Problems": across those sixty years, attempts to reductively explain knowledge via justification plus some further condition have stumbled, over and over. The same entry describes epistemologists as having tried, "again and again and again," to revise, patch, or replace JTB.

Source: IEP, "Gettier Problems" (summary and partial quotation).

Two broad lines of response formed out of this history.

One is **reliabilism**. The IEP entry on "Reliabilism" formulates it this way:

> "S's belief that p is justified if and only if S's belief that p is formed by a reliable process"

This is a strategy that replaces internalist "justification" (reasons the believer has internal access to) with an externalist criterion — whether the process that produced the belief generally produces true beliefs at a high rate.

The other is **knowledge-first epistemology**, championed by Timothy Williamson and others. This position rejects the JTB structure itself, recasting "knowing" as an independent, *sui generis* mental state that cannot be reduced to any combination of internal conditions and external truth conditions.

This essay wants to focus on the reliabilist side, because it has a well-known classical weakness. This is Alvin Goldman's 1976 thought experiment, "fake barn country" (Source: Goldman, A. I. (1976). "Discrimination and Perceptual Knowledge." *The Journal of Philosophy*, 73(20), 771–791).

The setup: Henry is driving through the countryside, sees a real barn, and believes "that's a barn." The belief is true, and formed by vision — a generally reliable process. But, unbeknownst to Henry, the region he's driving through is full of elaborately constructed fake barn facades, and the one he happens to be looking at is the only real one. The visual process itself is reliable "in general," but in this particular environment it has completely lost any power to distinguish real barns from fake ones. The standard intuition is that this doesn't count as knowledge.

This shows something important: reliabilism is vulnerable in principle not only to the **inferential luck** in Gettier's original cases (a coincidentally true conclusion drawn from a false premise), but also to **environmental luck** (the process itself is generally reliable, but the environment happens to have neutralized its discriminating power). This essay will keep this distinction — inferential luck versus environmental luck — as a consistent axis throughout what follows.

## 4. Premise 2: A Minimal Account of the Free Energy Principle (FEP) / Predictive Processing

Setting aside both Buddhism and the Gettier problem for a moment, let me introduce — at the minimum level needed — this essay's other protagonist: the free energy principle (FEP) and predictive processing (PP).

FEP/PP is a computational framework that treats the brain as a "generative model" that predicts sensory input. The brain holds an internal probabilistic model of the world's hidden states, and tries to minimize the "prediction error" between the sensations that model predicts and the sensations that actually arrive. Mathematically, this minimization of prediction error is formalized as the minimization of a quantity called "free energy."

When choosing an action, a quantity called "expected free energy" is computed for each candidate policy. Friston and colleagues' 2015 paper describes the decomposition of this expected free energy as follows:

> "the negative free energy or quality of a policy can be decomposed into extrinsic and epistemic (or intrinsic) value... the softmax parameter in classical (utilitarian) choice models corresponds to the precision or confidence in posterior beliefs about policies"

Source: Friston, K. et al. (2015). "Active inference and epistemic value." *Cognitive Neuroscience*, 6(4), 187–214.

Two points matter here. First, expected free energy decomposes into "extrinsic value" and "epistemic/intrinsic value." Extrinsic value is close to what's usually called expected utility, defined by goals or preferences; epistemic/intrinsic value expresses how much information can be gained about the hidden state. Second, "precision" is defined as a purely descriptive parameter expressing how confidently a posterior belief is held — it is not a normative concept of "justification." Holding a belief with high confidence and having a justified reason for that confidence are two different matters.

Parr and Friston's 2019 paper further decomposes expected free energy into "Risk" (the KL divergence — an information-theoretic measure of how far apart two probability distributions are — between the predicted outcome distribution and the preference distribution) and "Ambiguity" (the expected entropy of the likelihood mapping — a rough measure of how many different hidden states a given observation is compatible with, i.e. average uncertainty), explicitly mapping these onto the risk/ambiguity concepts from behavioral economics (tracing back to Ellsberg) (Source: Parr, T., & Friston, K. J. (2019). "Generalised free energy and active inference." *Biological Cybernetics*, 113(5-6), 495–513). In this paper too, the vocabulary remains consistently descriptive and decision-theoretic; no connection to a normative, epistemic concept of justification appears.

Keep this character in mind — descriptive, yet without a normative vocabulary. The next section examines the gap this creates.

## 5. FEP's Silence: The Gettier Problem Appears Nowhere in the FEP Literature

Let me report, plainly, the finding that started this essay.

As far as I could find, no academic literature explicitly connects Dharmakīrti's *pramāṇa-vāda* to FEP/predictive processing. This shouldn't be too surprising, though. Researchers who parse classical Sanskrit Buddhist logic and computational neuroscientists who work with the mathematics of active inference have essentially no occasion to cite each other's papers. What separates them isn't so much a difference of interest as a difference in the trained language itself — the techniques of Sanskrit philology versus the techniques of probability theory and differential equations. This finding comes from having read through the major FEP-side papers (Friston et al. 2015, Parr & Friston 2019, Gładziejewski 2021, Ghijsen 2018), not an exhaustive literature survey — and the possibility of false negatives from that limited scope remains, of course.

Is there really no philosophical attempt, on the FEP/PP side, to construct the concept of "justification" itself? Not quite — there are a small number of exceptions: Gładziejewski and Ghijsen. But what the two of them were actually trying to solve wasn't the Gettier problem — it was a somewhat different, earlier problem.

Traditional epistemology has a position called "foundationalism": perceptual beliefs are, in themselves, a "foundation" — justified without depending on any other belief. But in PP, perception is not sensory data accumulating bottom-up into belief; rather, the brain's prior expectations (priors) shape perceptual content top-down. If that's right, perceptual content already depends on some other belief (priors) to exist in the first place, and appears to lose its very qualification as a "foundation that depends on nothing else." This — "if PP is right, doesn't perception lose its standing as a foundation?" — is the problem Gładziejewski and Ghijsen took up.

Gładziejewski's (2021, *Synthese*) answer is to reformulate perceptual "justification" as a hybrid of foundationalism and coherentism — a "foundherentist account." It's a compromise in which perception retains its privileged evidential role as a "foundation," while its justification is also supported by the coherence and track record of the generative model as a whole.

> "the rational standing of perceptual states is conditioned by the rational standing of the generative model"

Source: Gładziejewski, P. (2021). "Perceptual justification in the Bayesian brain: a foundherentist account." *Synthese*, 199.

Ghijsen's (2018, *Synthese*) answer is simpler. He replaces the condition for perception being a "foundation" — not "unconceptualized raw content" but "the process that acquired that content being reliable." He calls this "externalist foundationalism."

> "an externalist foundationalism provides the best match with PP"

Source: Ghijsen, H. (2018). "Predictive processing and foundationalism about perception." *Synthese*, 198(Suppl 7), 1751–1769.

Notice this: although neither of them discusses the Gettier problem at all, both choose a move nearly identical to the reliabilism we saw in the previous section — replacing justification with "the reliability of the process or model." This position, which measures the justification of subpersonal priors by the reliability of the process that acquired them, is structurally almost isomorphic to reliabilism.

What matters is that these two papers — the rare philosophical attempts to actually build a theory of justification on top of PP — never once mention the Gettier problem. I read through Gładziejewski's paper (25 pages) in full; the word "Gettier" does not appear once.

Whether this silence is a mere accident of the literature or has some structural reason, I'll offer my reading in the next section.

## 6. Two Readings of the Silence: An Accidental Gap, or a Category Error?

When I first encountered this silence, my intuition was: "from FEP's point of view, maybe the Gettier problem doesn't even rise to the level of worth considering."

The reasoning went like this. FEP operates in a fully descriptive vocabulary — precision-weighting, expected free energy. It can compute "how confidently is a posterior belief held," but the normative evaluation — "is that belief held for the right reasons" — doesn't seem to be built into that vocabulary anywhere. Stacking a normative epistemology on top of a system of descriptive statistics might simply be a category mistake — that's what I thought.

But this intuition admits a counterargument. "Not present in the current vocabulary" and "cannot in principle be handled because it's the wrong category" are different claims. To assert the latter, you'd need to show that a normative concept of justification is in principle underivable from FEP's descriptive vocabulary. It might simply be that no one has seriously tried yet.

And the very existence of Gładziejewski and Ghijsen is a concrete counter-example to that counterargument. They have, in fact, built theories of justification on top of PP. The claim "it's impossible, so it's a category error" is weakened by the existence of these two papers.

Let me state the position this essay takes. I read this silence not as an "in-principle category error" but as a state of arrested development: attempts to bridge a normative theory onto a descriptive vocabulary simply haven't yet moved past a reliabilist structure (the limits of this judgment are addressed in section 11). The next section shows concretely why this reading matters.

## 7. The Inheritance Problem: Is PP's Version of "Justification" Vulnerable to Fake Barn Country?

Let me make the reading from the previous section concrete. This is the first theoretical claim this essay makes on its own; as far as my research shows, no confirmed prior work makes it (the limitations are consolidated in section 11).

Look again, carefully, at Ghijsen's externalist foundationalism — the position that priors are justified by the reliability of the process that acquired them. Structurally, this is nearly isomorphic to the reliabilism we saw in Premise 1 — in that it replaces "justification" not with internal accessibility but with the reliability of an external process.

Recall why reliabilism was vulnerable to fake barn country: even if a process is generally reliable, if a particular environment happens to have neutralized its discriminating power, the resulting true belief is still governed by luck. My point is simple: might the same vulnerability carry over into PP's version of a theory of justification?

Consider a concrete hypothetical. Suppose a generative model's precision-weighting (how much confidence, i.e. precision, it assigns to a given sensory channel) happens, in some environment, to keep producing correct predictions. Say, in a special environment dominated by adversarially disguised sensory input, that environment-specific precision assignment happens to work — the agent looks reliable on the surface. But change the environment, and the same precision-weighting policy breaks down immediately. This is exactly the fake-barn-country structure — a process that is generally reliable, but whose discriminating power has been coincidentally neutralized or disguised by a particular environment — transplanted directly into FEP's vocabulary.

The reading this leads to is: it isn't that FEP can't talk about justification. It's that the moment it tries to, it may inherit — wholesale — the very vulnerability analytic philosophy spent sixty years exposing: reliabilism's weakness to environmental luck.

With that, it's time to turn to Dharmakīrti's *pramāṇa-vāda*.

## 8. The Turn to Dharmakīrti's *Pramāṇa-vāda*: Why Bring In Buddhist Epistemology?

The discussion so far has traced two major lines in Western epistemology concerning "justification" — internalist JTB (justification by reasons the believer has internal access to) and externalist reliabilism (justification by the external reliability of the belief-forming process).

This very axis of opposition — whether to measure justification by internal access to reasons, or by the external reliability of the belief-forming process — had already been placed, clearly, on the externalist side by Dharmakīrti, as early as the 7th century.

Why Dharmakīrti in particular, out of the many schools of Indian philosophy? Because *pramāṇa-vāda* — the system concerned precisely with "what makes a valid cognition valid" — developed as another, independent "theory of knowledge," in an entirely different context from the JTB framework of "belief + justification."

And, as noted in section 5, no prior work I could find — on either the analytic-philosophy side or the FEP side — addresses this connection between Dharmakīrti's *pramāṇa-vāda* and FEP/predictive processing. From here on, this essay attempts its own theoretical connection, built on top of a gap the research uncovered.

## 9. *Avisaṃvāda* (Non-Deceptiveness) and *Arthakriyā* (Causal Efficacy): *Pramāṇa-vāda* as Externalism

Let me carefully introduce the two concepts at the core of Dharmakīrti's *pramāṇa-vāda*, with the original terms and direct quotations.

The Stanford Encyclopedia of Philosophy's entry on "Dharmakīrti" presents Dharmakīrti's definition of a "source of valid cognition" (*pramāṇa*) like this:

> "Dharmakīrti defines a 'source of knowledge' in Pramāṇavārttika II.1 as a 'reliable (avisaṃvādin) cognition (jñāna),' understood as cognition that is 'right and reliable as a basis for action.'"

Source: SEP, "Dharmakīrti."

In this definition, *pramāṇa* (a source of valid cognition) is characterized by the property *avisaṃvādin* (non-deceptive, unerring). And the standard for that property is "reliability as a basis for action." Note carefully that this is an entirely different kind of standard from JTB's internalist "justification" — whether the believer has access to epistemically appropriate reasons. It is an externalist, consequentialist standard — what results follow from acting on this cognition.

The concept that further specifies this standard of "reliability as a basis for action" is *arthakriyā* (causal efficacy). The secondary literature puts it this way:

> "argue[s] that the true test of knowledge is its efficacy, and likewise that only the efficacious is knowable and real"

Source: Dunne, J. D. *Foundations of Dharmakīrti's Philosophy.* Wisdom Publications.

The touchstone of knowledge here is neither a correspondence theory of truth (does the proposition correspond to the facts) nor JTB's internalist justification. It is causal efficacy — does acting on this cognition actually deliver the expected result?

Restated in the vocabulary of the preceding sections: the *avisaṃvāda*/*arthakriyā* standard is, structurally, quite close to reliabilism — justification measured by the reliability of the belief-forming process. At the very least, both belong to the same lineage: an externalist "theory of knowledge" distinct from the internalist JTB line.

## 10. Dharmottara's Counter-Examples: The Swarm of Insects and the Mirage That Reached Gettier's Problem 1200 Years Early

This is where the essay's most important theoretical attempt begins.

Dharmottara (c. 770 CE), commentator on Dharmakīrti's *Pramāṇaviniścaya*, left behind two structurally similar counter-examples roughly 1200 years before Gettier.

The first: a fire has already been lit to roast meat, but is not yet giving off visible smoke. Drawn by the smell of the meat, a huge swarm of insects gathers, and an observer watching from a distance mistakes the dark mass on the horizon for smoke, judging "there is fire." The perceptual process itself (the mechanism that mistakes a swarm of insects for smoke) fails to correctly discriminate its object — it's non-veridical. And yet, precisely because a fire really is burning at that exact spot, the belief "there is fire" turns out true, despite arriving by a mistaken route.

The second: a desert traveler mistakes a shimmering mirage for water. This too is a non-veridical perceptual process, but as it happens, there really is water beneath the rocks at the very spot where the mirage appeared.

I need to be honest about the sourcing here. These counter-examples are corroborated across multiple independent sources — starting from the Wikipedia "Gettier problem" entry, then an article in *Philosophy Now*, and the relevant chapter of Barnett's epistemology textbook. But this is not a systematic theoretical connection made by current academic scholarship — it's a report of a historically known "precedent." The tier of these sources is middling (Wikipedia is a tertiary source), and I want to flag that verification against primary academic literature (Dreyfus, Tillemans, and others) remains outstanding.

With that caveat in place, here is the connection this essay attempts on its own. Reinterpreting these two counter-examples through the fake-barn-type (environmental luck) structure introduced in Premise 1, the two line up quite closely. The belief-forming process itself (the mechanism mistaking a swarm of insects for smoke, the mechanism mistaking a mirage for water) is, in itself, a non-veridical process that fails to correctly discriminate its object. What the observer is actually looking at (the swarm, the mirage's shimmer) is not, in itself, a reliable cue pointing to fire or water. And yet, by a completely separate causal route from that misperception — a real fire already burning, real water beneath the rocks — the propositions "there is fire" and "there is water" turn out true as a result. This is strikingly similar to the structure of Henry seeing a real barn in fake barn country: a discriminating process that generally works fails, in this particular situation, to correctly track its object, yet arrives at a true belief anyway, purely by good luck.

As far as I could find, no prior theoretical connection precedes this reinterpretation. This is this essay's own synthesis (its limits are summarized in section 11). With that said, let me put this essay's central claim into words: the *avisaṃvāda* (non-deceptiveness) and *arthakriyā* (causal efficacy) standards of *pramāṇa-vāda* may already have confronted a structurally similar problem — knowledge counterfeited by luck — more than a thousand years before Gettier.

So how did Dharmottara himself finally rule on these two counter-examples? Did he accept them as *pramāṇa*, or reject them? Let me not leave this vague, and instead walk through what evidence I could find, one piece at a time.

His *Nyāyabinduṭīkā* — a commentary on Dharmakīrti's *Nyāyabindu* — reveals three technical devices bearing on the verdict.

First, **arthasārūpya** (formal correspondence with the object). Dharmakīrti argues that "a cognition producing a successful action alone does not make it valid" (this line comes down to us through Dharmottara's commentary). That is, he first rejects the naive consequentialism of "it worked out, so it must be correct cognition," and instead requires an exact correspondence between the form of the object as cognized and the form of the object finally obtained.

Second, the explicit **exclusion of *kākatālīya*** (coincidence). *Kākatālīya* literally translates as "the crow and the fallen palm fruit" — the classic Indian trope for coincidence: a crow happens to land on a tree branch just as a palm fruit happens to fall. Dharmottara compresses this into a single principle:

> "mithyājñānād hi kākatālīyo 'pi nāstyarthasiddhiḥ"
> ("Even by coincidence, no achievement of the object arises from a false cognition.")

It reads almost like an axiom: whatever the outcome, a cognition that starts from a mistaken perceptual process cannot count as *pramāṇa* — luck's good result is turned away at the door, as a matter of principle, before the fact.

Third — and doing the most work — is ***santāna*** (causal series). As the condition for a valid perception → successful action to hold, Dharmottara requires that the object actually obtained belong to the same causal series originating from the momentary particular (*svalakṣaṇa*) perceived. It's not enough for "the kind of object to match" — what's asked is whether the specific causal event that triggered that particular cognition and the object actually obtained belong to one and the same causal series.

Applying these three to the mirage case makes the verdict clear. The visual appearance of a mirage arises from a causal series of light refraction and heat haze. The real water beneath the rocks belongs to an entirely different causal series (a groundwater vein, say). The two are merely coincidentally adjacent in space; causally, they are two unrelated series. So Dharmottara names this case explicitly and concludes:

> "marīcikāsu jalam... sa cāsattvāt prāptum aśakyaḥ"
> ("The water in a mirage... cannot be obtained, because it does not exist.")

"Non-existence" (*asattva*) here means that the water as it appears in the mirage does not itself exist. Given that the cognized content (the mirage's water) is non-existent, it cannot possibly be causally continuous with real water somewhere else — *santāna* cannot even get off the ground. That's the logic.

This establishes, through a direct primary-source statement, that Dharmottara came down on the side of ruling the mirage/water case **not to be** *pramāṇa*. For the insect-swarm/smoke case, it's reasonable to infer the same three devices apply — the observer's visual cognition was triggered by reflected light from the swarm, and that causal series should be distinct from the causal series of the real fire that happened to be at the same location. But I was unable to reach a primary source directly applying this device, verbatim, to this specific case (the difference in confidence between the two cases is summarized in section 11).

This *santāna* requirement doesn't look like a condition Dharmottara reached for ad hoc. It reads more plausibly as a lateral extension, into the context of perception-plus-successful-action, of a more fundamental principle in the Dignāga–Dharmakīrti system. Ever since Dignāga established the two *pramāṇa*s — perception (*pratyakṣa*) and inference (*anumāna*) — this system has consistently held that mere observed correlation ("smoke and fire have always gone together so far") cannot guarantee the validity of an inference. What Dharmakīrti demanded was that a **real relation** (*svabhāvapratibandha*) — either a causal relation (*tadutpatti*, the relation by which smoke arises from fire) or an essential-identity relation (*tādātmya*) — actually hold between the *hetu* (the ground of inference, e.g. smoke) and the *sādhya* (the inferred conclusion, e.g. fire); a mere accumulation of constant conjunction is not enough. This is an anti-Humean stance.

Restated in this vocabulary, the insect-swarm/smoke case reads as follows. The general law "if smoke is seen, there is fire" is correct in itself, grounded in a real causal relation between actual smoke and actual fire. But what the observer actually apprehended — reflected light off a swarm of insects — was never, to begin with, an instance of the type "smoke" (in the terms of Buddhist logic's error taxonomy, this is close to *hetvābhāsa*'s *asiddha* — an unestablished-reason fallacy). The swarm holds no *svabhāvapratibandha* whatsoever to this particular fire. Both the exclusion of *kākatālīya* and the requirement of *santāna* trace back to one and the same principle — **validity is decided solely by the presence or absence of a real causal connection, not by any surface match of form or outcome** — restated for the perceptual side.

This final connection — reading the *santāna* requirement as an application of the *svabhāvapratibandha* principle — is my own reading, drawn from the framework of standard Dharmakīrti scholarship (Dreyfus, Dunne, Tillemans, and others). I have not directly confirmed, in this research, a primary source that explicitly argues Dharmottara's *santāna* concept as an application of *svabhāvapratibandha* (confidence: medium).

Dig one level deeper, and *santāna* itself is not an arbitrary borrowing. Ever since Abhidharma established *kṣaṇikavāda* (momentariness — the doctrine that everything conditioned arises and perishes moment by moment), the Buddhist systems have consistently explained continuity not by a persisting substance (including a self) but purely by a moment-to-moment causal chain — *santāna*, or continuity of series. The question this project traced in Theme 7 — what connects one moment to the next, given no-self — the Sarvāstivāda's *prāpti* (attainment), the Sautrāntika's *bīja* (seeds), the Yogācāra's *ālaya-vijñāna*, the Theravāda's *bhavaṅga* — were exactly alternative answers standing on this same framework. What Dharmottara brought into epistemology is simply that same continuity concept, redirected toward the question of whether the object perceived and the object obtained belong to one and the same continuity.

And *arthakriyā* (causal efficacy), which we saw in section 9, is born from this same foundation. For Dharmakīrti, the very definition of "being real" (*sat*) is causal efficacy, and only a momentary particular (*svalakṣaṇa*) can possess causal efficacy — a persisting universal cannot. In other words, *arthakriyā* and *santāna* aren't two separately introduced technical devices — they turn out to be two epistemological faces of one single metaphysical foundation: momentariness.

As for where the doctrine of momentariness itself comes from, it's often pointed out (Dreyfus and others) that the meditative practice of introspectively observing experience arising and dissolving moment by moment was its phenomenological seed. But this is a strong hypothesis, not settled fact — a parallel lineage exists that derives it as a logical consequence of Abhidharma's dharma-enumeration project, or from the polemical need to refute substance-ontologies (Nyāya-Vaiśeṣika).

Interestingly, the very same Sanskrit compound *kākatālīya* also appears, in an entirely independent line of Nyāya-side argument (treated in another essay), in exactly the same context of naming this same problem — "knowledge counterfeited by coincidence." Two separate traditions, Buddhist and Hindu, named this same problem with the same vocabulary — though whether this reflects one tradition directly referencing the other, or simply a shared idiom common across Indian philosophy at the time, I have not been able to confirm here.

## 11. A Line Not to Cross

A few things need pinning down. I'll consolidate this essay's caveats here.

First, FEP's "silence" should not be pronounced an "in-principle category error." As shown in section 6, given the existence of counter-examples — Gładziejewski and Ghijsen — one cannot say definitively whether this is "currently unexplored" or "impossible in principle." And further, the absence of prior work within my search scope doesn't mean such work doesn't exist — the possibility of a false negative from the limits of the search always remains.

Second, the structural similarity between Gładziejewski/Ghijsen's justification theory and reliabilism, and by extension the possible inheritance of vulnerability to fake barn country (section 7), is this essay's own first theoretical claim — there is no confirmed prior work within my search scope. This is not a verified fact; it is this essay's hypothesis.

Third, the same qualification applies to the theoretical connection between Dharmottara's counter-examples and *avisaṃvāda*/*arthakriyā* (section 10). This is this essay's own theoretical synthesis, built on top of a historical fact (the existence of the counter-examples) — Dharmakīrti or Dharmottara themselves did not, in any explicit way, conceptualize this as a Gettier-type problem of "knowledge counterfeited by luck." To say that an 8th-century commentator anticipated a 21st-century analytic-philosophy framework would be a clear anachronism. Pointing out a structural similarity and claiming the historical figures shared the same problem-consciousness are two different things.

Fourth, there is also a line not to cross between *avisaṃvāda*/*arthakriyā* "resembling" modern reliabilism and the two being "the same." Dharmakīrti's *pramāṇa-vāda* carries the ethical causality of karma and the religious teleology of valid cognition as a path to liberation (*mokṣa*) — a normative dimension modern epistemological reliabilism carries none of. This difference must not be flattened.

Fifth, let me note explicitly that the confidence levels differ across the claims reported in section 10. The direct application to the mirage/water case is confirmed by a verbatim primary-source quotation (Mandal 2022), and confidence is high. The application of the same devices to the insect-swarm/smoke case, by contrast, is an inference by analogy from the technical devices, and confidence is lower. Likewise, the reading (end of section 10) that "the *santāna* requirement is an application of Dignāga–Dharmakīrti's *svabhāvapratibandha* principle — the anti-Humean doctrine that an inference's validity is grounded only in a real causal or identity relation — to the perceptual side" is my own interpretation from the standard secondary-literature framework; I have not confirmed a primary source explicitly making this argument — confidence stays at medium. And the appearance of the same term *kākatālīya* in the Nyāya-side argument (treated elsewhere) does not imply a direct influence between the two traditions — the possibility that it was simply a shared idiom cannot be ruled out.

## 12. Closing: Laying the Open Questions Side by Side

What this essay has shown is not that "Buddhism had already solved the Gettier problem." It's the arrangement itself: several independent traditions — the Gettier lineage in analytic philosophy, FEP's descriptive vocabulary and its silence, and Dharmakīrti's *pramāṇa-vāda* — each peering, from different motives and in different vocabularies, over the edge of the same cliff: knowledge counterfeited by luck.

Let me return to the two questions posed at the outset.

On the first — can FEP answer the Gettier problem, or is it simply the wrong category? — this essay deliberately does not decide. I want to leave it as a question that can only be settled once some FEP-side theorist seriously attempts to build a concept of justification, and we can check whether that attempt actually inherits reliabilism's vulnerability.

On the second — how does Dharmakīrti's *pramāṇa-vāda* connect to this problem? — what this essay has shown is that the externalist standard of *avisaṃvāda*/*arthakriyā* had, in the form of Dharmottara's counter-examples, already touched the structure of "knowledge counterfeited by luck" — and, for the mirage/water case, had **explicitly ruled it out** as *pramāṇa*, via the technical devices of *arthasārūpya* (formal correspondence with the object), the exclusion of *kākatālīya* (coincidence), and *santāna* (causal series) (the application of the same devices to the insect-swarm/smoke case remains a conjecture). This isn't a claim that "Buddhism had the answer a thousand years ago." It's that traces remain of a tradition working, in a different vocabulary and toward a different end (carrying the religious teleology of liberation), on the very same shape of question — and arriving at a conclusion close to Western reliabilism's own: exclusion.

Something whose outline keeps shifting each time you try to grasp it — the very thing section 1 likened to the ātman of no-self doctrine — may be surfacing here again, in the same shape. The one who mistook a swarm of insects for smoke, and the one who counted the coins in Jones's pocket, stumbled on the same problem of luck, a thousand years and a world apart. I want to sit with that coincidence a while longer.

There is one more, entirely independent Gettier-type lineage in Indian philosophy — the Nyāya school. Where Dharmakīrti's Dharmottara piled up technical devices to exclude knowledge counterfeited by luck (this essay), Nyāya moved toward the opposite ending, welcoming lucky-but-true cognition in as knowledge. That asymmetry — one tradition stepping back from the same cliff, the other stepping forward — will be treated in another essay.

---

### Sources

- Uejima, Y. (2020). *Gendai Ninshikiron Nyūmon [Introduction to Contemporary Epistemology].* Keisō Shobō. https://www.keisoshobo.co.jp/book/b524661.html
  Cited passages — none (the introductory book that personally motivated this essay; surveys the theoretical development from the Gettier problem through causal theories, reliabilism, evidentialism, contextualism, virtue epistemology, and knowledge-first epistemology).
- Gettier, E. (1963). *Is Justified True Belief Knowledge?* Analysis 23(6), 121–123. https://fitelson.org/proseminar/gettier.pdf
  Cited passages — the standard formulation of JTB (a secondary-literature summary drawing on Chisholm and Ayer), Case I (coin-counting) / Case II (Ford/Barcelona).
- Goldman, A. I. (1976). *Discrimination and Perceptual Knowledge.* The Journal of Philosophy, 73(20), 771–791. https://www.jstor.org/stable/i335719
  Cited passages — source of "fake barn country."
- Internet Encyclopedia of Philosophy. "Gettier Problems." https://iep.utm.edu/gettier/
  Cited passages — summary of sixty years of the Gettier debate; partial quotation of "again and again and again."
- Internet Encyclopedia of Philosophy. "Reliabilism." https://iep.utm.edu/reliabilism/
  Cited passages — formulation of reliabilism.
- Friston, K. et al. (2015). *Active inference and epistemic value.* Cognitive Neuroscience, 6(4), 187–214.
  Cited passages — decomposition into extrinsic/epistemic value; the definition of precision.
- Parr, T., & Friston, K. J. (2019). *Generalised free energy and active inference.* Biological Cybernetics, 113(5-6), 495–513. https://discovery.ucl.ac.uk/10082773/1/Parr-Friston2019_Article_GeneralisedFreeEnergyAndActive.pdf
  Cited passages — the Risk/Ambiguity decomposition.
- Gładziejewski, P. (2021). *Perceptual justification in the Bayesian brain: a foundherentist account.* Synthese, 199. DOI: 10.1007/s11229-021-03295-1
  Cited passages — Section 2, the formulation of the generative model's rational standing.
- Ghijsen, H. (2018). *Predictive processing and foundationalism about perception.* Synthese, 198(Suppl 7), 1751–1769. DOI: 10.1007/s11229-018-1715-x
  Cited passages — the formulation of externalist foundationalism.
- Stanford Encyclopedia of Philosophy. "Dharmakīrti." https://plato.stanford.edu/entries/dharmakiirti/
  Cited passages — Pramāṇavārttika II.1, the definition of avisaṃvādin.
- Dunne, J. D. *Foundations of Dharmakīrti's Philosophy.* Wisdom Publications.
  Cited passages — the formulation of arthakriyā (causal efficacy).
- Wikipedia. "Gettier problem" (§ Dharmottara). https://en.wikipedia.org/wiki/Gettier_problem
  Cited passages — the source and dating (c. 770 CE) of Dharmottara's two counter-examples. Note: this source's tier is middling (Wikipedia is a tertiary source); verification against primary academic literature (Dreyfus, Tillemans, and others) remains outstanding.
- Manotosh Mandal (2022). "The Concept of Valid Cognition According to Buddhist Logic." International Journal of Creative Research Thoughts (IJCRT).
  Cited passages — verbatim quotations from Dharmottara's Nyāyabinduṭīkā on arthasārūpya, kākatālīya, and santāna (sūtra commentary 1, pp. 3, 5). Note: this source's tier is middling (peer-review quality below that of a top-tier journal).

**This essay's own theoretical synthesis (explicitly not a claim of the existing literature, but this project's own integration — see section 11 for detailed qualifications):**
- The reliabilist structure of FEP-side justification theories (Gładziejewski/Ghijsen) and the possible inheritance of vulnerability to fake barn country (section 7)
- The reinterpretation of Dharmottara's counter-examples as fake-barn-type (environmental luck), connected to the avisaṃvāda/arthakriyā standard of pramāṇa-vāda (section 10)
- The reading of the santāna requirement as an application of Dignāga–Dharmakīrti's svabhāvapratibandha principle, and the positioning of arthakriyā/santāna as two faces of the single shared metaphysical foundation of momentariness (kṣaṇikavāda) (section 10)

These are recorded here under the same kind of qualification as Theme 7's "the ālaya-vijñāna ≈ bhavaṅga functional correspondence is this project's own synthesis, not a claim of Laukkonen and colleagues."

Indian philosophy's other, independent lineage (the Nyāya school, Śrīharṣa, Gaṅgeśa) will be treated in another essay.

*Japanese original（日本語版）: [正しく言い当てたのに、知っていたとは言えない](<正しく言い当てたのに、知っていたとは言えない（日本語）.md>).*
