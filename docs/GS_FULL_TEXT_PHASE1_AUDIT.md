# The Gay Science full-text route: phase 1 audit and trial lessons

**Status (2026-09-25):** Phase 1 of the optional full-text route, authorized by the owner. This is a draft for editorial review. It audits the 35-station route in [`GS_FULL_TEXT_ROUTE_SCOPE.md`](GS_FULL_TEXT_ROUTE_SCOPE.md) and adds three unlisted trial lessons. The route is not published. Stop here for editorial review before drafting the remaining stations.

| Item | Value |
| --- | --- |
| Baseline | `main` at `66b55f624042e876200c78a5947ed62c9d272bc2`. Re-verified with `git ls-remote` before branching. No PRs were open. |
| Branch | `claude/gay-science-full-text-phase-1` |
| Owner authorization | Owner authorized the bounded first phase on 2026-09-25. The hold is lifted for this phase only. Publishing the full 35-station course still requires review. |
| Public pages changed | None. The hub, the ten introductory lessons, `start.html`, and `sources.html` are unchanged. |
| New pages | Three trial lessons in `readings/`, marked `noindex` and linked from nowhere (§5) |

The scope document's baseline (`33c00c7`) is historical. This audit uses current `main`.

## 1. Method and source used

**Source file.** Every boundary was checked against the linked free edition, Project Gutenberg #52881: *The Joyful Wisdom*, with prose translated by Thomas Common and poetry by Paul V. Cohn and Maude D. Petre (Foulis, 1910).

**How it was fetched.** From this environment, `www.gutenberg.org` reset every connection, twice. The byte-identical path on Gutenberg's official PGLAF mirror (`gutenberg.pglaf.org/5/2/8/8/52881/52881-h/52881-h.htm`) returned the file: 609,648 bytes. That file matches the one the site links to in every way checked:
- all 366 `Page_N` anchors;
- every heading;
- all 277 existing site links (§4).

A byte comparison with the `www` copy itself was not possible from here.

**Parsing.** A parser walked the HTML in document order. It recorded:
- every heading and its page anchor;
- each numbered unit and its word count, counting Nietzsche's text only (footnote markers and the translators' footnotes excluded);
- every page anchor inside each unit.

**Word counts.** These count words in the free English text. They are a proxy for workload, not reading times.

**Preferred edition.** Kaufmann's translation was not available in this session, so no Kaufmann wording is quoted or attributed anywhere in this package (§4).

## 2. Boundary and paratext verification

| Unit | Scope says | Free edition shows | Result |
| --- | --- | --- | --- |
| Title-page motto | 1887 four-line motto on the title page | Four lines on `Page_iii` ("I stay to mine house confined …"). Not credited to a translator. | ✓. Translator uncredited (§4) |
| 1882 Emerson motto | Comparable paratext where printed | Not printed. The only "Emerson" in the file is in §92. German Wikipedia records the Emerson motto of 1882 and its replacement in 1887. | ✓. Not checked against a facsimile |
| Editorial note | Exclude | Oscar Levy's note, `Page_vii`. It says Book V, the songs, and the Preface "were added to the second edition in 1887." | ✓. Excluded |
| Preface §§1–4 | Preface is 1887; separate numbering | "Preface to the Second Edition," four numbered sections, `Page_1`–`Page_10`. Signed "Ruta, near Genoa / Autumn, 1886." | ✓ |
| Verse prelude | Poems 1–63, numbered separately | *Jest, Ruse and Revenge*, `Page_11`. Poems 1–63, no gaps or duplicates. 2,119 words. | ✓ |
| Book I | §§1–56 | 56 sections, continuous. `Page_29` (title) / `Page_31` (§1). 15,478 words. | ✓ |
| Book II | §§57–107 | 51 sections, continuous. `Page_93` / `Page_95`. 13,356 words. | ✓ |
| Book III | §§108–275 | 168 sections, continuous. `Page_149` / `Page_151`. 12,908 words. | ✓ |
| Book IV opening verse | Before §276, 1882 | Untitled eight-line verse to "January, thou beauteous saint!", `Page_211`. Signed "Genoa, January 1882." 59 words. | ✓. 1882 text |
| Book IV | §§276–342 | 67 sections, continuous. §276 on `Page_213`. 15,679 words. §342 "Incipit Tragœdia" ends at `Page_271`–`272`. | ✓ |
| Book V epigraph | Turenne, before §343 | "Carcasse, tu trembles? …—Turenne," in French and untranslated, `Page_273`. 16 words. | ✓ |
| Book V | §§343–383 | 41 sections, continuous. §343 on `Page_275`. 21,012 words. | ✓ |
| Appendix songs | 14 songs; check the ninth | *Songs of Prince Free-as-a-Bird*, `Page_355`. All 14 titles match the scope in order. "The Fool's Dilemma" is marked up as an `h2`; the other 13 are `h3`. 2,108 words. | ✓ |

