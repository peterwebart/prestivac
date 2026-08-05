#!/usr/bin/env bash
# Package for delivery. Includes .git deliberately — history is how state
# survives a container reset.
set -euo pipefail
cd /home/claude
rm -f /mnt/user-data/outputs/prestivac-content-platform.zip
zip -qr /mnt/user-data/outputs/prestivac-content-platform.zip prestivac \
  -x "prestivac/node_modules/*" "prestivac/.next/*"
echo "zip: $(du -h /mnt/user-data/outputs/prestivac-content-platform.zip | cut -f1)"
echo "git included: $(unzip -l /mnt/user-data/outputs/prestivac-content-platform.zip | grep -c '\.git/') entries"
