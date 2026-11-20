# portfolio

Portfolio project.

## Start Here

- Check [`TODO.md`](TODO.md) for active and pending work in this folder.
- Check local `AGENTS.md` if present for agent-specific rules.
- Preserve original source data and keep generated outputs clearly separated.

## Child Folders

- `assets/`

## Notes

This README is intentionally lightweight. Add project-specific run commands, source-data locations, and verification steps as work becomes active.

## Adding Technical-Interest Visuals

The OpenMANET and Meshtastic cards in `interests.html` include visual placeholders. Add your images to `assets/interests/` using these names, then replace the corresponding placeholder `<div>` with an `<img>` element.

- `assets/interests/openmanet-network.jpg` — a network layout, radio setup photo, or field deployment diagram.
- `assets/interests/meshtastic-network.jpg` — a node layout, coverage map, deployment diagram, or field photo.
## Operating Docs

- [`TODO.md`](TODO.md) — active/pending work list.
- [`AGENTS.md`](AGENTS.md) — project-specific agent rules.
- [`diagram.html`](diagram.html) — visual workflow and folder map.


## Brand Assets

Experience uses the ENTACT, Lockwood, Andrews & Newnam, BioNatal, St. Vincent de Paul, and Rice University marks in the left column alongside employment and education dates.

- `assets/brand/rice-shield.png` — official Rice shield downloaded from the [Rice Brand Guide](https://brand.rice.edu/logos). It appears beside Rice University’s name on Education and Experience.

## Featured-Image Credits

- `assets/featured/clifty-creek-aerial.jpg` — aerial view of Clifty Creek Generating Station, via [Wolverine Power Cooperative](https://www.wolverinepowercooperative.com/affordability/). Confirm reuse permission before publishing.
- `assets/featured/vogtle-soil-work.jpg` — soil placement and earthwork at Plant Vogtle, via the [Georgia Power construction archive](https://vogtlegallery.georgiapower.com/gallery/early-construction/7.asp). Confirm reuse permission before publishing.
- `assets/featured/i35-georgetown-map.png` — corridor map from the [TxDOT project fact sheet](https://www.txdot.gov/content/dam/project-sites/mobility35/documents/mobility35-georgetown-round-rock-fact-sheet-032524.pdf).
- `assets/featured/i35-birdseye-highway.jpg` — representative aerial photograph of I-35 and US 290 by Murphpics, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Us290_and_I35_austin.jpg).

`photo-shortlist.html` and `assets/featured/candidates/` are local review materials excluded by `.gitignore`. They contain three candidate images for each featured project. Confirm usage permission before moving a non-Creative-Commons candidate into the public site.
## Site Pages

- `index.html` — Field Note, rotating previews for the three featured projects, and the automation catalog entry point.
- `projects.html` — selected project collection.
- `timeline.html` — career and project timeline with organization marks and linked case studies.
- `education.html` — Rice University engineering degree and NCAA Division I Track & Field gallery.
- `interests.html` — technical field-networking prototypes and youth Track & Field coaching.
- `automations.html` — searchable, filterable 85-entry automation catalog with screenshot previews and lightbox viewer.
- `resume.html` — PDF download and embedded desktop viewer with mobile download fallback.
- `contact.html` — email, GitHub, and the FormSubmit inquiry form.

Navigation is repeated across each page. Update the shared navigation block consistently when adding a new page.
## Resume

`resume.html` offers an icon to download and, on wider screens with a pointer, previews the current public resume at `assets/resume/Jorge-Hinojosa-Resume.pdf`. Resume-backed website content was last synchronized on July 20, 2026. Follow [`RESUME-SYNC.md`](RESUME-SYNC.md) whenever a revised resume is provided so the PDF and the related website facts stay aligned.

## Contact

The Contact form submits to [FormSubmit](https://formsubmit.co/) for email delivery. With JavaScript enabled, submission feedback appears on the page. The first real submission triggers an activation email to the recipient. Confirm that email before relying on the form, then verify inbox delivery. A direct email link remains available.
## Hallmark Redesign (`hallmark-work`)

The `hallmark-work` branch, cut from `redesign/minimal-professional`, restyles every public page as a construction drawing set: tracing-paper ground, blue-black ink, one red accent, square edges, and black-and-white photographs. The earlier Noto Sans design is available in the branch history at commit `e10353c`.

- **Stylesheets:** `editorial.css` (page styles, starting with the Hallmark stamp) imports `tokens.css` (colours, type, spacing) and `base.css` (shared base rules). Change colours and fonts in `tokens.css` only.
- **Type:** Oswald 600 uppercase headings, Archivo body text, and Archivo Narrow for figures. Fonts are served locally from `assets/fonts/` as `.woff2`, with their licences in `OFL-*.txt`. The Noto Sans files are no longer referenced.
- **Signature:** the title block, a ruled grid of project details styled like a construction drawing title block. It appears in the homepage project previews, the project list, and each case study.
- **Homepage order:** Field Note hero, previews of Clifty Creek, Venture Global CP2, and TxDOT I-35, then the 85-automation panel. The previews rotate every seven seconds and continue rotating after manual navigation. The Pause button stops rotation. Visitors who prefer reduced motion start with rotation paused. The Field Note link in the navigation jumps to `index.html#field-note`.
- **Layout:** the Field Note hero sizes to its content. The product mark and project previews stack above their copy on phones, and title blocks show two cells per row.
- **Photographs** render in black and white through CSS filters, so the original files are unchanged. The I-35 map keeps its colour.
- **Hallmark records:** `.hallmark/` holds before and after screenshots (`compare.html`), the before record, and the build log. Screenshots and records are git-ignored.

### Local review

```sh
cd ~/Projects/portfolio
git switch hallmark-work
python -m http.server 4173 --bind 127.0.0.1
```

Open http://localhost:4173/. This preview serves the checked-out branch. GitHub Pages continues to publish `main`; pushing a redesign branch does not change the live website. Review and approve the redesign before merging.

### Verification

Check all eleven public pages in Chromium, Firefox, and WebKit at phone, tablet, and desktop widths. The Projects page uses stacked cards on phones, rows on tablets, and three columns on desktop. Verify mobile navigation (including Escape), local links, images, the automation search and category filters, expanded automation details, interest tabs, the student-athlete gallery, and the resume PDF. Verify required fields, submission feedback on success and failure, and the direct email link.

## Automation Catalog

The Automations page renders a deduplicated 85-entry catalog from `automations.js`. Counts are automatic, and visitors can search by name, workflow, or technology and filter by CAD, Excel, field operations, reporting, apps and platforms, AI, or utilities. Project-specific tools remain in the catalog under their functional categories instead of using a vague separate filter. Umbrella repositories and archived versions are treated as sources rather than separate catalog entries. The automations are private, so the public catalog contains no repository URLs or source links. Entries with workflow images show a thumbnail before expansion. Expand an entry for its description and complete gallery. Select an image to open it at full size. Development entries show their status in the details.

## Coaching

The Timeline and Interests pages include Jorge's Track & Field coaching experience with kindergarten through eighth-grade students at St. Vincent de Paul Catholic School. Coaching dates and additional verified outcomes are still pending in `TODO.md`. Add approved images to `assets/coaching/`; the Interests page includes a private-coaching email call-to-action. Unfinished photo placeholders and editorial review instructions are omitted from the public design.
