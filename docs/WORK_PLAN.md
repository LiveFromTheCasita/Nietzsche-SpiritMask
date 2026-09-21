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
- Status: READY
- Priority: P1
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-01, WP-02 review
- Acceptance: same as WP-02.

### WP-04 — Sitewide theme editorial consistency review
- Status: BLOCKED
- Priority: P1
- Risk: Medium
- Recommended agent: Astra/ChatGPT
- Depends on: WP-02, WP-03
- Goal: harmonize terminology and architecture without homogenizing interpretation.
- Acceptance: all 25 themes reviewed against canonical exemplars.

## Phase 2 — Book/course program

### WP-05 — Inventory the 10 book guides/courses
- Status: READY
- Priority: P0
- Risk: Low
- Recommended agent: Grok
- Depends on: WP-00
- Goal: identify completion level, lesson counts, edition guidance, missing sections, and duplication.
- Acceptance: all 10 work pages classified with concrete next actions.

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
- Status: READY
- Priority: P1
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-00
- Goal: verify all chapter/title translation guidance and lesson coverage.
- Acceptance: no chapter-boundary or translation-title ambiguity remains.

### WP-08 — Remaining book-guide expansion plan
- Status: BLOCKED
- Priority: P2
- Risk: Medium
- Recommended agent: Astra/ChatGPT
- Depends on: WP-05
- Goal: sequence future complete courses based on current coverage and dependencies.
- Acceptance: approved book-by-book roadmap.

## Phase 3 — Scholarly/source integrity

### WP-09 — Citation and translation audit: canonical theme pages
- Status: READY
- Priority: P0
- Risk: Medium
- Recommended agent: Grok
- Depends on: WP-00
- Scope: the five canonical themes
- Goal: verify section references, translator labels, source links, and notebook status labels.
- Acceptance: each cited assignment checked; discrepancies documented, not silently rewritten.

### WP-10 — Citation and translation audit: remaining themes
- Status: BLOCKED
- Priority: P1
- Risk: High
- Recommended agent: Grok
- Depends on: WP-01, WP-09
- Acceptance: complete audit log across all remaining themes.

### WP-11 — Historical-claim review
- Status: READY
- Priority: P1
- Risk: High
- Recommended agent: Grok
- Goal: flag claims that are Nietzsche's polemics versus independent historical assertions requiring outside support.
- Acceptance: actionable list with source need and exact file/claim location.

### WP-12 — The Will to Power / Nachlass integrity review
- Status: READY
- Priority: P0
- Risk: High
- Recommended agent: Grok + Astra final review
- Goal: ensure notebook compilation status, numbering caveats, and published/notebook distinctions are consistent sitewide.
- Acceptance: no page represents WTP as a finished Nietzsche-authored book; all routes remain explicitly notebook material.

## Phase 4 — Essays/submissions

### WP-13 — Audit six companion essays
- Status: READY
- Priority: P1
- Risk: Medium
- Recommended agent: Grok
- Goal: check sourcing, relation to theme pages, publication status, and voice.
- Acceptance: every submission page has a clear role and no unsupported claim masquerades as sitewide consensus.

### WP-14 — Editorial revision of flagged essays
- Status: BLOCKED
- Priority: P2
- Risk: Medium
- Recommended agent: Claude
- Depends on: WP-13
- Acceptance: revised essays remain distinct from guide prose while following the site's source discipline.

## Phase 5 — Technical/publication integrity

### WP-15 — Search, sitemap, internal-link audit
- Status: READY
- Priority: P1
- Risk: Low
- Recommended agent: Grok or ChatGPT
- Goal: verify search-index coverage, sitemap coverage, broken internal anchors, canonical URLs.
- Acceptance: reproducible report plus bounded fixes.

### WP-16 — Accessibility audit
- Status: READY
- Priority: P2
- Risk: Medium
- Recommended agent: Grok
- Goal: keyboard navigation, heading order, link labels, filter state, details/summary use, contrast issues.
- Acceptance: prioritized issue list and bounded remediations.

### WP-17 — Analytics/privacy verification
- Status: READY
- Priority: P2
- Risk: Medium
- Recommended environment: ChatGPT/Astra with Vercel/browser + owner account verification
- Goal: verify custom events reach GA4 and privacy text matches actual configuration.
- Acceptance: code presence plus account-side receipt documented; privacy page reconciled.

### WP-18 — Vercel production/release workflow review
- Status: READY
- Priority: P1
- Risk: Medium
- Recommended environment: ChatGPT/Astra
- Goal: document preview -> review -> merge -> production path and rollback expectations.
- Acceptance: repeatable deployment checklist in repository docs.

## Phase 6 — Final integration

### WP-19 — Sitewide editorial integration review
- Status: BLOCKED
- Priority: P0
- Risk: High
- Recommended environment: Astra/ChatGPT
- Depends on: major theme, book, and source-audit packages
- Goal: ensure the site reads as one publication.
- Acceptance: voice, terminology, cross-links, chronology, translation practice, and source discipline are consistent.

### WP-20 — Release gate
- Status: BLOCKED
- Priority: P0
- Risk: High
- Recommended environment: Astra/ChatGPT
- Depends on: WP-19
- Acceptance: tests pass, generated files current, preview inspected, critical audit findings resolved, production deployment verified.

## Parallelization guidance
Safe current parallel work:
- Grok: WP-05, WP-09/WP-11
- Claude: WP-03 or WP-07
- ChatGPT/Astra: integration plus WP-15/WP-18 coordination

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