**Coverage.** Stations 2–33 assign all 383 prose sections exactly once, in order, in contiguous ranges. There are no gaps or overlaps. Stations 1, 34, and 35 cover the prelude, the songs, and the Preface with the title-page motto.

**Total.** About **85,100 words** of Nietzsche's text. The scope's "roughly 86,000" is consistent with this count.

**The 1882/1887 hinge.** It falls between §342 (`Page_271`) and the Book V title (`Page_273`). The Book IV verse, dated January 1882, belongs to the original book. So do all 63 prelude poems.

The scope correctly avoids dating the songs by the appendix. This audit did not check when individual songs were composed. Station 34 should not date any song without a source.

**Introductory lessons.** They assign exactly the 20 sections the scope lists. Each lesson's `Read:` line was checked:

| Reading | Sections |
| --- | --- |
| R1 | §§2, 12 |
| R2 | §§107, 54 |
| R3 | §§110, 116 |
| R4 (`start.html`) | §§108, 125 |
| R5 | §§290, 299 |
| R6 | §§334, 338 |
| R7 | §§276, 341 |
| R8 | §§343–344 |
| R9 | §§354, 374 |
| R10 | §§382–383 |

All ten Next links form one unbroken chain: R1 → R2 → R3 → `start.html` → R5 → … → R10 → hub.

## 3. Station audit

**Columns.**
- **Words**: count from the free edition.
- **Start → stop**: the page anchor where the assignment begins, and the anchor where the next unit begins (the stopping point).
- **Model**: a consistency check, not evidence. It assumes primary reading at 90–130 words per minute, plus 30–45 minutes for the guide, questions, and writing.
- **Scope**: the minutes published in the scope document.
- **Audit**: this audit's recommended minutes.

The scope's ranges track this word model closely at almost every station. They are word-driven, and do not yet reflect density, the number of separate judgments, or the burden of claims that need outside evidence. All times remain **estimates**.

