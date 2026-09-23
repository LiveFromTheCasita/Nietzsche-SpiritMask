# WP-17 Analytics and Privacy Verification

## Status

**COMPLETE — repository instrumentation, privacy disclosure, and GA4 account-side receipt verified.**

Repository baseline reviewed: `main` at `648e25ea7c1d7628f57c58d724b7e92ef391667d`. Account-side verification was completed after the Windsor.ai GA4 connection was authorized for The Spirit Mask account ID `536937201`.

This report distinguishes three separate questions:

1. Is analytics instrumentation present and internally coherent?
2. Does the public privacy disclosure match what the site code sends and stores?
3. Is the GA4 property actually receiving the site's custom events?

All three are verified.

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

## GA4 account-side receipt verification

The connected GA4 account for **The Spirit Mask** (account ID `536937201`) was queried directly through the authorized analytics connection.

For the most recent 30-day window including September 23, 2026, GA4 returned the following custom events:

| Event | Observed count |
| --- | ---: |
| `primary_text_open` | 17 |
| `begin_reading` | 6 |
| `theme_view_change` | 3 |
| `reading_step_complete` | 1 |

This is direct account-side evidence that the site's custom `gtag('event', ...)` calls are reaching GA4.

`reading_path_complete` and `reading_next_page` had no observed rows in the queried 30-day window. Their absence is not treated as a transport failure: both require narrower user actions, and four other custom events using the same shared `track()` helper are demonstrably arriving. The code paths remain verified in `site.js`.

The four observed custom events were not reported as GA4 key events in this query (`is_conversion_event` returned `(not set)`). No key-event designation is required for WP-17.

Standard GA4 activity such as `page_view`, `session_start`, `first_visit`, `scroll`, and `user_engagement` was also present, confirming that the property is receiving normal site measurement in addition to the custom events.

## Public/deployment verification limits

The public site is reachable, but the available public web reader does not expose or execute the page-head analytics scripts in a way that proves network delivery to GA4.

The connected Vercel integration denied project/deployment access during this review and exposed no authorized team/project inventory. Therefore WP-17 does not claim live Vercel deployment metadata for this site. That operational verification remains part of WP-20.

GA4 receipt itself is no longer inferred: it was verified directly from the authorized The Spirit Mask GA4 account.

## Optional future smoke test

For future analytics changes, use the production site with content blocking disabled and confirm the changed event in GA4 Realtime/DebugView. The event-by-event sequence previously defined for WP-17 remains a useful smoke test, but it is no longer required to close this work package because account-side event receipt has now been established.

## Completion rule

WP-17 is **COMPLETE**. Repository inspection established the event definitions and privacy behavior, and the authorized GA4 account returned multiple custom event types from the live property. No discrepancy requiring a `privacy.html` edit was found.

Future analytics or Google-account configuration changes should trigger a fresh privacy review.
