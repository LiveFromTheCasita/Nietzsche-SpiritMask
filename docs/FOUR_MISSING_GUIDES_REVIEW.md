# Four Corpus guides: bounded review record

## Scope

This package adds dedicated `works/` guide pages for *Early Unpublished Essays*, *The Case of Wagner*, *Ecce Homo*, and *Nietzsche Contra Wagner*. Each page has an integrated, ordered primary-text route with questions, edition guidance, interpretive cautions, and connections. The package does not create separate course lesson pages or claim a complete full-text course of the kind built for *Twilight of the Idols* and *The Antichrist*.

The four existing Corpus anchors remain stable; their titles now link to the guides. `sources.html` links to them and distinguishes the works and editors. Search and sitemap were regenerated. No existing reading progress or lesson chain is reordered.

## Reading boundaries and sources to review

| Guide | Assigned material | Preferred edition and free alternative | Boundary to protect |
| --- | --- | --- | --- |
| Early Unpublished Essays | The complete “Homer’s Contest” (1872) and “On Truth and Lies in a Nonmoral Sense” (1873) | No single matching Kaufmann/Hollingdale edition recommended in `sources.html`; Mügge’s [1911 collection](https://www.gutenberg.org/ebooks/51548) is the free alternative | Two unpublished texts out of seven in the collection; Mügge calls the latter “On Truth and Falsity in Their Ultramoral Sense.” |
| The Case of Wagner | Preface, numbered sections, postscripts, Epilogue | Kaufmann in *Basic Writings*; Ludovici’s [combined volume](https://www.gutenberg.org/ebooks/25012) | Stop before the separately headed *Nietzsche Contra Wagner*; do not assign Ludovici’s prefaces as Nietzsche’s. |
| Ecce Homo | Preface; three “Why I…” chapters; all book entries; “Why I Am a Fatality” | Kaufmann in *Basic Writings*; [Ludovici’s free prose](https://www.gutenberg.org/ebooks/52190) | The translator’s introduction, editorial note, and separately credited poetry are outside the prose route. Written 1888, published 1908. |
| Nietzsche Contra Wagner | Its Preface and all author-selected chapters through its Epilogue | Kaufmann in *The Portable Nietzsche*; Ludovici’s [combined volume](https://www.gutenberg.org/ebooks/25012) | Authored selection from earlier writings, not a fresh continuous treatise. Stop before the editor’s separate “Selected Aphorisms” appendix. |

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
