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
