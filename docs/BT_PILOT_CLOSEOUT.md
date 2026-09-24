# The Birth of Tragedy optional full-text pilot: closeout record

**Status (2026-09-24):**

| Question | Answer |
| --- | --- |
| Technical validation | **Complete.** Repository checks, route and link checks, and production checks passed. Real browser rendering at 320 px, 390 px, and desktop widths found no defect. |
| Human reading-time trial | **Pending.** No actual reader observations have been supplied. The protocol is in §9. |
| Pilot closed? | **No.** The pilot stays open until the reader trial is recorded and the integrator and owner complete the reassessment in §10. |

This is the canonical closeout record for the WP-08 pilot. It records what shipped and separates the evidence reported earlier from the checks performed in this closeout. It also records the owner's change to the development order (§11). Future agents should update this file rather than start a parallel record.

## 1. Release identity

| Item | Value |
| --- | --- |
| Implementation PR | #57, "Add optional Birth of Tragedy full-text route" |
| PR head | `52c4b59bbeea1748197052cdc7268038a1032ba3`, based on `c5527605ef6c3bdbc2de778d9e55b46cb7fcae72` |
| Merge to `main` | `33c00c76da036b9bfa616d81c099c29d9a3cb7fc` (2026-09-24 06:25 −04:00) |
| Closeout baseline | `main` = `33c00c76…`, re-verified with `git ls-remote` on 2026-09-24. `main` had not advanced. |
| Open PRs at closeout | #58 only (The Gay Science scope, on owner hold; see §11) |
| Closeout branch | `claude/birth-of-tragedy-pilot-closeout`: documentation and evidence images only. No public HTML, CSS, JS, or generated file changes. |

**What shipped in PR #57:**
- Nine new lesson pages, `readings/birth-of-tragedy-full-*.html`.
- A `#full-text-route` section on `works/birth-of-tragedy.html`. It contains:
  - the 19-station list;
  - the Foreword card (`#full-foreword`, station 2);
  - the §25 card (`#full-section-25`, station 18);
  - the labelled chronological alternate (`#full-chronological`).
- Additive "Continue the optional full-text route" links on Readings 1, 2, and 4–7.
- A route note on Reading 8, and its "Plan a complete reading" link retargeted from `#how-to-read` to `#full-text-route`.
- The bounded Haussmann-attribution correction in `themes/tragedy-art.html`.
- Regenerated `search-index.json` and `sitemap.xml`.

The pilot deliberately adds no book-course progress tracking.

## 2. Previous evidence versus this closeout

| Check | Reported in PR #57 (not repeated unless stated) | Performed in this closeout |
| --- | --- | --- |
| Build index | 187 search entries; 163 sitemap URLs | Re-run: identical counts, no diff in generated files |
| `node --check` | `site.js`, `book-guide.js` passed | Re-run: both pass |
| Stations, links, anchors, IDs | All 19 destinations, anchors, and unique IDs verified | Re-run sitewide (§4); every transition also exercised on production (§6) |
| Gutenberg text fragments | Self-criticism §4, §10, §22 verified | All 275 Gutenberg links in the Birth pages checked against the source; fallback landing tested in Chromium (§7) |
| Desktop render | 1363 × 936, no overflow | 1440 × 900 on production, no overflow (§5) |
| Phone-width render | **Not done**; static CSS review only | **Done**, with real browser rendering at 320 and 390 CSS px on production (§5) |
| Production identity | Not recorded | Public files compared byte-for-byte with `33c00c7` (§6) |
| Human reading time | Not done | **Still pending** (§9) |

The PR page also shows a Vercel bot "Ready" preview for the PR head and a completed automated code review. These were reported by GitHub; this closeout did not re-inspect that preview.

## 3. Repository checks (run on the closeout branch at `33c00c7`)

| Command | Result |
| --- | --- |
| `python3 scripts/build-index.py` | `Created 187 search entries; sitemap contains 163 URLs.`; `git status` clean afterwards: generated files reproduce exactly |
| `node --check site.js` | exit 0 |
| `node --check book-guide.js` | exit 0 |
| `git diff --check` | exit 0 |

Tool versions: Python 3.11.15, Node 22.22.2, git 2.43.0.

## 4. Static route and link audit

A parser pass over all 164 HTML files in the repository found:
- 0 broken internal file links;
- 0 missing same-page or cross-page fragments;
- 0 duplicate IDs;
- 0 canonical or `og:url` mismatches against `https://thespiritmask.com/<path>`;
- 0 heading-level skips.

**Route coverage.** The hub lists 19 stations, `#full-station-1` to `#full-station-19`, in printed order: A, P, R1, B, R2, C, R3, R4, D, R5, E, R6, F, G, H, I, R7, K, R8. Each station link resolves. Each new lesson's Continue link, previous link, and route link point to the adjacent stations. Lesson A and card K give labelled next steps for both orders.

