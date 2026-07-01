# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio site for Eduardo Lemus, built with React + Vite, deployed via GitHub Pages at `lzelly3131.github.io`. Spanish-language content. Package manager is **pnpm** — do not use npm/yarn commands or lockfiles.

## Commands

```
pnpm install       # install dependencies
pnpm dev           # start Vite dev server
pnpm build         # production build to dist/
pnpm preview       # preview the production build locally
pnpm lint          # oxlint
```

There is no test suite configured in this repo.

## Architecture

- Entry point: `index.html` → `src/main.jsx` → `src/App.jsx`, which composes one section component per anchor: `Hero` (`#about`), `TechCarousel` (`#technologies`), `Experience` (`#experience`), `Education` (`#education`), `Projects` (`#projects`), plus `Navbar` and `Footer`.
- `src/data/*.js` holds all portfolio content (experience, education, projects, technologies) as plain data, kept separate from the components that render it. Update content here, not inline in JSX.
- `src/hooks/useTheme.js` — dark/light mode: detects `prefers-color-scheme`, persists the user's manual override in `localStorage` (key `portfolio-theme`), and toggles the `data-bs-theme` attribute on `<html>`, which drives Bootstrap 5.3's native dark-mode CSS variables. Light/dark color tokens on top of Bootstrap's are defined as custom properties scoped to `[data-bs-theme='dark']` / `[data-bs-theme='light']` in `src/index.css` (`--bg-page`, `--bg-section`, `--bg-card`, `--accent`, etc.) — use these `var(--…)` tokens instead of hardcoding colors.
- `src/hooks/useTypewriter.js` — generic typing/deleting text effect, used by `Hero` to cycle through job titles.
- Animations use **framer-motion** throughout: `src/components/Reveal.jsx` is the reusable scroll-reveal wrapper (`whileInView`) used by every section; `Navbar`/`ThemeToggle`/`Projects` cards each have their own local `motion.*` usage for entrance, icon-swap, and hover effects respectively. Keep new section animations consistent with `Reveal` rather than one-off patterns.
- `TechCarousel` is a CSS-driven infinite marquee (not a JS carousel library): the tech list from `src/data/technologies.js` is rendered twice back-to-back and animated via the `tech-scroll` keyframe in `src/index.css`; it pauses on hover and respects `prefers-reduced-motion`.
- `public/` — static assets served as-is at the root path (`images/`, `file/CV-....pdf`), referenced with root-relative URLs (`/images/...`).
- `.github/workflows/deploy.yml` — builds with pnpm and publishes `dist/` to GitHub Pages via `actions/deploy-pages` on every push to `main`. GitHub Pages must be configured with source "GitHub Actions" (not "Deploy from a branch") for this to take effect.

## Working conventions

- `main` is the base branch for PRs; work happens on feature branches (`feat/...`, `ci/...`) merged into an integration branch before reaching `main`. Keep commits atomic with clear, human-readable messages describing intent.
- Reuse an icon set already in use (`react-icons/si`, `/fa6`, `/vsc`, `/fi`) before adding a new icon dependency — check the installed package's `.d.ts` for the exact export name before assuming it exists (several expected brand icons, e.g. AWS and VS Code, aren't in `react-icons/si` and live in `fa6`/`vsc` instead).
- A local copy of the `motion-framer` Claude skill lives in `.claude/skills/motion-framer/` for framer-motion reference/patterns; it's git-ignored and not part of the shipped app.
