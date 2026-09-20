# Agent Instructions

## Mandatory startup sequence
Before modifying this repository:
1. read `docs/PROJECT_HANDOFF.md`;
2. read `docs/EDITORIAL_STYLE_GUIDE.md`;
3. read `docs/CONTENT_STANDARDS.md`;
4. read `docs/WORK_PLAN.md`;
5. read root `README.md`;
6. inspect the exact target files and at least one canonical exemplar.

These documents are authoritative unless the owner explicitly changes the standard.

## Operating rules
- Work only inside the assigned work package.
- Do not redesign the site or editorial framework without explicit authorization.
- Do not rewrite approved material merely to make it sound like your preferred model.
- Do not normalize away tensions, chronological differences, translation differences, or troubling claims.
- Do not invent credentials, author identity, scholarly consensus, citations, or source checks.
- Do not silently change preferred translations.
- Do not treat The Will to Power as a finished Nietzsche book.
- Do not deploy broad changes directly to `main`.

## Branch discipline
Use one branch per work package. Keep unrelated edits out. If another active branch touches the same page or shared infrastructure, coordinate before editing.

## Verification
For content changes:
```sh
python3 scripts/build-index.py
node --check site.js
```
Also inspect changed pages in a browser/preview and verify internal/external links relevant to the change.

For route revisions, verify reading-progress migration behavior.

## Completion report
At the end of a work package report:
- branch name;
- baseline commit;
- files changed;
- concise description of editorial changes;
- source/translation checks performed;
- tests/checks run;
- unresolved questions;
- whether generated files changed;
- whether a preview was inspected;
- whether the work is safe for review/merge.

## Model roles
These are defaults, not permanent capabilities.

### Claude
Good default for sustained literary drafting, large coherent page rewrites, book/course lesson continuity, and long-form editorial implementation.

### Grok
Good default for adversarial review, citation/source checking, contradiction hunting, rights/translation audits, outside-eye technical/public-site audits, and verification of bounded claims.

### Astra / ChatGPT
Good default for integration, architecture, cross-package coordination, repository-state reconciliation, complex debugging, final editorial consistency review, and publication coordination.

No model may change the governing editorial standard simply because another model would phrase it differently.
