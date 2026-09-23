# WP-19 editorial integration: correction and review record

Date: 2026-09-23. Status: **REVIEW**, awaiting independent review before merge.

- Repository: `LiveFromTheCasita/Nietzsche-SpiritMask`
- Branch: `integrator/wp-19-editorial-integration`
- Baseline: `07e0416ea66f9e0fb103fa8ee2ea0b00d4256672` (main, merge of PR #51)
- Inputs: the WP-19 integration audit and the owner's supplied **WP-19 Claude Editorial Integration Audit**, both against this baseline. This record documents the reconciled correction scope, not blanket acceptance of either report.
- Production has not been changed by this work. WP-20 remains blocked pending WP-19 review and the release gate.

## What changed

Fifteen public HTML files receive bounded changes. No course, reading selection, URL, section ID, progress key, preferred edition, byline, CSS, or JavaScript is changed.

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
| C-12 | Leave terminology variants unchanged. The existing notes identify Common's wording without asserting that Kaufmann uses a different term; wholesale normalization is unnecessary. |
| C-13 | Narrow to unsupported historical/psychological verdicts in the Christianity framing and distinctions. Do not impose a new sitewide policy on labelled editorial evaluations. |
| C-14 | Attribute the two overman essay blurbs as arguments. Preserve bylines authorized by the owner and the existing first-person argument in Beyond the Last Man; do not reopen the completed essay audit. |
| C-15 | No change: “named” does not claim “first named,” and the earlier occurrence is already supplied. |

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
- Draft review PR: https://github.com/LiveFromTheCasita/Nietzsche-SpiritMask/pull/52. The subsequent verification-record commit changes only this document; public-file bytes remain those inspected above.

## Remaining gate

Independent review should test both the editorial changes and these accept/narrow/reject decisions against the cited passages and project standards. WP-19 is not complete until that review is reconciled. Do not merge or deploy as part of the review; WP-20 must still verify the release conditions and production afterward.
