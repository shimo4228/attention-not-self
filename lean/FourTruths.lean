/-
Are the Four Noble Truths a tautology? — two readings, checked in Lean 4
四諦はトートロジーか — 二つの読みを Lean 4 で確かめる

No Mathlib. Checked with Lean 4.35.0:  lean lean/FourTruths.lean
Companion text (theme 10 of attention-not-self):
  EN  Are the Four Noble Truths a Tautology - Sorting Skeleton from Content with Lean.md
  JA  四諦はトートロジーか - Leanで骨組みと中身を仕分ける（日本語）.md

What the checker certifies: under THIS formalization, which statements follow
from the definitions alone and which do not. Whether the formalization is
faithful to the texts is decided outside Lean.
-/

namespace FourTruths

/-- An interpretation (model): one world that gives the vocabulary a meaning. -/
structure Model where
  State   : Type                      -- ways a sentient being can be
  Factor  : Type                      -- candidate causes of dukkha
  dukkha  : State → Prop              -- this state is dukkha (苦)
  present : Factor → State → Prop     -- this factor is present in this state
  tanha   : Factor                    -- craving (渇愛, taṇhā / tṛṣṇā)
  rival   : Factor                    -- a rival hypothesis (bodily humours, material elements, …)

/-- Samudaya (集): `f` is a cause of dukkha — wherever there is dukkha, `f` is present.
    This is a necessary-condition reading of "cause"; it is a modelling choice. -/
def IsCause (M : Model) (f : M.Factor) : Prop :=
  ∀ s, M.dukkha s → M.present f s

/-- Nirodha (滅): where `f` is absent, there is no dukkha. -/
def Nirodha (M : Model) (f : M.Factor) : Prop :=
  ∀ s, ¬ M.present f s → ¬ M.dukkha s

/-- A practice `p` removes `f`. -/
def Removes (M : Model) (p : M.State → M.State) (f : M.Factor) : Prop :=
  ∀ s, ¬ M.present f (p s)

/-- Magga (道): after practice `p` there is no dukkha. -/
def Magga (M : Model) (p : M.State → M.State) : Prop :=
  ∀ s, ¬ M.dukkha (p s)

/-! ## Reading A — the skeleton

"Dukkha has a cause. When the cause ceases, dukkha ceases. The practice that
removes the cause is the path." Once samudaya is granted, nirodha and magga
follow from the definitions alone, in every model. -/

theorem nirodha_of_samudaya (M : Model) (f : M.Factor)
    (h : IsCause M f) : Nirodha M f :=
  fun s hn hd => hn (h s hd)

theorem magga_of_samudaya (M : Model) (f : M.Factor) (p : M.State → M.State)
    (h : IsCause M f) (hr : Removes M p f) : Magga M p :=
  fun s hd => hr s (h (p s) hd)

/-! ## Reading B — the content

"The cause of dukkha is craving, not the rival factor." This holds in some
models and fails in others: it is contingent. -/

/-- A world where craving is the cause and the rival factor is not. -/
def buddhistWorld : Model where
  State   := Unit
  Factor  := Bool
  dukkha  := fun _ => True
  present := fun f _ => f = true
  tanha   := true
  rival   := false

/-- A world where the rival factor is the cause and craving is not.
    A bare relocation of the cause, not a reconstruction of any historical opponent. -/
def rivalWorld : Model where
  State   := Unit
  Factor  := Bool
  dukkha  := fun _ => True
  present := fun f _ => f = true
  tanha   := false
  rival   := true

theorem samudaya_tanha_contingent :
    (∃ M : Model, IsCause M M.tanha ∧ ¬ IsCause M M.rival) ∧
    (∃ M : Model, ¬ IsCause M M.tanha ∧ IsCause M M.rival) :=
  ⟨⟨buddhistWorld, fun _ _ => rfl, fun h => Bool.noConfusion (h () True.intro)⟩,
   ⟨rivalWorld, fun h => Bool.noConfusion (h () True.intro), fun _ _ => rfl⟩⟩

/-- A world without dukkha. -/
def painlessWorld : Model where
  State   := Unit
  Factor  := Unit
  dukkha  := fun _ => False
  present := fun _ _ => False
  tanha   := ()
  rival   := ()

/-- The first truth itself ("there is dukkha") is contingent. -/
theorem dukkha_contingent :
    (∃ M : Model, ∃ s, M.dukkha s) ∧ (∃ M : Model, ¬ ∃ s, M.dukkha s) :=
  ⟨⟨buddhistWorld, (), True.intro⟩, ⟨painlessWorld, fun ⟨_, h⟩ => h⟩⟩

/-- A world with dukkha and no practice that removes craving. -/
def noExitWorld : Model where
  State   := Unit
  Factor  := Unit
  dukkha  := fun _ => True
  present := fun _ _ => True
  tanha   := ()
  rival   := ()

/-- "There is a practice that removes craving" is contingent. -/
theorem path_exists_contingent :
    (∃ M : Model, ∃ p, Removes M p M.tanha) ∧
    (∃ M : Model, ¬ ∃ p, Removes M p M.tanha) :=
  ⟨⟨painlessWorld, id, fun _ h => h⟩,
   ⟨noExitWorld, fun ⟨_, h⟩ => h () True.intro⟩⟩

/-! ## Appendix — the circle (the path contains right view; right view is knowledge of the truths)

If the content of right view is the truths, the content of the truths is the
path, and the content of the path is right view, with no base case, the
resulting inductive type has no inhabitant. This is a fact about finite
(well-founded) constructions; a coinductive reading would admit a self-referring one. -/

mutual
  inductive Truths where
    | mk : Path → Truths
  inductive Path where
    | mk : View → Path
  inductive View where
    | mk : Truths → View
end

mutual
  theorem Truths.uninhabited : Truths → False
    | .mk p => Path.uninhabited p
  theorem Path.uninhabited : Path → False
    | .mk v => View.uninhabited v
  theorem View.uninhabited : View → False
    | .mk t => Truths.uninhabited t
end

end FourTruths

#print axioms FourTruths.nirodha_of_samudaya
#print axioms FourTruths.magga_of_samudaya
#print axioms FourTruths.samudaya_tanha_contingent
#print axioms FourTruths.dukkha_contingent
#print axioms FourTruths.path_exists_contingent
#print axioms FourTruths.Truths.uninhabited
