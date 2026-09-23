# WP-19 editorial integration: correction and review record

Date: 2026-09-23. Status: **REVIEW**, independent review passed; minor follow-up complete, awaiting merge.

- Repository: `LiveFromTheCasita/Nietzsche-SpiritMask`
- Branch: `integrator/wp-19-editorial-integration`
- Baseline: `07e0416ea66f9e0fb103fa8ee2ea0b00d4256672` (main, merge of PR #51)
- Inputs: the WP-19 integration audit and the owner's supplied **WP-19 Claude Editorial Integration Audit**, both against this baseline. This record documents the reconciled correction scope, not blanket acceptance of either report.
- Production has not been changed by this work. WP-20 remains blocked pending WP-19 completion and the release gate.

## What changed

Eighteen public HTML files receive bounded changes, including three additional terminology-note pages in the review follow-up. No course, reading selection, URL, section ID, progress key, preferred edition, byline, CSS, or JavaScript is changed.

- `about.html`: describe the first encounter, fuller route, work survey, and separate notebook material. Retain the declared Kaufmann orientation while requiring it to answer to textual evidence and competing explanations.
- `glossary.html`: distinguish self-overcoming from giving a character style; identify notebook nihilism distinctions; remove the completed two-halves account of revaluation, the categorical exclusion of domination from power, and the unsupported claim that the last man has heard of God's death.
- `index.html`, `themes.html`, `corpus.html`: make introductory summaries consistent with their destinations; separate early aesthetic justification from later endurance/affirmation; correct middle-period placement of amor fati and recurrence; distinguish composition and publication of Ecce Homo; qualify developmental claims about early essays and Daybreak.
- `themes/critique-of-christianity.html`: preserve both the Jesus/church contrast and the diagnosis of Jesus; distinguish criticism of truth claims from psychological explanation; require separate support for history and psychology; state the anti-Jewish constructions without treating opposition to contemporary antisemites as their cancellation.
- `themes/suffering-and-cruelty.html`: preserve harsh published demands rather than confining them to notebooks or inward discipline. Distinguish internalization, religious debt, and priestly redirection of suffering. Confine the first reading's explanation to its assigned GM II §§1–15 and explicitly identify the later §§16–18 hypothesis. Flag the racial and sexist comparisons in §7 for examination.
- `themes/aphorism-and-style.html`: remove the claims that aphorisms cannot depend on neighbours or contain a demonstration.
- `themes/will-to-power.html`: qualify the opening exclusion of political domination.
- `themes/amor-fati.html`, `themes/eternal-recurrence.html`, `themes/master-slave-morality.html`, `themes/genealogy-method.html`: make connection blurbs preserve distinctions already established in the destination pages.
- `themes/overman.html`: attribute two companion-essay theses as arguments and repair the next-theme link to Recurrence, time, becoming.
- `works/birth-of-tragedy.html`: replace the predetermined march toward later doctrines with comparative questions; distinguish the 1872 argument from the 1886 retrospect; retain the eight-session route and all 77 passage notes; clarify quotation provenance.

`search-index.json` is regenerated. `sitemap.xml` is byte-identical to the baseline and is not committed.

## Reconciliation of Claude's findings

| Finding | Decision and implementation |
| --- | --- |
| C-01 | Accept the stale architecture finding. Narrow the interpretive-stance change: preserve the owner's declared orientation and add textual accountability, rather than replacing the site's identity. Generic references to core passages do not require changing `start.html` or metadata. |
| C-02 | Accept the self-overcoming, nihilism, revaluation, power, and last-man corrections. Do not treat “tends to drop” as a claim that overman disappears completely. Do not rewrite decadence or perspectivism entries whose qualifications are compatible with the theme pages. |
| C-03 | Accept the concrete summary and formula corrections. Keep the homepage's four-theme route; present it as a reading order whose connections need testing. |
| C-04 | Accept the unambiguous 1882/late and Ecce Homo errors and qualify the two developmental claims. Explain period groupings as principal associations, not exhaustive ranges; do not mechanically map every precursor onto every period tag. Early essays were already labelled unpublished; correct the encompassing title. |
| C-05 | Accept bounded BT corrections, including the 1886/1888 error. Keep the Amor Fati cross-link but explicitly label it a comparison. |
| C-06 | Resolve attribution by retaining checked Haussmann quotations and paraphrasing wording not verified in that source. Do not claim verification of Kaufmann wording or alter the preferred-edition policy. |
| C-07 | Accept the Christianity distinctions, including the limitations of the Jesus/church contrast and the relevance of truth criticism. |
| C-08 | Accept the published-work counterexamples and the GM II §7 complication. Do not turn the correction into a universal instruction to seek suffering. |
| C-09 | Accept the distinction between slave revolt, internalization, religious debt, and priestly interpretation. Also fix the first-encounter assignment/gloss mismatch. |
| C-10 | Accept the specific connection-blurb corrections; no blanket rewrite of all connections. |
| C-11 | Accept the bounded opening-sentence qualification. |
| C-12 | Initially left unchanged. On second review, remove the redundant Common “last man” clauses from death of God, revaluation, and nihilism to avoid implying a difference from the preferred edition. Retain the terminology variants in commentary; no wholesale normalization. |
| C-13 | Narrow to unsupported historical/psychological verdicts in the Christianity framing and distinctions. Do not impose a new sitewide policy on labelled editorial evaluations. |
| C-14 | Attribute the two overman essay blurbs as arguments. Preserve bylines authorized by the owner and the existing first-person argument in Beyond the Last Man; do not reopen the completed essay audit. |
| C-15 | Initially left unchanged because “named” need not mean “first named.” On second review, remove the possible uniqueness implication: describe a sustained account of the phrase instead. Avoid the proposed unsupported superlative “fullest.” |

The integrator's separate findings on the overman footer, self-overcoming and power summaries, tragedy tagline, aphorism definition, and About architecture are included above.

## Source and translation checks

Checks are bounded to the corrected claims; this is not sitewide scholarly certification.

- [The Birth of Tragedy, trans. Wm. A. Haussmann](https://www.gutenberg.org/files/51356/51356-h/51356-h.htm): compared retained quotations in all 77 passage notes with their assigned sections, including the 1886 self-criticism and foreword. All 83 remaining quoted spans match those sections after case, punctuation, spacing, and æ/ae normalization. This supports their attribution to Haussmann; it does not verify Kaufmann wording. Unverified preferred-edition snippets were replaced with clearly unquoted paraphrases. The on-page note discloses typographic normalization. Checked the distinction between §§5 and 24 and the critique of metaphysical consolation in Self-Criticism §7.
- [The Antichrist, trans. H. L. Mencken](https://www.gutenberg.org/files/19322/19322-h/19322-h.htm): checked §15 on imaginary causes/effects and §§29–31 on the Saviour's type, sensitivity, and decadence. The corrections direct readers to §§24–27 for the polemical reconstruction of Judaism; they do not endorse that reconstruction as history.
- [Genealogy, trans. Horace B. Samuel](https://www.gutenberg.org/files/52319/52319-h/52319-h.htm): checked the boundary between II §§1–15 and §§16–18; distinguished the latter internalization hypothesis from religious debt in §§19–22 and the priest's redirection in III §§15 and 20. The first assignment and its links are unchanged.
- [Beyond Good and Evil, trans. Helen Zimmern](https://www.gutenberg.org/files/4363/4363-h/4363-h.htm): checked the published call concerning increased suffering in §225, inward and outward cruelty in §229, and the social claims in §§257–259. These prevent an exclusively inward or notebook-only account.
- [Ecce Homo, trans. Anthony M. Ludovici](https://www.gutenberg.org/files/52190/52190-h/52190-h.htm): the translator's introduction records composition in 1888 and first German publication in 1908.
- The other glossary and connection corrections were checked against the existing destination pages and canonical exemplars. They introduce no new quotations or purported scholarly consensus.

## Verification

- `python3 scripts/build-index.py`: passes; 178 search entries, 154 sitemap URLs.
- `node --check site.js` and `node --check book-guide.js`: pass.
- `git diff --check`: passes.
- Static DOM check across 155 HTML files: all 10,446 local links and fragments resolve; no duplicate IDs.
- Baseline comparison: all IDs and primary-text links on changed pages preserved. Reading files, submissions, `start.html`, and `sources.html` are byte-identical. No route migration is needed.
- Browser/preview inspection: completed on the Vercel branch preview for content commit `87007d4def9b811aa9a8b4f33a3b050af1b874e4`. Inspected the homepage, theme-index period view, BT comparison section, and the Christianity/suffering distinctions. Followed the overman next-theme link to Recurrence, Time, and Becoming. The period filter exposes the revised chronology note and sets `aria-pressed=true`. Screenshots showed readable text without clipping in the inspected desktop viewport. This was a representative desktop check, not a repeat of WP-16 accessibility or a mobile audit.
- Preview: https://nietzsche-spirit-mask-git-in-cd69c9-livefromthecasitas-projects.vercel.app/ (Vercel check successful).
- Draft review PR: https://github.com/LiveFromTheCasita/Nietzsche-SpiritMask/pull/52. Commit `9ede7a5` added only the initial verification record. The separately recorded follow-up below adds minor public-text clarifications.

## Remaining gate

Independent review is reconciled; there are no substantive editorial blockers. The branch awaits the production release action. Merge is the production trigger, and WP-20 must verify release conditions, deployment identity, and production afterward. Mark WP-19 complete and update the production-state wording when the changes reach main.


## Independent PR review and follow-up

The owner supplied **WP-19 Claude PR Review**, against baseline `07e0416` and exact head `9ede7a543e16fa6ff81593acc6dbac342ba70879`. Verdict: **PASS WITH MINOR ISSUES**; Claude explicitly reported no merge blockers and no regressions. The review accepted the narrowed About, glossary, chronology, evaluation, and byline decisions. It independently checked the complete public-page diff, structural invariants, reproducible generated files, and the disputed primary-source claims, including all 83 BT quotations. It did not inspect the preview or independently verify Kaufmann wording.

| Review finding | Follow-up |
| --- | --- |
| 1. First Genealogy reading stops before internalization | Added a direct link from the first card to the existing fuller-route bad-conscience group assigning II §§16–18. No assignment changed. |
| 2. Common “last man” note | Removed the redundant clause in both death-of-God cards, revaluation, and the matching nihilism note. |
| 3. Will-to-power “the chapter” wording | Reworded the two cards and the related connection to describe the sustained account without a first-use or unique-use implication. |
| 4. “Compact” aphorism | Removed “compact”; retained the account of relative independence and neighbouring sections. |
| 5. BT's “because they saw it” | No change. Both reviewers accept the attribution and the distinction supplied by the revised comparison section. |
| 6. Christianity card | Explicitly state that opposition to antisemites does not cancel the anti-Jewish language. |

The follow-up adds no quotation or primary-source assertion and changes no route, external link, ID, preferred edition, or byline. The independent review applies to `9ede7a5`; these small follow-up edits are the integrator's response and are not represented as a second Claude-approved commit.

Follow-up validation: `build-index.py` passes (178 search entries, 154 sitemap URLs); both JavaScript syntax checks and `git diff --check` pass. All 2,279 local links/fragments on the seven touched theme pages resolve, and their IDs, progress attributes, and external links match the reviewed head. The search index is regenerated; sitemap bytes are unchanged. Vercel reports success for content commit `c75f0ca07b74cb85c8427410e2bb3d6cc6d9d6c9`. On its refreshed desktop preview, the new first-encounter continuation link was followed to `#full-bad-conscience`, and the destination visibly begins with GM II §§16–18. The final follow-up record changes only this document.
