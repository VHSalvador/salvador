# CLAUDE.md — Salvador Portfolio

## What this project is
Personal namecard/portfolio website for Salvador Villarroel. Target: people who receive his CV or hear his name — mostly mobile users. Linked on his CV and LinkedIn. Deployed to GitHub Pages at `https://vhsalvador.github.io/salvador/`.

## What this project is NOT
- The chess coaching business lives in `chess-site/` — a separate standalone project for a different domain. **Do not touch `chess-site/` when working on the main portfolio.**

## Stack
- React 19 + Vite 7, single-page app
- React Router 7 (single route: `/`)
- `react-helmet-async` for SEO/meta
- `@emailjs/browser` for contact form
- `lucide-react` for icons
- Deployed via `gh-pages` (`npm run deploy`)

## Key constraints
- **Mobile-first** — majority of visitors are on phones
- **Bilingual HU/EN** — Hungarian is the default (`useState('hu')` in LanguageContext)
- **All copy lives in one file**: `src/content/translations.js`. Never hardcode display strings in components.
- **GitHub Pages** — no server, no SSR. Static only. Security headers go in `public/_headers`.

## Token-efficient file reading order
When starting a session, read these first — they give 80% of the context:
1. `src/content/translations.js` — all copy
2. `src/index.css` — design tokens and layout classes
3. The specific component you are changing

Avoid reading the full component tree unless the task spans multiple components.

## Decisions already made
- Chess removed from main site (routes, nav, translations stripped)
- Images: WebP + AVIF (quality 60) with `<picture>` — AVIF served first, WebP fallback. All PNG originals deleted.
- Old `hero-profile.*` variants deleted; only `-new-` variants remain.
- Favicon: `public/favicon.svg` (SV initials, brand colors). No `.ico` file.
- GA4 snippet is in `index.html` with placeholder `G-XXXXXXXXXX` — waiting for Rackhost migration before activating.
- Prerender step is non-fatal (`|| true`) in build script — Puppeteer/Chrome fails in WSL, expected.
- Fonts self-hosted as woff2 with `font-display: swap`
- Vite manual chunks: `vendor` (react stack) + `lucide`

## Always do at session close
- `npm install` if `node_modules` is missing (use `--legacy-peer-deps` if needed)
- `npm run build` to verify — the Puppeteer prerender step fails in WSL (missing Chrome libs), that is expected and not a code error; the Vite build passing is sufficient
- Commit all changes, then `git push origin main`
- `npm run deploy` to push `dist/` to `gh-pages` and update the live GitHub Pages site

## Do not
- Add features not requested
- Add comments or docstrings to code you didn't change
- Hardcode text strings — use translations.js
- Touch `chess-site/`

## Failure log
Things tried in past sessions that didn't work — don't repeat them.

<!-- Format: - [date] What was tried → why it failed -->

## Success log
Non-obvious approaches confirmed to work — repeat these.

<!-- Format: - [date] What was done → why it worked -->
