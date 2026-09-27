# The Gay Science full-text route: release candidate

**Status (2026-09-27):** This is a release candidate for the owner's publication review. It is a draft PR and is not merged, and nothing is deployed.

This branch shows the complete 35-station route as it would appear at publication. It is stacked on the corrected batch 11 (PR #82, `f63e05a`). Everything below applies only if the owner approves publication.

| Item | Value |
| --- | --- |
| Branch | `claude/gay-science-full-text-release-candidate`, stacked on `claude/gay-science-full-text-batch-11` at `f63e05a` |
| `main` | `66b55f624042e876200c78a5947ed62c9d272bc2` (unchanged; an ancestor of every branch in the stack, so the stack merges without conflict) |
| Reading times | Editorial estimates, not measured reading times. No timed trial was required. |

## What changes for publication

**Hub (`works/gay-science.html`).**
- The "Optional full-text route" section (`#full-text-route`) sits after the ten-session "Guided reading path" and before "If you have 40 minutes", as the scope specified.
- It explains that the route assigns every part once, and keeps the two publication stages apart: stations 1–25 cover 1882, stations 26–35 cover 1887.
- It explains why the preface comes last, and offers the optional printed-order start at station 35.
- It gives the total editorial estimate: 33–45 hours from the stations' own ranges (1,995–2,705 minutes), plus about 9–12 hours if every checkpoint is taken.
- It explains how navigation and checkpoints work, and that the route does not track progress.
- It names the editions and translators. Petre is credited only where the edition credits her.
- It warns readers about the difficult passages.
- A 35-item list follows, with anchors `#full-station-1` to `#full-station-35`. Each item gives:
  - the year (1882 or 1887) and the station's title;
  - the exact assignment and editorial estimate;
  - the guiding question;
  - where applicable, the optional checkpoint, the end of 1882 (station 25), the start of 1887 (station 26), and the end of the route (station 35).
- An "On this page" link and a second header shortcut ("Read the whole book: optional full-text route") point to the section.
- The sentence under the guided path now points to the route instead of to reading "the surrounding aphorisms".
- The ten-session list, its links, and everything else on the hub are unchanged.

**Route pages (all 35).**
- Removed from each page:
  - `noindex,follow`;
  - the "Review draft" notice;
  - "(proposed)" in the station label;
  - "(review draft)" in the breadcrumb and site footer;
  - "Review draft of" at the start of the meta, Open Graph, Twitter, and JSON-LD descriptions.
- The breadcrumb now links to `#full-text-route`. The footer navigation and the "Return to the route list" links go to the route list.
- The date line changed from "Review draft, [drafting date]" to "Revised September 27, 2026", the site's convention for its other route pages. Every page was revised today for release. **If publication happens on a later date, update the date.**
- "This draft has not been compared with Kaufmann's text" now reads "this lesson has not been compared with Kaufmann's text". The statement stays because it is still true.
- Two estimate notes no longer cite internal documents:
  - station 9 now says it is the heaviest station by word count;
  - station 26 says its range is wider because it is dense.

**Introductory lessons (nine of ten, plus nothing else).**
- Each gets one line after its unchanged primary Next link: "**Continue the optional full-text route:** Station N · …". This follows the pattern already published on the *Birth of Tragedy* introductory lessons.
- Each points to the station after the one that offers the lesson as a checkpoint:

  | Lesson | Checkpoint after station | Return link to |
  | --- | ---: | ---: |
  | Reading 1 | 3 | 4 |
  | Reading 2 | 12 | 13 |
  | Reading 4 (`start.html`) | 14 | 15 |
  | Reading 5 | 21 | 22 |
  | Reading 6 | 24 | 25 |
  | Reading 7 | 25 | 26 |
  | Reading 8 | 26 | 27 |
  | Reading 9 | 32 | 33 |
  | Reading 10 | 33 | 34 |

- **Reading 3 gets no return link, on purpose.** Station 14's checkpoint sends readers through Reading 3 and then, by Reading 3's own Next link, to Reading 4. A return link on Reading 3 would skip Reading 4, so it would not be useful.
- All ten lessons keep their assignments, commentary, URLs, and existing Next links, and Reading 4 keeps its `start.html` URL. On `start.html`, the return line sits below the primary link in "Continue the reading" and does not obscure the ordinary entry path.
- The lessons' own footer dates were not changed.

**Generated files.** `search-index.json` now has 226 entries (was 191) and `sitemap.xml` 202 URLs (was 167). The 35 route pages are the only additions.

## Checks

| Check | Result |
| --- | --- |
| `python3 scripts/build-index.py` | 226 entries, 202 URLs; regenerated and committed |
| `node --check site.js`, `node --check book-guide.js`, `git diff --check` | pass |
| Static audit, all 203 HTML files | 0 broken links, 0 missing fragments, 0 duplicate IDs, 0 heading skips |
| Assignments | The Continue chain runs 35 pages. Station numbers and "Previous station" links are consistent. §§1–383 are each assigned once. Poems 1–63, Book IV's opening verse, the Turenne epigraph, the 14 songs (matched to the edition's headings), the motto, and Preface §§1–4 are each assigned once. 1882 covers stations 1–25; 1887 covers stations 26–35. |
| Checkpoints and return links | Checkpoints come after stations 3, 12, 14, 21, 24, 25, 26, 32, and 33. Every return link points to the station after its checkpoint. |
| Introduction | The chain R1 → R2 → R3 → `start.html` → R5 … R10 → hub is unchanged. The diffs of the introductory pages are one added line each. |
| Quotations | 2,130 quoted fragments on the 35 pages occur in the free edition; 0 failures. Petre is named only for the edition-credited poems (prelude 19, 48, 63; "In the South"; the Mistral song). No translator is assigned to the title-page motto. |
| Free-text links and fragments | 567 links on the route pages, hub, and introductory lessons were tested document-wide, as a browser matches them: case-insensitive, first match, word boundaries. There are 0 problems, apart from the hub's pre-existing unanchored link to the edition's front page. |
| Canonical and indexing | Every route page, the hub, `start.html`, and the ten introductory lessons have self-canonical URLs; none carries `noindex` |
| Layout at 320 × 640 and 390 × 844 (touch emulation) and 1440 × 900 | 35 stations, `start.html`, and the other nine introductory lessons: no horizontal overflow, every `<details>` toggles, no JavaScript errors, all internal links return 200. The hub: no overflow, all 35 `#full-station-N` anchors present, no missing in-page fragments, no JavaScript errors. |

