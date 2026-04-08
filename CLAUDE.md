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
- Images: WebP + responsive srcSet. PNGs in `public/img/` are dead weight — scheduled for removal.
- Fonts self-hosted as woff2 with `font-display: swap`
- Vite manual chunks: `vendor` (react stack) + `lucide`

## Do not
- Add features not requested
- Add comments or docstrings to code you didn't change
- Hardcode text strings — use translations.js
- Touch `chess-site/`
