---
name: session-close
description: Run the end-of-session checklist for this project — verify build passes, commit all changes, and push to origin main. Use at the end of every working session.
disable-model-invocation: true
allowed-tools: Bash(npm run build), Bash(git status), Bash(git diff), Bash(git log*), Bash(git add*), Bash(git commit*), Bash(git push*)
---

# Session Close Checklist

Run the following steps in order. Stop and report if any step fails.

## Step 1 — Verify the build

```bash
npm run build
```

The Puppeteer prerender step will fail in WSL (missing Chrome libs) — that is expected and not an error. What matters is that the Vite build itself passes. If Vite errors, stop here and fix before proceeding.

## Step 2 — Check working tree

```bash
git status
git diff
```

Summarise what is staged/unstaged so the commit message is accurate.

## Step 3 — Stage and commit

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

## Step 4 — Push

```bash
git push origin main
```

## Done

Report the final git log line to confirm the push succeeded.