| St. | Assignment | Units | Words | Start → stop | Intro overlap | Scope | Model | Audit |
| ---: | --- | ---: | ---: | --- | --- | ---: | ---: | --- |
| 1 | Prelude 1–63 | 63 | 2,119 | `Page_11` → `Page_29` | — | 45–60 | 46–69 | keep |
| 2 | I §§1–3 | 3 | 2,297 | `Page_31` → `Page_39` | §2 (R1) | 55–75 | 48–71 | keep; **trial** |
| 3 | I §§4–12 | 9 | 2,520 | `Page_39` → `Page_49` | §12 (R1) | 55–75 | 49–73 | keep |
| 4 | I §§13–20 | 8 | 2,100 | `Page_49` → `Page_57` | — | 50–70 | 46–68 | keep |
| 5 | I §§21–23 | 3 | 2,504 | `Page_57` → `Page_66` | — | 60–80 | 49–73 | keep |
| 6 | I §§24–40 | 17 | 2,911 | `Page_66` → `Page_78` | — | 60–80 | 52–77 | keep |
| 7 | I §§41–56 | 16 | 3,146 | `Page_78` → `Page_93` | §54 (R2) | 65–85 | 54–80 | keep |
| 8 | II §§57–75 | 19 | 2,802 | `Page_95` → `Page_106` | — | 60–80 | 52–76 | keep |
| 9 | II §§76–84 | 9 | 3,567 | `Page_106` → `Page_120` | — | 70–90 | 57–85 | **75–95**, break after §80 |
| 10 | II §§85–98 | 14 | 3,160 | `Page_120` → `Page_132` | — | 65–85 | 54–80 | keep |
| 11 | II §§99–103 | 5 | 2,261 | `Page_132` → `Page_141` | — | 55–75 | 47–70 | keep |
| 12 | II §§104–107 | 4 | 1,566 | `Page_141` → `Page_149` | §107 (R2) | 45–65 | 42–62 | keep |
| 13 | III §§108–116 | 9 | 2,506 | `Page_151` → `Page_161` | §110, §116 (R3); §108 (R4) | 55–75 | 49–73 | keep |
| 14 | III §§117–125 | 9 | 2,169 | `Page_161` → `Page_169` | §125 (R4) | 50–70 | 47–69 | keep |
| 15 | III §§126–143 | 18 | 2,616 | `Page_169` → `Page_180` | — | 55–75 | 50–74 | keep |
| 16 | III §§144–163 | 20 | 1,765 | `Page_180` → `Page_188` | — | 45–65 | 44–65 | keep |
| 17 | III §§164–201 | 38 | 1,514 | `Page_188` → `Page_196` | — | 45–65 | 42–62 | keep |
| 18 | III §§202–241 | 40 | 1,410 | `Page_196` → `Page_204` | — | 45–65 | 41–61 | keep; test next |
| 19 | III §§242–275 | 34 | 928 | `Page_204` → `Page_211` | — | 40–60 | 37–55 | keep; **trial** |
| 20 | IV verse; §§276–289 | 14+verse | 2,728 | `Page_211` → `Page_223` | §276 (R7) | 60–80 | 51–75 | keep |
| 21 | IV §§290–301 | 12 | 3,393 | `Page_223` → `Page_236` | §§290, 299 (R5) | 70–90 | 56–83 | keep |
| 22 | IV §§302–318 | 17 | 3,041 | `Page_236` → `Page_248` | — | 65–85 | 53–79 | keep |
| 23 | IV §§319–332 | 14 | 2,241 | `Page_248` → `Page_257` | — | 55–75 | 47–70 | keep |
| 24 | IV §§333–338 | 6 | 3,275 | `Page_257` → `Page_268` | §§334, 338 (R6) | 70–90 | 55–81 | keep |
| 25 | IV §§339–342 | 4 | 1,001 | `Page_268` → `Page_273` | §341 (R7) | 45–65 | 38–56 | keep, including 1882 pause |
| 26 | V epigraph; §§343–347 | 5+epigraph | 3,322 | `Page_273` → `Page_287` | §§343–344 (R8) | 70–90 | 56–82 | **75–100**, break after §345 |
| 27 | V §§348–353 | 6 | 2,163 | `Page_287` → `Page_296` | — | 55–75 | 47–69 | keep |
| 28 | V §§354–356 | 3 | 2,438 | `Page_296` → `Page_305` | §354 (R9) | 60–80 | 49–72 | keep |
| 29 | V §§357–359 | 3 | 3,188 | `Page_305` → `Page_317` | — | 65–85 | 55–80 | **75–100**, break after §357; **trial** |
| 30 | V §§360–365 | 6 | 2,135 | `Page_317` → `Page_325` | — | 55–75 | 46–69 | keep |
| 31 | V §§366–370 | 5 | 2,763 | `Page_325` → `Page_335` | — | 60–80 | 51–76 | keep |
| 32 | V §§371–376 | 6 | 1,795 | `Page_335` → `Page_342` | §374 (R9) | 50–70 | 44–65 | keep |
| 33 | V §§377–383 | 7 | 3,208 | `Page_342` → `Page_355` | §§382–383 (R10) | 70–90 | 55–81 | **75–100**, break after §377 |
| 34 | Songs 1–14 | 14 | 2,108 | `Page_355` → end | — | 45–65 | 46–68 | keep |
| 35 | Motto; Preface §§1–4 | 4+motto | 2,414 | `Page_iii`, `Page_1` → `Page_11` | — | 55–75 | 49–72 | keep |

