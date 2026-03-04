#!/bin/bash
setsid npm run dev > /tmp/dev.log 2>&1 &
setsid bash .devcontainer/watch-repo.sh > /tmp/watch.log 2>&1 &
