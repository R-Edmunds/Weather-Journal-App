// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port, listener);

function listener(request, response) {
  app.get("/api/project-data", test);
};

async function test(request, response) {
  const owm = require("./api-creds.json");
  const data = await owmQuery("London,UK");
  response.send(data);  // express converts obj to json, sets json content-type
};

// return OpenWeatherMap query response
async function owmQuery(query) {
  try {
    const owm = require("./api-creds.json");
    const response = await fetch(`${owm.baseUrl}q=${query}&appid=${owm.apiKey}`);
    const body = response.json();
    return body;
  } catch(error) {
    console.log("owmQuery error: " + error);
  }
};