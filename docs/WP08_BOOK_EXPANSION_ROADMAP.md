# WP-08 — Book-guide expansion roadmap

**Approved roadmap · 2026-09-23**  
Repository baseline: `55e616a94280de571760d0df0e891afbebdcd665` (`main`, after WP-20). This is a planning document. It does not itself implement new public courses.

## Approved scope and sequence

Keep the existing introductions intact. Add an **optional full-text course** for each of the seven books now taught through selected readings, one scoped book package at a time. A full-text course assigns the whole named published work in its own order, groups passages into manageable lessons, and gives representative passages close analysis. It need not comment separately on every aphorism. Preserve the current introductory content and URLs as the shorter path. The existing book lessons do not use the theme-route reading-progress mechanism; any new book-course progress feature requires its own separately reviewed scope.

The owner approved the order below as an editorial queue, with a reassessment after the first book. It is an order for *building* courses, not a required reading order. A reader following publication history may instead proceed from *Human, All Too Human* through *Daybreak*, the original *Gay Science*, *Zarathustra*, and *Beyond Good and Evil*, returning to the 1887 additions at the proper point. Each full-text course follows its book's section or chapter order; any chronological route that moves a later preface must be labeled as an alternate. Future implementation packages and their scope require separate review.

## Current course inventory

The counts describe current guided sessions, not coverage of every printed section. The audit is based on the ten `works/` hubs and their lesson chains at the baseline above; it updates the planning picture from WP-05 without rewriting that historical audit note.

| Work | Current guided course | Expansion decision |
| --- | --- | --- |
| [The Antichrist](../works/antichrist.html) | 12 lessons; Preface and §§1–62 assigned. | Whole published text covered. Maintain and QA; no expansion package. The separately transmitted *Law Against Christianity* remains an optional supplement. |
| [Beyond Good and Evil](../works/beyond-good-and-evil.html) | 10-lesson **complete introduction** spanning all nine parts, Preface, and closing poem; selected sections. | Add an optional full-text track for Preface, §§1–296, and poem. Keep the approved introductory course and its full-part overview. |
| [The Birth of Tragedy](../works/birth-of-tragedy.html) | 8-session complete selected introduction, with a map of all 25 sections and later self-criticism. | Pilot full-text assignments through §§1–25; treat the 1886 self-criticism as a retrospective second reading. |
| [Daybreak](../works/daybreak.html) | 10-session complete selected introduction across five books. | Full-text route through §§1–575, then return to the 1886 preface. |
| [The Gay Science](../works/gay-science.html) | 10-session complete selected introduction across Books I–V; lesson 4 uses the intentional `start.html` route. | Full-text route with an explicit boundary between 1882 Books I–IV and the 1887 additions. Retain the lesson-4 URL. |
| [On the Genealogy of Morals](../works/genealogy.html) | 12 lessons; Preface and Essays I–III, including the Note after I §17 and the Essay III epigraph. | Whole published text covered. Maintain and QA. |
| [Human, All Too Human](../works/human-all-too-human.html) | 10-session complete selected introduction across Volume I and both Volume II collections. | Full-text route across the three collections, with separate section numbering and later prefaces. |
| [Twilight of the Idols](../works/twilight-of-the-idols.html) | 14 lessons; Preface, maxims, all chapters, and “The Hammer Speaks.” | Whole published text covered. Maintain and QA. |
| [Untimely Meditations](../works/untimely-meditations.html) | 10 selected readings covering **all four essays**; a complete introductory sequence, not an assignment of every section. | Full-text route through all four essays in published order. WP-05 called this a “beginning path”; the current ten-session inventory clarifies its coverage. |
| [Thus Spoke Zarathustra](../works/zarathustra.html) | 10-session complete selected introduction covering Prologue and all four parts. | Full-text route through Prologue and all chapters of Parts I–IV, preserving the story's sequence. |

