# WP-17 Analytics and Privacy Verification

## Status

**REVIEW — repository instrumentation and privacy disclosure verified; GA4 account-side receipt still requires owner-account access.**

Baseline reviewed: `main` at `648e25ea7c1d7628f57c58d724b7e92ef391667d`.

This report distinguishes three separate questions:

1. Is analytics instrumentation present and internally coherent?
2. Does the public privacy disclosure match what the site code sends and stores?
3. Is the GA4 property actually receiving the expected events?

The first two are verified. The third is not claimed without account-side evidence.

## GA4 configuration found

The site uses GA4 measurement ID:

`G-7FBQ473K37`

The standard `gtag.js` configuration is present on representative pages across every major public page family checked:

- homepage: `index.html`
- theme guide: `themes/master-slave-morality.html`
- work hub: `works/beyond-good-and-evil.html`
- reading lesson: `readings/beyond-good-and-evil-1.html`
- companion essay: `submissions/justice-without-revenge.html`
- glossary: `glossary.html`
- sources/translations: `sources.html`
- About: `about.html`
- search and privacy pages were separately inspected during this review

Each inspected page loads the same GA4 property and the shared `site.js`.

The site uses the normal GA4 `gtag('config', ...)` call, so standard GA4 page measurement is configured in addition to the custom events below.

## Custom event inventory

The shared `site.js` defines one bounded helper:

```js
const track = (name, fields = {}) => {
  if (typeof window.gtag === 'function') window.gtag('event', name, fields);
};
```

The custom events and fields are:

| Event | Trigger | Fields sent by site code |
| --- | --- | --- |
| `begin_reading` | reader follows a `start.html` link | `page_path` |
| `theme_view_change` | reader changes the theme index view/filter | `view` |
| `primary_text_open` | reader opens a link marked `data-primary-text` | `book`, `page_path` |
| `reading_step_complete` | reader checks a reading-step checkbox | `theme`, numeric `step` |
| `reading_path_complete` | all steps in a reading path are checked | `theme` |
| `reading_next_page` | reader follows an HTML link in `.footer-nav` | `destination` |

No custom event sends:

- search-query text;
- reader notes or free-text input;
- email address or account identifier;
- the contents of local-storage progress;
- a user-entered name.

The event values are structural site metadata: theme, book/source label, step number, path, filter view, or destination.

## Local reading progress

Reading completion is stored in browser `localStorage` under keys beginning:

`reading-nietzsche:`

The stored value is an array of completed reading-step identifiers for that reading path.

The progress is device/browser local. The site has no account synchronization for this data.

This matches the public privacy disclosure.

## Search privacy

The search page downloads `search-index.json` and matches the query locally in the browser.

The search form prevents normal query-string submission, and the custom analytics code does not read or transmit the search input value.

Therefore the privacy statement that search words are not sent to a search service or included in custom analytics events matches the implementation reviewed.

## Privacy-page reconciliation

`privacy.html` currently states, in substance:

- reading progress is stored in browser local storage and does not sync;
- search operates locally from the downloaded index;
- Google Analytics is present;
- reading tools send structured interaction events;
- those events identify book/theme/step rather than notes;
- Google's script may use cookies and collect device/visit information;
- browser privacy settings and blockers may limit collection;
- external sites have their own data practices.

That description matches the repository implementation reviewed.

**No corrective edit to `privacy.html` is required by WP-17 at this stage.**

This is a configuration-description review, not a jurisdiction-specific legal compliance opinion.

## Analytics-quality notes

These are not privacy defects, but they matter when interpreting reports:

- `reading_path_complete` can fire again if a reader later unchecks and re-completes a path.
- `reading_step_complete` measures completion actions, not unique people.
- click events such as `primary_text_open` and `reading_next_page` occur immediately before navigation, so account-side receipt should be checked rather than assumed.
- blockers, browser privacy features, network failure, and Google-side configuration can prevent otherwise-correct code from appearing in GA4.

This is why code presence alone does not satisfy WP-17 acceptance.

## Public/deployment verification limits

The public site is reachable, but the available public web reader does not expose or execute the page-head analytics scripts in a way that proves network delivery to GA4.

The connected Vercel integration also denied project/deployment access during this review and exposed no authorized team/project inventory. Therefore no claim is made here about:

- live Vercel deployment metadata for this site;
- production network requests to Google Analytics;
- GA4 Realtime/DebugView receipt;
- key-event configuration in the GA4 property.

Those are account-side facts and must be observed, not inferred.

## Exact GA4 receipt test required to complete WP-17

Use the production site with content blocking disabled for the test session and watch the GA4 property in Realtime or DebugView.

Verify at minimum:

1. load `https://thespiritmask.com/` and confirm the visit/page activity appears;
2. click **Begin your first reading** and confirm `begin_reading`;
3. on the theme index, switch a view/filter and confirm `theme_view_change`;
4. open a primary-text link and confirm `primary_text_open`;
5. check a reading step and confirm `reading_step_complete`;
6. complete a short reading path and confirm `reading_path_complete`;
7. follow a next-page/footer reading link and confirm `reading_next_page`.

For each event, inspect parameters where available and verify they contain only the structural fields documented above.

Also confirm which, if any, events are configured as GA4 key events. That is an analytics decision, not a requirement to send the events.

## Completion rule

WP-17 can move from **REVIEW** to **COMPLETE** when account-side evidence records that the expected events are arriving at property `G-7FBQ473K37` and no privacy-page discrepancy is discovered from the actual GA4 configuration.

If account-side inspection reveals additional Google features, identifiers, advertising settings, or data collection not described by `privacy.html`, reconcile the privacy page before marking WP-17 complete.
