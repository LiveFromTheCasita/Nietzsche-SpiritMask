# The Gay Science: optional full-text route scope

**Status:** Proposed editorial and implementation scope for review; no public lessons are changed by this document. 2026-09-24.

**Baseline:** `main` at `33c00c76da036b9bfa616d81c099c29d9a3cb7fc`, after the *Birth of Tragedy* pilot merge.

**Package boundary:** *The Gay Science* only. The existing ten-session introduction, its assignments and Next links, and Reading 4's `start.html` URL stay intact.

## Pilot gate and scale

The *Birth of Tragedy* pilot passed the published coverage, source, and navigation checks. Its 19 stations amount to about 16–23 hours; the extra work for readers who already completed its introduction was estimated at 9–13½ hours. The estimates for two dense lessons were tight. A timed reader trial and a phone-width visual inspection were not completed. Carry those two checks into this package's review; do not treat the earlier planning times as measured reading times.

This book is much longer and its aphorisms vary greatly in length. The proposed 35-station full-text route assigns roughly 86,000 words of the linked free text, before guide commentary, rereading, and writing. Plan **about 33–45 hours** in total, with a pause after the first book to recalibrate against an actual reader trial. This is a substantial second course, not a small extension of the ten-session introduction. The 10-session introduction remains the available 9–12 hour choice.

## Edition and coverage contract

