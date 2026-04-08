---
name: simplify
description: Review recently changed components or translations for unnecessary complexity, dead code, redundant abstractions, or bloat — then fix any issues found. Run after editing src/ files.
allowed-tools: Read Grep Glob Edit
paths: "src/**/*.jsx,src/**/*.js,src/**/*.css"
---

# Simplify Changed Code

Review the file(s) I just edited (or $ARGUMENTS if provided) against the project's core constraints, then silently fix any issues found.

## Constraints to enforce

1. **No hardcoded display strings** — all copy must live in `src/content/translations.js`
2. **No unused imports or variables**
3. **No speculative abstractions** — helpers, utilities, or components that are only used once and add no clarity
4. **No added comments or docstrings** on code that was not changed
5. **No extra error handling** for scenarios the framework already handles
6. **Mobile-first CSS** — no desktop-first media queries sneaked in; layout defaults must be for small screens
7. **No features beyond what was requested** — revert any scope creep

## Review process

1. Read the changed file(s)
2. Check `src/content/translations.js` for any string that should be there but isn't
3. Scan imports — remove unused ones
4. Look for single-use helper functions or components that add indirection without clarity — inline them
5. Check CSS: confirm breakpoints go `min-width` (mobile-first), not `max-width`
6. Apply all fixes with Edit
7. Report what was changed (one line per fix) or "Nothing to simplify."