“Whole published text covered” describes assigned reading, not an independent scholarly certification of every explanation. A selected introduction is complete in its own stated scope; the proposed full-text route is an additional depth option.

## Approved implementation queue

| Order | Book and bounded deliverable | Why here; main dependency or risk |
| --- | --- | --- |
| **1 · pilot** | **The Birth of Tragedy:** inventory what the eight existing sessions assign; group any remaining portions of the 1872 text into ordered lessons; cover the foreword and §§1–25; revisit the separately numbered 1886 self-criticism after the original argument as a labeled chronological alternate route. | Small numbered core and existing section map make a useful test of lesson depth and reader workload. WP-19 already checked the 77 passage notes. Do not let the later self-criticism silently supply the early book's argument. |
| **2** | **The Gay Science:** mark the later preface as 1887, then assign the verse prelude and Books I–IV (§§1–342), followed by Book V (§§343–383) and songs; return to the preface after the whole book. | Builds the link to *Zarathustra*. Its current intro follows themes across the book, so a second route must make chronology and order visible without changing that route or `start.html`. |
| **3** | **Thus Spoke Zarathustra:** assign the whole Prologue and all chapters in Parts I–IV; add navigation and interpretive checkpoints for the story, speeches, and songs. | Builds on the 1882 *Gay Science* ending and requires sustained attention to the teacher's changing audiences. Keep Part IV's different publication situation visible and avoid treating speeches as direct authorial propositions. |
| **4** | **Beyond Good and Evil:** add complete ordered coverage of Preface, all 296 continuously numbered sections across nine parts, and the closing poem. | The ten-lesson introduction already spans the architecture and passed WP-06 QA. A new track must add actual assignments for the sections it currently passes over, not merely rename the existing part-range map. Compare later claims with *Zarathustra* without forcing agreement. |
| **5** | **Untimely Meditations:** assign the four essays in order, with section-level stopping points and transitions from Strauss to history, Schopenhauer, and Wagner. | The ten readings already touch all four. Two free volumes divide the essays between Ludovici and Collins; Ludovici's Strauss §12 omits the concluding prose examples. Check those passages against the preferred Hollingdale edition and identify the free-text limit. |
| **6** | **Daybreak:** make five ordered book units covering all 575 aphorisms, with groups small enough for close reading and a return to the added 1886 preface after the original text. | Scale and repeated questions make lesson grouping harder than the pilot. Use the prior *Human, All Too Human* introduction for historical context; a full course in that earlier work is not a prerequisite for publishing this one. |
| **7** | **Human, All Too Human:** plan separate complete units for Volume I (§§1–638), *Assorted Opinions and Maxims* (§§1–408), and *The Wanderer and His Shadow* (§§1–350); identify the 1886 prefaces at their printed positions and return to them after the original collections. | Largest corpus and highest navigation/citation burden. Preserve the three collection names whenever section numbers restart. Plan capacity after lessons from the smaller packages rather than fixing a lesson count now. |

This order prioritizes a contained pilot and the existing *Gay Science* → *Zarathustra* → *Beyond Good and Evil* bridge before the large middle-period aphorism corpora. Implementation may pause or change order after the pilot if workload or editorial review warrants it; record that decision in the work plan rather than silently changing the queue.

### Post-pilot status and owner reprioritization (2026-09-24)

The historical approval above is unchanged. This note records later decisions.
- **Pilot:** *The Birth of Tragedy* full-text route shipped through PR #57 (`33c00c7`).
  - Its technical closeout is complete.
  - On 2026-09-24 the owner reported the real reader trial complete and closed the pilot without supplying timings. Advertised ranges remain unvalidated estimates.
  - See [`BT_PILOT_CLOSEOUT.md`](BT_PILOT_CLOSEOUT.md).