The preferred translation remains [Walter Kaufmann](../sources.html#gay-science). The linked free alternative is [*The Joyful Wisdom*, Project Gutenberg #52881](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm): Thomas Common translated the prose, and Paul V. Cohn and Maude D. Petre rendered the poetry. Quote only the credited wording actually checked; a link to Common is not evidence for a quotation attributed to Kaufmann. Nietzsche's four-line motto on the free edition's title page belongs to the expanded 1887 presentation. The 1882 Emerson motto, where an edition prints it, can be compared as historical paratext but is not substituted for Nietzsche's 1887 motto.

The **1882 text** is the numbered verse prelude 1–63, Books I–III §§1–275, then Book IV's unnumbered opening *Sanctus Januarius* verse and §§276–342. The end of §342 is a real ending and transition toward *Zarathustra*. The **1887 additions** are Book V's Turenne epigraph and §§343–383, the 14 appended songs, the title-page motto, and the four-section preface dated autumn 1886. The free edition prints the preface first; this route returns to it **last as an explicitly chronological retrospective**, after the songs. Offer an optional early link for readers following their edition's printed order, but give that prefatory reading no extra station. Do not imply that every song was composed in 1887 merely because the appendix was added then.

| Text in scope | First assigned at station | Boundary/check |
| --- | ---: | --- |
| 1882 verse prelude, numbered poems 1–63 | 1 | Poem numbers restart separately from the prose sections. |
| Book I, §§1–56 | 2–7 | All 56 aphorisms in order. |
| Book II, §§57–107 | 8–12 | All 51 aphorisms in order. |
| Book III, §§108–275 | 13–19 | All 168 aphorisms, including very short clusters. |
| Book IV, opening verse and §§276–342 | 20–25 | Open at the verse before §276; close at §342. |
| Book V, epigraph and §§343–383 | 26–33 | Open at the Turenne epigraph before §343. |
| 1887 appendix, 14 songs | 34 | Check the ninth, “The Fool's Dilemma,” despite its different heading level in the free HTML. |
| 1887 title-page motto and Preface §§1–4 | 35 | Preface's section numbers are separate from poem and aphorism numbers. |

The 14 appendix titles in the linked English edition, in order, are: “To Goethe”; “The Poet's Call”; “In the South”; “Beppa the Pious”; “The Boat of Mystery”; “An Avowal of Love”; “Song of a Theocritean Goatherd”; “Souls That Lack Determination”; “The Fool's Dilemma”; “Rimus Remedium”; “My Bliss”; “Columbus Redivivus”; “Sils-Maria”; and “A Dancing Song to the Mistral Wind.” Title wording differs in other translations: for example, the German “Nach neuen Meeren” is rendered “Columbus Redivivus” here. Exclude Oscar Levy's editorial note, the translators' footnotes, transcriber notes, licensing text, and material from other works from the reading assignments.

The existing introduction formally assigns just **20 of the 383** prose sections: Book I §§2, 12, 54; II §107; III §§108, 110, 116, 125; IV §§276, 290, 299, 334, 338, 341; and V §§343–344, 354, 374, 382–383. Its optional §342 bridge and the hub's thematic reference notes are not full-route assignments. The following uninterrupted ranges account for each other prose section exactly once. Introductory lessons may be offered as optional **close-reading checkpoints** after the corresponding ranges, not renumbered as full-text stations: their assignments cross book order (Reading 2 even assigns §107 before §54), and changing their own Next links would break the short route.

## Ordered station plan

Proposed filenames all live in `readings/`; the hub list anchors are `#full-station-1` through `#full-station-35`. Every range below is complete, inclusive, and read in order. Indicative times include primary text, a focused guide, rereading, and a written response. Adjust after reading trials, particularly when many short aphorisms create many distinct judgments.

| Station | Exact assignment | Proposed filename (`gay-science-full-` prefix) | Minutes | Guiding question / tension |
| ---: | --- | --- | ---: | --- |
| 1 | Prelude, poems 1–63 | `prelude.html` | 45–60 | How do jokes and self-mockery prepare a reader for inquiry? |
| 2 | I §§1–3 | `sections-1-3.html` | 55–75 | Whose standard of intellectual conscience is being applied? |
| 3 | I §§4–12 | `sections-4-12.html` | 55–75 | Do errors, habits, and science have one value for life? |
| 4 | I §§13–20 | `sections-13-20.html` | 50–70 | How do power, love, and proximity complicate motive? |
| 5 | I §§21–23 | `sections-21-23.html` | 60–80 | What does virtue cost when it becomes a public judgment? |
| 6 | I §§24–40 | `sections-24-40.html` | 60–80 | How do historical change and dissent alter inherited standards? |
| 7 | I §§41–56 | `sections-41-56.html` | 65–85 | What do work, truth, and appearance demand of a life? |
| 8 | II §§57–75 | `sections-57-75.html` | 60–80 | Where does artistic seeing become a claim about women? |
| 9 | II §§76–84 | `sections-76-84.html` | 70–90 | What can Greek arts, rhythm, and poetry teach, or conceal? |
| 10 | II §§85–98 | `sections-85-98.html` | 65–85 | How do artists' ambitions shape what they say they see? |
| 11 | II §§99–103 | `sections-99-103.html` | 55–75 | What changes when Schopenhauer and German music are judged? |
| 12 | II §§104–107 | `sections-104-107.html` | 45–65 | Why might an honest investigator still need art? |
| 13 | III §§108–116 | `sections-108-116.html` | 55–75 | What persists after a belief dies, and where do standards arise? |
| 14 | III §§117–125 | `sections-117-125.html` | 50–70 | Why does the madman's audience fail to hear him? |
| 15 | III §§126–143 | `sections-126-143.html` | 55–75 | How should the religious and Jewish/Christian polemics be tested? |
| 16 | III §§144–163 | `sections-144-163.html` | 45–65 | What do these brief historical and religious judgments assume? |
| 17 | III §§164–201 | `sections-164-201.html` | 45–65 | Which short judgments of solitude and society resist each other? |
| 18 | III §§202–241 | `sections-202-241.html` | 45–65 | What patterns connect kindness, punishment, and perspective? |
| 19 | III §§242–275 | `sections-242-275.html` | 40–60 | How do error, originality, becoming, and shame close this book? |
| 20 | Book IV opening verse; §§276–289 | `sections-276-289.html` | 60–80 | Is the New Year's wish an achievement or a task? |
| 21 | IV §§290–301 | `sections-290-301.html` | 70–90 | How does giving style differ from an artist's borrowed pose? |
| 22 | IV §§302–318 | `sections-302-318.html` | 65–85 | What disciplines interpretation and restraint? |
| 23 | IV §§319–332 | `sections-319-332.html` | 55–75 | When does self-experiment learn from pain? |
| 24 | IV §§333–338 | `sections-333-338.html` | 70–90 | Can knowing, love, and pity be separated so readily? |
| 25 | IV §§339–342 | `sections-339-342.html` | 45–65 | Why end the original book with a dramatic departure? |
| 26 | Book V epigraph; §§343–347 | `sections-343-347.html` | 70–90 | What new horizon opens, and what still authorizes truth? |
| 27 | V §§348–353 | `sections-348-353.html` | 55–75 | How do scholarship, religion, and moral costume interact? |
| 28 | V §§354–356 | `sections-354-356.html` | 60–80 | What can consciousness communicate, and for whom? |
| 29 | V §§357–359 | `sections-357-359.html` | 65–85 | Do historical and national claims support the diagnosis? |
| 30 | V §§360–365 | `sections-360-365.html` | 55–75 | How does performance change a claim about love or character? |
| 31 | V §§366–370 | `sections-366-370.html` | 60–80 | What does the Wagner/Romanticism test explain or leave open? |
| 32 | V §§371–376 | `sections-371-376.html` | 50–70 | Do limits of perspective entail that views are equal? |
| 33 | V §§377–383 | `sections-377-383.html` | 70–90 | Can homelessness and great health coexist with §377's hierarchy? |
| 34 | All 14 appendix songs, in order | `songs.html` | 45–65 | What does poetry do to the book's closing voice? |
| 35 | 1887 title motto; Preface §§1–4 | `preface.html` | 55–75 | What can the later convalescent's portrait explain or recast? |

The minutes add to **1,970–2,665 minutes (32h50–44h25)**. These are planning estimates from the linked free edition's rough reading length, not timed user observations. Stations 17–19 should teach sampling and grouping across miniature aphorisms without asking for an individual essay on each. Book V's longer sections need a denser close reading even when a numerical range is short. A pause after station 25 explicitly marks the end of 1882; an optional comparison with *Zarathustra* and *Beyond Good and Evil* can sit there, but it must not be a required station or silently fold those works into the assignment.

## Navigation and editorial implementation

Add the route to `works/gay-science.html` after the ten-session introduction and before “If you have 40 minutes”; add an on-page contents link and a second hero choice. Begin the new route at the prelude. Each of the 35 new pages should identify its station number, exact starting and stopping point, edition, free-text link, approximate workload, one central question, close analysis of representative passages, at least one difficulty, revealable questions and answers, a writing prompt, and a route-specific Next link. Link each station back to the hub list. No book-course progress feature is proposed.

Use optional checkpoint links from the new route to the existing Reading 1 after station 3, Reading 2 after station 12, Readings 3–4 after station 14 (`start.html` for 4), Reading 5 after station 21, Reading 6 after station 24, Reading 7 after station 25, Reading 8 after station 26, Reading 9 after station 32, and Reading 10 after station 33. Add one clearly labelled full-text return link on each of those ten introductory pages, pointing to the next new station. Preserve each page's assignment, commentary, URL, and original Next link. At `start.html`, place the additive return where it does not obscure the site's ordinary entry path. Do not make the thematic passage notes count as section coverage.

The free-edition starting anchors already in the site are: [prelude](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_11), [Book I](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_29), [II](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_93), [III](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_149), [IV including opening verse](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_211), [V including epigraph](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_273), [songs](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_355), and [preface](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm#Page_1). During drafting, verify a specific page/text fragment for **each** individual assignment. Because 1–4, 1–63, and 1–383 have overlapping numbers, never link by a bare number without identifying the unit. A browser that ignores a text fragment should still land at a helpful page anchor.

Preserve troubling passages and contradictions as questions readers can test: Book II's depictions of women; Book III's religious and Jewish/Christian judgments; Book V's claims about peoples and Germany; and §377's language of freedom, hierarchy, and slavery in the same passage. Separate what a speaker asserts, what supports it, and what a reader may challenge. Keep §374's limits on perspective distinct from an assertion that all views have equal standing. Keep Book V's retrospective perspective distinct from the 1882 book's own claims. Source notes should specify when a quotation follows Common or the credited poetry translation.

## Review and release gates for the later implementation PR

1. Have an editor sign off on the 35 assignments, overlap policy for optional intro checkpoints, poem/motto/epigraph coverage, workload, and the marked 1882/1887 hinge before bulk lesson drafting. A staged drafting process may be needed for 35 substantial pages; the published route should never advertise coverage it has not yet supplied.
2. Trial representative dense and miniature-aphorism stations with at least one reader, compare actual time with the estimates, and adjust station boundaries if needed. Complete a genuine phone-width preview using an authorized browser or device; record any remaining limitation honestly. These were open pilot evidence items.
3. Validate all section ranges and 14 song headings against the linked source, every internal destination/anchor/relative link/canonical, translated quotation credit, optional checkpoint return, and the unchanged ten-session short route including `start.html`.
4. Run `python3 scripts/build-index.py`, `node --check site.js`, and `node --check book-guide.js`; commit generated index/sitemap only if content changes. Inspect hub and representative lessons at desktop and mobile sizes and click through free-text fragments. Open a separate scoped implementation PR for review; do not merge or manually deploy as part of this design review.

**Source checks:** [site edition policy](../sources.html#gay-science), [linked complete free text and edition note](https://www.gutenberg.org/ebooks/52881), [Kaufmann publisher record](https://www.penguinrandomhouse.com/books/121942/the-gay-science-by-friedrich-nietzsche-translated-with-commentary-by-walter-kaufmann/), [Cambridge's publication-history introduction](https://www.cambridge.org/highereducation/books/nietzsche-the-gay-science/8CA7DA50CC80580A22D7448AFD5ED687/introduction/A653019C130C6729A339D3C), and [German edition/title context](https://projekt-gutenberg.org/authors/friedrich-wilhelm-nietzsche/books/die-froehliche-wissenschaft/).
