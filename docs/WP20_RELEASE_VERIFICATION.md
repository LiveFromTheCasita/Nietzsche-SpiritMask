# WP-20 release verification

Date: 2026-09-23. Status: **COMPLETE**. The WP-19 release and its public production checks passed. Vercel account-side identity, settings, and recovery controls were verified read-only; the Hobby-plan rollback limit is recorded below.

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

## Account-side release checks (2026-09-23)

| Check | Verified result |
| --- | --- |
| Project and repository | Vercel project `nietzsche-spirit-mask` (`prj_P9sAJP90yj41vk60gmJ2YRLauiaf`) belongs to `livefromthecasitas-projects` (`team_v3JaFLhXdPxFYoTvbHUPnxyP`). Project Settings → Git shows the connected `LiveFromTheCasita/Nietzsche-SpiritMask` GitHub repository. Deployment metadata independently names the same owner and repository. |
| Production branch | Project Settings → Environments shows **Production → Branch Tracking: `main`**; Preview tracks other unassigned branches. The repository default branch is also `main`. |
| WP-19 release | Deployment [`dpl_38uK9ZY2XxVjLdsBHm2hbJtTCTFP`](https://vercel.com/livefromthecasitas-projects/nietzsche-spirit-mask/38uK9ZY2XxVjLdsBHm2hbJtTCTFP) is **READY**, target **production**, source **git**, branch `main`, commit `3a72aec45e82ef9dde455240c87f4a843948a892` (PR #52). Vercel reported no alias error. This is the public-content release verified above. |
| Current deployment and domain | Documentation PR #53 advanced `main` to `6bbb7c7d19e88fa86071dc3861c6f39e2debd28d`. Deployment [`dpl_Fp88BBHZadDvRE9K5dkiBuPfR4pG`](https://vercel.com/livefromthecasitas-projects/nietzsche-spirit-mask/Fp88BBHZadDvRE9K5dkiBuPfR4pG) is **READY**, target **production**, source **git**, branch `main`. Vercel lists `thespiritmask.com` among its aliases with `aliasError: null`; the Environments page calls it the primary production domain. The PR #53 change is documentation only, so the WP-19 public-content baseline remains `3a72aec`. |
| Retention | Project Settings → Build and Deployment shows **30 days** each for canceled, errored, pre-production, and production deployments. The pre-WP-19 production deployment is currently retained and READY. Vercel [documents exceptions](https://vercel.com/docs/deployment-retention#exceptions-to-the-retention-policy), including retention of the last 20 ready production deployments; future availability must still be checked before a recovery action. |
| Protection | Project Settings → Deployment Protection: **Vercel Authentication enabled, Standard Protection**; password protection and Trusted IPs disabled. The custom production domain remains public. Project Settings → Security: **Build Logs and Source Protection enabled; Git Fork Protection enabled**. No bypass secret or protection exception was added during this verification. |

### Rollback target and account controls

- **Immediate previous production deployment:** WP-19 content release `dpl_38uK9ZY2XxVjLdsBHm2hbJtTCTFP` at `3a72aec`. Vercel marks it as a rollback candidate and shows an enabled **Instant Rollback** action. Returning from the current docs-only deployment to it would not undo the WP-19 public-content changes.
- **Previous public-content baseline:** [`dpl_9HZhgFWNaXvGnYEeZWp9qVd2bypU`](https://vercel.com/livefromthecasitas-projects/nietzsche-spirit-mask/9HZhgFWNaXvGnYEeZWp9qVd2bypU) at `07e0416ea66f9e0fb103fa8ee2ea0b00d4256672` is retained and **READY**. It is the appropriate known-good deployment **if WP-19 content itself must be undone**. Its **Instant Rollback** menu item is disabled in this Hobby account. Vercel's [rollback guide](https://vercel.com/docs/deployments/rollback-production-deployment) says Hobby supports only the immediately previous production deployment, while choosing an older one requires Pro or Enterprise. A visible Promote menu entry was not tested and is not counted as a confirmed recovery action.
- **Available recovery path for WP-19 content:** follow `DEPLOYMENT_RUNBOOK.md` and revert the WP-19 release in Git through review, including correction of any now-inaccurate release documentation; allow the `main`-connected project to produce a new deployment, then repeat the public production checks. This is the runbook's preferred rollback path. The account's instant rollback is available for the immediately previous production deployment, with the older-content limitation above.

No deployment, rollback, promotion, setting change, or rollback rehearsal was performed. The scoped Vercel connector calls still returned HTTP 403 for the team, but the connector's unscoped project/deployment reads succeeded and the authenticated project dashboard independently confirmed the repository, branch, retention, protection, and rollback control state. The prior account-access blocker is resolved for this release gate; the scoped-call quirk remains an operational tooling limitation.

## Gate disposition

**PASS — WP-20 complete.** WP-19's independent review, generated-file checks, JavaScript checks, link checks, preview inspection, merge, Vercel production deployment identity, domain association, and representative public production checks are documented here and in `WP19_INTEGRATION_REVIEW.md`. The account settings and recovery controls have now been inspected. The Hobby rollback constraint is an explicit operating limit, with a verified retained prior content deployment and the preferred Git-revert recovery path; it does not alter the passing production release.

Closure documentation is prepared on `integrator/wp-20-account-verification` from `6bbb7c7d19e88fa86071dc3861c6f39e2debd28d`. Only documentation is changed; no public HTML, assets, Vercel configuration, search index, or sitemap is changed. Source/translation checks and a new public preview are not applicable to this documentation-only closeout. The prior representative production browser checks remain the release verification.
