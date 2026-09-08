# Reading Nietzsche

A static HTML study guide hosted on Vercel at https://thespiritmask.com/.

## Editing

Keep the HTML pages, `styles.css`, and `site.js` as the source of truth. There is no application framework or build dependency.

After adding or editing content, run:

```sh
python3 scripts/build-index.py
node --check site.js
```

Commit the regenerated `search-index.json` and `sitemap.xml` with the content. The search page is intentionally `noindex,follow` and excluded from the sitemap. Modification dates are omitted rather than inferred from deployment times.

## Reading features

- Guided lessons are companions to the preferred edition. Give precise reading assignments and unobtrusive links to free alternatives; retain short quotations used in analysis, but do not reproduce complete assigned passages on lesson pages. Preserve each book’s existing translation recommendation.

- Primary-text links identify an online edition and translator. Some open at a nearby page or chapter; the assignment provides the exact section to locate with contents or Find.
- Reading checkboxes store only completed step numbers in local storage, separately for each theme. Progress is device-local; changing the order of a theme's primary reading path requires considering existing saved step numbers.
- Search downloads a static index and matches locally. Search text is not sent in the custom analytics events.
- Theme filters expose their selection with `aria-pressed`; contents and edition links work without JavaScript.

## Analytics verification after deployment

The pre-existing GA4 tag is retained. Custom events are `begin_reading`, `theme_view_change`, `primary_text_open`, `reading_step_complete`, `reading_path_complete`, and `reading_next_page`.

An administrator still needs to verify receipt in GA4 Realtime/DebugView, choose key events, and inspect Search Console coverage and field performance. Presence of code is not proof that these services are receiving data. Review the descriptive privacy page against the actual account configuration before publishing.

## Editorial review

The improvement branch corrects the reversed WP §§1–2 references, expands the Zarathustra Prologue reading to include §5, corrects the description of Daybreak §189, and corrects the date attached to Gay Science Book IV on the gender page. “Common” is expanded to “Thomas Common” for clarity; the original was a translator surname, not a grammatical error.

These are verified, bounded corrections, not certification of every existing quotation or interpretation. The repository contains extensive inherited material that still warrants a full citation-by-citation scholarly review. Author identity and biography must be supplied by the owner; no credentials or named editorial responsibility have been invented.

## Publication

Review changes on the improvement branch before merging to `main`, which is connected to the existing Vercel project. No replacement hosting project is needed.
