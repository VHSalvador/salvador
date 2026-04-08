# Chess Site — Salvador Chess

This folder contains the standalone chess coaching website, separated from the main portfolio on 2026-04-08.

## Status
Awaiting deployment to its own domain.

## Contents
- `src/components/chess/` — all chess section components (Hero, Methodology, Stats, Characters, Instructors, Contact, Footer)
- `src/components/ChessNavbar.jsx` — chess-specific navbar
- `src/pages/ChessCoaching.jsx` — main chess page
- `assets/img/` — chess image assets (chess.png, chess.webp, sized variants)

## Missing (needs to be set up for standalone deployment)
- `package.json` — copy from parent and remove non-chess dependencies
- `vite.config.js` — set new `base` URL for the target domain
- `src/content/chessTranslations.js` — extract chess section from the parent `translations.js`
- `src/context/LanguageContext.jsx` — copy from parent
- `src/index.css` — copy from parent (or create chess-specific theme)
- `index.html` — new entry point
- `src/main.jsx` — new entry point
- `public/` — favicon, robots.txt, sitemap for the chess domain

## Original translations
The chess translations were in `src/content/translations.js` in the parent repo under the `chess` key (both `en` and `hu`). Extract them when setting up this project.
