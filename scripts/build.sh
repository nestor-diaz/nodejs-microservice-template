#!/bin/bash

set -e
set -v

# Clean dist folder
rm -rf dist

# Create dist folder
mkdir dist

# Copy package.json to install prod dependencies
cp package.json dist/

# Install prod dependencies
npm install --production --prefix dist

# Copy source to dist folder
cp -r src dist/

# Copy main file to dist folder
cp main.js dist/

# Copy config files to dist folder
cp -r config dist/
