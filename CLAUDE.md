# CLAUDE.md — Salvador Portfolio

## What this project is
Personal namecard/portfolio website for Salvador Villarroel. Target: people who receive his CV or hear his name — mostly mobile users. Linked on his CV and LinkedIn. Deployed to Rackhost at `https://salvador.hu`.

## What this project is NOT
- The chess coaching business lives in `chess-site/` — a separate standalone project for a different domain. **Do not touch `chess-site/` when working on the main portfolio.**

## Stack
- React 19 + Vite 7, single-page app
- React Router 7 (single route: `/`)
- `react-helmet-async` for SEO/meta
- `@emailjs/browser` for contact form
- `lucide-react` for icons
- Deployed to Rackhost via FTP (`npm run deploy:ftp`). Run this if user asks to "push to FileZilla" or push to live.

## Key constraints
- **Mobile-first** — majority of visitors are on phones
- **Bilingual HU/EN** — Hungarian is the default (`useState('hu')` in LanguageContext)
- **All copy lives in one file**: `src/content/translations.js`. Never hardcode display strings in components.
- **Rackhost** — Apache server. Static hosting, with routing and headers handled by `.htaccess`.

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
- **LOCAL CHECK:** Always verify the site on a local server (`npm run dev` or `npx serve dist`) before uploading to the production server.
- Commit all changes, then `git push origin main`
- If requested to push live, run `npm run deploy:ftp` to upload directly to Rackhost via FTP.

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
- [2026-04-08] Dark mode via `[data-theme="dark"]` on `<html>` + manual toggle in Navbar. ThemeContext exports `getInitialTheme()` which is called synchronously in `main.jsx` before `createRoot` to prevent FOUC. First-time visitors get OS preference via `matchMedia`; returning visitors get their saved choice from `localStorage`.
- [2026-04-08] Social links (LinkedIn/GitHub) exist in 3 places: Contact.jsx, Footer.jsx, Home.jsx JSON-LD schema. Keep all 3 in sync when updating profile URLs.
- [2026-04-08] `public/_headers` ships in `dist/` via Vite's public dir copy. GitHub Pages does not enforce it natively — it is there for future CDN/proxy adoption and documents the intended CSP. CSP allows: self, GA4 (googletagmanager + google-analytics), EmailJS API (`api.emailjs.com`), self-hosted fonts. `unsafe-inline` in script-src is required for the GA4 inline gtag snippet.
