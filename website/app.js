/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();


// fetch project data
const fetchProjectData = async () => {
  try {
    const response = await fetch("/api/project-data");
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("fetchProjectData error: " + error);
  };
};


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
    // create elements and append to fragment
    const docFragment = document.createDocumentFragment();
    const dateDiv = document.createElement("div");
    const tempDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    dateDiv.id = "date";
    tempDiv.id = "temp";
    contentDiv.id = "content";
    dateDiv.innerHTML = `<strong>Entry date: </strong>${newDate}`;
    tempDiv.innerHTML = `<strong>Current temperature: </strong>${projectData.temperature} &#8451;`;
    contentDiv.innerHTML = `<strong>How you feel: </strong>${projectData.feelings}<hr />`;
    docFragment.appendChild(dateDiv);
    docFragment.appendChild(tempDiv);
    docFragment.appendChild(contentDiv);

    // update viewport
    const entryHolder = document.querySelector("div#entryHolder");
    entryHolder.insertBefore(docFragment, entryHolder.querySelector("div#date"));
  } catch (error) {
    console.log("updateElements error:  " + error);
  };
};


// POST form data to /api/project-data and call updateElements()
const postProjectDataAPI = async () => {
  // get element values
  const postData = {
    zip: document.querySelector("input#zip").value,
    feelings: document.querySelector("textarea#feelings").value
  };
  // use fetch to make POST if data present in both form fields
  // TODO: fix bug, if statement always true
  if (zip && feelings) {
    try {
      const url = "/api/project-data";
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        crendentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
      updateElements();
    } catch (error) {
      console.log("postProjectDataAPI error:  " + error);
    };
  };
};


function clickGenerateEvent() {
  const button = document.querySelector("button#generate");
  button.addEventListener("click", function () { setTimeout(postProjectDataAPI, 0) } );
};

clickGenerateEvent();