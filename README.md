# react-map-examples

Two rough examples of loading the Google Maps API script for a React component.

State changes over time to demonstrate new markers being added/removed without the map re-rendering.

### Map One

Uses (the slightly out dated) [react-async-script-loader](https://github.com/leozdgao/react-async-script-loader) to load the script, then pass down props by wrapping the map component.

### Map Two

Uses ye olde script tag creation and event listeners to update state when the scripts have loaded before initialising the map and rendering child markers.
