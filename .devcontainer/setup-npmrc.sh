#!/bin/bash
    envsubst < .npmrc.template > .npmrc
    echo "✅ .npmrc configured"