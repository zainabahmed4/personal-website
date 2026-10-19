## Repo overview

- Static personal portfolio website (HTML, CSS, JS) in the repository root.
- No build system or package manager present. Files of interest: `index.html`, `style.css`, `script.js`, `img/`, and the project pages `project-*.html`.
- `CNAME` at repo root indicates this is deployed via GitHub Pages with a custom domain — do not remove without confirming.

## Big picture / architecture

- Single-page static site with additional project pages in `projects/`. The main index lists projects; each project links to `projects/project-*.html` files.
- Client-side filtering: `script.js` reads the `data-name` attribute on `.project-img` inside each `.project-card` and toggles `.project-card` display. See `index.html` and `script.js` for the exact pattern.
- All styling lives in `style.css`. The site relies on class-based styling and global CSS variables (e.g. `--header-offset`). Avoid introducing new global styles without checking existing class names.

## Key patterns and examples (be specific)

- Project filter: change a project's category by editing the image element's attribute, e.g.

  - <img src="img/hobby blog mockup.jpg" class="project-img" data-name="dev" />
  - `script.js` expects `.project-img[data-name]` and toggles `.project-card` visibility.

- Navigation and links: top nav links use fragment ids (e.g. `#about`, `#projects`). Keep IDs stable when renaming sections.

- Accessibility pattern: external links include `target="_blank" rel="noreferrer"` and `aria-label`. Follow this pattern for new external links.

- Asset filenames include spaces/punctuation (e.g. `img/me doodle.png`). If renaming assets, update all references in HTML/CSS.

## Developer workflows (how to preview, test, and debug)

- Local preview (fast): run a static server from repo root, e.g.:

  ```bash
  python -m http.server 8000
  # or use VS Code Live Server extension to preview
  ```

- Debugging: open the site in Chrome/Firefox and use DevTools. Script entrypoint: `script.js` (deferred in `index.html`). Styles: `style.css`.
- Deployment: repository appears intended for GitHub Pages. The presence of `CNAME` means a custom domain is configured.

## Constraints & repository-specific cautions

- There is no Node/Express code in this repo despite an index tagline mentioning Express/Node for the Hobby Blog — do not introduce server-side assumptions unless the user explicitly asks to add backend code.
- Keep edits minimal and class-based. This codebase favors small, semantic changes rather than global refactors.

## When you make changes — checklist for PRs

- Confirm visual regression: preview locally and test the project filter (click filter pills).
- If changing asset names, update references across HTML and CSS.
- Preserve `CNAME` unless domain change is requested.
- Use descriptive commit messages like `site: update Hobby Blog project page content`.

## Where to look for examples

- `index.html` – main site structure, nav, project cards and project grid.
- `script.js` – client-side filter behavior (applyFilter, `.pill-active`).
- `style.css` – global styles, variables, and layout patterns.
- `projects/project-hobby-blog.html`, `projects/project-personal-website.html`, `projects/project-pocket.html`, `projects/project-student-onboarding.html` – examples of per-project pages.

If anything here is unclear or you want the instructions to emphasize a different workflow (for example adding a build step, or introducing tests), tell me which parts to expand or change.
