#!/usr/bin/env bash
# Deterministic recovery after a container reset. One command, idempotent.
set -euo pipefail
ZIP=/mnt/user-data/outputs/prestivac-content-platform.zip
DEST=/home/claude

if [ -d "$DEST/prestivac/src" ]; then
  echo "project already present — skipping unzip"
else
  echo "restoring from $ZIP"
  cd "$DEST" && unzip -q "$ZIP"
fi

cd "$DEST/prestivac"
command -v pnpm >/dev/null 2>&1 || npm i -g pnpm@10.15.1 --silent
[ -d node_modules ] || pnpm install --prefer-offline

echo "--- STATE ---"
echo "pnpm:     $(pnpm --version)"
echo "guides:   $(grep -c 'slug: "poussiere' src/lib/data/fr-materials.ts) French material guides"
echo "commits:  $(git log --oneline 2>/dev/null | wc -l)"
git log --oneline 2>/dev/null | head -5 || echo "  (no git history — zip predates the .git fix)"
echo "uncommitted: $(git status --short 2>/dev/null | wc -l) files"
echo
echo "Now read STATE.md before doing any work."