### Recommended changes

The station boundaries hold up against the text. This audit recommends **no regrouping** before the reader trial. It recommends five narrower changes.

1. **Widen the estimates for four dense stations and mark a sitting break in each.** The text, not the word count, is the reason:

   | Station | Sections | Why it is dense |
   | --- | --- | --- |
   | 29 | §§357–359 | Two of the book's three longest sections (§357 has 1,616 words; §358 has 1,045). They contain the heaviest concentration of independent historical, national, and class claims in the book, and one explicit antisemitic generalization. |
   | 26 | §§343–347 | Five argumentative sections, including the two §§343–344 of Reading 8. |
   | 33 | §§377–383 | §377's freedom, hierarchy, and slavery, plus the book's close. |
   | 9 | §§76–84 | The heaviest station (3,567 words), with §80 and §84 of 753 and 1,032 words. |

   This adds about 25–40 minutes to the route.

   **If the reader trial shows station 29 still running long,** split it into two stations, §§357–358 (2,661 words) and §§359–365 (2,662 words; this second station absorbs station 30). §359 opens a new topic, revenge on intellect, so the break has a textual basis.
2. **Keep stations 17–19 as three.** §§164–275 hold 112 aphorisms in 3,852 words. Merging to two stations would ask for about 56 separate judgments per sitting. The trial lesson for station 19 uses a sampling-and-grouping method, as the scope intended. **Station 18 (§§202–241) should be trialled in the next batch:** it has no famous passage, so it is the hardest test of that method.
3. **Keep the checkpoint map, and advertise the double checkpoint's time.** Every placement is the earliest station at which both of a lesson's sections have been read. After station 14, however, R3 and R4 together take 90–120 minutes. The scope's placement is still right: R3's own Next link leads to `start.html` (§125), which a full-route reader has only reached at station 14. On the route list, state the combined time and say that the checkpoint is optional.
4. **Handle overlap cumulatively.** 14 stations contain sections that an introductory lesson has already analysed: stations 2, 3, 7, 12, 13, 14, 20, 21, 24, 25, 26, 28, 32, and 33 (see the table). In each, the full-text lesson should:
   - read the overlapping section as part of its neighbours;
   - give it a short, different reading;
   - point to the checkpoint for the full analysis.

   It should not re-teach it. The trial for station 2 shows the pattern with §2.
5. **Credit the verse translators unit by unit.** The free edition's footnotes credit Maude D. Petre for:
   - prelude poems 19, 48, and 63;
   - the songs "In the South" and "A Dancing Song to the Mistral Wind." Both of these footnotes also cite the *Nation*, April 17 and May 15, 1909.

   No other poem carries an individual credit. The title page credits "poetry rendered by Paul V. Cohn and Maude D. Petre," and the title-page motto is not credited. Stations 1, 34, and 35 should quote Petre by name only where the edition credits her. Elsewhere, say "Cohn and Petre (the edition does not credit individual poems)." Do not assign the remaining poems to Cohn without evidence.

### Checks for later stations

These features should be carried into later station drafting:

