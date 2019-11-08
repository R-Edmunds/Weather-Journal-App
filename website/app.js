/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// fetch project data
const fetchProjectData = async () => {
  try {
    const response = await fetch("/api/project-data");
    const body = await response.json();
    console.log("fetchProjectData, success: " + JSON.stringify(body));
    return body;
  } catch (error) {
    console.log("fetchProjectData, failure: " + error);
  };
};

// fetchProjectData();


// call fetchProjectData() and update respective page elements
const updateElements = async () => {
  try {
    // clear input fields
    const inputZip = document.querySelector("input#zip");
    const inputFeelings = document.querySelector("textarea#feelings");
    inputZip.value = "";
    inputFeelings.value = "";
    // pull data from /api/project-data
    const projectData = await fetchProjectData();
    // create elements in fragment
    const docFragment = document.createDocumentFragment();
    const dateDiv = document.createElement("div");
    const tempDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    dateDiv.id = "date";
    tempDiv.id = "temp";
    contentDiv.id = "content";
    dateDiv.innerHTML = newDate;
    tempDiv.innerHTML = projectData.temperature;
    contentDiv.innerHTML = projectData.feelings;
    docFragment.appendChild(dateDiv);
    docFragment.appendChild(tempDiv);
    docFragment.appendChild(contentDiv);

    const entryHolder = document.querySelector("div#entryHolder");
    entryHolder.appendChild(docFragment);

    // console.log(projectData);
  } catch (error) {
    console.log("updateElements error:  " + error);
  };
};

function clickGenerateEvent() {
  const button = document.querySelector("button#generate");
  button.addEventListener("click", function () { setTimeout(updateElements, 0) } );
};

clickGenerateEvent();