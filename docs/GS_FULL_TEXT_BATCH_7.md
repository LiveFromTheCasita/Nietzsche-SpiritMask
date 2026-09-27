# The Gay Science full-text route: batch 7 (stations 20–22)

**Status (2026-09-26):** This is a draft for editorial review. It does not publish anything.

The owner assigned stations 20–22 after a review follow-up to batch 6 (PR #77, now at `c36f3f1`). This batch opens Book IV, *Sanctus Januarius*, so stations 1–22 now run continuously. Stop for editorial review after it.

| Item | Value |
| --- | --- |
| Branch | `claude/gay-science-full-text-batch-7`, stacked on PR #77's corrected head `c36f3f1` |
| `main` | `66b55f624042e876200c78a5947ed62c9d272bc2` (unchanged) |
| Estimates | The scope's ranges. All are **editorial estimates, not measured reading times**. No timed reader trial was run or required. The station grouping is unchanged. |

## Boundaries verified

The assignments match `docs/GS_FULL_TEXT_ROUTE_SCOPE.md` and the phase-1 audit. They were checked against the linked free text (Common; poetry by Cohn and Petre) and the Projekt Gutenberg-DE German:

| St. | Scope assignment | Free text | Words (free edition, approx.) | Introductory overlap |
| ---: | --- | --- | --- | --- |
| 20 | Book IV opening verse; §§276–289 | Unnumbered eight-line verse to "January, thou beauteous saint!", signed "Genoa, January 1882." (`Page_211`), then §276 (`Page_213`) to the end of §289 | 2,690 | §276 (Reading 7, with §341) |
| 21 | IV §§290–301 | §290 (`Page_223`) to the end of §301 | 3,350 | §§290, 299 (Reading 5) |
| 22 | IV §§302–318 | §302 (`Page_236`) to the end of §318 | 2,990 | none |

Every section from the verse through §318 is assigned exactly once.

## New lessons

All three are unlisted, carry `noindex,follow`, and show the "Review draft" notice. Their footers carry the drafting date, September 26, 2026.

| St. | File | Estimate | Design notes |
| ---: | --- | --- | --- |
| 20 | `readings/gay-science-full-sections-276-289.html` | 60–80 min | Presents the Book IV verse as a separate, unnumbered, dated 1882 verse, credited to Cohn and Petre jointly, since the edition does not credit individual poems. Links its *Frei im liebevollsten Muss* to §276's necessity. Reads §276 briefly, leaving Reading 7's full analysis to that lesson, and adds two German details: Common omits *lernen*, and "at any time hereafter" renders *irgendwann einmal*, someday. States plainly §282's ranking of minds by social origin and §283's martial language (*gefährlich leben*; *Eroberer*). Marks §285's quoted accusation and its *ewige Wiederkunft*. The difficulty asks whether Book IV keeps its New Year's wish. Suggests a sitting break after §281. |
| 21 | `readings/gay-science-full-sections-290-301.html` | 70–90 min | Reads §§290 and 299 briefly, leaving Reading 5's full analysis to that lesson, and gives more time to the sections between them. Identifies §290's title with Luke 10:42 (KJV), labelled as the guide's. Notes *Dichtung und Kunst* for "fable and artifice". States §291's praise of Genoa's autocratic builders and §293's aside about women plainly. The one remark about conquest in §291 is labelled a modern evaluation. The difficulty sets §290's single taste against §§295–297's praise of change. Suggests a sitting break after §294. |
| 22 | `readings/gay-science-full-sections-302-318.html` | 65–85 min | Attends to speakers: the wanderer's lament (§309), the weary "we" of §311, whose lament the frame disowns, and §307's "thou". States §312's comparison of wives to dogs and servants plainly. Notes the colonial source of §306's "Assaua" comparison without claiming what Nietzsche knew. Identifies §308's "trier of the reins" with Psalm 7:9 (KJV) and §309's "gardens of Armida" with Tasso, both labelled as the guide's. The difficulty asks which restraint the book allows, given §§304–305's rejection of renunciation. Suggests a sitting break after §309. |

**Marking.** `?` marks only Nietzsche's own hedge, as defined at station 2. In this batch that includes:
- §279: "perhaps … perhaps" (*vielleicht*) and "probably" (*wahrscheinlich*);
- §285: "Perhaps … perhaps" (*Vielleicht … vielleicht*);
- §288: "Perhaps";
- §292: "Perhaps" (*Vielleicht*);
- §296: "It is probable" (*wahrscheinlich*);
- §300: "Perhaps the whole of religion" (*Vielleicht*);
- §307: "perhaps" (*vielleicht*).

## Checkpoints

- **Reading 5 (after station 21).** Station 21 offers Reading 5 as an optional checkpoint, since both of its sections (§§290, 299) have now been read. It gives Reading 5's own time (about 50–65 minutes, an editorial estimate) and says that Reading 5's Next link leads to Reading 6, not back to the route.
- **Reading 7 (after station 25).** Station 20 says that §276 is the first of Reading 7's two sections and that its checkpoint comes after station 25, once §341 has been read.
- Readings 5–7, their Next links, and `start.html` are unchanged. No return links were added to the introductory pages; the scope's additive return links remain work for the publication package.

**Navigation changes, all additive:**
- Station 19's "not yet drafted" note for station 20 is replaced by a Continue link.
- Stations 20 → 21 → 22 link in sequence.
- Station 22 names station 23 as not yet drafted.

The hub, the ten-session introduction, its Next links, and `start.html` are unchanged.

## Source and translation checks

**Quotations.** All prose quotations are Common's, and the verse quotations follow the Cohn and Petre rendering. No Kaufmann wording is quoted or attributed. Kaufmann's text was not available, so no comparison was made; each page says so. Biblical echoes are given in italics from the KJV, not as Common quotations.

**German text used.** Book IV (verse, §§276–318) from Projekt Gutenberg-DE. That edition's source text is not identified, and it is not KGW/eKGWB. Confirm these readings against KGW before publication.

| Section | Common (or Cohn/Petre) | German | Use on the page |
| --- | --- | --- | --- |
| Verse | "Free in the bonds of thy sweet constraint" | *Frei im liebevollsten Muss* | *Muss* (must, necessity) linked to §276 |
| §276 | "I want more and more to perceive" | *Ich will immer mehr lernen … sehen* | **Common omits *lernen*, to learn.** Noted |
| §276 | "I wish to be at any time hereafter only a yea-sayer!" | *ich will irgendwann einmal nur noch ein Ja-sagender sein* | **"At any time hereafter" renders *irgendwann einmal*, someday.** Noted; this drives the difficulty |
| §276 | "Looking aside, let that be my sole negation!" | *Wegsehen sei meine einzige Verneinung!* | Checked |
| §279 | "perhaps … perhaps", "probably" | *vielleicht … vielleicht*, *wahrscheinlich* | Marked `?` |
| §283 | "Pioneers", "live in danger", "robbers and spoilers", "ye knowing ones" | *Vorbereitende Menschen*, *gefährlich leben*, *Räuber und Eroberer*, *ihr Erkennenden* | Noted |
| §285 | "the eternal recurrence of war and peace" | *die ewige Wiederkunft von Krieg und Frieden* | The phrase's only occurrence in Books I–IV of the German text used here; §341 does not use it |
| §289 | "sympathy", "Aboard ship! ye philosophers!" | *Mitleiden*, *Auf die Schiffe, ihr Philosophen!* | Noted |
| §290 | "One Thing is Needful", "fable and artifice" | *Eins ist Noth*, *Dichtung und Kunst* | Noted |
| §292 | "Master Eckardt", "I pray God to deliver me from God!" | *Meister Eckardt*, *ich bitte Gott, dass er mich quitt mache Gottes!* | Noted |
| §293 | "in the manner of women", "manly atmosphere", "the light of the earth!" | *nach Art der Frauen*, *männlichen Luft*, *"das Licht der Erde"* | Stated plainly |
| §296 | "It is probable" | *Es ist wahrscheinlich* | Marked `?` |
| §299 | "the poets of our life" | *die Dichter unseres Lebens* | Noted |
| §301 | "Higher men", "nature is always worthless" | *Die hohen Menschen*, *die Natur ist immer werthlos* | Noted |
| §308 | "trier of the reins" | *Nierenprüfer* | Linked to Psalm 7:9 |
| §309 | "gardens of Armida" | *Gärten Armidens* | Linked to Tasso |
| §312 | "wives" | *Frauen* | Women or wives; stated plainly |
| §317 | "ethos and not pathos" | *Ethos, nicht Pathos* | The footnote (P. V. C.) is quoted as the translator's |
| §318 | "Take in sail!", "pain-bringers" | *zieht die Segel ein!*, *Schmerzbringer* | Noted |

**Outside sources.**
- **Luke 10:42 and Psalm 7:9.** Checked in the King James Version (Project Gutenberg ebook #10). Both identifications are labelled as the guide's. Luther's German wording was not checked.
- **§287.** Identified with the title of Nietzsche's *The Wanderer and His Shadow* (1880).
- **§309.** Armida's gardens are identified with Tasso's *Jerusalem Delivered*; the edition used by Nietzsche was not checked.
- **§302.** Homer's riddle is described as a legend told in ancient lives of Homer; the page says that the version Nietzsche used was not checked.
- **§306.** The page says that it has not checked what Nietzsche knew of the group he calls the "Assaua".
- **§279.** The page offers the Wagner identification as a biographical reading, not the text's claim.

## Checks

| Check | Result |
| --- | --- |
| `python3 scripts/build-index.py` | 191 entries, 167 URLs. Generated files are byte-identical to `main`; the three new pages appear in neither `search-index.json` nor `sitemap.xml`. |
| `node --check site.js`, `node --check book-guide.js`, `git diff --check` | pass |
| Static audit, all 191 HTML files | 0 broken links, 0 missing fragments, 0 duplicate IDs, 0 heading skips |
| Quotations | Every quoted fragment of 10 or more characters on all 23 drafted pages (1,352 fragments) occurs in the free edition; 0 failures |
| Free-text links, stations 15 and 19–22 | 69 links. Every page anchor exists, and every fragment occurs on the anchored page without crossing a page break. For the 60 links labelled with a section, the fragment's first occurrence lies in that section; the verse link's first occurrence lies in the Book IV verse. |
| Navigation, Chromium at 320, 390, and 1440 px | Stations 1 → 22 run continuously by the Continue buttons (22 pages). The introduction chain R1 → R2 → R3 → `start.html` → R5 … R10 → hub is intact. |
| Layout at 320 × 640, 390 × 844 (touch emulation), and 1440 × 900 | Stations 19–22: no horizontal overflow; every `<details>` toggles; no JavaScript errors; all internal links return 200 |
| Inbound links | The new pages are linked only from other route pages. The hub, `start.html`, and Readings 5–7 are byte-identical to `main`. |

## Still open

- **Kaufmann comparison.** Not done. Sensitive places in this batch:
  - §276's "at any time hereafter";
  - §283's "live in danger" and "spoilers";
  - §290's "fable and artifice";
  - §301's "Higher men";
  - §318's "pain-bringers".
- **KGW.** Not available here. Confirm the German readings above, especially *irgendwann einmal* and *lernen* (§276), and the claim that *ewige Wiederkunft* occurs only in §285 within Books I–IV.
- **Devices.** Not checked on a physical phone, and text-fragment highlighting not checked.
- **Reading times.** None has been measured.
- **Drafting status.**
  - Drafted: stations 1–22 and 29 (23 of 35).
  - Not yet drafted: stations 23–28 and 30–35.
