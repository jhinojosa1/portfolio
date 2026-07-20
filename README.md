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

The OpenMANET and Meshtastic cards in `index.html` include visual placeholders. Add your images to `assets/interests/` using these names, then replace the corresponding placeholder `<div>` with an `<img>` element as described in the HTML comment above each visual.

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

`resume.html` previews `assets/resume/Jorge-Hinojosa-Resume.pdf`. Replace that PDF with the current resume using the same filename before publishing or sharing the site.

## Contact Form

The contact form composes a pre-addressed email in the visitor's default email application. It does not submit or store information on a server.
## Editorial Homepage

The home page is intentionally a focused landing page rather than a one-page portfolio. Featured field projects live on the Projects page, while the complete automation collection lives on its own Automations page. Career history, interests, education, resume, and contact content each live on their own page. The editorial CSS and JavaScript files provide the shared presentation and accessible gallery behavior.

The featured projects link to reusable case-study pages:

- case-study-clifty-creek.html
- case-study-vg-cp2.html
- case-study-i35-georgetown.html

Each case study deliberately keeps unfinished facts marked [REVIEW] until scope, role, dates, and results are confirmed.

## Unified Editorial System

The public pages now share the same editorial design language through the shared editorial stylesheet and interaction file: large mission-led headers, numbered hierarchy, dark/light contrast, square-edged content sections, responsive layouts, restrained motion, and consistent navigation.

The shared system covers the home page, Projects, Timeline, Interests, Education, Resume, Contact, and all featured-project case studies.

## Automation Catalog

The Automations page renders a deduplicated 86-entry catalog from `automations.js`. Numbering and counts are automatic, and visitors can search by name, workflow, or technology and filter by CAD, Excel, field operations, reporting, apps and platforms, AI, or utilities. Project-specific tools remain in the catalog under their functional categories instead of using a vague separate filter. Umbrella repositories and archived versions are treated as sources rather than separate catalog entries. The automations are private, so the public catalog contains no repository URLs or source links. Every card includes a visual impact score from 1 to 5, ranging from a targeted utility to team-scale impact. Development entries remain visible and carry a separate status badge.

## Coaching

The Timeline and Interests pages include Jorge's Track & Field coaching experience with kindergarten through eighth-grade students at St. Vincent de Paul Catholic School. Coaching dates and verified outcomes remain marked `[REVIEW]`. Add approved images to `assets/coaching/`; the Interests page provides three gallery positions and a private-coaching email call-to-action.
