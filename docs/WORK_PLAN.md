# Work Plan

## Purpose
This plan converts the remaining Spirit Mask work into separable packages so multiple models can contribute without editorial or Git conflicts.

Status values: READY / IN PROGRESS / BLOCKED / REVIEW / COMPLETE.

## Phase 0 — Protect the baseline

### WP-00 — Canonical handoff package
- Status: COMPLETE
- Priority: P0
- Risk: Low
- Recommended environment: ChatGPT/Astra integration
- Scope: `docs/` plus the root README startup pointer
- Goal: establish model-independent project rules and current-state documentation.
- Acceptance: the five canonical handoff documents plus `docs/README.md` exist, agree with the current repository, the root README points contributors to them, and no production content or behavior is altered.
- Completion note: final consistency review confirmed the canonical theme exemplars, translation policy, seven-entry Will to Power starting-route pattern, and current repository inventory before merge.

## Phase 1 — Theme consistency program

### WP-01 — Audit all 25 theme pages against the shared guided format
- Status: COMPLETE
- Priority: P0
- Risk: Low
- Recommended agent: Grok
- Depends on: WP-00
- Scope: read-only audit
- Goal: classify each theme as canonical-format complete, partial, legacy, or special-case.
- Deliverable: matrix with structural gaps, citation-risk flags, and recommended conversion order.
- Acceptance: every theme listed once; no content changes.
- Completion note: Grok completed the read-only audit of all 25 themes; the integrator accepted the classification, conversion order, special-case handling, and risk flags. No repository content was changed.

### WP-02 — Convert highest-priority legacy themes, batch A
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-01
- Scope: theme files explicitly assigned after audit
- Goal: apply the shared theme-guide method without flattening topic-specific structure.
- Acceptance: structure, voice, citations, links, search/sitemap, and progress behavior pass.
- Completion note: five audited legacy themes were converted on PR #36, independently reviewed by Grok, corrected, and merged. Reading-progress migration and generated search data were verified before merge.

