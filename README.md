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

## Technical-Interest Projects

The Interests page uses an Engineering / Track & Field selector to separate technical projects from coaching. Engineering presents three in-development, vendor-independent technology efforts: GPS/LTE haul-route intelligence with heavy-equipment fleet visuals, a Raspberry Pi 4–class Wi-Fi HaLow field network with sequential long-distance relays and mesh failover paths, and a renewable-powered Meshtastic community resilience mesh. Responsive diagrams in `interests.html` explain each system; the Houston resilience-mesh concept now uses an attributed OpenStreetMap-derived Houston map as its geographic backdrop.

## Operating Docs

- [`TODO.md`](TODO.md) — active/pending work list.
- [`AGENTS.md`](AGENTS.md) — project-specific agent rules.
- [`diagram.html`](diagram.html) — visual workflow and folder map.


## Brand Assets

- `assets/brand/rice-shield.png` — official Rice shield downloaded from the [Rice Brand Guide](https://brand.rice.edu/logos) for Rice-related site content.

## Featured-Image Credits

- `assets/featured/clifty-creek-aerial.jpg` — aerial view of Clifty Creek Generating Station, via [Wolverine Power Cooperative](https://www.wolverinepowercooperative.com/affordability/). Confirm reuse permission before publishing.
- `assets/featured/vogtle-soil-work.jpg` — soil placement and earthwork at Plant Vogtle, via the [Georgia Power construction archive](https://vogtlegallery.georgiapower.com/gallery/early-construction/7.asp). Confirm reuse permission before publishing.
- `assets/featured/i35-birdseye-highway.jpg` — representative aerial photograph of I-35 and US 290 by Murphpics, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Us290_and_I35_austin.jpg).

`photo-shortlist.html` and `assets/featured/candidates/` are local review materials excluded by `.gitignore`. They contain three candidate images for each featured project. Confirm usage permission before moving a non-Creative-Commons candidate into the public site.
## Site Pages

- `index.html` — minimal employer introduction with a blank portrait area reserved for a future approved photo.
- `projects.html` — compact selected-work introduction with three visible, comparable project cards.
- `automations.html` — employer-focused automation story with six selected systems and a searchable full catalog.
- `timeline.html` — interactive, keyboard-accessible career timeline with selectable chapters, résumé-backed project scope and results, expandable highlights, and a visual private-coaching achievement board.
- `interests.html` — engineering interests, Track & Field coaching outcomes presented in a rotating achievement gallery, a compressed coaching photo carousel, and a coaching inquiry form with a preset email subject.
- `contact.html` — contact information.

Navigation is repeated across each page. Update the shared navigation block consistently when adding a new page.

`editorial.js` appends a shared employer-facing footer to public pages. The footer provides direct links to email, résumé, projects, and GitHub; the home page uses a compact version, while the résumé page omits the footer so its one-page document fits without page scrolling. Public pages use a shared versioned script reference so navigation and footer updates refresh consistently instead of leaving stale cached content.

## Mobile Browser Support

The public pages use the shared `editorial.css` and `editorial.js` files for responsive navigation, touch-friendly galleries, safe-area spacing, and mobile viewport handling. Mobile layouts are designed for current Safari, Chrome, and Brave releases. Keep form controls at 16px or larger on phones to avoid automatic Safari zoom, and preserve the direct PDF link on the Resume page as a fallback for browsers that do not embed PDFs reliably.

## Resume

`resume.html` previews the current public resume at `assets/resume/Jorge-Hinojosa-Resume.pdf` with a single download link aligned above the document. The public PDF was manually synchronized from the newest local resume build on July 21, 2026. The `Sync resume PDF` GitHub Actions workflow still checks the resume repository's `main` branch; follow [`RESUME-SYNC.md`](RESUME-SYNC.md) before running it so an older remote build does not replace the newer portfolio copy.

## Contact Form

The contact form composes a pre-addressed email in the visitor's default email application. It does not submit or store information on a server.
## Editorial Homepage

The home page is intentionally minimal: a short employer-facing introduction and a blank portrait area reserved for a future approved photo. Detailed projects, automations, career history, interests, education, résumé, and contact information live on their own pages.

The featured projects link to reusable case-study pages:

- case-study-clifty-creek.html
- case-study-vg-cp2.html
- case-study-i35-georgetown.html

The case-study facts are grounded in the current resume. The Clifty Creek case study intentionally ends after the project-impact section; the remaining project galleries stay available for approved, private-safe photographs and diagrams.

## Unified Editorial System

The public pages now share the same editorial design language through the shared editorial stylesheet and interaction file: large mission-led headers, numbered hierarchy, dark/light contrast, square-edged content sections, responsive layouts, restrained motion, and consistent navigation.

The shared system covers the home page, Projects, Timeline, Interests, Education, Resume, Contact, and all featured-project case studies.

simple.css is loaded after the original editorial stylesheet on every public page. It provides the current simplified visual layer—calmer typography, restrained blue accents, rounded cards, consistent spacing, and responsive layouts—without changing page content or interaction behavior.

## Automation Catalog

The Automations page leads with six selected systems, then renders a deduplicated 82-entry catalog from `automations.js`. Its introduction positions the tools as guided, reliable workflows that users at any skill level can complete confidently. The DAR Field Reporting App uses three approved app screens that omit personnel and recipient data. The MasterFlow Cut / Fill Heat Map uses a representative screenshot built with sample data, while the Viewpoint–DAR Time Audit uses a classified panel instead of exposing project records. The MasterFlow card documents its two-surface comparison, automatic color-band and interval selection, plot-ready heat map and deviation table, and reduction from about 1.5 hours to 3.5 minutes. Its featured metrics emphasize the 3.5-minute output and approximately 96% time reduction without repeating the input count. Numbering and counts are automatic, and visitors can search by name, workflow, or technology and filter by CAD, Excel, field operations, reporting, apps and platforms, AI, or utilities. The catalog distinguishes a survey-points-to-LandXML surface generator from a natural-language CAD error highlighter that searches DWG, DXF, and XML data and marks matching issues for review. Project-specific tools remain in the catalog under their functional categories instead of using a vague separate filter. Umbrella repositories and archived versions are treated as sources rather than separate catalog entries. The automations are private, so the public catalog contains no repository URLs or source links. Approved catalog entries can also replace the abstract code panel with a real workflow image. Catalog photos load up front so they remain visible when cards move between All and filtered views; Custom Grid Maker uses an approved AutoCAD treatment-grid screenshot, End of Day Grid Change uses an approved AutoCAD status-change screenshot, Grid Duplicate Cleanup, Grid Label Duplicate Checker, and Hyperlink Grid Labeler use approved AutoCAD grid screenshots, DAR Area Export pairs its exported area table with the matching AutoCAD grid view, Treated Grid Center Export uses an approved AutoCAD center-point view, Trimble TSC7 Data Puller uses an approved Trimble Siteworks screen, Photo Compressor uses an approved desktop-app screen, PDF Steamroller uses an approved AutoCAD PDF-selection screen, StretchLeader uses an approved before-and-after leader diagram, and Outlook Daily Summary uses a privacy-edited seven-day digest with personal names blurred. Every catalog card includes a visual impact score from 1 to 5, ranging from a targeted utility to team-scale impact. The full catalog shows at most 24 matching cards per page, with accessible Previous and Next controls that preserve search and category filters. Development entries remain visible and carry a separate status badge.

## Coaching

The Timeline and Interests pages include Jorge's Track & Field coaching experience with kindergarten through eighth-grade students at St. Vincent de Paul Catholic School. The public pages omit unverified dates, outcomes, and empty photo positions. Add approved images to `assets/coaching/` only when they are ready to publish; the Interests page retains a private-coaching email call-to-action.

Public pages intentionally omit future-media placeholders and internal review notes. Add approved, private-safe visuals only when they are ready to publish.
