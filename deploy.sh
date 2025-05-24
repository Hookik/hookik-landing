#!/bin/sh
set -e

echo "Deploying Next application ..."

# Use version Node 18.18.0
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm use 18.18.0

# Enter maintenance mode
    # Update codebase
    git fetch origin main
    git reset --hard origin/main

    # Install dependencies 
    npm install --force
    
    npm run build   

echo "Next Application deployed!"

