// Setup empty JS object to act as endpoint for all routes
// let projectData = {};
let projectData = {zip: "1111", feelings: "powerful", temperature: 99};

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
  app.get("/api/test", test);
  app.get("/api/project-data", getProjectData);
  app.post("/api/project-data", postProjectData);
};

// take POST data, add to projectData global var
function postProjectData(request, response) {
  const postData = request.body;
  projectData = postData;
  response.send(postData);  // express converts obj to json, sets json content-type
  // console.log(`\nPOST: ${JSON.stringify(postData)}\nprojectData: ${JSON.stringify(projectData)}`);
};

// send projectData as JSON string
function getProjectData(request, response) {
  response.send(projectData);  // express converts obj to json, sets json content-type
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