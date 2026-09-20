# Content Standards

## Theme-page standard
A mature guided theme page should generally include:
1. breadcrumb / cluster metadata;
2. concise framing;
3. route chooser;
4. essential first encounter;
5. fuller route / tests and complications;
6. key distinctions;
7. work-by-work survey;
8. notebook material only where genuinely relevant;
9. companion essays / submissions where available;
10. connections to other themes.

Not every topic requires identical section counts, but divergence should be purposeful.

## First encounter
Keep it short enough to be a realistic entry route. Each step needs a precise assignment, question, explanation, and reading options. Do not call a route "essential" if it is merely a random excerpt list.

## Fuller route
The fuller route should add context and complications, not just more examples of the same claim. Group assignments around interpretive tests.

## Work-by-work survey
Order works with attention to publication chronology. Mark retrospective prefaces/later additions. Explain how a work develops, complicates, or departs from the theme.

## Book-guide/course standard
Book guides are companions to a preferred edition.
- Assign exact sections/chapters.
- Do not reproduce full copyrighted readings.
- Preserve the book's internal order unless a clearly labeled alternate route is offered.
- Give translation/edition guidance.
- Identify free online alternatives separately from preferred editions.
- Make course lessons cumulative rather than duplicative.

## Sources and citations
Use `sources.html` as the edition authority.
- Prefer section numbers and named chapters over page numbers.
- Verify translator attribution.
- Verify quotation wording against the named edition actually quoted.
- Do not present an unverified secondary claim as consensus.
- When a historical claim is material, either source it or phrase it as Nietzsche's claim.

## Short quotations
Use only what analysis requires. A quotation must earn its place by being interpreted; do not decorate pages with Nietzsche aphorisms.

## Notebook material
Notebook routes must be labeled as notebook material / posthumous compilation. Treat numbering in The Will to Power as editorial numbering, not original notebook identifiers.

Where a theme has a substantial Will to Power notebook guide, preserve the canonical two-level pattern already used on the recent theme pages:
- a clearly labeled seven-entry starting route for readers who want the shorter notebook path;
- a fuller notebook survey for readers who want the broader set of entries.

The seven-entry route is an editorial navigation device, not evidence that Nietzsche organized the notes into that sequence. Do not force this pattern onto a theme with too little relevant notebook material.

## Cross-links
Cross-links should serve a conceptual relation. Prefer links that show:
- a prerequisite distinction;
- a genuine complication;
- a development across works;
- a closely related theme.

Avoid indiscriminate SEO-style linking.

## Reading-progress integrity
Theme route ordering is stateful. Changing step order can affect saved progress. When revising an existing route, evaluate whether `data-previous-reading-path` and `data-previous-reading-step` migration is required. Existing progress for the new route takes precedence.

## Search and sitemap
After content additions/edits:
```sh
python3 scripts/build-index.py
node --check site.js
```
Commit regenerated `search-index.json` and `sitemap.xml`.

## Accessibility and metadata
Preserve:
- skip links;
- semantic headings;
- keyboard-usable navigation;
- meaningful link text;
- current-page navigation state;
- existing metadata/OG/schema patterns;
- filter `aria-pressed` behavior.

## Canonical URLs
Public pages use `https://thespiritmask.com/` canonical URLs. Do not introduce Vercel preview domains into canonical metadata.

## Quality gate
A page is not complete merely because it is long. It is complete when its structure is coherent, citations are testable, translation labels are accurate, distinctions are preserved, links work, generated search/sitemap files are updated, and the page matches the established editorial voice.
