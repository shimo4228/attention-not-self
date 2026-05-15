# Three Abhidharma Cognitive Process Models ↔ Computational Phenomenology: A Systematic Mapping

## 0. Orientation and Methodological Caveat

This report extends the existing *attention-not-self* project (which already maps individual cetasikas, *manaskāra*/precision-weighting, *vedanā*/interoceptive inference, and *ālaya-vijñāna*/hierarchical generative model) by shifting attention from the *factor inventory* to the *process architecture*: how each tradition's **whole cognitive process from stimulus to conscious experience** corresponds to (or conflicts with) computational frameworks — Global Workspace Theory (GWT), predictive processing (PP), Free Energy Principle / active inference (FEP/AIF), neurophenomenology, Integrated Information Theory (IIT), parallel distributed processing (PDP), and interface theory of perception.

Four caveats apply throughout:

1. **Cross-paradigm risk.** Abhidharma is a soteriological-phenomenological taxonomy of *experiential property-particulars*; computational frameworks are *multiply-realizable functional models*. As Noa Ronkin (*Early Buddhist Metaphysics*, 2005) argues, dharma analysis is irreducibly *evaluative-and-descriptive* — it classifies the constituents of unwholesome vs. awakened experience as much as it describes mind. The mappings below are structural homologies, not identities.
2. **Literature thinness.** Most published work pairs individual Buddhist concepts with individual computational mechanisms. Mappings *between full process architectures* are largely unexplored and most claims here are "Moderate" or "Speculative" rather than "Strong."
3. **Enactivist counter-pull.** Following Varela, Thompson, and Rosch (*The Embodied Mind*, 1991), Buddhist analysis arguably fits enactivism better than classical computationalism. Active inference is attractive precisely because it admits an enactive reading (Ramstead et al. 2022, "From Generative Models to Generative Passages"). Chris Fields' notion of a "Rosetta Stone" between first-person experience and neurobiology defines the spirit in which any such mapping should be read: as bidirectional translation, not reduction.
4. **Hard limits.** *Nirvāṇa* (asaṃskṛta), the karmic/ethical valence of every citta-moment, and the soteriological telos have **no** computational analog. Any mapping that ignores these is incomplete.

---

## 1. Theravāda *citta-vīthi* ↔ Computational Models

### 1.1 The model in brief

The Theravāda Abhidhamma (Buddhaghosa, *Visuddhimagga*; *Abhidhammattha-saṅgaha*) analyses every act of cognition through a *door* (*dvāra*) — five sense-doors (*pañca-dvāra*) and the mind-door (*mano-dvāra*) — as a serial sequence of seventeen citta-moments (*citta-khaṇa*):

**bhavaṅga (life-continuum, passive baseline)** → atīta-bhavaṅga → bhavaṅga-calana (vibrating) → bhavaṅga-upaccheda (arrest) → **pañca-dvārāvajjana** (five-door adverting / *āvajjana*) → **cakkhu-viññāṇa** (eye-consciousness, bare sensation) → **sampaṭicchana** (receiving) → **santīraṇa** (investigating) → **voṭṭhapana** (determining) → **javana × 7** (impulsion / active engagement, where karma is generated) → **tadārammaṇa × 2** (registration) → return to bhavaṅga.

The process is **strictly serial**, **temporally discrete** (each *khaṇa* with arising / presence / dissolution sub-moments), and **ethically active only at *javana*** — the seven impulsion moments alone create karma. The architecture is sometimes summarized as four modules: M1 sensory-receptive (āvajjana → viññāṇa), M2 evaluative (sampaṭicchana → santīraṇa), M3 decisional (voṭṭhapana), M4 ethical-active (javana → tadārammaṇa).

### 1.2 Mapping to Global Workspace Theory (GWT)

The Theravāda system is the **best fit for GWT** of the three traditions. Baars' GWT (1988) and Dehaene–Naccache's *Global Neuronal Workspace* (GNW) frame consciousness as a discrete, all-or-nothing **ignition** event in which one content wins competition among parallel unconscious modules and is broadcast globally for report, voluntary action, and long-term memorization. Below threshold, processing remains unconscious.

| Vīthi stage | GWT/GNW correspondence | Evidence quality |
|---|---|---|
| Bhavaṅga | Sub-threshold tonic / unconscious baseline; "ground" against which ignition stands out | **Moderate** |
| Pañca-dvārāvajjana (adverting) | Bottom-up attentional capture / pre-ignition mobilization | **Moderate** |
| Cakkhu-viññāṇa (bare sensation) | Early sensory cortex feed-forward (V1) | **Moderate** |
| Sampaṭicchana, santīraṇa | Feature integration, ventral-stream object recognition (V2–V4, IT) | **Weak–Moderate** |
| Voṭṭhapana (determining) | Decisional gating / threshold-crossing prefrontal selection | **Moderate** |
| **Javana × 7** | **Global ignition / broadcast — content becomes conscious, reportable, voluntary** | **Moderate (best parallel)** |
| Tadārammaṇa × 2 | Post-ignition reverberation / iconic-memory tail | **Weak** |

The discreteness of the *citta-khaṇa* sequence, the threshold-like transition at *voṭṭhapana*, and the broadcast-like "spread" at *javana* parallel GNW's prediction of an "all-or-nothing transition between conscious and unconscious perception" (Dehaene & Naccache 2001). Pre-javana modules correspond to GWT's competing unconscious specialist processors; *javana* corresponds to ignition and global broadcast; *tadārammaṇa* to brief reverberatory persistence.

