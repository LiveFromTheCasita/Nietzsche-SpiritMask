# The Gay Science full-text route: batch 11 (stations 33–35) and complete-route check

**Status (2026-09-27):** This is a draft for editorial review. It does not publish anything.

The owner assigned the final batch, stations 33–35, stacked on batch 10 (PR #81). This batch ends Book V, reads the fourteen appended songs, and ends the route with the 1887 title-page motto and the preface. All 35 stations are now drafted. Stop for complete-route editorial review.

| Item | Value |
| --- | --- |
| Branch | `claude/gay-science-full-text-batch-11`, stacked on PR #81's head `37c3631` |
| `main` | `66b55f624042e876200c78a5947ed62c9d272bc2` (unchanged) |
| Estimates | All are **editorial estimates, not measured reading times**. No timed reader trial was run or required. Station 33 uses the phase-1 audit's wider range (75–100 minutes, with a break after §377). Stations 34 and 35 keep the scope's ranges. |
| Other sessions | Before drafting, the remote had no `batch-11` branch and no open PR for stations 33–35. |

## Boundaries verified

| St. | Scope assignment | Free text | Words (free edition, approx.) | Introductory overlap |
| ---: | --- | --- | --- | --- |
| 33 | V §§377–383 | §377 (`Page_342`) to the end of §383; the appendix title follows on `Page_355` | 3,160 | §§382–383 (Reading 10) |
| 34 | All 14 appendix songs | "To Goethe" (`Page_357`) to the end of "A Dancing Song to the Mistral Wind" (`Page_370`), before the footnotes | 2,100 | none |
| 35 | 1887 title-page motto; Preface §§1–4 | Motto on the title page (`Page_iii`); Preface §1 (`Page_1`) to the date line "Ruta, near Genoa, Autumn, 1886" before the prelude (`Page_11`) | about 2,400 (§§1–4: 476, 755, 546, 604) | none |

**Songs.** The fourteen headings in the free edition, in order, match the scope and the Projekt Gutenberg-DE German: *An Goethe*; *Dichters Berufung*; *Im Süden*; *Die fromme Beppa*; *Der geheimnissvolle Nachen*; *Liebeserklärung*; *Lied eines theokritischen Ziegenhirten*; *"Diesen ungewissen Seelen"*; *Narr in Verzweiflung*; *Rimus remedium*; *"Mein Glück!"*; *Nach neuen Meeren*; *Sils-Maria*; *An den Mistral*. In the free HTML, "The Fool's Dilemma" is an `h2` like the appendix title, while the other thirteen are `h3`. It is the ninth song, not a new section; the page says so. The final heading is split by a line break ("MISTRAL / WIND"), so its link uses the heading's first words.

**Excluded, as the scope requires:** Oscar Levy's Editorial Note, the translators' footnotes, the transcriber's note, and licensing text. The pages attribute to Common only the footnotes marked "Tr."

## New lessons

All three are unlisted, carry `noindex,follow`, and show the "Review draft" notice. Their footers carry the drafting date, September 27, 2026.

| St. | File | Estimate | Design notes |
| ---: | --- | --- | --- |
| 33 | `readings/gay-science-full-sections-377-383.html` ("We Homeless Ones: Hierarchy, Health, and the Book's Close") | 75–100 min; break after §377 | §377 gets four paragraphs. (1) The refusals: "equal rights," "free society," "no longer either lords or slaves" (*keine Herrn mehr und keine Knechte*), and "Chinaism" (*Chineserei*), stated plainly as an ethnic stereotype. (2) The slavery sentence, read exactly: what the text says (the necessity, *Nothwendigkeit*, of new orders, "even of a new slavery," *Sklaverei*/*Versklavung*, for every elevation of the type), what it does not say (no subjects, masters, institutions, programme, or argument), and what the context excludes (a merely inner, metaphorical reading has to argue against the slogans it answers). The only "free" in the section is the rejected slogan. (3) The second rejection, of nationalism, race-hatred, and "racial self-admiration," with the German (*Rassenhass*, *Rasse und Abkunft*, *Rassen-Selbstbewunderung*); Common's "German nation" renders *deutschen Geist*. The Reich of 1871 is the guide's inference. (4) Both rejections are held together, and neither excuses the other. Then §§378–381 read as voices (the fool, the wanderer, intelligibility), and §§382–383 briefly, since Reading 10 keeps their full analysis. The difficulty is the scope's question. |
| 34 | `readings/gay-science-full-songs.html` ("Songs of Prince Free-as-a-Bird") | 45–65 min; break after the ninth song | A linked list of all fourteen with German titles. States that "added in 1887" does not mean written in 1887, and names the six songs that revise the May 1882 *Idyllen aus Messina*. Notes *vogelfrei*'s outlaw sense. Grouped readings of parody ("To Goethe" against *Faust* II's Chorus Mysticus, checked in German), other voices, south and sea, and the Mistral song. Translation differences stated: see the German table. |
| 35 | `readings/gay-science-full-preface.html` ("The Later Preface: Convalescence and Surfaces") | 55–75 min; break after Preface §2 | Distinguishes three voices: the 1882 book, Book V and the songs (1887), and the preface (autumn 1886). Adds an `R` mark for the preface's reinterpretations of the earlier book. Notes that the preface names the songs but never mentions Book V, and treats §342's "Incipit tragœdia" as the book's conclusion. The motto is read with its German, and the 1882 Emerson motto is shown only as paratext for comparison. The difficulty asks whether the preface explains or recasts the book. Ends with "The end of the route" and a coverage summary. |

**Marking.** `?` marks only Nietzsche's own hedge. In this batch, the pages mark:
- §377: "unless perhaps it were 'the Truth'" (*es müsste denn etwa*);
- §379: "our virtue perhaps" (*vielleicht*);
- §380: "perhaps a sort of madness" (*vielleicht eine kleine Tollheit*, a little madness);
- §381: "perhaps this might just have been the intention" and "Perhaps we philosophers" (*vielleicht*, *Vielleicht*);
- §382: "more courageous perhaps than prudent," "it would seem" (*will es uns scheinen*), and "perhaps the great seriousness only commences";
- Preface §1: "Perhaps more than one preface" and "has perhaps already come" (*vielleicht*);
- Preface §2: "perhaps the sickly thinkers preponderate" (*vielleicht*), and the physician passage, framed as a question the author asks himself and a suspicion, with *sagen wir* ("let us say"), which Common renders "namely";
- Preface §3: "almost tempted to ask" (*fast zu fragen versucht*);
- Preface §4: "Perhaps truth is a woman …" and "Perhaps her name is Baubo" (*Vielleicht*, twice).

Not marked, with reasons:
- §377's *nicht wahr?* is rhetorical.
- Preface §1's *wer weiss* is a rhetorical question.
- Preface §3's "I doubt whether such pain 'improves' us; but I know that it deepens us" is a stated doubt set against a knowledge claim, not a softened claim. The page keeps the two apart. **Flag for review** if the owner wants it marked.
- §381's "perhaps adventure" and §382's "perhaps should no longer look at them" are hedges, but the pages do not discuss those sentences.
- The songs are not marked with `?`; they are read for voice.

## Checkpoints and navigation

- **Reading 10 (after station 33).** Station 33 offers Reading 10 (§§382–383; 65–80 minutes, an editorial estimate). It notes that Reading 10's own Next link returns to the book guide and asks the reader to come back for stations 34–35.
- **Complete checkpoint map, verified:** Reading 1 after station 3; Reading 2 after 12; Readings 3–4 after 14 (`start.html` for 4); Reading 5 after 21; Reading 6 after 24; Reading 7 after 25; Reading 8 after 26; Reading 9 after 32; Reading 10 after 33. No other station offers a checkpoint.
- Readings 1–10, their Next links, `start.html`, and the hub are byte-identical to `main`. No return links were added to the introductory pages, as instructed.

**Navigation changes:**
- Station 32's "not yet drafted" line is replaced by a Continue link to station 33.
- Stations 32 → 33 → 34 → 35 link in sequence, each with a "Previous station" link.
- Station 35 ends the route: "The end of the route" names every part of the book and where it was read. Its primary link returns to the book guide.
- **Optional early link (scope requirement).** The scope asks for an optional early link to the preface for readers who follow their edition's printed order, with no extra station. Station 1's existing sentence about the preface now links to station 35 and says the reader may read it first. Station 35 has a matching "return to station 1" line. **For review:** keep, reword, or remove.
- **Review-draft notes on all 35 pages.** The sentence "Only some stations are drafted so far." is replaced on every earlier station by "All 35 stations are drafted and await editorial review." Nothing else in those notes changed.

## Complete-route checks

**Coverage (scripted, following the Continue chain from station 1):**
- The chain runs 35 pages. Each page's "Station N of 35" matches its position, and each "Previous station" link points to the page before it.
- Prose §§1–383: every section is assigned exactly once, with no gaps or overlaps, and each `Read:` line names the matching range.
- Station 1's `Read:` line names poems 1–63; station 20's names Book IV's opening verse; station 26's names the Turenne epigraph; station 34's names all fourteen songs; station 35's names the motto and Preface §§1–4.
- **1882/1887 boundary:** stations 1–25 present the 1882 text, and none says "added in 1887". Station 25 ends with the "End of the 1882 book" pause. Stations 26–35 all identify their text as 1887.
- Station 34's list of fourteen songs matches the free edition's headings in order.

**Text fragments (whole document):** a new check, `linkcheck2`, tests every free-edition link on all 35 pages as a browser would. The first case-insensitive match anywhere in the document must fall on the anchored page, and the match must begin and end at word boundaries.
- Result: 442 links, 0 problems after one fix.
- **Fix to an earlier page:** station 20's §289 link used the fragment "Aboard Ship!". Browsers match fragments case-insensitively from the top of the document, so it would first have matched §124's "gone aboard ship!" (station 14, `Page_167`). It now uses "When one considers how a", which first occurs in §289.

## Source and translation checks

**Quotations.** Prose quotations are Common's. Verse quotations follow the free edition's translations: Petre for "In the South" and the Mistral song, which the edition credits by footnote; Cohn and Petre jointly for the other twelve songs and the motto. No song is assigned to Cohn alone. No Kaufmann wording is quoted or attributed.

**German text used.** Projekt Gutenberg-DE for Book V §§377–383, the songs, the motto, and the preface. That edition's source text is not identified, and it is not KGW/eKGWB.

| Place | Free edition | German | Use on the page |
| --- | --- | --- | --- |
| §377 | "no longer either lords or slaves" | *keine Herrn mehr und keine Knechte* | *Knechte*: servants or bondsmen, noted |
| §377 | "the need of a new order of things, even of a new slavery"; "a new form of slavery" | *Nothwendigkeit neuer Ordnungen … auch einer neuen Sklaverei*; *eine neue Art Versklavung* | "Need" renders "necessity"; "orders" is plural |
| §377 | "Chinaism" | *Chineserei* | Stated plainly as an ethnic stereotype |
| §377 | "race-hatred", "mixed in race and descent", "racial self-admiration" | *Rassenhass*, *der Rasse und Abkunft nach*, *Rassen-Selbstbewunderung* | Here "race" renders *Rasse* (contrast §348's *Volk*) |
| §377 | "makes the German nation barren by making it vain" | *den deutschen Geist öde macht, indem sie ihn eitel* [*macht*] | "Nation" renders *Geist*. The German text used prints *eitel Macht*, apparently a typo for *eitel macht* |
| §377 | "hysterical little men and women" | *hysterischen Männlein und Weiblein* | Noted |
| §377 | "thawing wind" | *Thauwind* | Same word as Preface §1 |
| §380 | "perhaps a sort of madness" | *vielleicht eine kleine Tollheit* | "Little" dropped by Common; noted |
| §382 | "firstlings", "humanly superhuman", "ill-concealed amusement" | *Frühgeburten*, *menschlich-übermenschlich*, *übel aufrecht erhaltenen Ernste* | First two noted. The third (literally "a badly maintained seriousness") is not discussed on the page |
| §383 | "No! Not such tones! But let us strike up something more agreeable and more joyful!" | *Nicht solche Töne! Sondern lasst uns angenehmere anstimmen und freudenvollere!* | The echo of the recitative before the choral finale of Beethoven's Ninth (*O Freunde, nicht diese Töne! Sondern laßt uns angenehmere anstimmen und freudenvollere*) is the guide's identification. The recitative's wording was checked at LiederNet |
| §383 | "tantrums"; "Mr Anchorite and Musician of the Future" | *Grillen* (crickets; whims); *Herr Einsiedler und Zukunftsmusikant* | The first is noted. For the second, the page links §§364–365 and makes no claim about Wagner |
| "To Goethe" | "The Undecaying / Is but thy label"; "The Eternally Fooling" | *Das Unvergängliche / Ist nur dein Gleichniss*; *Das Ewig-Närrische* | Parody verified against Goethe's Chorus Mysticus (*Alles Vergängliche / Ist nur ein Gleichnis … Das Ewig-Weibliche / Zieht uns hinan*) in Project Gutenberg #2230 |
| "The Poet's Call" | "Chirped out the pecker, mocking me" | *Achselzuckt der Vogel Specht* | The woodpecker shrugs; noted |
| "In the South" (Petre) | Refrain "In the South!"; last stanza in quotation marks after asterisks; "Her name was Truth" | No refrain; no asterisks; *"Die Wahrheit" hiess dies alte Weib* | Differences noted; linked to §377 and Preface §4 |
| "An Avowal of Love" | "I thought of her … I love her true!" | *Ich dachte dein … ja, ich liebe dich!* | **In the German the declaration is addressed to the albatross; the English introduces a woman.** Noted |
| "Song of a Theocritean Goatherd" | "Like the goats I follow?"; "Let Death come! I care not!" | *Wie meine Ziegen?*; *Ich stürbe gerne* | Noted |
| "The Fool's Dilemma" | "defoul" | *besch……* (broken off) | The German leaves a coarse verb unfinished; the English completes it. Noted |
| "My Bliss" | "My bliss!" | *Mein Glück!* | Also "luck" or "happiness"; noted |
| "Columbus Redivivus" | title; "Awful Infinity!" | *Nach neuen Meeren*; *ungeheuer … Unendlichkeit* | Title difference noted, as the scope requires |
| "Sils-Maria" | "dear friend"; "Zarathustra left my teeming brain" | *Freundin*; *Zarathustra gieng an mir vorbei* | **Feminine friend; Zarathustra "passed by me."** Noted |
| Mistral song (Petre) | "Let our knowledge be our gladness, / Let our art be sport and madness"; "Saint and witch"; "Crippled, withered" | *Frei – sei unsre Kunst geheissen, / Fröhlich – unsre Wissenschaft!*; *Zwischen Heiligen und Huren*; *Krüppel-Greis* | The German names the book's title; the English loses it. "Witch" softens "whores". The exclusion of the sick is stated plainly |
| Motto | "I stay to mine house confined, / Nor graft my wits on alien stock" | *Ich wohne in meinem eigenen Haus, / Hab Niemandem nie nichts nachgemacht*; line beneath: *Ueber meiner Hausthür* | "Confined" is the translator's; the caption is omitted in English; noted |
| Preface §1 | "patiently, strenuously, impassionately" | *geduldig, streng, kalt* | "Kalt" is "coldly"; noted |
| Preface §2 | "individuals, classes, or entire races"; "namely, of health" | *Einzelnen … Ständen oder ganzen Rassen*; *sagen wir* | Stated plainly; the hedge is noted |
| Preface §3 | "the Indian" | *Indianer* | A Native American captive; stated plainly as a stock image |
| Preface §4 | "cheerfulness"; "this will to truth" | *Heiterkeit*; *dieser Wille zur Wahrheit* | Noted |

**Sources and identifications.** Several claims rest on sources outside Common's text:

- ***Idyllen aus Messina.*** This guide compared the opening lines of the eight Idylls in the Projekt Gutenberg-DE edition with the fourteen songs. Six match:
  - *Vogel-Urtheil* → "The Poet's Call";
  - *Prinz Vogelfrei* → "In the South";
  - *Die kleine Hexe* → "Beppa the Pious";
  - *Das nächtliche Geheimniss* → "The Boat of Mystery";
  - *Vogel Albatross* → "An Avowal of Love";
  - *Lied des Ziegenhirten* → "Song of a Theocritean Goatherd".

  The first publication, in the *Internationale Monatsschrift* in May 1882, is as that edition states it. The composition dates of the other eight songs were not checked.
- ***Faust* Part II, Chorus Mysticus.** Checked in Project Gutenberg #2230.
- **Beethoven's Ninth.** The recitative's wording was checked at LiederNet.
- **The site's own pages:** *Daybreak*'s subtitle, as the site's *Daybreak* guide gives it (§380 "echoes" it); *Beyond Good and Evil* §§257–259 via the master and slave morality theme page, cited as a site cross-reference only and not quoted; and the *Nietzsche Contra Wagner* epilogue's reuse of Preface §§3–4, from that book's guide.
- **Unchecked general notes,** labelled as the guide's:
  - *vogelfrei*'s legal sense (outlaw);
  - Baubo in the Demeter story;
  - Sils-Maria as Nietzsche's summer village;
  - Theocritus as a Greek pastoral poet;
  - the German Empire of 1871 as §377's "own creation".
- **The 1882 Emerson motto** is quoted only in the German text used; its source in Emerson was not checked. It is shown as paratext and not assigned.

## Checks

| Check | Result |
| --- | --- |
| `python3 scripts/build-index.py` | 191 entries, 167 URLs. Generated files are byte-identical to `main`; no route page appears in `search-index.json` or `sitemap.xml`. |
| `node --check site.js`, `node --check book-guide.js`, `git diff --check` | pass |
| Static audit, all 203 HTML files | 0 broken links, 0 missing fragments, 0 duplicate IDs, 0 heading skips |
| Quotations | 2,129 quoted fragments of 10 or more characters on all 35 pages occur in the free edition; 0 failures. Stations 33–35: 92, 93, and 65. Own glosses of German are unquoted and set in italics. |
| Free-text links | All 35 pages: 442 links pass the whole-document fragment check (see above). Station 33's §-labelled links also pass the section-placement check. |
| Coverage and navigation | See "Complete-route checks". The Continue chain runs 1 → 35 (35 pages). The introduction chain R1 → R2 → R3 → `start.html` → R5 … R10 → hub is intact. |
| Layout at 320 × 640, 390 × 844 (touch emulation), and 1440 × 900 | Stations 1, 20, 32, 33, 34, and 35: no horizontal overflow; every `<details>` toggles; no JavaScript errors; all internal links return 200 |
| Canonical and indexing | New pages have self-canonical URLs and `noindex,follow` |
| Inbound links | Route pages are linked only from other route pages |

## Remaining publication checks

These are open and must be settled before any publication. None has been done in this batch.

1. **Complete-route editorial review** of all 35 stations, including the stacked PRs #72–#81 and this batch.
2. **Owner decisions.**
   - Whole-route or labelled partial publication.
   - Hub placement (scope: after the ten-session introduction, before "If you have 40 minutes"), and the hub list anchors `#full-station-1` … `#full-station-35`.
   - The ten additive return links on the introductory pages. The scope calls for them, but the owner has deferred them.
   - The station 1 ↔ 35 early-preface link.
3. **Batch-3 footer dates.** Stations 5, 6, 7, and 17 still say "Review draft, September 25, 2026", but they were drafted on September 26 (see batches 4–5). Correct them before publication. More generally, every footer currently says "Review draft, [date]"; publication needs a release wording and date.
4. **Review-draft markings.** Remove the `noindex,follow` meta, the "Review draft" notices, the "(proposed)" station labels, and the "(review draft)" footers. Then regenerate `search-index.json` and `sitemap.xml`.
5. **Kaufmann comparison.** Not done for any station. Sensitive places in this batch include §377's slavery and race vocabulary, the songs' translations, and Preface §§2–4.
6. **KGW confirmation** of the German readings (all batches), including the §377 *eitel Macht* reading and "The Fool's Dilemma"'s broken-off word.
7. **Physical devices.** Not checked on a phone, and text-fragment highlighting not checked in a real browser.
8. **Protected preview.** The Vercel preview is behind Vercel sign-in and has not been opened. Only the build status has been checked.
9. **Reading times.** None has been measured; every range is an editorial estimate.
10. **Merge order.** The route is split across eleven stacked draft PRs. Their merge or squash order needs a decision.

## Still open (editorial)

- Preface §3's "I doubt …" is left unmarked (see Marking).
- §374's *wohl* (batch 10) is still left unmarked.
- Station 34 marks no hedges and reads the songs for voice; confirm this approach.
