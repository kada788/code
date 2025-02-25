# Hello World Chrome Extension

A simple Chrome extension that displays "Hello World" and can change webpage background color.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select this directory

## Usage

1. Click the extension icon in your Chrome toolbar to see "Hello World" message
2. Click the "Change Background" button to turn the current webpage's background green

## Files
- `manifest.json`: Extension configuration
- `popup.html`: The popup that displays when clicking the extension icon
- `popup.js`: Handles button click events
- `content.js`: Contains the logic for changing webpage background