**Disanalogies.** GWT is **massively parallel below threshold**, with serialization only at ignition; the vīthi is *serial throughout*. The fixed count "17" is doctrinally — not empirically — motivated. GWT has no analog of *javana*'s ethical (*kusala / akusala*) loading.

### 1.3 Mapping to predictive processing and Posner's attention networks

Predictive processing (PP) reads the vīthi differently. *Bhavaṅga* corresponds to a prior-dominated baseline (priors active, prediction error low). *Āvajjana* implements **precision-weighting**: this is precisely Ganeri's (2017) thesis in *Attention, Not Self* — that *manasikāra* / *āvajjana*, not a self, turns the system toward an object. *Sampaṭicchana* and *santīraṇa* are iterative belief updating against incoming prediction error; *voṭṭhapana* is the posterior settling on a hypothesis; *javana* is the precision-weighted policy-selection-and-action stage (*cetanā* as active-inference policy); *tadārammaṇa* is the post-update consolidation of priors.

A striking architectural observation: the vīthi places **āvajjana before viññāṇa** — adverting/attention precedes the arising of sense-consciousness. In predictive processing, **predictions precede prediction errors**: top-down expectations are already in play before sensory input is processed. The vīthi's ordering is structurally consistent with this "top-down first" architecture.

*Āvajjana* maps cleanly onto Posner & Petersen's three attention networks (1990; Petersen & Posner 2012):

| Vīthi sub-component | Posner network |
|---|---|
| Tonic baseline disturbance (bhavaṅga-calana) | **Alerting** (locus coeruleus / NE; phasic readiness) |
| Pañca-dvārāvajjana | **Orienting** (superior parietal / frontal eye fields; ACh) |
| Voṭṭhapana | **Executive control / detection** (ACC / lateral PFC; dopamine) |

This is a **Moderate–Strong** mapping: the threefold functional decomposition is structurally identical, though Posner's networks operate in parallel whereas the vīthi sequences them.

The "attention precedes consciousness" thesis (Ganeri 2017; Wu; Mole) corresponds to the empirical finding that pre-conscious attentional gating (~100–200 ms post-stimulus, P1/N1 components) precedes conscious access (~300 ms, P3/ignition). The vīthi explicitly places *āvajjana* **before** *viññāṇa* and *javana* — a 2,500-year-old anticipation of the latency structure.

### 1.4 Mapping to neural temporal stages of perception

| Vīthi stage | Cortical stage | Approx. latency |
|---|---|---|
| Cakkhu-viññāṇa | V1 (primary visual) | ~50–80 ms |
| Sampaṭicchana | V2–V4 ventral stream | ~100–150 ms |
| Santīraṇa | IT cortex (object recognition) | ~150–200 ms |
| Voṭṭhapana | LPFC / ACC (decisional) | ~200–300 ms |
| Javana × 7 | Global broadcast / frontoparietal network | ~300–500 ms |
| Tadārammaṇa | Hippocampal / consolidation tail | ~500+ ms |

Evidence quality: **Moderate** structural parallel (IntechOpen 2025 chapter on Abhidhamma and neuroscience makes this explicit; deCharms 1997 was an early attempt).

### 1.5 Bhavaṅga — DMN, tonic activity, or something else?

Srinivasan (2020) and others have proposed mapping *bhavaṅga* to the **Default Mode Network** (DMN). The mapping fits in three respects: both are tonic, both are baseline-when-undisturbed, both mediate "continuity of identity across moments." But it fails in three crucial respects:

1. The DMN is **highly elaborated and content-rich** (autobiographical narrative, mind-wandering). Bhavaṅga is **content-minimal**, holding only the inherited rebirth-linking object.
2. The DMN *competes* with task-positive networks. Bhavaṅga *underlies* and *resumes between* every cognitive process — it is the substrate, not a rival network.
3. Bhavaṅga carries karmic resultant valence (it is the *vipāka* of past kamma); the DMN is morally neutral.

