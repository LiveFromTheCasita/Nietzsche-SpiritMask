# Reading Nietzsche

A static HTML study guide hosted on Vercel at https://thespiritmask.com/.

## Project documentation

Before making changes, read the canonical project documentation in `/docs/`, beginning with `docs/PROJECT_HANDOFF.md` and following the startup sequence in `docs/README.md`. The documentation defines the established editorial voice, content standards, agent rules, and work-package plan for human and AI contributors.

## Editing

Keep the HTML pages, `styles.css`, and `site.js` as the source of truth. There is no application framework or build dependency.

After adding or editing content, run:

```sh
python3 scripts/build-index.py
node --check site.js
```

Commit regenerated `search-index.json`, and commit `sitemap.xml` only when the generator actually changes it. The search page is intentionally `noindex,follow` and excluded from the sitemap. Modification dates are omitted rather than inferred from deployment times.

## Reading features

- Guided lessons are companions to the preferred edition. Give precise reading assignments and unobtrusive links to free alternatives; retain short quotations used in analysis, but do not reproduce complete assigned passages on lesson pages. Preserve each book’s existing translation recommendation.

- Primary-text links identify an online edition and translator. Some open at a nearby page or chapter; the assignment provides the exact section to locate with contents or Find.
- Reading checkboxes store only completed step numbers in local storage, separately for each theme. Progress is device-local; changing the order of a theme's primary reading path requires considering existing saved step numbers.
- Revised routes can opt into progress migration with `data-previous-reading-path` on the reading list and `data-previous-reading-step` on matching assignments. Only map a completed old assignment when it covers the entire new reading. Existing progress for the new route takes precedence, and the old saved route is retained.
- Theme guides can use the shared `theme-guide` layout: a short first encounter, a fuller route, key distinctions, expandable work surveys, and separately framed notebook readings. Give each assignment a question, an explanation of its relevance, and precise companion references; distinguish complications and extensions from the starting route.
- Search downloads a static index and matches locally. Search text is not sent in the custom analytics events.
- Theme filters expose their selection with `aria-pressed`; contents and edition links work without JavaScript.

## Analytics verification after deployment

The pre-existing GA4 tag is retained. Custom events are `begin_reading`, `theme_view_change`, `primary_text_open`, `reading_step_complete`, `reading_path_complete`, and `reading_next_page`.

WP-17 is complete. Repository inspection confirmed the GA4 property ID, all six custom event definitions, local-only reading progress, client-side search behavior, and that the descriptive privacy page matches the implementation. Account-side GA4 data then confirmed receipt of multiple custom event types from the live property. The observed custom events are not currently designated as key events; no key-event designation is required. See `docs/ANALYTICS_PRIVACY_VERIFICATION.md`.

## Editorial review

The 25-theme program is complete. All theme pages now use the shared guided-reading architecture, with deliberate variation for special cases and notebook-heavy topics. Citation/translation audits, the sitewide Will to Power / Nachlass integrity review, the final theme-consistency review, Twilight of the Idols course QA, the historical-claim review, and the six-page companion-essay audit/revision program are also complete and independently reviewed.

This does not amount to final scholarly certification of every claim. The sitewide search/sitemap/internal-link/canonical audit and accessibility audit are complete with no required fixes. The sitewide integration and release review (WP-19 and WP-20) are complete. WP-08's approved book-expansion roadmap is complete. Its *Birth of Tragedy* pilot, an optional 19-station full-text route, is live and has passed its technical closeout. The owner reported a real reader trial complete and closed the pilot on 2026-09-24 without supplying measurements; its advertised times remain estimates (`docs/BT_PILOT_CLOSEOUT.md`). PR #61 published guides with integrated reading paths for *Early Unpublished Essays*, *The Case of Wagner*, *Ecce Homo*, and *Nietzsche Contra Wagner*. PRs #63, #65, #67, and #69 then brought all four to the established book-guide depth through work-specific walkthroughs, passage notes, and edition guidance. The owner inspected the revised *Ecce Homo* page live and judged it up to standard; after the other three merged, the owner looked at them and reported that all three looked quite substantial. Those revisions also passed independent editorial review before merge (`docs/FOUR_MISSING_GUIDES_REVIEW.md`, `docs/WORK_PLAN.md`). Separate lesson courses remain optional. The *Gay Science* full-text scope document merged through PR #58, but its route and lessons remain on an owner-priority hold; the remaining optional expansions await the owner's reassessment. Author identity and biography must be supplied by the owner; no credentials or named editorial responsibility have been invented.

## Publication

Review substantial changes on a scoped branch/PR before merging to `main`, which is connected to the existing Vercel project. No replacement hosting project is needed.