- **The overlapping numbering systems.** Never link or cite a bare number: 1–4 (Preface), 1–63 (poems), and 1–383 (aphorisms) overlap.
- **The Book IV verse.** Station 20 must present it as a separate, unnumbered, dated 1882 verse.
- **The Turenne epigraph.** Station 26 must present it in French, as the free edition prints it. Give a translation as this guide's own, labelled.
- **Chronology.** Book V and the Preface are dated in the free edition (1887 edition; Preface signed autumn 1886). §357 is quoted at length in *Genealogy* III §27, and §344 in III §24; both were verified in the linked Samuel translation. Treat Book V and the *Genealogy* as overlapping 1887 inquiries, as the hub already does. Neither should be called a sketch of the other.
- **Station 25.** It carries the 1882 ending and the pause. Its written task should ask the reader to state what the 1882 book claimed before Book V reopens it.

## 4. Translation and source-link checks

- **Preferred edition.** `sources.html#gay-science` names Walter Kaufmann as the preferred translation and credits the free edition correctly: Common for the prose, Cohn and Petre for the poetry. Unchanged.

  Kaufmann's text was not available in this session. The trial lessons therefore:
  - quote only Common's wording, and say so on each page;
  - use Common's section titles, and say that other translations title them differently;
  - never attribute wording to Kaufmann.

  **Open item:** a reviewer with the Kaufmann edition should compare the trial lessons' paraphrases where Common's English may shape an interpretation. Three places:
  - §1's "race" for the human species;
  - §357's "femininism," which Samuel's *Genealogy* renders "feminism";
  - §358's "plebeianism of the spirit."
- **Existing site links to #52881.** A parser checked **all 277 links in the 38 pages** that use the free edition. For each link it checked that:
  - the `#Page_N` anchor exists;
  - every text-fragment term occurs in the source;
  - the fragment's first occurrence in the document lies in the intended section.

  Of these, 118 fragment links name a section, and in each case the page anchor lies within that section's pages. **0 failures.**
- **New links in the trial lessons.** All 46 new links to #52881 pass the same checks. Each fragment is a phrase whose first occurrence in the file lies in the section named by the link text, and each `#Page_N` anchor lies within that section's pages. Two points needed care:
  - **Repeated phrases.** A phrase that recurs is safe only if its first occurrence is the one wanted. "The Intellectual Conscience." recurs on `Page_248`, in §319, but its first occurrence is §2, so the link lands correctly. The single word "Consequently" occurs 34 times, so §1's closing link uses a longer phrase.
  - **Hyphens.** In the new fragments, hyphens are percent-encoded (`%2D`), as the text-fragment syntax requires.

  **Observation, not fixed (out of scope):** four existing links on the hub and in Readings 2–3 use a raw hyphen in `text=Herd-Instinct.`
