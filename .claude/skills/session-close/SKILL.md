---
name: session-close
description: Run the end-of-session checklist for this project — verify build passes, commit all changes, push to origin main, and deploy to GitHub Pages. Use at the end of every working session.
disable-model-invocation: true
allowed-tools: Bash(npm run build), Bash(npm run deploy), Bash(git status), Bash(git diff), Bash(git log*), Bash(git add*), Bash(git commit*), Bash(git push*)
---

# Session Close Checklist

Run the following steps in order. Stop and report if any step fails.

## Step 1 — Verify the build

```bash
npm run build
```

The Puppeteer prerender step will fail in WSL (missing Chrome libs) — that is expected and not an error. What matters is that the Vite build itself passes. If Vite errors, stop here and fix before proceeding.

## Step 2 — Update CLAUDE.md session logs

Before committing, append any reusable learnings from this session to the relevant log in `CLAUDE.md`:

- **Failures log** (`## Failure log` section): anything that was tried and didn't work — wrong approaches, incorrect assumptions, patterns that broke things. Write one bullet per item: what was tried and why it failed. Only record things that could plausibly be tried again.
- **Successes log** (`## Success log` section): non-obvious approaches that worked well and should be repeated. Skip obvious things. One bullet per item: what was done and why it worked.

If there is nothing new to add, skip this step. Do not pad with trivial entries.

## Step 3 — Check working tree

```bash
git status
git diff
```

Summarise what is staged/unstaged so the commit message is accurate.

## Step 4 — Stage and commit

Stage only source files (never `.env`, secrets, or large binaries):

```bash
git add src/ public/ index.html vite.config.js package.json package-lock.json CLAUDE.md .claude/
```

Write a concise conventional-commit message that reflects the actual changes, then commit:

```bash
git commit -m "$(cat <<'EOF'
<type>: <summary of changes>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

Use these types: `feat`, `fix`, `perf`, `refactor`, `chore`, `docs`, `style`.

## Step 5 — Push

```bash
git push origin main
```

## Step 6 — Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes `dist/` to the `gh-pages` branch. The Puppeteer prerender failure is expected in WSL — the deploy still succeeds. GitHub Pages will reflect changes within a minute or two.

## Done

Report the final git log line and confirm the deploy succeeded.
