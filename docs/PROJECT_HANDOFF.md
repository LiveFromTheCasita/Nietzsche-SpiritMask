# The Spirit Mask / Reading Nietzsche — Project Handoff

## Purpose
This repository powers https://thespiritmask.com/, a static HTML study guide for reading Friedrich Nietzsche through themes, book guides, sequenced primary-text assignments, and editorial commentary.

This file is the canonical project-state handoff for any human or AI contributor. Read it together with `EDITORIAL_STYLE_GUIDE.md`, `CONTENT_STANDARDS.md`, `AGENT_INSTRUCTIONS.md`, and `WORK_PLAN.md` before making changes.

## Current technical state
- Repository: `LiveFromTheCasita/Nietzsche-SpiritMask`
- Production branch: `main`
- Hosting: Vercel, production-connected to `main`
- Architecture: static HTML + shared `styles.css` + `site.js`; no framework/build dependency
- Search/sitemap generation: `python3 scripts/build-index.py`
- JS syntax check: `node --check site.js`
- Generated artifacts that must be committed when content changes: `search-index.json` and `sitemap.xml`
- Current handoff baseline: main at commit `428113609a793a156c1e750c04979ed67469c43b` (Revaluation of Values guided-format merge)

## Current content architecture
The repository currently contains:
- 25 theme pages under `/themes/`
- 10 book-guide/course pages under `/works/`
- 6 editorial/companion essays under `/submissions/`
- Sitewide corpus, glossary, sources/translations, start, about, search, privacy, and index pages
- Local reading-progress behavior in `site.js`
- Analytics instrumentation already present; account-side receipt still requires verification

## Editorial identity
The site is a study framework, not a summary site and not a devotional/anti-Nietzsche polemic. Its core method is:
1. give a reader a manageable first encounter;
2. assign precise primary-text sections;
3. explain why each passage belongs;
4. distinguish core claims from complications and extensions;
5. preserve chronological and textual differences across Nietzsche's career;
6. expose tensions rather than flattening them;
7. separate Nietzsche's published works from posthumous notebook material;
8. give readers enough citation detail to test the interpretation themselves.

## Canonical theme exemplars
When uncertain about structure or editorial depth, treat these as primary reference pages:
- `themes/master-slave-morality.html`
- `themes/self-overcoming.html`
- `themes/overman.html`
- `themes/herd-and-last-man.html`
- `themes/revaluation.html`

These pages establish the current shared guided-theme format: framing, first encounter, fuller route, key distinctions, work-by-work survey, notebook material where relevant, related essays, and cross-theme connections.

## Canonical book-guide exemplars
Use these as references for book-guide/course architecture:
- `works/beyond-good-and-evil.html`
- `works/twilight-of-the-idols.html`
- `works/antichrist.html`

Book pages should remain companions to the preferred edition, not substitute editions.

## Translation policy
`sources.html` is authoritative.
- Prefer Walter Kaufmann where the named edition covers the work.
- Prefer R. J. Hollingdale where the named edition covers the work.
- The Genealogy preferred translation is Walter Kaufmann and R. J. Hollingdale.
- The Will to Power preferred translation is Walter Kaufmann and R. J. Hollingdale, with explicit warning that the compilation is posthumous and not a finished book authorized by Nietzsche.
- Free public-domain alternatives may be linked, but their translator and edition differences must be named accurately.
- Cite by book/part/essay/section where possible, not edition-specific page number.

## Copyright and primary-text policy
Do not reproduce complete assigned passages from copyrighted preferred editions. Guided lessons assign exact sections and may use short quotations for analysis. Public-domain online alternatives can be linked. Do not silently substitute a free translation for the preferred translation.

## Important established distinctions
The site repeatedly protects distinctions that must not be collapsed:
- master/slave morality vs herd morality;
- ressentiment vs ordinary anger or objection to harm;
- bad conscience vs slave revolt;
- herd vs last man;
- self-creation vs self-overcoming;
- published works vs posthumous notebooks;
- description/explanation vs endorsement;
- historical claims vs psychological/philosophical claims;
- early, middle, and late Nietzsche.

## Existing technical/editorial safeguards
The README already records:
- progress migration support for revised theme routes;
- `aria-pressed` on filters;
- search performed locally from a static index;
- no invented author identity or credentials;
- prior bounded citation corrections are not sitewide scholarly certification.

## What is complete
The site has a mature architecture and complete public coverage of all 25 themes. Several themes have already been rebuilt into the shared guided-reading format, including the canonical exemplars above. Multiple book pages already contain substantial guided courses.

## What remains
The main remaining editorial program is consistency: bringing the rest of the theme corpus to the same guided-reading standard without erasing legitimate differences among topics; continuing/finishing book-guide coverage; performing source/citation audits; harmonizing cross-links and terminology; and verifying analytics/search/publication behavior. See `WORK_PLAN.md`.

## Publication rule
Do not make broad editorial or structural changes directly on `main`. Use a scoped branch/PR. Content changes require search/sitemap regeneration and verification. High-risk changes require a second-pass review before merge.
