# Four Corpus guides: bounded review record

## Scope

This package adds dedicated `works/` guide pages for *Early Unpublished Essays*, *The Case of Wagner*, *Ecce Homo*, and *Nietzsche Contra Wagner*. Each page has an integrated, ordered primary-text route with questions, edition guidance, interpretive cautions, and connections. The package does not create separate course lesson pages or claim a complete full-text course of the kind built for *Twilight of the Idols* and *The Antichrist*.

The four existing Corpus anchors remain stable; their titles now link to the guides. `sources.html` links to them and distinguishes the works and editors. Search and sitemap were regenerated. No existing reading progress or lesson chain is reordered.

## Reading boundaries and sources to review

| Guide | Assigned material | Preferred edition and free alternative | Boundary to protect |
| --- | --- | --- | --- |
| Early Unpublished Essays | The complete “Homer’s Contest” (1872) and “On Truth and Lies in a Nonmoral Sense” (1873) | No single matching Kaufmann/Hollingdale edition recommended in `sources.html`; Mügge’s [1911 collection](https://www.gutenberg.org/ebooks/51548) is the free alternative | Two unpublished texts out of seven essays, plus a translator’s preface; Mügge calls the latter “On Truth and Falsity in Their Ultramoral Sense.” |
| The Case of Wagner | Preface, numbered sections, postscripts, Epilogue | Kaufmann in *Basic Writings*; Ludovici’s [combined volume](https://www.gutenberg.org/ebooks/25012) | Stop before the separately headed *Nietzsche Contra Wagner*; do not assign Ludovici’s prefaces as Nietzsche’s. |
| Ecce Homo | Preface; untitled opening page; three “Why I…” chapters; all book entries; “Why I Am a Destiny” | Kaufmann in *Basic Writings*; [Ludovici’s free prose](https://www.gutenberg.org/ebooks/52190) | Ludovici calls the final chapter “Why I Am a Fatality” and prints an older version of “Why I Am So Wise” §3. The translator’s introduction, editorial note, and separately credited poetry are outside the prose route. Written 1888, published 1908. |
| Nietzsche Contra Wagner | Preface, all author-selected chapters including the Intermezzo, Epilogue, and closing poem “On the Poverty of the Richest Man” | Kaufmann in *The Portable Nietzsche* (check printing for Intermezzo and poem); Ludovici’s [combined volume](https://www.gutenberg.org/ebooks/25012) | Authored selection chiefly from earlier published writing, with an Intermezzo drawn from unpublished *Ecce Homo*. Ludovici omits the Intermezzo and poem. Stop before the separate “Selected Aphorisms” appendix, which contains Nietzsche’s 1878 notes selected for this English volume. |

## Editorial review points

1. Compare each assignment and section boundary with the named edition. Check the prose for claims that need closer primary-text support, particularly the link from musical technique to social or physiological diagnosis and the later author’s interpretation of his own earlier books.
2. Keep published texts, unpublished essays, author-selected excerpts, and editor-added material distinct. Preserve the exact source and translator label for each link.
3. Assess whether the integrated guide routes give these four works enough attention for this phase. A decision to add separate lesson chains would need its own scoped package and review; these pages do not claim to supply them.
4. Confirm Corpus links, canonical metadata, mobile reading, and regenerated index/sitemap on the review branch before merge.

## Initial checks

- The Project Gutenberg contents for the three free volumes above were checked against the assignment boundaries and translation labels on 2026-09-24.
- `python3 scripts/build-index.py`: 191 search entries, 167 sitemap URLs (four new public pages).
- `node --check site.js` and `node --check book-guide.js`: passed.
- Local parser audit of the four new pages plus `corpus.html` and `sources.html`: no missing local targets/fragments, duplicate IDs, skipped heading levels, or mismatched new canonical links.

## Independent review response (2026-09-24)

Claude’s PR #61 review of `957dafa` identified eight required corrections. The follow-up commit addresses the omitted *Contra Wagner* material and edition gaps (R1–R2, R8), the early collection’s status and count (R3), *Ecce Homo* titles and variant §3 (R4–R5), visible step numbers (R6), and reciprocal links between neighboring book guides (R7). The scope remains four integrated guides, with no separate lesson chains. The exact contents of Kaufmann’s *Portable Nietzsche* printing were not checked; the route identifies the critical text’s Intermezzo and poem and asks readers to check their preferred printing. The ten book entries of *Ecce Homo* remain covered by two reading groups; a fuller per-entry map is an optional later expansion.

Claude’s independent recheck of `b65a01e` returned PASS with no remaining blockers. A local Chromium render at 320, 390, and 1366 px showed the numbered steps and no overflow or console errors. Vercel reported a successful deployment, but its preview redirected the reviewer to sign-in and was not inspected. Three non-blocking presentation notes were folded into a small follow-up: match Ludovici’s exact chapter headings in the free-text link, move the absent-material assignment onto its own line, and identify the *Ecce Homo* untitled page as following the Preface.

## Publication and later editorial disposition (2026-09-25)

PR #61 merged as `0689bc8339d52e8682b338fa473da2cc424bef0c`. On 2026-09-25 the four live pages matched the repository versions byte-for-byte. The earlier PASS addressed the bounded source, navigation, and display corrections; it did not establish parity of editorial depth with the ten established book guides.

The owner compared the four published pages with the rest and identified them as thin and sparse. A review of all 14 `works/` guides confirmed that the four new pages have short reading paths but lack the substantive walkthroughs and annotated passage notes in the established guides. The earlier statement that a fuller *Ecce Homo* map was an optional later expansion describes the PR #61 scope; the editorial-depth revision is now recorded as the next proposed book-guide package, after this recordkeeping correction. *Ecce Homo* is the recommended first revision. Preserve the verified edition boundaries and do not treat a matching word count or identical lesson count as the acceptance test. See `WORK_PLAN.md` for the open revision package.

## Ecce Homo editorial-depth revision (2026-09-25)

PR #63 merged into `main` at `cda35e64b71b1073dbfd7df6a1fe287e3e647299`. It expanded the *Ecce Homo* page into an eight-stage ordered reading path, a separate examination of each of the ten book reviews against earlier texts, 20 passage notes, interpretive problems, a comparative writing exercise, and detailed edition guidance. The Ecce entry in `sources.html` now states the reading boundaries. The revision retains the guide URL and does not claim a separate lesson course.

The review checked the German critical text against Ludovici's free translation and checked the guide's two central retrospective comparisons against the earlier books. Commit `c8c5b2f` qualified the identification of the “Revaluation” with *The Antichrist* as this guide's reading and removed an unsupported assertion about the referent of “the Crucified.” Kaufmann's translation was not inspected; the variant list is not a full collation. The index regenerated to 191 entries and the sitemap remained at 167 URLs, with only the Ecce guide and source-guide index entries changing. JavaScript syntax, local targets/fragments, and duplicate IDs passed checks. Claude inspected the first revision in Chromium at 320, 390, and 1366 px; the final text-only revision was not independently rendered. Vercel reported a successful deployment; the protected preview redirected to sign-in. After the merge, the live page showed the expanded guide, and the owner reviewed it and judged the book page up to standard.

The editorial-depth revision remains open for *Early Unpublished Essays* and *Nietzsche Contra Wagner*. Do not reinstate *Ecce Homo* or *The Case of Wagner* as unfinished guides merely because they have no separate lesson pages. A companion course would be a distinct, optional scope decision.

## The Case of Wagner editorial-depth revision (2026-09-25)

PR #65 merged into `main` at `1bc39ff9a49a984d5faf8a387eca09e0e655e7e9`. It expanded *The Case of Wagner* into a seven-stage route in printed order from the Preface through the Epilogue; a shorter entry route; a nine-part walkthrough; a section that tests eight moves from musical technique to physiological or cultural diagnosis; 40 passage notes; cross-work comparisons; a writing exercise; and edition/variant guidance. The guide keeps Nietzsche's footnotes separate from Ludovici's, excludes the separately headed *Nietzsche Contra Wagner* and the 1878 notes selected for the combined English volume, retains its URL and previous fragment IDs, and does not claim a separate lesson course.

The independent review checked the guide against the free Ludovici text and spot-checked its principal variant claims against the German critical text, including the §3 catalogue item, §7's *Gleichniss*, and the Postscript's omitted Geyer/Adler line. The possible ancestry insinuation remains labeled as a reading, not a settled claim. Kaufmann's translation was not inspected, and the differences are not a full collation. Regenerating the search index reproduced the PR's committed blob exactly (191 entries); the sitemap stayed unchanged at 167 URLs. JavaScript syntax, all local files and fragments, retained IDs, and heading order passed independent checks. Claude reported local Chromium renders at 320, 390, and 1366 px without horizontal overflow. GitHub confirms the merge and Vercel reports a successful deployment; the preview and post-merge live page were not independently rendered in this review. The owner's merge follows the independent reviewer's recommendation to publish; no separate owner judgment of the live page has yet been recorded.

The remaining editorial-depth work is *Nietzsche Contra Wagner* and *Early Unpublished Essays*. Their existing reading boundaries remain the starting point. Any separate lessons would be a new, optional package.

## Nietzsche Contra Wagner editorial-depth revision (2026-09-25)

PR #67 merged into `main` at `60bb715b9c8bff755cd8ac2f9282fb96f8c3f22d`. It expanded *Nietzsche Contra Wagner* into an eight-stage ordered route that includes the Preface, nine headed chapters, the Intermezzo, Epilogue, and closing poem; a shorter entry route; a provenance map identifying earlier sources and revisions; a chapter-by-chapter comparison of each document with its earlier setting; 31 passage notes; a comparative writing exercise; and detailed edition and variant guidance. It distinguishes material assembled from earlier published books from the new Preface and contemporaneous unpublished Intermezzo and poem. Ludovici's combined free volume omits the latter two; the guide now offers his free *Ecce Homo*, “Why I Am So Clever” §7, as an English reading option for the shared Intermezzo text. The separately headed 1878 “Selected Aphorisms” remain outside the assignment. The guide retains its URL, all earlier IDs, and its navigation; no separate lesson course is claimed.

Claude reports a word-level comparison of the selected passages with their earlier German sources. The independent review checked the full guide's route and claims against the canonical book-guide standard, confirmed the chapter inventory against the critical-commentary table, and checked Ludovici's free-volume boundary and the parallel *Ecce Homo* §7 passage. The follow-up commit `cf4b598` corrected a double-counted chapter total, linked the free English Intermezzo with precise start and end points and translator-note attribution, and qualified two overly broad claims. The independent review did not repeat a word-by-word collation of every source chapter, inspect Kaufmann's *Portable Nietzsche*, or establish the extent of the 1889 printing or first public release date. The guide states those limits, and does not attribute wording to Kaufmann.

On the final PR head, regenerating the search index reproduced 191 entries with only this guide's entry changed; the sitemap remained unchanged at 167 URLs. JavaScript syntax, all 90 local links, retained IDs, and duplicate-ID checks passed. Claude reported Chromium renders at 320, 390, and 1366 px without horizontal overflow or console errors. GitHub confirms the merge and Vercel reports a successful production deployment; the Vercel preview and post-merge live page were not independently rendered in this review. The owner's merge follows the independent reviewer's recommendation; no separate owner judgment of the live page has yet been recorded.

Only *Early Unpublished Essays* remains for editorial-depth revision. Preserve the complete two-essay boundary and Mügge's distinct free-edition titles and translator material. Separate lessons would be a distinct, optional package.
