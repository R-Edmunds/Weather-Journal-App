# Udacity Weather-Journal App Front-End Project

### Robin Edmunds 2019

## About

This is my first dive into node.js, the npm package manager and the express library.

The backend `server.js` serves static html, css and client js. The front-end `website/app.js` makes API calls to `server.js`, `server.js` then makes a call to the OpenWeatherMap API to fetch the current temperature of a specifed location. The front-end js code then makes another API call to `server.js`, and dynamically updates the elements of the webpage.

## Instructions

1. clone this repo
1. navigate to local repo directory within your CLI
1. run `npm install express body-parser cors node-fetch` to install dependencies
1. add your personal OpenWeatherMap API key to `api-creds.json_template`. Rename this file removing the ___template__ suffix
1. to start the server run `node ./server.js`
1. navigate to http://127.0.0.1:8080 in your favourite web-browser

## Plan

### Environment setup

1. Copy project starter files and init git
1. Modify colour scheme in css
1. Add express module import to server.js
1. Assign express function to "app" variable
1. Add cors and body-parser middleware module imports to server.js

### Third-party API

1. Register for API access at OpenWeatherMap.com
1. Store OpenWeatherMap URL and API key in `api-creds.json` file, add this file to .gitignore, and import the contents to const vars
1. Declare array `projectData` to act as endpoint (storage) for user posted data
1. Test that data can be successfully pulled from OpenWeatherMap API

### Routes and My API

1. Setup GET route for `/api/project-data` which returns the `projectData` object data as json string
1. Setup POST route `/api/project-data` which appends to the `projectData` object in memory

### Client-side

1. Write async function to fetch data from above endpoint
1. Write function to modify appropriate page elements with data received from API fetch, above
1. Write async function to POST data to the server endpoint
1. Add `click` EventListener to `Generate` button which calls POST function
