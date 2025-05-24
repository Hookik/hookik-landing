#!/bin/sh
set -e

echo "Deploying Next application ..."

# Enter maintenance mode
    # Update codebase
    git fetch origin staging
    git reset --hard origin/staging

    # Install dependencies 
    npm install --force
    
    npm run build   

echo "Next Application deployed!"

