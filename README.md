# Weather-Journal App Project


## Overview

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 


## Instructions

This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.


## Extras

If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


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

1. Setup GET route for `/api/projectData` which returns the `projectData` object data as json string
1. Setup POST route `/api/projectData` which appends to the `projectData` object in memory

### Client-side

1. Write async function to fetch data from above endpoint
1. Write function to modify appropriate page elements with data received from API fetch, above
1. Write async function to POST data to the server endpoint
1. Add `click` EventListener to `Generate` button which calls POST function
