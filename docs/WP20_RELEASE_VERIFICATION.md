# WP-20 release verification

Date: 2026-09-23. Status: **BLOCKED — Vercel account access**. The WP-19 release is live and its public production checks passed; the remaining account-side checks prevent closing the full release gate.

## Release identity

- Repository: `LiveFromTheCasita/Nietzsche-SpiritMask`
- Production URL: https://thespiritmask.com/
- Previous production content baseline: `07e0416ea66f9e0fb103fa8ee2ea0b00d4256672`
- Release branch: `integrator/wp-19-editorial-integration`
- Release PR: https://github.com/LiveFromTheCasita/Nietzsche-SpiritMask/pull/52
- Final PR head: `79c50439d17f935ad5e5898952814d4aa6b23c3f`
- Merge commit on `main`: `3a72aec45e82ef9dde455240c87f4a843948a892`
- Merge tree: `cb7ca9a0c67b4866bcb3590f0e89e8531fb05f4e`, identical to the final PR head's tree.
- Vercel status on the merge commit: **success**, reported through GitHub.
- Associated deployment link supplied by that status: https://vercel.com/livefromthecasitas-projects/nietzsche-spirit-mask/38uK9ZY2XxVjLdsBHm2hbJtTCTFP

The owner explicitly authorized the merge and production verification. The merge used the expected final PR head after confirming the PR was mergeable and its Vercel check had passed. Later documentation-only merges may advance `main`; the commit above remains the public content release baseline.

## Review and validation carried into release

Claude independently reviewed exact head `9ede7a543e16fa6ff81593acc6dbac342ba70879` and returned **PASS WITH MINOR ISSUES**, with no merge blockers or regressions. The integrator reconciled the minor findings, made bounded follow-up clarifications, and checked those changes before publication. Claude's verdict is not represented as a second independent review of the later follow-up commit.

`WP19_INTEGRATION_REVIEW.md` records the source checks, structural comparisons, generated-file reproduction (178 search entries and 154 sitemap URLs), JavaScript syntax checks, link checks, and representative desktop preview inspections. The final PR head added documentation only after the validated content commit. No new primary-source wording was introduced during release.

## Production browser checks

The following checks were performed on the public custom domain after GitHub reported a successful Vercel deployment of the merge commit:

| Check | Result |
| --- | --- |
| Homepage | `https://thespiritmask.com/` loaded and retained that URL. Its canonical URL matched. A desktop screenshot showed the expected styling, image, and navigation. |
| Search | Opened Search through the navigation. After the index loaded, entered `bad conscience`; results included the glossary's Bad conscience entry and linked reading/theme/work pages. This exercised the search JavaScript and index together. |
| Changed reading card | On `/themes/suffering-and-cruelty.html#reading-path`, the new “fuller route on bad conscience” link was present. Clicking it reached `#full-bad-conscience` and the heading “3. Bad conscience: the mechanism.” |
| Repaired theme navigation | On `/themes/overman.html#connections`, clicked “Recurrence, time, becoming →”. It opened `/themes/eternal-return-time.html` with the expected “Recurrence, Time, and Becoming” heading. |
| Browser errors | The inspected error log contained browser-extension metadata errors, with no site-script errors in the returned entries. |

These were representative desktop production checks, not a new mobile or full accessibility audit. No regression was observed in the exercised flows. No rollback was needed.

## Account-access blocker

The Vercel connector returned HTTP 403 when reading the known project under team scope `livefromthecasitas-projects`:

> Not authorized: Trying to access resource under scope "livefromthecasitas-projects". You must re-authenticate to this scope or use a token with access to this scope.

The project ID `prj_P9sAJP90yj41vk60gmJ2YRLauiaf` and team ID `team_v3JaFLhXdPxFYoTvbHUPnxyP` came from Vercel's GitHub integration metadata. They were not independently confirmed through an authorized Vercel account read. GitHub's successful deployment status and the working public site establish the observed release outcome; they do not establish every account setting or independently confirm the production alias's deployment identity.

As required by `DEPLOYMENT_RUNBOOK.md`, finish these read-only checks after reconnecting Vercel with access to that team:

1. Confirm the project, repository connection, `main` production branch, and production deployment/alias association.
2. Record deployment retention and protection settings.
3. Confirm the available rollback target and the account's rollback controls.
4. Add the results to this record, then mark WP-20 complete if the release gate is satisfied.

The previous Git baseline remains identified above, and the runbook documents Git-revert rollback. Availability of a retained Vercel deployment or account-side rollback action has not been verified. No access settings, protections, or retention policies were changed to work around the denial.
