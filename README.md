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

An administrator still needs to verify receipt in GA4 Realtime/DebugView, choose key events, and inspect Search Console coverage and field performance. Presence of code is not proof that these services are receiving data. Review the descriptive privacy page against the actual account configuration before publishing.

## Editorial review

The 25-theme program is complete. All theme pages now use the shared guided-reading architecture, with deliberate variation for special cases and notebook-heavy topics. Citation/translation audits, the sitewide Will to Power / Nachlass integrity review, the final theme-consistency review, Twilight of the Idols course QA, the historical-claim review, and the six-page companion-essay audit/revision program are also complete and independently reviewed.

This does not amount to final scholarly certification of every claim. Remaining defined work is concentrated in technical/link and accessibility auditing, analytics/privacy verification, release workflow, the future book-expansion roadmap, and final sitewide integration/release review. Author identity and biography must be supplied by the owner; no credentials or named editorial responsibility have been invented.

## Publication

Review substantial changes on a scoped branch/PR before merging to `main`, which is connected to the existing Vercel project. No replacement hosting project is needed.
