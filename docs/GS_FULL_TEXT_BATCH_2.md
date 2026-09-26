# The Gay Science full-text route: batch 2 (stations 1, 3, 4, 18)

**Status (2026-09-25):** This is a draft for editorial review. It does not publish anything. The owner assigned stations 1, 3, 4, and 18 after phase 1 (PR #72, [`GS_FULL_TEXT_PHASE1_AUDIT.md`](GS_FULL_TEXT_PHASE1_AUDIT.md)). Stop again for editorial review after this batch.

| Item | Value |
| --- | --- |
| Branch | `claude/gay-science-full-text-batch-2`, stacked on PR #72's head `684ad1e` |
| `main` | `66b55f624042e876200c78a5947ed62c9d272bc2` (unchanged) |
| Owner decision applied | A timed reader trial is not required. All time ranges are **editorial estimates, not measured reading times**. The present station grouping is kept. |

## New lessons

All four are unlisted, `noindex,follow`, and carry the "Review draft" notice. They follow the scope's assignments and the phase-1 architecture.

| St. | Assignment | File | Estimate | Design notes |
| ---: | --- | --- | --- | --- |
| 1 | Verse prelude, poems 1–63 | `readings/gay-science-full-prelude.html` | 45–60 min | Asks only "who speaks, and to whom?"; station 2 keeps the full P/H/V/? habit, which settles open decision 3 in the phase-1 audit. The page states plainly where the poems stop joking: rank and the crowd, war (poem 41), stock generalizations about women (poems 22 and 50; poem 19 is treated separately, since its accidental seducer is a man whose careless word strikes a woman), and the closing refusal of pity (poem 63). Petre is credited for poems 19 and 63 only where the edition credits her; the rest are attributed to Cohn and Petre jointly. |
| 3 | Book I §§4–12 | `readings/gay-science-full-sections-4-12.html` | 55–75 min | §12 overlaps Reading 1 and is read briefly, as the end of a sequence. The page offers Reading 1 as an optional checkpoint and warns that Reading 1's own Next link leads to Reading 2, not back to the route. It states §10's hereditary and caste claims plainly. Its difficulty is §7's missing histories against §§4 and 10. |
| 4 | Book I §§13–20 | `readings/gay-science-full-sections-13-20.html` | 50–70 min | Covers §13's psychology of power (kept distinct from the later will-to-power doctrine), §14's friendship exception, and §18's ancient slavery, stated without deciding the tone. It states the sexual sneer at the end of §13 plainly, and gives the gendered pronouns of §14. |
| 18 | Book III §§202–241 | `readings/gay-science-full-sections-202-241.html` | 45–65 min | The second miniature station. All 40 sections are placed in this guide's labelled groups. Its difficulty applies §220 (victims versus spectators) to the run's own judgments of the poor (§206) and of women (§§221, 227). |

**Navigation changes on phase-1 pages, all additive:**
- Station 2 now links forward to station 3 and back to station 1.
- Station 19 links back to station 18.
- The notice on both pages now reads "Only some stations are drafted so far."

The route is still not on the hub. The introduction, its Next links, and `start.html` are unchanged.

## Checks

| Check | Result |
| --- | --- |
| `python3 scripts/build-index.py` | 191 entries, 167 URLs. `search-index.json` and `sitemap.xml` are byte-identical to `main`. |
| `node --check site.js`, `node --check book-guide.js`, `git diff --check` | pass |
| Static audit, 175 HTML files | 0 broken links, 0 missing fragments, 0 duplicate IDs, 0 canonical or `og:url` mismatches, 0 heading skips |
| Free-text links, 99 across the 7 drafted pages | Every anchor exists and every fragment term occurs. For all 98 numbered links, the fragment's first occurrence and the page anchor lie in the named section or poem. |
| Quotations | All 396 quoted fragments (195 on the four new pages) of 10 or more characters occur in the free edition. Poem line breaks are marked " / ". Five phrases in quotation marks were not source wording: glosses, a translation of a title, and one misquotation. All five were fixed. |
| Navigation, Chromium at 390 px | Station 1 → 2 → 3 → 4 by the Continue buttons; station 18 → 19 and back. The introduction chain, from R1 through `start.html` to R10 and the hub, is intact. Every internal link on the six changed pages returns 200. |
| Layout at 320 × 640, 390 × 844 (touch emulation), and 1440 × 900 | No overflow with `<details>` closed or open, no clipping, every `<summary>` toggles, the contents link lands 17 px from the top, and no JavaScript errors |

## Still open (not done in this batch)

- **Kaufmann comparison.** Kaufmann's text was not available. No Kaufmann wording is quoted. A reader with Kaufmann should check the paraphrases, especially §13's closing sneer ("gay lady"), §14's "possession," and the verse, where the translations differ most.
- **Physical-phone check and text-fragment highlighting.** Neither was done. The layout checks used emulation against a local server. Headless Chromium applies the page-anchor fallback, not the highlight.
- **Reading times.** None has been measured. They are editorial estimates.
- **Next drafting.** Stations 5–7 would complete Book I, and station 17 would complete the miniatures. Neither is started.

## Review follow-up (2026-09-26)

- **Station 1.** Poem 19 is now described separately. Its accidental seducer is the man whose “empty word” strikes a woman; the poem does not portray women as seducers. The concerns about poems 22 and 50 stand.
- **Station 4, §18.** The discussion and the answer now separate two claims. The ancient slave is absent from modern sentiment. Yet “there is perhaps too much of this kind of slavishness in each of us.” The phrase “modern people lack both” is removed.
- **The `?` mark.** It is now used only for Nietzsche’s own hedge, as defined at station 2. §7 (an open question) and §19 (a rhetorical question) no longer carry it. §18’s “perhaps” does.
