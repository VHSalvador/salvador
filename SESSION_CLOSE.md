# Session Close Checklist

Run through this before ending any work session.

## 1. Code health
- [ ] Does `npm run dev` start without errors?
- [ ] Does the page render correctly on mobile viewport (375px)?
- [ ] No `console.error` or React warnings in browser devtools?
- [ ] No hardcoded display strings added — all copy goes through `translations.js`

## 2. Git hygiene
- [ ] `git status` — no unintended files staged
- [ ] Commit message describes *why*, not just *what*
- [ ] If a new task was completed, mark it `[x]` in `TASKS.md`
- [ ] `git push origin main` — always push at session close, even if not explicitly asked
- [ ] Note: if push fails with auth error, remind user to configure SSH or PAT

## 3. Memory / handoff
- [ ] Update `TASKS.md` — mark completed items, add any newly discovered issues
- [ ] If a significant decision was made (color change, layout shift, API choice), note it in `CLAUDE.md` under "Decisions already made"
- [ ] If the session introduced a partial/in-progress state, leave a `## IN PROGRESS` note at the top of `TASKS.md` describing exactly where to pick up

## 4. Before deploying (`npm run deploy`)
- [ ] `npm run build` succeeds without warnings
- [ ] `dist/` folder exists and `index.html` is not empty
- [ ] Verify sitemap.xml was regenerated if routes changed
- [ ] No `.env` secrets committed — check `git diff HEAD` before push