## Unverified comparisons (Kaufmann and KGW)

Kaufmann's translation and the KGW/eKGWB critical text were not available in this environment. No comparison with either has been made, and none should be read as passed. Quotations follow Common and the free edition's verse translators. German readings follow the Projekt Gutenberg-DE text, whose source edition is not identified. The consequential places are these.

**Where the route's interpretation turns on a German reading that needs KGW confirmation:**
- §135's *verjüdeln* and §140's *als Jude* (station 15);
- §143's hedges and "supermen/undermen" (station 15);
- §276's *irgendwann einmal*, and the claim that *ewige Wiederkunft* occurs only in §285 within Books I–IV (station 20);
- §324's *wahrer* and §340's *eine Krankheit* (stations 23, 25);
- the Greek of §344, garbled in the German text used (station 26);
- §348's *Volk* rendered "race" (station 27);
- §349's *Wille des Lebens* (station 27);
- §351's *wohl* and §352's aside (station 27);
- §361's conditional framing of the claim about Jews (station 30);
- §373's *Rangordnung* and *Vernichtung* (station 32);
- §375's *wohl* (station 32);
- §377's *Knechte*, *Sklaverei*/*Versklavung*, *Rasse*, and *deutschen Geist … eitel Macht* (station 33);
- the songs' German, especially "The Fool's Dilemma"'s broken-off word, "Sils-Maria"'s *Freundin*, and the Mistral song's *Fröhlich – unsre Wissenschaft* and *Huren* (station 34);
- the motto's caption *Ueber meiner Hausthür*, and the Emerson motto labelled "1882" (station 35);
- Preface §2's *sagen wir* and §3's *Ich zweifle* (station 35).

**Where Kaufmann's rendering could change what a reader sees:**
- The women passages: §§24, 59–75, 339, 345, 352, 361–363, 368, and Preface §§3–4.
- The Jewish and Christian judgments: §§99, 135–140, 348, and 361.
- §§357–358 on Germany and the Reformation.
- §373's "class distinction" and "extermination".
- §377 as a whole.
- The songs: Kaufmann's verse translations differ widely from Cohn and Petre's.
- The recorded places for each batch are listed in `GS_FULL_TEXT_BATCH_2.md` through `GS_FULL_TEXT_BATCH_11.md` under "Still open" or "Remaining publication checks."

## Preview

The Vercel preview for each push builds successfully (commit status "success"), but it is protected by Vercel sign-in. It was not opened, and its protection setting was not changed. The layout checks above used Chromium emulation against a local server of the same files.

## Merge order

Every branch in the stack is based on the one below it, and `main` (`66b55f6`) is an ancestor of all of them. When the owner approves publication, use one of two orders. Do not squash or rebase individual stacked PRs, because either would force every PR above them to be reconciled.

**Recommended: merge bottom-up, with merge commits.** After each merge, retarget the next PR's base to `main` before merging it (GitHub does this automatically if the merged head branch is deleted).

1. #72, phase 1 (`claude/gay-science-full-text-phase-1`)
2. #73, batch 2
3. #74, batch 3
4. #75, batch 4
5. #76, batch 5
6. #77, batch 6
7. #78, batch 7
8. #79, batch 8
9. #80, batch 9
10. #81, batch 10
11. #82, batch 11
12. The release-candidate PR (this branch)

Until step 12, every step leaves `main` with unlisted `noindex` review drafts that the hub does not advertise. The route goes public only with step 12, after which the site should be deployed and the live pages checked.

**Alternative: one merge.** Retarget only the release-candidate PR to `main` and merge it. Its branch contains every commit in the stack. Then close #72–#82 as superseded, noting the merge commit. This publishes the same result in one step, but the individual review PRs are closed rather than merged.

## Still open before publication

1. The owner's publication review of this candidate: hub wording, the return links, the "Revised" date, and the route list's glosses.
2. The Kaufmann and KGW comparisons above.
3. A physical-phone check, and a check that text-fragment highlighting works in a real browser. Headless Chromium applies only the page-anchor fallback.
4. Opening the protected preview (requires Vercel sign-in).
5. Measured reading times: none. The owner has ruled that no timed trial is required.