**Introductory route preservation.** The diff from `c552760` to `33c00c7` for Readings 1–8 contains only these changes:
- six added "Continue the optional full-text route" paragraphs;
- the Reading 8 route note;
- the Reading 8 link retarget.

No assignment, commentary, URL, or original Next link changed. The original chain (hub guided path → R1 → … → R8) was also walked on production (§6).

## 5. Phone-width and desktop visual verification

**Environment.**
- Browser: Chromium 141.0.7390.37 (headless), driven by Playwright 1.56.0.
- Target: the **public production domain** `https://thespiritmask.com/`.
- Mode: **desktop-browser device emulation** (`is_mobile`, touch enabled, `width=device-width` viewport honoured). **No physical phone was used.**

**Viewports (actual values reported by the page):**

| Profile | `innerWidth × innerHeight` | `clientWidth` | DPR |
| --- | --- | --- | --- |
| 320 | 320 × 640 | 320 | 2 |
| 390 | 390 × 844 | 390 | 2 |
| Desktop | 1440 × 900 | 1440 | 1 |

**Pages:**
- the hub, including the 19-station list, the chronological alternate, and the Foreword and §25 cards;
- the 1886 self-criticism lesson;
- §§4–6;
- §§18–19;
- §§22–23;
- Reading 4, a reused lesson with both navigation choices;
- Reading 8, with its route note and Continue section.

**Method.** For each page and viewport:
1. Measured `scrollWidth` against `clientWidth`.
2. Listed every rendered element extending past either edge.
3. Listed elements that clip content through `overflow: hidden` or ellipsis.
4. Opened every `<details>` element and measured again.
5. Tapped every `<summary>` in `main` and confirmed it toggled.
6. Tapped the first "On this page" link and measured where its target landed.
7. Captured screenshots of the top, of named anchors, and of the page end, plus full-page captures. The full-page captures were inspected in column sheets from top to bottom.

**Results:**

| Check | 320 | 390 | Desktop |
| --- | --- | --- | --- |
| Horizontal overflow (closed / all `<details>` open) | none on all 7 pages | none | none |
| Clipped elements | none | none | none |
| `<summary>` toggles by tap | hub 9/9; each lesson 3/3 | same | n/a |
| Contents-menu tap lands on target | yes (target 17–42 px from top) | yes | n/a |
| Long links and headings wrap without clipping | yes (inspected) | yes | yes |
| Lesson endings (Continue, previous, route, footer) | readable, no overlap | same | same |

**Touch-target note (not a defect).** Links in the vertical "On this page" lists, the footer links, and the seven checkpoint links on the 1886-preface lesson are 17–20 px tall. That is below the 24 px minimum size in WCAG 2.2 SC 2.5.8, and the SC allows it where targets are spaced. The checkpoint links sit on a 26 px pitch, so they meet that spacing exception. The same shared pattern passed the WP-16 accessibility audit, and no fix is proposed.

**Screenshots committed with this record** (grayscale JPEG; captured on production 2026-09-24):

| File | Shows |
| --- | --- |
| [`bt-pilot-closeout/320-hub-route-and-cards.jpg`](bt-pilot-closeout/320-hub-route-and-cards.jpg) | 320: hub top, route introduction, stations 10–12, chronological alternate, Foreword card, §25 card, page end |
| [`bt-pilot-closeout/390-hub-station-list-and-section-25-card.jpg`](bt-pilot-closeout/390-hub-station-list-and-section-25-card.jpg) | 390: route introduction, station list, §25 card |
| [`bt-pilot-closeout/320-sections-4-6-ending.jpg`](bt-pilot-closeout/320-sections-4-6-ending.jpg) | 320: §§4–6, second half, with opened answers, writing prompt, Continue, footer |
| [`bt-pilot-closeout/320-preface-lesson-ending.jpg`](bt-pilot-closeout/320-preface-lesson-ending.jpg) | 320: 1886-preface lesson, second half, including both route directions and the seven checkpoint links |
| [`bt-pilot-closeout/320-sections-22-23-ending.jpg`](bt-pilot-closeout/320-sections-22-23-ending.jpg) | 320: §§22–23, second half, including the retrospect checkpoint, answers, Continue |
| [`bt-pilot-closeout/320-reading-4-and-reading-8-endings.jpg`](bt-pilot-closeout/320-reading-4-and-reading-8-endings.jpg) | 320: Reading 4 Continue, with the original Next button and the added full-text link; Reading 8 top, route note, Continue, end |
| [`bt-pilot-closeout/1440-desktop-comparison.jpg`](bt-pilot-closeout/1440-desktop-comparison.jpg) | Desktop: hub route section, §§22–23 top, Reading 8 Continue |