### WP-03 — Convert remaining legacy themes, batch B
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-01, WP-02 review
- Acceptance: same as WP-02.
- Completion note: the remaining 13 legacy themes were converted in three reviewed sub-batches: B1 (six themes, PR #38), B2 (five aesthetics/style themes, PR #39), and B3 (the two special-case pages `will-to-power.html` and `eternal-return-time.html`, PR #40). Each batch received independent Grok adversarial review, bounded corrections where needed, reading-progress migration checks, browser validation, and regenerated search data. All 25 theme pages now use the guided-theme architecture, with purposeful variation for notebook-heavy and special-case topics.

### WP-04 — Sitewide theme editorial consistency review
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended agent: Astra/ChatGPT
- Depends on: WP-02, WP-03
- Goal: harmonize terminology and architecture without homogenizing interpretation.
- Acceptance: all 25 themes reviewed against canonical exemplars.
- Completion note: ChatGPT/Astra reviewed all 25 converted themes together, implemented a bounded consistency cleanup, and Grok independently adversarially reviewed the result. PR #42 merged the final metadata, wording, source-location, and cross-link corrections without homogenizing route lengths, notebook structures, or special-case architecture.

## Phase 2 — Book/course program

### WP-05 — Inventory the 10 book guides/courses
- Status: COMPLETE
- Priority: P0
- Risk: Low
- Recommended agent: Grok
- Depends on: WP-00
- Goal: identify completion level, lesson counts, edition guidance, missing sections, and duplication.
- Acceptance: all 10 work pages classified with concrete next actions.
- Completion note: Grok audited all ten work hubs and their lesson chains. The Antichrist, Twilight of the Idols, and Genealogy courses cover the whole published text; Beyond Good and Evil is a complete introductory course by design; five other guides are substantial selected introductions; Untimely Meditations remains a beginning path. The Gay Science lesson-4 content exists at `start.html` but its filename/URL pattern is inconsistent. Twilight was confirmed structurally complete and suitable for bounded WP-07 QA rather than a rebuild.

### WP-06 — Beyond Good and Evil course completion/QA
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-00
- Goal: preserve the existing full-book architecture and verify all nine parts are represented coherently.
- Acceptance: course continuity, section anchors, translation labels, links, search/sitemap pass.
- Completion note: QA confirmed the ten-lesson course already covered all nine parts coherently. Two bounded factual corrections and regenerated search data were merged on PR #35.

### WP-07 — Twilight of the Idols course QA
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-00
- Goal: verify all chapter/title translation guidance and lesson coverage.
- Acceptance: no chapter-boundary or translation-title ambiguity remains.
- Completion note: Claude audited the full 14-lesson course and found complete chapter coverage in book order. Ten free-edition link labels were corrected to Anthony M. Ludovici's own chapter titles; Grok independently verified the titles and course boundaries. PR #43 merged the bounded QA with no course rebuild or generated-file churn.

### WP-08 — Remaining book-guide expansion plan
- Status: COMPLETE
- Priority: P2
- Risk: Medium
- Recommended agent: Astra/ChatGPT
- Depends on: WP-05
- Goal: sequence future complete courses based on current coverage and dependencies.
- Acceptance: approved book-by-book roadmap.
- Completion note: the owner approved the [book-by-book roadmap](WP08_BOOK_EXPANSION_ROADMAP.md) on 2026-09-23. It inventories all ten guides and sequences seven optional full-text expansions, beginning with a bounded *Birth of Tragedy* pilot. Reassess after the pilot before starting any of the other six; each future course requires its own scoped implementation review. The roadmap closes planning only, without changing public lessons.
- Later status (2026-09-24): the pilot was implemented through PR #57 (`33c00c7`). Its status and the owner's changed order are recorded under Phase 7 below.

## Phase 3 — Scholarly/source integrity

### WP-09 — Citation and translation audit: canonical theme pages
- Status: COMPLETE
- Priority: P0
- Risk: Medium
- Recommended agent: Grok
- Depends on: WP-00
- Scope: the five canonical themes
- Goal: verify section references, translator labels, source links, and notebook status labels.
- Acceptance: each cited assignment checked; discrepancies documented, not silently rewritten.
- Completion note: Grok audited the five canonical theme pages against sources.html and the named free editions. Essential assignments and translation stacks were sound; the audit identified bounded link-precision and wording issues without requiring route reconstruction. The pages remained valid structural exemplars.

### WP-10 — Citation and translation audit: remaining themes
- Status: COMPLETE
- Priority: P1
- Risk: High
- Recommended agent: Grok
- Depends on: WP-01, WP-09
- Acceptance: complete audit log across all remaining themes.
- Completion note: Grok audited all twenty non-WP-09 theme pages at the then-current baseline. The strongest defects were concentrated in legacy pages: preferred-translation wording beside free-edition labels, compound cards pointing multiple works/parts to one source, and special-case Will to Power/recurrence issues. Findings were carried into WP-03 B1/B2/B3 conversions and independently rechecked during PR review.

### WP-11 — Historical-claim review
- Status: COMPLETE
- Priority: P1
- Risk: High
- Recommended agent: Grok
- Goal: flag claims that are Nietzsche's polemics versus independent historical assertions requiring outside support.
- Acceptance: actionable list with source need and exact file/claim location.
- Completion note: Grok's sitewide read-only audit found no blockers and confirmed that most pages already distinguish Nietzsche's polemics from independent history. The bounded implementation corrected the Jacolliot/Manu source description, qualified Archive/Nachlass editorial-history claims, and tightened a few glossary/About attributions. PR #44 merged after independent verification.

### WP-12 — The Will to Power / Nachlass integrity review
- Status: COMPLETE
- Priority: P0
- Risk: High
- Recommended agent: Grok + Astra final review
- Goal: ensure notebook compilation status, numbering caveats, and published/notebook distinctions are consistent sitewide.
- Acceptance: no page represents WTP as a finished Nietzsche-authored book; all routes remain explicitly notebook material.
- Completion note: sitewide review found no blocker and confirmed that no page treats The Will to Power as a finished Nietzsche-authored book. The accepted convention is published text first, notebooks afterward; WTP numbers are editorial compilation numbers; KSA references are supplied only when known; notebook material may sharpen, preview, complicate, or overstate but may not settle a question the published books leave open. The review explicitly approved different notebook-route sizes rather than a fixed seven-entry quota and supplied the architecture used in WP-03 B3.

## Phase 4 — Essays/submissions

### WP-13 — Audit six companion essays
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended agent: Grok
- Goal: check sourcing, relation to theme pages, publication status, and voice.
- Acceptance: every submission page has a clear role and no unsupported claim masquerades as sitewide consensus.
- Completion note: Grok audited all six public submission pages, treating the 29-selection Master/Slave reader as a reference resource rather than forcing essay criteria onto it. Three pieces passed as-is; two overman essays needed bounded claim-status/role qualification and the passages reader needed four source-anchor corrections.

### WP-14 — Editorial revision of flagged essays
- Status: COMPLETE
- Priority: P2
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-13
- Acceptance: revised essays remain distinct from guide prose while following the site's source discipline.
- Completion note: ChatGPT/Astra implemented only the WP-13 handoff: the two overman essays retained their disagreement while explicitly owning their theses as interpretations and facing the relevant counterevidence; the passages reader received only its four wrong source-anchor fixes. PR #45 merged, and Grok's post-merge verification returned PASS with no follow-up required.

## Phase 5 — Technical/publication integrity

### WP-15 — Search, sitemap, internal-link audit
- Status: COMPLETE
- Priority: P1
- Risk: Low
- Recommended agent: Grok or ChatGPT
- Goal: verify search-index coverage, sitemap coverage, broken internal anchors, canonical URLs.
- Acceptance: reproducible report plus bounded fixes.
- Completion note: Grok completed a read-only audit of all 155 public HTML pages. Search-index generation reproduced exactly at 178 entries, sitemap generation reproduced exactly at 154 URLs, and the audit found zero broken internal file links, zero missing same-page or cross-page fragments, zero duplicate IDs, and no canonical/og:url mismatches. All course navigation chains passed. The Gay Science reading-4 `start.html` path is intentionally wired and should remain canonical; no implementation package was required.

### WP-16 — Accessibility audit
- Status: COMPLETE
- Priority: P2
- Risk: Medium
- Recommended agent: Grok
- Goal: keyboard navigation, heading order, link labels, filter state, details/summary use, contrast issues.
- Acceptance: prioritized issue list and bounded remediations.
- Completion note: Grok completed a read-only accessibility audit across all 155 public pages, with representative browser testing of the major page families and static inspection of shared CSS/JS. No blocker or important WCAG 2.2 AA failure was found. Keyboard access, skip links, focus visibility, filter state, search labeling/status, reading checkboxes, native details/summary, contrast, landmarks, heading structure, and mobile reflow all passed. Remaining observations (search button, filter-group naming, richer checkbox captions) are optional polish only; no implementation package was required.

### WP-17 — Analytics/privacy verification
- Status: COMPLETE
- Priority: P2
- Risk: Medium
- Recommended environment: ChatGPT/Astra with Vercel/browser + owner account verification
- Goal: verify custom events reach GA4 and privacy text matches actual configuration.
- Acceptance: code presence plus account-side receipt documented; privacy page reconciled.
- Completion note: ChatGPT/Astra verified measurement ID `G-7FBQ473K37`, all six custom event definitions, local-only reading progress, client-side search behavior, and the accuracy of `privacy.html`. After the owner authorized the The Spirit Mask GA4 account (`536937201`) through Windsor.ai, direct account-side data for the most recent 30-day window showed `primary_text_open` (17), `begin_reading` (6), `theme_view_change` (3), and `reading_step_complete` (1), alongside normal GA4 events. `reading_path_complete` and `reading_next_page` had no observed occurrences in that window; because the same shared event helper is demonstrably delivering other custom events and these two require narrower user actions, this is not treated as a transport failure. No privacy-page correction was required. See `docs/ANALYTICS_PRIVACY_VERIFICATION.md`.

### WP-18 — Vercel production/release workflow review
- Status: COMPLETE
- Priority: P1
- Risk: Medium
- Recommended environment: ChatGPT/Astra
- Goal: document preview -> review -> merge -> production path and rollback expectations.
- Acceptance: repeatable deployment checklist in repository docs.
- Completion note: ChatGPT/Astra verified the repository-side deployment contract at baseline `763286a89fb5b5f7e30d5e65a868f751f071fd7f`, including the static-site architecture, `main` production-branch convention, and bounded `vercel.json` redirects. `docs/DEPLOYMENT_RUNBOOK.md` now defines branch/PR review, validation, merge, production verification, stop conditions, Git-revert rollback, emergency Vercel rollback, and release-record requirements. The connected Vercel tool did not expose a team/project inventory, so account-side project/deployment settings are explicitly deferred to the live WP-20 release gate rather than inferred.

## Phase 6 — Final integration

### WP-19 — Sitewide editorial integration review
- Status: COMPLETE
- Priority: P0
- Risk: High
- Recommended environment: Astra/ChatGPT
- Depends on: major theme, book, and source-audit packages
- Goal: ensure the site reads as one publication.
- Acceptance: voice, terminology, cross-links, chronology, translation practice, and source discipline are consistent.
- Completion note (2026-09-23): bounded corrections from `integrator/wp-19-editorial-integration`, based on `07e0416ea66f9e0fb103fa8ee2ea0b00d4256672`, merged through PR #52 at `3a72aec45e82ef9dde455240c87f4a843948a892`. Claude independently reviewed `9ede7a5` and returned PASS WITH MINOR ISSUES, with no merge blockers; the useful minor clarifications were incorporated before merge. Vercel reported a successful deployment, and representative production checks passed. See `WP19_INTEGRATION_REVIEW.md` for editorial reconciliation and `WP20_RELEASE_VERIFICATION.md` for the completed release gate and rollback limits.

### WP-20 — Release gate
- Status: COMPLETE
- Priority: P0
- Risk: High
- Recommended environment: Astra/ChatGPT
- Depends on: WP-19
- Acceptance: tests pass, generated files current, preview inspected, critical audit findings resolved, production deployment verified.
- Completion note (2026-09-23): PR #52's WP-19 content release (`3a72aec`) is READY in Vercel and passed representative production browser checks. The PR #53 docs-only deployment (`6bbb7c7`) was READY, attached to `thespiritmask.com`, and tracked `main` at account-check time. Account-side Git connection, retention, protection, and rollback controls were inspected. All deployment states have 30-day retention; Vercel Authentication uses Standard Protection. At account-check time, the Hobby account could instantly roll back only to the immediately previous production deployment (`3a72aec`, the same public content); each subsequent docs merge changes that immediate predecessor. The retained pre-WP-19 deployment (`07e0416`) is not an eligible Instant Rollback target; Git revert remains the preferred recovery path for WP-19 content. See `WP20_RELEASE_VERIFICATION.md` for deployment IDs, evidence, and limits.

## Phase 7 — Book work after the original program (owner-prioritized)

The WP-00–WP-20 program above is complete. It covered the ten existing book guides. It did not give every Corpus entry a dedicated guide. The owner set the order below on 2026-09-24. Do not begin any item without an explicit bounded assignment.

### BT pilot — The Birth of Tragedy optional full-text route
- Status: COMPLETE
- Scope: the WP-08 pilot. It adds nine full-text lessons, the 19-station hub route with its Foreword and §25 cards, a labelled chronological alternate, and additive continue links on the introduction.
- Implementation: PR #57, merged at `33c00c76da036b9bfa616d81c099c29d9a3cb7fc`.
- Closeout note (2026-09-24): technical validation is complete. The checks were repository checks, link and route audits, a production byte comparison, and real browser rendering at 320 px, 390 px, and desktop widths. No defect was found, and no public file changed. On 2026-09-24 the owner reported the real reader trial complete and directed pilot closure without submitting timings. The pilot is closed by owner decision; advertised ranges remain unvalidated estimates. The protocol, evidence, and remaining conditions are in [`BT_PILOT_CLOSEOUT.md`](BT_PILOT_CLOSEOUT.md).

### Dedicated guides for four Corpus entries
- Status: COMPLETE for the bounded publication package. PR #61 merged at `0689bc8339d52e8682b338fa473da2cc424bef0c`; the four guide pages are live. The bounded source/navigation review passed; their later editorial-depth revisions are complete below.
- Scope: guide or course treatment for *Early Unpublished Essays*, *The Case of Wagner*, *Ecce Homo*, and *Nietzsche Contra Wagner*.
- Bounded package: four new `works/` pages, Corpus and source-guide links, and regenerated search/sitemap. No standalone lesson chains or full-text courses are claimed. Check `FOUR_MISSING_GUIDES_REVIEW.md` for boundaries and review points. This is separate from the Birth closeout.

### Editorial-depth revision for the four published guides
- Status: COMPLETE. *Ecce Homo* was revised in PR #63 (`cda35e64b71b1073dbfd7df6a1fe287e3e647299`), *The Case of Wagner* in PR #65 (`1bc39ff9a49a984d5faf8a387eca09e0e655e7e9`), *Nietzsche Contra Wagner* in PR #67 (`60bb715b9c8bff755cd8ac2f9282fb96f8c3f22d`), and *Early Unpublished Essays* in PR #69 (`6afa10a2091c838cd9ad46bab23856e9a1979831`). All passed independent editorial review before merge. The owner reviewed the revised *Ecce Homo* live page and judged it up to standard; after the other three merged, the owner looked at them and reported all three looked quite substantial. Vercel reports successful deployments; the integration reviewer did not separately render those post-merge pages. See `FOUR_MISSING_GUIDES_REVIEW.md`.
- Scope: expand the four published guides to give readers substantial, work-specific explanation and close-reading help. The two early essays received distinct, proportionate treatment; the published URLs, source boundaries, and translation guidance were preserved.
- Acceptance: compare each revised page with the established book-guide exemplars for a clear route, a walkthrough of the work, precise passage notes, interpretive tensions, and useful connections. Map *Ecce Homo*'s book-by-book retrospection and *Nietzsche Contra Wagner*'s excerpt origins; give the two early essays and *The Case of Wagner* appropriate close treatment. Do not impose a uniform word or lesson count, and do not advertise a separate full-text course without building one.
- Release: use scoped editorial PRs, source/translation review, generated-file checks, and changed-page browser inspection. Record the outcome in `FOUR_MISSING_GUIDES_REVIEW.md` and update this status after review and merge.

### The Gay Science optional full-text route
- Status: IN PROGRESS. Phase 1 is in REVIEW; the full course is not complete and not published.
- Scope proposal: merged documentation-only through PR #58 on 2026-09-24 (`docs/GS_FULL_TEXT_ROUTE_SCOPE.md`). No route or lessons were published.
- Owner decision (2026-09-25): the owner lifted the priority hold for a bounded first phase only, after the four guide repairs. This does not approve publication of the 35-station course without review.
- Phase 1 package:
  - Branch: `claude/gay-science-full-text-phase-1`, based on `66b55f624042e876200c78a5947ed62c9d272bc2`.
  - Contents:
    - a route audit against the complete free text, [`GS_FULL_TEXT_PHASE1_AUDIT.md`](GS_FULL_TEXT_PHASE1_AUDIT.md);
    - three unlisted, `noindex` trial lessons: station 2, Book I §§1–3; station 19, Book III §§242–275; station 29, Book V §§357–359.
  - Unchanged: the hub, the ten-session introduction, its Next links, `start.html`, and the generated files.
  - Findings:
    - All boundaries and paratext check out.
    - The audit recommends no regrouping, but wider estimates for stations 9, 26, 29, and 33, and a contingent split of station 29.
- Gate: editorial review of each batch. By owner decision (2026-09-25), a timed reader trial is not required before drafting; all time ranges are labelled editorial estimates, not measured times. The present grouping stays unless later editorial evidence warrants a change. The Kaufmann comparison and real-device checks remain open. The next batch is stations 1, 3, 4, and 18, in a separate draft PR.
- Do not advertise the route on the hub until the owner chooses whole-route or labelled partial publication.

### Remaining optional full-text expansions
- Status: deferred pending owner reassessment
- Scope: *Zarathustra*, *Beyond Good and Evil*, *Untimely Meditations*, *Daybreak*, and *Human, All Too Human*, in the WP-08 order unless the owner changes it.
- The four guide revisions are complete. Reconsider these packages only when the owner reassesses the queue; their implementation is not automatically authorized by the guide closeout.

## Parallelization guidance
Safe current parallel work:
- Grok: available for targeted verification or final review
- Claude: later bounded implementation packages after audit
- ChatGPT/Astra: WP-08, WP-17, WP-18, integration, and final release coordination

Do not run two agents editing the same theme or shared files simultaneously.

## Work-package completion record
Every completed WP must record:
- branch / baseline SHA;
- files changed;
- checks performed;
- source verification;
- preview status;
- unresolved items;
- merge/production status.
