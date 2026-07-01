# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static, single-page personal portfolio site for Eduardo Lemus, deployed via GitHub Pages at `lzelly3131.github.io`. Spanish-language content. No build system, package manager, bundler, or test suite — plain HTML, CSS, and vanilla JS served as-is.

## Running locally

There is no dev server or build step. Open `index.html` directly in a browser, or serve the directory with any static file server, e.g.:

```
python3 -m http.server 8000
```

There are no lint, build, or test commands configured in this repo.

## Architecture

- `index.html` — the entire site. One page with a fixed sidebar/header and a scrollable main content area, all sections defined inline (`#about`, `#experience`, `#education`, plus a `#projects` nav link with no matching section yet).
- `styles/main.css` — the only stylesheet referenced from `index.html`; it just `@import`s the other CSS files in this order: `layout.css`, `reset.css`, `variables.css`. When editing styles, edit the imported files, not `main.css` itself.
  - `styles/variables.css` — CSS custom properties (`:root`) for colors and font sizes, referenced elsewhere via `var(--name, fallback)`.
  - `styles/layout.css` — the actual layout and component styles (CSS Grid page shell with `HEADER`/`MAIN`/`FOOTER` areas, navbar, links, etc.).
  - `styles/reset.css` — base reset rules.
  - `styles/layout1.css` — present on disk but not currently imported by `main.css`; check whether edits belong here or in `layout.css` before assuming it's live.
- `src/index.js` — vanilla JS, no modules/bundler. Two independent behaviors:
  - A scroll listener toggles `.shrink`/`.full` classes on `#navbar` based on scroll position.
  - A typewriter effect that types/deletes strings from the `positions` array into `#position` on a timing loop.
- `images/`, `file/` — static assets (icons, photo, favicon, downloadable CV PDF).

## Notes

- The site targets GitHub Pages hosting directly from this repo, so `index.html` must keep working with root-relative paths as-is (no build/output directory).
- `main` is the base branch for PRs; work generally happens on `feature`.
