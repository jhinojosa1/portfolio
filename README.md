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

- `assets/brand/rice-shield.png` — official Rice shield downloaded from the [Rice Brand Guide](https://brand.rice.edu/logos). The homepage displays it with the adjacent Rice University name and above the university's 36-pixel minimum size guidance.

## Featured-Image Credits

- `assets/featured/clifty-creek-aerial.jpg` — aerial view of Clifty Creek Generating Station, via [Wolverine Power Cooperative](https://www.wolverinepowercooperative.com/affordability/). Confirm reuse permission before publishing.
- `assets/featured/vogtle-soil-work.jpg` — soil placement and earthwork at Plant Vogtle, via the [Georgia Power construction archive](https://vogtlegallery.georgiapower.com/gallery/early-construction/7.asp). Confirm reuse permission before publishing.
- `assets/featured/i35-birdseye-highway.jpg` — representative aerial photograph of I-35 and US 290 by Murphpics, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Us290_and_I35_austin.jpg).

`photo-shortlist.html` and `assets/featured/candidates/` are local review materials excluded by `.gitignore`. They contain three candidate images for each featured project. Confirm usage permission before moving a non-Creative-Commons candidate into the public site.
## Site Pages

- `index.html` — home page and featured-work carousel.
- `projects.html` — selected project collection.
- `timeline.html` — career and project timeline.
- `interests.html` — working approach and technical interests.
- `contact.html` — contact information.

Navigation is repeated across each page. Update the shared navigation block consistently when adding a new page.
## Resume

`resume.html` previews the current public resume at `assets/resume/Jorge-Hinojosa-Resume.pdf`. Resume-backed website content was last synchronized on July 20, 2026. Follow [`RESUME-SYNC.md`](RESUME-SYNC.md) whenever a revised resume is provided so the PDF and the related website facts stay aligned.

## Contact Form

The contact form composes a pre-addressed email in the visitor's default email application. It does not submit or store information on a server.
## Minimal Design

The site uses a shared warm-white, charcoal, and muted-green design with system body fonts, serif headings, compact navigation, and responsive layouts. The home page introduces Jorge and links directly to three selected projects. Projects are displayed together instead of in a carousel. Experience, Education, and Interests share an About navigation.

The public pages use `editorial.css` and `editorial.js`. Navigation and footer HTML are repeated across the pages; update them consistently. No package installation or build step is required.

### Local review

```sh
cd ~/Projects/portfolio
git switch redesign/minimal-professional
python -m http.server 4173 --bind 127.0.0.1
```

Open http://localhost:4173/. This preview serves the checked-out branch. GitHub Pages continues to publish `main`; pushing a redesign branch does not change the live website. Review and approve the redesign before merging.

### Verification

Check all eleven public pages at desktop, tablet, and phone widths. Verify mobile navigation (including Escape), local links, images, the automation search and category filters, expanded automation details, interest tabs, the student-athlete gallery, and the resume PDF. The contact form opens a composed email in the visitor's email application.

## Automation Catalog

The Automations page renders a deduplicated 85-entry catalog from `automations.js`. Numbering and counts are automatic, and visitors can search by name, workflow, or technology and filter by CAD, Excel, field operations, reporting, apps and platforms, AI, or utilities. Project-specific tools remain in the catalog under their functional categories instead of using a vague separate filter. Umbrella repositories and archived versions are treated as sources rather than separate catalog entries. The automations are private, so the public catalog contains no repository URLs or source links. Entries expand to show their full description and an impact score from 1 to 5, ranging from a targeted utility to team-scale impact. Development entries remain visible and carry a separate status badge.

## Coaching

The Timeline and Interests pages include Jorge's Track & Field coaching experience with kindergarten through eighth-grade students at St. Vincent de Paul Catholic School. Coaching dates and additional verified outcomes are still pending in `TODO.md`. Add approved images to `assets/coaching/`; the Interests page includes a private-coaching email call-to-action. Unfinished photo placeholders and editorial review instructions are omitted from the public design.