The full screenshot set was delivered to the owner with the closeout handoff rather than committed. It has about 160 images at all three widths, plus the JSON metric logs.

## 6. Production behaviour and route transitions

Three separate statements:
1. **GitHub reports deployment success.** Only for the PR #57 *preview*: the PR page shows the Vercel bot's "Ready" status. This session could not read GitHub deployment or status records for the `main` merge. The GitHub API and the deployments page were not accessible, and no Vercel connector was available.
2. **Public pages were inspected.** Yes, on 2026-09-24. These 24 production files are **byte-identical** to `33c00c7`:
   - the hub and all 17 Birth lesson pages;
   - `themes/tragedy-art.html`;
   - `search-index.json`, `sitemap.xml`, `styles.css`, `site.js`, `book-guide.js`.

   Response headers showed `server: Vercel` and `last-modified: Thu, 24 Sep 2026 11:37:25 GMT`, after the merge time. Production search, used by typing into the search field, returned the new lessons for "Socrates' Eye", "Aesthetic Hearer", and "full-text route".
3. **Deployment metadata confirms the intended commit.** **Not established in this session.** Byte identity shows that production serves content equal to `33c00c7`. It is not deployment metadata. Confirming the deployment ID and commit association needs account-side Vercel access; do not change hosting settings to obtain it.