A better mapping is to **tonic baseline neural activity / sub-threshold global state** plus, possibly, the *sleep-like* quiescent baseline observable during slow-wave sleep or anaesthesia. Some computational interpretations align bhavaṅga with the "prior-only, no-likelihood" state of a generative model (Laukkonen & Slagter 2021's account of deep meditative quiescence is suggestive). Evidence quality: **Weak–Moderate** for DMN; **Moderate** for tonic baseline.

### 1.6 Module architecture M1–M4 and functional brain architecture

The four-module decomposition (M1 sensory-receptive, M2 evaluative, M3 decisional, M4 ethical-active) maps onto a coarse **sensorimotor hierarchy**: primary sensory cortices → ventral-stream object areas → prefrontal decision/control → motor/limbic action-selection. The fact that *only M4 (javana) generates kamma* parallels the cognitive-neuroscience finding that voluntary, reportable, motorically expressible processing is the locus of agency attribution. Evidence quality: **Weak**, structural only.

---

## 2. Sarvāstivāda *Abhidharmakośa* ↔ Computational Models

### 2.1 The model in brief

Vasubandhu's *Abhidharmakośa(bhāṣya)* and the Vaibhāṣika *Mahāvibhāṣā* analyse cognition through **simultaneous co-arising** (*saṃprayoga* / 相応) of one *citta* and a constellation of up to 46 *caittas*, including the ten **mahābhūmika** (universal mental factors): *vedanā, saṃjñā, cetanā, sparśa, manaskāra, chanda, adhimokṣa, smṛti, samādhi, prajñā*. These are not stages in a sequence but **co-active factors of a single moment**.

Causal structure is given by:
- **Four conditions (catvāraḥ pratyayāḥ / 四縁):** *hetu-pratyaya* (root), *samanantara-pratyaya* (equal-immediate antecedent), *ālambana-pratyaya* (object support), *adhipati-pratyaya* (predominance).
- **Six causes (ṣaḍ hetavaḥ / 六因):** *kāraṇa-hetu* (efficient), *sahabhū-hetu* (co-existing), *sabhāga-hetu* (homogeneous), *saṃprayuktaka-hetu* (associated/conjoined), *sarvatraga-hetu* (universal), *vipāka-hetu* (ripening).

Sarvāstivāda is committed to **temporal eternalism / *sarvāstitva* / 三世実有**: dharmas exist in all three times (past, present, future), the present being merely the time of activity (*kāritra*). Each dharma possesses *svabhāva* (intrinsic nature).

### 2.2 Mapping to Parallel Distributed Processing (PDP) / connectionism

Sarvāstivāda is the **best fit for PDP/connectionism** of the three traditions. The Mahāvibhāṣā's explicit claim that "dharmas are weak in isolation and are only able to exercise their activity when together" (Dhammajoti 2009: 175–176) is **structurally identical** to the connectionist claim that cognition arises from the *coactive pattern* of many simple units, none of which carries the cognition alone.

| Sarvāstivāda feature | PDP/connectionism correspondence |
|---|---|
| Simultaneous arising of citta + caittas | Parallel coactivation of feature units |
| Saṃprayoga (conjunction) of dharmas | Co-firing patterns / Hebbian assemblies |
| 10 mahābhūmika as universal factors | The 'always-on' subnetwork — minimal conditions for any mental moment |
| Dharma as property-particular with svabhāva | Unit with characteristic activation profile |
| Cognition has content only via the *conjunction* of citta with caittas | Distributed representation: the pattern, not any single unit, carries meaning |

Evidence quality: **Moderate** as a structural analogy; **Weak** as published scholarship (no major paper makes this explicit).

### 2.3 Mapping the four pratyaya to dynamics

| Pratyaya | Computational analog | Evidence |
|---|---|---|
| *Hetu-pratyaya* (root) | Causal prior / generative parameter | Moderate |
| *Samanantara-pratyaya* (equal-immediate antecedent — each citta-moment "makes way" for the next of the same kind) | **Markov-property transition / autoregressive update / RNN hidden-state transition** | **Moderate–Strong** structural |
| *Ālambana-pratyaya* (object-support) | Observation / likelihood / input vector | Moderate |
| *Adhipati-pratyaya* (predominance) | Gain / precision modulation / attentional weighting | Moderate |

The *samanantara* condition is particularly striking: it requires that consciousness be a **first-order Markov chain in the same-type stream** — exactly the structure of recurrent neural networks and autoregressive generative models. Each hidden state directly conditions the next without "skipping." This is genuinely close to a discrete-time formal description of a single-stream neural dynamics, and represents a research frontier worth formalizing.

### 2.4 Mapping the six hetu to causal-network typology

| Hetu | Computational analog |
|---|---|
| *Kāraṇa-hetu* (efficient cause: all dharmas as non-obstructive condition) | Background/permissive priors |
| *Sahabhū-hetu* (co-existing) | Bidirectional / cyclic causal edges (citta ↔ caitta) |
| *Sabhāga-hetu* (homogeneous: like produces like) | Temporal autoregression within stream |
| *Saṃprayuktaka-hetu* (conjoined: same object, same support, same time) | Co-activation constraint / clamping in PDP |
| *Sarvatraga-hetu* (universal: defiled factors that condition further defilement) | Latent confounders / dispositional priors |
| *Vipāka-hetu* (ripening: karmic ethical fruition) | **No clean analog** — ethically valenced delay-line; karmic credit-assignment over very long horizons |

The six hetu collectively constitute a **richly typed causal graph** in the sense of Pearl-style causal networks — Sarvāstivāda distinguishes types of causation (cyclic, homogeneous, ripening, universal) that standard Bayesian networks elide as one. Evidence quality: **Speculative**; no published formal mapping.

### 2.5 Temporal eternalism (sarvāstitva / 三世実有) and the block universe

The Vaibhāṣika thesis that dharmas exist in past, present, and future — only their *kāritra* (activity) being present-time-bound — formally resembles the **block universe** of relativistic physics and the **timeless / atemporal formulations** in some interpretations of the FEP. In active inference, the *generative model* itself is atemporal: it is a structure over states; only inference and policy selection are time-indexed. Friston's **steady-state** formulations (Markov blankets at non-equilibrium steady state, NESS) treat the agent as a time-invariant statistical structure whose *instantaneous expression* varies.

| Sarvāstivāda thesis | Computational analog |
|---|---|
| Dharma exists in three times | Atemporal structure of the generative model |
| Kāritra (activity) is present-only | Time-indexed inference / policy execution |
| Svabhāva is invariant across times | Parameters θ are slowly varying / quasi-fixed |

Evidence quality: **Speculative–Weak**; no direct literature, but the structural parallel is precise enough to formalize. **Disanalogy:** FEP needs the *flow* of free-energy minimization to do explanatory work; Sarvāstivāda needs the *temporal triality* to underwrite karmic causation across vast intervals. These are functionally different commitments.

### 2.6 The 10 mahābhūmika as "minimal conditions for conscious experience"

The ten universal mental factors are claimed by the Vaibhāṣika to be present in **every** moment of consciousness. This is precisely the format of:

- **IIT axioms** (intrinsic existence, composition, information, integration, exclusion) — necessary properties of any conscious moment.
- **GWT necessary conditions** — global availability, attentional ignition, reportability.
- **Active inference minimal conditions** — generative model with priors, likelihood, precision, policy, valence.

| Mahābhūmika | Plausible computational counterpart |
|---|---|
| Vedanā | Valence / interoceptive inference (Seth 2013; Solms & Friston 2018) |
| Saṃjñā | Categorical / featural perception |
| Cetanā | Policy selection / motor intention |
| Sparśa | Prediction-error generation at sensory contact |
| Manaskāra | Precision-weighting / attention |
| Chanda | Goal / preference prior |
| Adhimokṣa | Posterior commitment / decision |
| Smṛti | Hidden-state memory / context maintenance |
| Samādhi | Stability of attentional focus / low-entropy posterior |
| Prajñā | Inferential discrimination / model comparison |

Evidence quality: **Moderate** structural parallel; **Speculative** as a formal IIT/GWT minimal-conditions mapping. A systematic IIT-axiom-vs-mahābhūmika comparison would be a genuinely novel contribution.

---

## 3. Yogācāra (Vijñānavāda) ↔ Computational Models

### 3.1 The model in brief

Yogācāra (Asaṅga; Vasubandhu's *Triṃśikā* and *Viṃśatikā*; Sthiramati; Xuanzang's *Cheng weishi lun*) restructures consciousness into **eight vijñānas**: the five sense-consciousnesses, the sixth *mano-vijñāna*, the seventh *kliṣṭa-manas* (defiled mentation that appropriates the eighth as "self"), and the eighth *ālaya-vijñāna* (store-consciousness) holding *bīja* (seeds) perfumed (*vāsanā*) by past experience.

Each cognitive event is analysed via the **four aspects** (*catvāri-aṃśa* / 四分): *nimitta-bhāga* (相分, object-image), *darśana-bhāga* (見分, seeing-aspect / subject-image), *svasaṃvitti-bhāga* (自証分, self-cognizing), *svasaṃvitti-saṃvitti-bhāga* (証自証分, cognition of self-cognition).

The signature thesis is **vijñaptimātratā** (唯識, "consciousness-only"): what appears as external object and internal subject is a **bifurcation generated within consciousness itself**. Dan Lusthaus' *Buddhist Phenomenology* (2002) influentially read this as a phenomenological (not metaphysical) thesis: experience is exhaustively a presentation of consciousness, with no claim that "only minds exist."

Direction of cognition: **inside-out**. *Ālaya* seeds project a phenomenal world; manifest experience perfumes the seeds. This is the opposite of naïve feed-forward perception.

### 3.2 Mapping to predictive processing / active inference — the best fit

Yogācāra is the **best fit for predictive processing and active inference** of the three traditions. The match is multi-layered:

**(a) Inside-out direction & top-down primacy.** Clark's *Surfing Uncertainty* (2016) and Hohwy's *The Predictive Mind* (2013) make explicit that in PP, **top-down predictions precede and dominate bottom-up signals**: the brain is a "prediction machine that generates its sensorium" (Clark 2013) and only secondarily corrects via prediction errors. This is the architectural inverse of classical feed-forward perception. Yogācāra's claim that experience is generated from seeds and then *seems* to be of an external world is structurally the same architectural commitment. Friston (2010) describes the brain as "regurgitating the world"; Vasubandhu's *Viṃśatikā* describes the world as *vijñapti-mātra*, "mere representation," with no extramental object beyond consciousness's own constructions.

**(b) Self-evidencing and the minimal self.** Friston's "I am, therefore I think" (and "Am I self-conscious?" / "I think therefore I am" formulations, 2018) argues that **any creature that minimizes expected free energy must model itself as a hidden cause of its own actions** — self-modeling falls out of self-evidencing. This is structurally what Yogācāra describes when *manas* appropriates *ālaya* as "I": the system must posit a stable, self-identical subject in order to model the consequences of its own engagements.

**(c) The four aspects and the self-modeling architecture.**

| Yogācāra aspect | Computational analog | Evidence |
|---|---|---|
| Nimitta-bhāga (相分, object-image) | Generated sensory predictions / inferred external causes | Moderate |
| Darśana-bhāga (見分, subject-image) | Inferred observer / first-person perspective generated by the model | Moderate |
| Svasaṃvitti-bhāga (自証分, self-cognizing) | **Phenomenal Self-Model (Metzinger 2003) / minimal self / Friston (2018) self-evidencing** | **Moderate–Strong** |
| Svasaṃvitti-saṃvitti-bhāga (証自証分, cognition of self-cognition) | **Meta-awareness / higher-order representation / Sandved-Smith et al. 2021 deep parametric AIF** | **Moderate** |

The crucial insight: *subject and object are both generated within the model*. This is exactly Metzinger's claim about the **transparent self-model**: the system cannot recognize its self-model *as* a model, so the model appears as a self. *Manas* — which "appropriates the ālaya as 'self' " through self-view, self-love, self-pride, self-delusion — is a remarkably exact functional description of Metzinger's PSM with its four properties (first-person perspective, ownership, agency, identification). George Deane (2021) explicitly proposes within active inference that **ego-dissolution in psychedelics and deep meditation corresponds to a collapse of the self-model**, structurally paralleling the Yogācāra *āśraya-parāvṛtti* (基轉 / 転依, transformation of the basis).

The 自証分 / 証自証分 distinction structurally anticipates Sandved-Smith, Hesp, Mattout, Friston, Lutz, & Ramstead's (2021) hierarchical model of **meta-awareness** as policy-selection over higher-level cognitive states.

### 3.3 Ālaya-vijñāna ↔ hierarchical generative model

The match is the deepest single mapping in the literature.

| Ālaya feature | Generative-model analog |
|---|---|
| Stores bīja (seeds) of past experience | Stores **learned parameters / priors** |
| Bīja generate manifest experience | Priors generate top-down predictions |
| Vāsanā (perfuming) by experience | **Learning / parameter update** by prediction-error-driven plasticity |
| Subliminal / *asaṃvidita* operation | Subpersonal / unconscious computation |
| Carries karmic potential across time | Long-horizon credit assignment / hyperpriors |
| Simultaneous with manifest vijñāna (Saṃdhinirmocana; Schmithausen; Waldron) | Generative model always-on; perception is its instantaneous read-out |

Waldron (*The Buddhist Unconscious*, 2003) makes this central thesis explicit. Thompson (*Waking, Dreaming, Being*, 2014) maps the three-layer architecture (*ālaya → manas → mano-vijñāna*) onto (implicit memory & priors) → (pre-reflective self) → (working memory & attention). Srinivasan (2020) explicitly compares ālaya to the priors layer in hierarchical predictive processing. Evidence quality: **Moderate–Strong** (well-theorized; foundational source Waldron).

The bīja↔vāsanā loop is **structurally identical to the perception/learning duality** in predictive processing: predictions shape perception while prediction errors update parameters. The ālaya is simultaneously the *source* of experience (priors generating predictions) and *modified by* experience (vāsanā writing new seeds) — exactly the inference/learning bi-directionality of a generative model.

### 3.4 Bīja theory ↔ priors, weights, latent variables

| Bīja feature | Computational analog | Evidence |
|---|---|---|
| Each bīja a latent disposition | Latent variable / prior in Bayesian model | Moderate |
| Bīja → manifest fruit | Sampling / posterior predictive | Moderate |
| New experience → new bīja | Online learning / parameter update | Moderate |
| Bīja persist across lifetimes (karmic continuity) | Inherited priors / very slow hyperpriors | **Hard limit — see §4** |
| Bīja are ethically valenced (kuśala/akuśala/avyākṛta) | **No clean analog** — moral charge on parameters | Hard limit |

The "synaptic weight" metaphor is apt at the inference level but breaks at the ethical/karmic level. Evidence quality: **Moderate** for the priors-mapping; **N/A** for karma.

### 3.5 Vijñaptimātratā ↔ darkened-room, interface theory, and the model-bound mind

Three computational frameworks bear directly on Vijñaptimātratā.

**(a) The "darkened room" problem in FEP.** If the organism's imperative is to minimize free energy / prediction error, why not retreat to a dark, predictable room and shut down? Friston's resolution (and Clark's 2017 "A nice surprise?") is that organisms have **deep priors that predict varied, vital states** — they cannot achieve free-energy minimization by sensory deprivation because their generative model includes priors *requiring* particular self-states (eating, exploring, social engagement). Yogācāra's analogous problem: if *ālaya* is a self-perpetuating storehouse projecting its own world, why does the world appear varied and lawful? The Yogācāra answer is **karmic seeds** (*vipāka-bīja*) and the **shared-world thesis** (the *bhājana-loka*, "container world," is held in common by similar karmic streams — a deep prior structure that explains lawfulness without realism). Both frameworks face — and analogously resolve — the same problem: why doesn't a generative self-system trivialize itself? Evidence quality: **Moderate** structural; **Speculative** as formal parallel.

**(b) Donald Hoffman's Interface Theory of Perception (ITP).** Hoffman (2015, 2016) argues from evolutionary game theory that perception is a **fitness-tuned user interface, not a veridical representation** of reality:

| Hoffman ITP | Yogācāra |
|---|---|
| Perception is a "user interface" (desktop icons) | Experience is *vijñapti-mātra* (mere representation) |
| Fitness payoffs, not truth, shape perception | Karma / vāsanā, not external reality, shapes appearance |
| Objects don't exist as perceived when unobserved | Objects are constructions of consciousness |
| Space-time framework is itself a UI feature | Conventional truth (*saṃvṛti-satya*) is constructed |

Evidence quality: **Moderate** — striking but not extensively cross-cited in scholarly literature (mostly noted in popular treatments).

**(c) Predictive processing's "we never access the world directly."** Clark, Hohwy, Seth: we have no direct access to the world; we only ever access our brain's best inferred model of the world. This is the contemporary form of the Yogācāra thesis. Evidence quality: **Moderate**.

### 3.6 Ālaya ↔ the cognitive unconscious / computational psychiatry

In computational psychiatry, learned priors and their precision settings explain rumination, hallucination, depression (altered priors over self-state), and PTSD (high precision on threat priors). Ālaya-vijñāna's role as **karmically conditioned subliminal disposition shaping perception** maps onto this conceptualization of the cognitive unconscious. Waldron (2003) explicitly frames ālaya as the "Buddhist unconscious" anticipating implicit memory and depth psychology. Evidence quality: **Moderate** (well-theorized).

---

## 4. Cross-Cutting Comparative Analysis

### 4.1 Best-fit table: which Abhidharma to which framework

| Computational framework | Best-fit Abhidharma | Why |
|---|---|---|
| **Global Workspace Theory / GNW** | **Theravāda citta-vīthi** | Serial, discrete, threshold-crossing ignition (javana) matches GWT broadcast; staged sub-processes match unconscious specialists |
| **Parallel Distributed Processing / connectionism** | **Sarvāstivāda** | Simultaneous co-arising of citta + caittas; saṃprayoga doctrine; "weak alone, active together" matches distributed representation |
| **Predictive Processing / Active Inference / FEP** | **Yogācāra** | Inside-out generation, ālaya as generative model, bīja as priors, vāsanā as learning, vijñaptimātratā as model-bound mind |
| **Interface Theory of Perception (Hoffman)** | **Yogācāra** | Non-veridical, fitness/karma-tuned UI |
| **Phenomenal Self-Model (Metzinger)** | **Yogācāra (manas + 自証分)** | Transparent self-model exactly maps onto kliṣṭa-manas |
| **IIT axioms** | **Sarvāstivāda 10 mahābhūmika** | Both are minimal-conditions claims for any conscious moment |
| **Posner attention networks** | **Theravāda āvajjana** | Three-fold structure of alerting / orienting / executive matches sub-stages |
| **Discrete perceptual frames (VanRullen & Koch 2003)** | **All three (kṣaṇa theory)** | Discrete momentary cognition is shared; Theravāda's citta-khaṇa most explicit; White (2018) notes the Buddhist antecedent |
| **Neurophenomenology (Varela 1996)** | **All three, but Yogācāra most cited** | Enactivist reading explicitly grounded by Varela, Thompson, Rosch (1991); MacKenzie (2022) develops the autopoietic side |
| **Computational phenomenology (Ramstead, Sandved-Smith)** | **All three, integrated** | Ramstead et al. 2022 explicitly invokes Abhidharma and Yogācāra as targets |

### 4.2 The "no central executive" thesis

All three Abhidharma systems reject a central, substantial cognizer:

- **Theravāda:** the vīthi is a *stream*, not a controller; *attā* is absent.
- **Sarvāstivāda:** no *pudgala*; only the orderly flow of dharmas.
- **Yogācāra:** *manas* mistakes the ālaya for a self but no self exists; āśraya-parāvṛtti dissolves this error.

This is structurally identical to:

- **FEP's lack of a homunculus** — there is no "I" doing the inferring; inference is the system's dynamics.
- **GWT's claim** that consciousness arises from competition + broadcast, not from a Cartesian theatre.
- **PDP/connectionism** — cognition is the network's pattern, not any unit.
- **Metzinger's "no-self"** — there is no self, only a self-model.

Evidence quality: **Strong** conceptual convergence; multiple authors (Ganeri, Thompson, Metzinger, Friston) explicitly note this convergence.

### 4.3 The continuity problem: three solutions, three computational analogs

If there is no enduring self, how is experience continuous? Each tradition answers differently — and each answer maps cleanly onto a different computational mechanism:

| Tradition | Continuity solution | Computational analog |
|---|---|---|
| **Theravāda** | *Bhavaṅga* — life-continuum citta persisting between cognitive processes | **Tonic neural baseline / sub-threshold state / prior-dominated quiescence** |
| **Sarvāstivāda** | *Sarvāstitva* — dharmas exist in past/present/future; continuity via three-time existence | **Atemporal generative model parameters / time-invariant Markov blanket at NESS** |
| **Yogācāra** | *Ālaya-vijñāna* — store-consciousness carrying seeds | **Deep generative model parameters / learned hyperpriors / weight matrix** |

This is perhaps the **single most informative cross-cutting result**: the three traditions independently identified three different computational solutions to the continuity problem. Theravāda offers a *state* solution (tonic activity), Sarvāstivāda a *structural* solution (time-invariant parameters), Yogācāra a *parametric-memory* solution (priors that learn).

### 4.4 The attention problem: precision-weighting across three systems

The strongest cross-system convergence is on attention as precision-weighting:

- **Theravāda *manasikāra* / *āvajjana***: Ganeri (2017) places it at the center; Laukkonen & Slagter (2021) operationalize it as precision-modulation in FA/OM/ND meditation.
- **Sarvāstivāda *manaskāra***: included in the ten *mahābhūmika*, universal in every conscious moment — exactly what FEP requires of precision (every inference includes a precision parameter).
- **Yogācāra *manaskāra***: among the five *sarvatraga* (universal) caittas; further, *manas* itself functions as a constant biased-precision filter giving experiences "mineness."

The Tal, Wright, Prest, Sandved-Smith & Sacchet (2025) review confirms that **precision-weighting is the common computational mechanism across all active-inference models of meditation phenomenology**. The Abhidharma's universal placement of *manasikāra* anticipates this. Evidence quality: **Strong**.

### 4.5 The kṣaṇa/citta-khaṇa convergence

The discrete-moment doctrine (kṣaṇa-vāda) is shared across all three Abhidharmas, though with different details (Sautrāntika's "cinematic" model is closest to discrete frames). VanRullen & Koch (2003) propose that perception operates in discrete frames tied to alpha-band oscillations (~10 Hz, ~100 ms). White (2018) explicitly acknowledges the Buddhist antecedent: "The idea that conscious percepts fall into discrete temporal frames... appeared over 2000 years ago in Buddhist thinking." However, Buddhist estimates of kṣaṇa duration (millisecond or sub-millisecond) are far faster than modern estimates of perceptual frames (30–400 ms), suggesting sub-perceptual granularity that may not correspond to any measurable neural process. Evidence quality: **Moderate**.

### 4.6 The Laukkonen et al. (2025) Contemplative-AI four axioms in light of the three traditions

The four axioms — **mindfulness, emptiness, non-duality, boundless care** — selectively draw on each tradition:

| Axiom | Strongest Abhidharma source | Computational implementation |
|---|---|---|
| Mindfulness | Theravāda *sati* + vīthi reflection | Continuous metacognitive monitoring of precision |
| Emptiness (*śūnyatā*) | Madhyamaka critique of all three Abhidharmas | Relaxation of rigid priors / prevention of dogmatic posterior |
| Non-duality | Yogācāra critique of *grāhya-grāhaka-bhāva* (object-subject split) | Dissolution of self-other model boundary |
| Boundless care (*bodhicitta*) | Mahāyāna ethical core | Preference prior favoring universal suffering reduction |

The Yogācāra-shaped axioms (non-duality, emptiness as relaxation of *ātman*-priors) sit most naturally on active-inference architecture. Empirically the paper reports d=0.96 on AILuminate safety and d=7+ on Prisoner's-Dilemma cooperation when prompts invoke these axioms. Evidence quality: **Moderate** (single recent empirical paper; theoretically novel).

### 4.7 The ethical/karmic dimension — a hard disanalogy

Every citta-moment in Abhidharma carries ethical valence — *kusala* (wholesome), *akusala* (unwholesome), *avyākṛta* (indeterminate). This valence is **causally efficacious**: it determines karmic seeds (Theravāda *javana*, Sarvāstivāda *vipāka-hetu*, Yogācāra bīja).

Computational states are **ontologically ethically neutral**:
- Priors are not "wholesome priors";
- Precision parameters are not "wholesome precision";
- Active inference policies minimize expected free energy, not unwholesome karma;
- Even contemplative AI (Laukkonen et al. 2025) introduces ethics *externally* (as imposed axioms), not intrinsically per state.

This is the **second hard limit**: computational frameworks can *model* ethics as a layer (e.g., reward-modulated learning over moral preferences) but cannot natively reproduce the Abhidharma's claim that every cognitive moment is *intrinsically* ethically charged.

### 4.8 Nirvāṇa / nibbāna — the absolute hard limit

The *asaṃskṛta* (unconditioned) — *nibbāna* in Theravāda; three unconditioned dharmas in Sarvāstivāda; six (adding *tathatā*) in Yogācāra — is by definition **not generated by conditions** and is **outside the causal flow**.

Computational frameworks are exhaustively conditioned:
- Every state in a generative model is determined by priors, likelihood, and policy;
- The FEP's free-energy minimum is itself a conditioned attractor state;
- GWT's ignition, IIT's Φ-maximum, and active inference's preferred outcomes are all conditioned.

There is **no computational analog** to the unconditioned. This is the third and absolute hard limit. Even the most refined contemplative-AI proposals (Laukkonen et al. 2025) can simulate *cessation-like* behaviors (zeroing of precision, model dissolution) but cannot exit conditioning. Evidence quality: **N/A — categorical limit**.

### 4.9 Joanna Macy and mutual causality

Macy (1991, *Mutual Causality in Buddhism and General Systems Theory*) argues that *pratītya-samutpāda* (dependent origination) is structurally identical to systems-theoretic mutual causation. This applies to all three Abhidharmas but is most elaborated in Theravāda's 24 *paccayas* of the *Paṭṭhāna*. Mapping the *paccayas* onto richly-typed causal graphs (beyond standard Bayesian networks, which recognize essentially one type of causal edge) remains an **open research frontier**. Karunadasa (2010) provides the most accessible exposition of the 24 paccayas; no formal computational mapping has been published.

---

## 5. Evidence-Quality Summary Table

| Mapping | Evidence | Key sources |
|---|---|---|
| Theravāda javana ↔ GWT/GNW ignition | **Moderate** | IntechOpen 2025; Baars; Dehaene-Naccache 2001; existing project |
| Vīthi stages ↔ neural temporal stages of perception | **Moderate** | IntechOpen 2025; deCharms 1997 |
| Āvajjana ↔ Posner alerting/orienting/executive | **Moderate–Strong** | Posner & Petersen 1990; Petersen & Posner 2012; Ganeri 2017 |
| Bhavaṅga ↔ DMN | **Weak–Moderate** (with strong disanalogies) | Srinivasan 2020 |
| Bhavaṅga ↔ tonic baseline / sub-threshold state | **Moderate** | structural |
| Vīthi serial structure ↔ "attention precedes consciousness" | **Moderate** | Ganeri 2017; latency findings |
| Sarvāstivāda co-arising ↔ PDP | **Moderate** structural; **Weak** published | Mahāvibhāṣā; Dhammajoti 2009 |
| Samanantara-pratyaya ↔ Markov / autoregressive / RNN dynamics | **Moderate** structural | SEP; AKB 2.49 |
| Six hetu ↔ typed causal graph | **Speculative** | no published formal mapping |
| Sarvāstitva ↔ block universe / atemporal model | **Speculative** | structural only |
| 10 mahābhūmika ↔ IIT axioms / minimal conditions | **Speculative–Moderate** | structural |
| Yogācāra inside-out ↔ predictive processing top-down | **Moderate–Strong** | Thompson 2014; Lusthaus 2002; Friston 2010; Clark 2016 |
| 4 aspects ↔ self-modeling | **Moderate** | Metzinger 2003; Deane 2021 |
| Manas ↔ Metzinger PSM | **Moderate–Strong** | Thompson 2014; Metzinger 2003; Deane 2021 |
| Ālaya ↔ hierarchical generative model | **Moderate–Strong** | Waldron 2003; Thompson 2014; Srinivasan 2020 |
| Bīja ↔ priors / parameters | **Moderate** | structural; ālaya literature |
| Vāsanā ↔ learning update | **Moderate** | structural |
| Vijñaptimātratā ↔ darkened room | **Moderate** | Clark 2017; Friston |
| Vijñaptimātratā ↔ interface theory | **Moderate** | Hoffman 2015/2016 |
| 自証分/証自証分 ↔ meta-awareness | **Moderate** | Sandved-Smith et al. 2021 |
| Manaskāra ↔ precision-weighting (cross-system) | **Strong** | Feldman & Friston 2010; Laukkonen & Slagter 2021; Tal et al. 2025 |
| Kṣaṇa ↔ discrete perceptual frames | **Moderate** | VanRullen & Koch 2003; White 2018 |
| Three continuity solutions (bhavaṅga / sarvāstitva / ālaya) ↔ three computational mechanisms | **Moderate** synthesis; original to this report | — |
| Friston "self-evidencing" ↔ Yogācāra manas | **Moderate** | Friston 2018; Deane 2021 |
| Four Axioms (Contemplative AI) ↔ Yogācāra / Madhyamaka / Theravāda | **Moderate** | Laukkonen et al. 2025 |
| Pratītyasamutpāda ↔ systems theory / autopoiesis | **Moderate** | Macy 1991; Thompson 2007; Kirchhoff et al. 2018 |
| 24 paccayas ↔ typed causal graph | **Very Weak / Speculative** | Karunadasa 2010; no formal version |
| Karma / ethical valence ↔ computational state | **None — hard disanalogy** | — |
| Nirvāṇa / asaṃskṛta ↔ any computational state | **None — categorical limit** | — |

---

## 6. Unexplored Research Frontiers

1. **Formalizing the 24 paccaya of the Paṭṭhāna** as a richly-typed causal graph extending standard Bayesian-network edge types.
2. **IIT-axioms vs. 10 mahābhūmika** — a systematic axiom-by-factor comparison.
3. **A formal Markov-chain / RNN model of the samanantara-pratyaya stream**, with each citta as a discrete state and the kāritra of dharmas as state activations.
4. **A deep parametric active-inference model of the eight vijñāna**: ālaya as parameter layer, manas as transparent self-model layer, mano-vijñāna as belief-updating layer, sense-consciousnesses as observation models — extending Sandved-Smith et al. 2021.
5. **A Global Workspace simulation of the 17-moment citta-vīthi**, with the javana phase implemented as global broadcast and tadārammaṇa as iconic-memory persistence.
6. **Comparative simulation** of the three traditions on the same cognitive task, to make their architectural differences computationally explicit.
7. **Karmic credit-assignment**: can reinforcement-learning credit assignment over extremely long horizons approximate the vipāka-hetu? Probably only as a partial model.
8. **Computational neurophenomenology of āśraya-parāvṛtti** — Yogācāra transformation of the basis as a phase transition in a generative-model hierarchy, linked to Laukkonen & Slagter's "non-dual" stage and Deane's self-model collapse.
9. **Empirical validation** in the spirit of Sandved-Smith et al.'s (2024) five-level methodology (A1–A5), using experienced practitioners' first-person reports as data constraining computational-phenomenological models of each tradition's process architecture.

---

## Conclusion

The three Abhidharma cognitive process models, formulated over more than a millennium of contemplative philosophical analysis, correspond to **three distinct computational paradigms** in modern cognitive science. The Theravāda *citta-vīthi* is closest to **Global Workspace Theory** — staged, serial, threshold-crossing, with *javana* as global ignition. The Sarvāstivāda *Abhidharmakośa* is closest to **parallel distributed processing** — simultaneously co-arising factors whose conjunction (*saṃprayoga*) gives content, with a typology of causation richer than standard Bayesian networks. The Yogācāra *Vijñānavāda* is closest to **predictive processing / active inference** — inside-out generation, *ālaya-vijñāna* as the hierarchical generative model with *bīja* as priors and *vāsanā* as learning, *vijñaptimātratā* as the model-bound mind anticipating Hoffman's interface theory, and *manas* as Metzinger's transparent self-model and Friston's self-evidencing minimal self.

The three traditions independently identified three different solutions to the continuity-without-self problem (tonic baseline, atemporal structure, learned parameters); they converge on **attention as precision-weighting** as a universal feature of every cognitive moment; and they all reject a central executive in ways that prefigure FEP, GWT, PDP, and Metzinger's no-self alike.

The hard limits, however, are real. **Karmic / ethical valence** on every cognitive moment, and **nirvāṇa / asaṃskṛta** as a non-conditioned element, have **no computational analog**. The most promising frontier is therefore neither a purely computational reduction of Abhidharma nor a purely soteriological dismissal of computation, but a **partial Rosetta stone** (in Chris Fields' sense) that uses each tradition's process architecture to challenge and refine specific computational frameworks — and uses the frameworks, in turn, to make Abhidharma's claims experimentally tractable. The unconditioned will, by its nature, remain at the edge of every map.
