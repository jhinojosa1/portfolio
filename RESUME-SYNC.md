# Resume synchronization

The public resume has one stable website path:

- `assets/resume/Jorge-Hinojosa-Resume.pdf`

The PDF is synchronized from the `main` branch of `jhinojosa1/resume`:

- Source: `main.pdf`
- Destination: `assets/resume/Jorge-Hinojosa-Resume.pdf`
- Automation: `.github/workflows/sync-resume.yml`

The workflow checks hourly and can also be run manually from GitHub's Actions page. It validates that the download looks like a PDF and commits only when the file has changed.

## Current synchronization note

On July 21, 2026, the portfolio PDF was manually updated from the newest local `resume/main.pdf` build. That local build is newer than the PDF currently published on the resume repository's `main` branch. Merge and publish the resume working copy to `main` before the scheduled portfolio workflow runs; otherwise the workflow can replace the newer website PDF with the older remote file.

## When a revised resume arrives

1. Commit and push the revised `main.pdf` to the resume repository's `main` branch.
2. Let the hourly workflow run, or run `Sync resume PDF` manually in the portfolio repository for an immediate update.
3. Compare the revised resume with the website's employment, project, education, skill, certification, and contact facts.
4. Update `index.html`, `timeline.html`, `education.html`, `projects.html`, the three `case-study-*.html` pages, and `resume.html` where the new facts apply.
5. Preserve content that is not resume-derived, including coaching and technical interests, unless the new source explicitly changes it.
6. Keep confidential automation source locations and project-sensitive material off the public site.
7. Recheck local links, scripts, responsive layout, and every remaining `[REVIEW]` marker.

The workflow synchronizes the PDF itself. Resume-derived wording elsewhere on the website still needs editorial review because those changes cannot be inferred reliably from the PDF alone.

Project photos, diagrams, coaching dates, and coaching outcomes are maintained separately because the resume does not verify those assets or details.