**Route transitions.** Each transition was exercised by tapping the real link on production at 390 × 844 and checking the landing URL, the fragment, and the target position. 33 transitions passed:
- **Printed order (20):** hub station 1 → A → Foreword card → R1 → B → R2 → C → R3 → R4 → D → R5 → E → R6 → F → G → H → I → R7 → §25 card → R8 → hub `#full-text-route` (Reading 8's retargeted link).
- **Chronological (5):**
  - chronological box → Foreword card;
  - §25 card → A;
  - A → R8, the preface return;
  - A's checkpoint review → §§4–6 `#retrospect-checkpoint-1886`;
  - Reading 8's route note → A.
- **Original introduction (8):** hub guided path → R1, then each original Next link from R1 through R8. All are unchanged and working.

Cross-page links into hub cards land with the target heading 42–43 px from the top at 320, at 390, and at desktop width, with JavaScript on or off. The first automated run reported three failures. They were a test-timing artifact: the page was measured before the new document finished loading. With proper navigation waits, all three passed at every width.

## 7. Free-text (Gutenberg) links

- **Links checked:** all 275 Haussmann (Gutenberg #51356) links in the hub, the 17 Birth lessons, and `themes/tragedy-art.html`. Every `#Page_N` or heading anchor exists in the source.
- **Text fragments:** all 117 fragment texts occur in the source text.
- **Fallback landing.** In headless Chromium, tapping a fragment link landed at the same position as the page anchor alone. That behaviour was consistent with fragment highlighting not being applied in this environment, so text-fragment highlighting itself was **not** re-verified here; PR #57 reports it for §4, §10, and §22. The page-anchor fallback was measured at 390 px:

  | Link | Where the assigned text appears |
  | --- | --- |
  | Self-criticism §4 (`Page_6`) | first screen |
  | §10 (`Page_81`) | first screen |
  | §22 (`Page_167`) | first screen |
  | §18 (`Page_136`) | about 1 screen below the anchor |
  | §25 (`Page_185`) | about 1.7 screens below the anchor. The §25 card also gives plain links to `Page_186` and `Page_187`. |

  Browsers without fragment-directive support may not honour the page anchor at all when the directive is present. That is a sitewide link pattern, not a pilot defect.

## 8. Bounded fixes

**None were required.** No concrete defect in rendering, navigation, links, anchors, IDs, canonicals, or generated files was found, so this branch changes no public file.

**Observations for the integrator** (not fixed; editorial or typographic, outside a technical closeout):
- **Quotation-mark style is inconsistent across the new lessons.**
  - Straight ASCII quotes: Lessons A–D (`full-self-criticism`, `full-section-2`, `full-sections-4-6`, `full-sections-10-11`).
  - Typographic quotes: Lessons E–I, and Readings 1–8.
  - Consequence: the §§4–6 page title renders as `"I"`, while the hub's station list shows `“I”`.

  Normalizing would touch several hundred characters of approved commentary, so it needs its own bounded task if wanted.
- **Two fragment fallbacks land a short scroll from the section opening** (§18, §25; see §7).

## 9. Human reading-time trial (pending)

**Status: pending.** No actual reader timings exist. The route's times (16–23 hours overall; 9–13½ hours for readers who finished the introduction; the per-station ranges) are **planning estimates**. They come from word counts at 90–130 words per minute plus guide time. They are not measured reading times, and no simulated or AI estimate substitutes for this trial.

**Trial assignments:**

| Trial | Page | Assignment | Advertised time |
| --- | --- | --- | --- |
| Short station | Station 2 card: <https://thespiritmask.com/works/birth-of-tragedy.html#full-foreword> | The dedication "Foreword to Richard Wagner" (Haussmann's heading; the reader's edition may head it differently), complete; then the card's question and tension | 15–25 min |
| Dense lesson | Station 6: <https://thespiritmask.com/readings/birth-of-tragedy-full-sections-4-6.html> | *The Birth of Tragedy* §§4–6, complete; then the lesson's guide, "Check your understanding", and the 200–250-word writing prompt | 65–95 min |
| Optional second dense lesson | Station 14: <https://thespiritmask.com/readings/birth-of-tragedy-full-sections-18-19.html> | §§18–19, complete, with the lesson's guide, questions, and writing prompt | 65–95 min |

**Procedure:**
1. Use your usual reading edition. Start a stopwatch only while actively working, and pause it for interruptions.
2. Time the phases separately:
   - (a) primary reading of the assigned sections;
   - (b) the guide, commentary, and any rereading;
   - (c) the questions and the writing prompt.
3. Note anything that confused you as it happens: directions, links, edition differences, or landing positions in the free text.
4. Record each result in the table below, using a label such as "Reader A". **Do not record names or other identifying information.**

**Record template (one row per reader per assignment):**

| Reader label | Assignment | Edition used (Kaufmann / Haussmann-Gutenberg / other) | Prior familiarity (none / some / studied) | Device | Primary reading (min) | Guide / rereading (min) | Writing (min) | Total (min) | Confusing directions or links | Advertised range realistic? (yes / too short / too long) |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| *pending* | | | | | | | | | | |

Add the rows here by PR, or give them to the integrator for recording. The route design already names the adjustment to consider if the dense lessons run long: splitting §§4–6 at §4/§5 and §§18–19 at §18/§19. Whether to split is for the integrator and owner to decide after the trial; this record does not decide it.

## 10. Pilot reassessment: findings and remaining conditions

**Findings from this closeout:**
- The architecture works as built:
  - 19 stations in printed order, plus a labelled chronological alternate that moves only Lesson A;
  - existing lessons reused as stations, with only additive links;
  - both hub cards reachable in both directions.
- The original eight-session introduction is intact and independently navigable.
- Nothing in the pilot breaks at 320 or 390 CSS px in real Chromium rendering, including the densest lessons with every answer opened.
- Production serves exactly the merged repository content.

**Conditions before the pilot can be closed:**
1. Record at least one actual reader trial for the short station and the dense lesson (§9).
2. The integrator and owner review the timings and decide whether the dense lessons or the advertised ranges need adjustment.

**Optional, not blocking:**
- Confirm the Vercel deployment metadata for `33c00c7`.
- Spot-check on a physical phone and in a browser that renders text-fragment highlighting.

## 11. Owner priority change (recorded 2026-09-24)

The owner changed the development order. Future agents must follow this queue, not the earlier WP-08 sequence that followed the pilot:
1. **Close out the Birth of Tragedy pilot.** Technical closeout: this record. The reader trial is still pending.
2. **Give dedicated guide or course treatment** to the four Corpus entries that do not yet have a `works/` guide:
   - *Early Unpublished Essays*;
   - *The Case of Wagner*;
   - *Ecce Homo*;
   - *Nietzsche Contra Wagner*.

   This is the **next editorial assignment**. It has not been drafted or started and requires its own bounded assignment.
3. **Only afterward**, reconsider the optional full-text expansions for works that already have introductory courses.
   - **PR #58** ("Scope The Gay Science optional full-text route", branch `integrator/gay-science-full-text-scope`) is on an **owner-priority hold** recorded in its discussion. Preserve it. Do not merge it, modify its branch, or begin its lessons.
   - The remaining WP-08 expansions stay deferred behind it: *Zarathustra*, *Beyond Good and Evil*, *Untimely Meditations*, *Daybreak*, *Human, All Too Human*.

The original program completed the planning and QA work for the **ten existing book guides**. It did not give every Corpus entry a dedicated guide; the four works above have Corpus entries and theme-page coverage but no guide of their own.

## 12. Documentation reconciled in this closeout

Minimal corrections were made to statements that still described the Birth pilot as merely proposed, and the priority change was recorded:
- `docs/PROJECT_HANDOFF.md`
- `docs/README.md`
- root `README.md`
- `docs/WORK_PLAN.md`
- `docs/WP08_BOOK_EXPANSION_ROADMAP.md`

Historical completion notes were preserved.
