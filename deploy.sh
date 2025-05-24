#!/bin/sh
set -e

echo "Deploying Next application ..."

# Enter maintenance mode
    # Update codebase
    git fetch origin main
    git reset --hard origin/main

    # Install dependencies 
    npm install --force
    
    npm run build   

echo "Next Application deployed!"