- **Changed order:** the owner placed dedicated guides for four Corpus works ahead of rows 2–7 of this queue: *Early Unpublished Essays*, *The Case of Wagner*, *Ecce Homo*, and *Nietzsche Contra Wagner*. This roadmap's inventory covered only the ten existing guides, so those four works were never part of it.
- **Row 2:** the scope proposal for *The Gay Science* merged through PR #58 on 2026-09-24 as documentation only. Its route and lessons remain on an owner-priority hold.
- **Rows 3–7:** these remain deferred behind the four guides and the later reassessment, in the order above unless the owner changes it.

**2026-09-25 status update:** PR #61 published the four previously missing guide pages. An editorial comparison found that they need deeper walkthroughs and passage notes before the optional full-text queue resumes. The bounded release is complete; the corrective guide-depth work is recorded as the next proposed editorial package in `WORK_PLAN.md`, after the owner's requested recordkeeping correction. The *Gay Science* implementation remains on hold, and rows 3–7 remain deferred. This update does not change the historically approved course sequence.

**Later 2026-09-25 update:** PR #63 expanded the *Ecce Homo* book guide; the owner inspected the updated live page and judged it up to standard. The other three guide-depth revisions remain open before reassessing this optional course queue. No *Ecce Homo* lesson chain was added or required for the accepted guide repair.

## Contract for each future book package

1. Make a **coverage matrix before drafting**: every prefatory item, numbered section or chapter, poem/appendix within the chosen published work, and existing introductory lesson; distinguish Nietzsche's own text from translator/editor apparatus. Note any deliberate exclusions outside the book's boundaries. Start from the corresponding `works/` guide and `sources.html`, then verify against the preferred and credited free editions.
2. Specify a realistic sequence of new lessons and exact reading assignments. Mark which introductory lessons can be linked or reused and where new analysis is needed. Full coverage means each in-scope passage has a place in an ordered assignment; it does not require one web page per section. Keep the short route available and avoid duplicate commentary where a cross-link suffices.
3. Preserve the preferred Kaufmann or Hollingdale recommendation named in `sources.html`; label the linked free translator separately. Check edition-specific omissions, title variants, numbering, publication dates, and retrospective additions. Use short attributed quotations only when necessary for analysis, never complete passages from copyrighted editions.
4. Give each new lesson a question, precise sections/chapters, interpretive stakes, a complication or test, and a transition to the next lesson. State troubling claims plainly. Compare early and later works without implying a settled single system. Check that lesson lengths are workable with the actual primary reading.
5. Implement on its **own scoped branch/PR**, with source/translation review, `python3 scripts/build-index.py`, `node --check site.js`, relevant link and navigation checks, and changed-page browser inspection. Preserve existing book URLs and lesson navigation. If a separate implementation changes a theme reading route or adds book-course progress, explicitly review progress behavior there. Commit generated files only when their content changes; verify the `main` production deployment after merge under the release runbook. Do not manually deploy or alter Vercel settings as part of this roadmap.

The first package is a pilot gate. Before starting book 2 or any of the other six courses, inspect its coverage matrix, source checks, lesson workload, navigation, preview, and reader experience; adjust the remaining units and order explicitly. The roadmap does not set a deadline or claim that the seven substantial courses are already staffed or approved for publication.

## Source notes and approval record

The repository's [edition guide](../sources.html) is the authority for preferred editions and free alternatives. The linked Project Gutenberg texts independently expose the [25 numbered sections and later self-criticism](https://www.gutenberg.org/ebooks/51356), the [1887 additions to *The Joyful Wisdom*](https://www.gutenberg.org/ebooks/52881), and the [two](https://www.gutenberg.org/ebooks/51710) [free](https://www.gutenberg.org/ebooks/38226) *Untimely* volumes. These links establish text availability and edition boundaries; detailed passage/translator checks belong to each implementation package.

**Owner approval (2026-09-23):** the owner approved the optional full-text scope and seven-book queue, directed that *The Birth of Tragedy* be the bounded pilot, and required reassessment before any of the other six courses begin. WP-08 is **COMPLETE** as a roadmap. No public site content, generated files, or Vercel settings change in this documentation closeout.
