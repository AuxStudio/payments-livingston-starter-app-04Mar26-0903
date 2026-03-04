#!/bin/bash

LOG_FILE="/tmp/git-watcher.log"
POLL_INTERVAL=5  # seconds

echo "🔍 Git watcher started at $(date)" | tee -a $LOG_FILE

while true; do
  sleep $POLL_INTERVAL
  
  # Fetch without output
  git fetch origin main --quiet 2>/dev/null
  
  # Get commit hashes
  LOCAL=$(git rev-parse HEAD 2>/dev/null)
  REMOTE=$(git rev-parse origin/main 2>/dev/null)
  
  if [ "$LOCAL" != "$REMOTE" ]; then
    echo "[$(date)] 🔄 Changes detected: $LOCAL -> $REMOTE" | tee -a $LOG_FILE
    
    # Pull changes (this triggers Vite hot reload)
    git reset --hard origin/main 2>&1 | tee -a $LOG_FILE
    
    echo "[$(date)] ✅ Code updated successfully" | tee -a $LOG_FILE
  fi
done