- **Cross-work citations.** *Genealogy* III §27's quotation of §357 and III §24's of §344 were checked in the linked Samuel translation (Gutenberg #52319, fetched from the PGLAF mirror).
- **Uncertainties recorded, not resolved:**
  - **Title-page motto.** Its translator is not credited; possibly Cohn or Petre.
  - **Emerson motto.** Confirmed only from German Wikipedia (Die fröhliche Wissenschaft), not from a facsimile of the 1882 edition.
  - **Song dates.** The composition dates of individual songs were not checked.
  - **Mirror identity.** The PGLAF file's byte identity with the `www.gutenberg.org` file was not established. Its anchors and headings match every link the site already uses.

## 5. Trial lessons: choice and design

The three trial lessons are:

| Station | Assignment | File |
| --- | --- | --- |
| 2 | Book I §§1–3 | `readings/gay-science-full-sections-1-3.html` |
| 19 | Book III §§242–275 | `readings/gay-science-full-sections-242-275.html` |
| 29 | Book V §§357–359 | `readings/gay-science-full-sections-357-359.html` |

Filenames follow the scope.

**Why these three:**
- **Station 2, a dense early section.** It is the first prose station, so it sets the route's conventions. It contains §1, the longest aphorism in Book I (1,249 words), whose account of tragedy and comedy returns at §342 and §382. It also contains §2, already taught in Reading 1, which tests the overlap policy. Station 5 (§§21–23) was the alternative: it is equally dense, but it has no overlap and no route-opening job.
- **Station 19, a group of short aphorisms.** It has the lowest word count on the route (928 words) but 34 separate judgments, so it is the clearest test of whether a word-based estimate undercounts miniature stations. It ends Book III with the catechism of §§268–275, whose "weights" answer §2's scales.
- **Station 29, a dense passage from the 1887 addition.** Two reasons:
  - It overlaps no introductory lesson, so it must stand alone.
  - It puts the scope's hardest editorial demand on one page. §357's claim that Christian truthfulness overcame belief in God sits beside unsupported national and historical claims and an antisemitic generalization. §358 grounds its account in rank and "ruling caste." §359 explains moral language by revenge, only a few pages after §345 insists that origin does not settle worth.

  Stations 26 and 33 are equally dense, but they overlap Readings 8 and 10.

**Design.** Each trial lesson uses the established lesson architecture of the *Birth of Tragedy* full-text lessons and the *Gay Science* introduction:
- a crumb;
- a station label;
- exact **Read** and **Allow** lines;
- the preferred edition and per-section free links;
- a quotation-credit note;
- on-page contents;
- Before you read, What to notice, a numbered close reading, A difficulty, answers revealed on demand, and a writing prompt with a success statement;
- a Continue section.

Station 2 introduces a small marking habit for the route: who speaks, what kind of claim it is (P, H, V, or ?), and what would test it. Stations 19 and 29 build on it.

**How the trial pages are kept out of public navigation:**
- Each carries a visible "Review draft" note.
- Each has `<meta name="robots" content="noindex,follow">`. `scripts/build-index.py` therefore excludes the pages from `search-index.json` and `sitemap.xml`; both generated files are unchanged.
- No other page links to them. The adjacent stations are named in plain text with "not yet drafted," so there are no broken links.
- The hub, the ten introductory lessons, their Next links, and `start.html` are untouched.

Canonical URLs point to the intended `https://thespiritmask.com/readings/…` paths. Remove the `noindex` and the draft notes only when the route is approved for publication.

## 6. Checks run on this branch

Tools: Python 3.11.15, Node 22.22.2, Chromium through Playwright 1.56.0 (headless).

| Check | Result |
| --- | --- |
| `python3 scripts/build-index.py` | `Created 191 search entries; sitemap contains 167 URLs.` `search-index.json` and `sitemap.xml` are byte-identical to `main`: the `noindex` pages are excluded, and no generated file changed |
| `node --check site.js`, `node --check book-guide.js` | pass |
| `git diff --check` | pass |
| Sitewide static audit, 171 HTML files | 0 broken internal file links; 0 missing same-page or cross-page fragments; 0 duplicate IDs; 0 canonical or `og:url` mismatches; 0 heading-level skips inside `main` |
| Public pages unchanged | `git diff main` over `works/`, `start.html`, `sources.html`, and `readings/gay-science-[0-9]*.html`: empty. No page links to the three trial pages, and neither generated file mentions them |
| Introduction Next chain | Walked in Chromium from the hub's "Start the guided readings": R1 → R2 → R3 → `start.html` → R5 → … → R10 → `works/gay-science.html#essential-reading-path`. Intact |
| Trial-page internal links | Every same-site link (20, 21, and 28) returns 200 from a local static server |
| Quotation check | Every double-quoted span of 10 or more characters in the three lessons (201 fragments) occurs in Common's text; phrases from the *Genealogy* were checked against Samuel. The check found two non-Common phrases, both now removed: "teacher of the purpose of existence" and a gloss of *Suum cuique* |
| Free-text links, all 277 existing and 46 new | anchors exist; fragment terms occur; first occurrence in the intended section (§4) |
| Fallback landing | In headless Chromium, as in the Birth closeout, the text directive was not applied and the page anchor governed. At 390 × 844, the target phrase of each of the 46 new links lay 0 to 1.12 screens below the anchor. Only two lay just beyond the first screen: §261 at 0.99 and §275 at 1.12, both in station 19 |
| Layout, 320 × 640 and 390 × 844 (touch emulation, DPR 2) and 1440 × 900 | For each trial page: no horizontal overflow, with `<details>` closed or all open; no clipped elements; every `<summary>` toggled by tap or click (5/5 per page); the contents link landed 17 px from the top; no JavaScript errors. Screenshots were inspected for the page tops, the review notice, station 19's catechism list at 320, station 29's blockquote, and the lesson endings |

**Limits:**
- The layout checks used desktop-browser device emulation against a local static server, not a physical phone and not a Vercel preview.
- The Vercel preview is expected to build automatically when the draft PR opens. This session did not inspect it.

## 7. What a real reader must still test

- **Timing.** Ask at least one reader to time each trial station in their usual edition, using the phases in `BT_PILOT_CLOSEOUT.md` §9:
  - primary reading;
  - guide and rereading;
  - questions and writing.

  Compare the results with the estimates: station 2, 55–75 minutes; station 19, 40–60; station 29, 75–100 (widened in this audit from the scope's 65–85). The priority question is whether station 19's 34 miniatures take longer than its 928 words suggest. No simulated or AI estimate substitutes for this.
- **Kaufmann comparison.** A reader using Kaufmann should report any paraphrase in the trial lessons that does not survive the change of translation.
- **Devices and fragments.**
  - A check on a physical phone.
  - A check in a browser that highlights text fragments, especially the longer fragments in station 19, where many miniatures share page 207.
- **Editorial sign-off.** Before bulk drafting, an editor should approve:
  - the 35 assignments and the §3 changes;
  - the overlap policy;
  - the P/H/V marking habit;
  - the treatment of §357's antisemitic aside and §358's claims of rank.

## 8. Unresolved decisions for the owner or editor

1. **Accept or reject the §3 changes.** These are the widened estimates for stations 9, 26, 29, and 33 with sitting breaks, and the contingent split of station 29.
2. **Choose the publication form:**
   - publish the route only when all 35 stations exist; or
   - publish a clearly labelled partial route by book, for example the prelude and Book I first.

   The scope forbids advertising coverage that has not been supplied. A partial route would therefore list only the drafted stations.
3. **Choose whether station 1 or station 2 introduces the marking habit.** The trial puts it at station 2, the first prose station. Station 1, the poems, could introduce a lighter version.
4. **Supply reader timings** for the three trial stations before the estimates are published.

## 9. Recommended next bounded batch

After editorial sign-off on this phase and at least one timed reading, draft **Batch 2: the prelude and the rest of Book I, stations 1 and 3–7**. That is five new lessons plus the prelude, about 16,000 words of primary text.

In the same batch, draft **station 18** as the second miniature trial.

Add Reading 1's single additive return link, pointing to station 4, only if the owner chooses the partial-publication form. Otherwise leave every introductory page unchanged until the route is published.

Pause after Book I to recalibrate the estimates against the trial data, as the scope requires.

**Sources:**
- [site edition policy](../sources.html#gay-science)
- [linked free text](https://www.gutenberg.org/files/52881/52881-h/52881-h.htm), checked via the [PGLAF mirror copy](https://gutenberg.pglaf.org/5/2/8/8/52881/52881-h/52881-h.htm)
- [Gutenberg ebook record #52881](https://www.gutenberg.org/ebooks/52881)
- [Samuel's *Genealogy*, Gutenberg #52319](https://www.gutenberg.org/files/52319/52319-h/52319-h.htm), for III §§24 and 27
- [German Wikipedia, *Die fröhliche Wissenschaft*](https://de.wikipedia.org/wiki/Die_fr%C3%B6hliche_Wissenschaft), for the 1882 and 1887 mottos
- [Kaufmann publisher record](https://www.penguinrandomhouse.com/books/121942/the-gay-science-by-friedrich-nietzsche-translated-with-commentary-by-walter-kaufmann/)
