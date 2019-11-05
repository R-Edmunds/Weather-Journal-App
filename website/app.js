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

fetchProjectData();
