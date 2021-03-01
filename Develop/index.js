// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
let licenceName ="";
let licenceText = "";


// TODO: Create a function to initialize app
function init() {
      const sectionNames = ["project-title", "description", "installation-instructions", "usage-information", "contribution-guidelines", "test-instructions", "licence", "developer-contact-info"];


      //read & split base template text
      const baseTemplateText = fs.readFileSync("./data/baseTemplate.txt", "utf8");
      const readmeSections = baseTemplateText.split("~");
  
      inquirer
    .prompt([
      {
          type: "input",
          message: "what is your project's title?",
          name: "projectTitle",
        },
        {
          type: "input",
          message: "provide a brief description of your application",
          name: "description",
        },
        {
          type: "input",
          message: "enter installation instructions",
          name: "installation-instructions",
        }, 
        {
          type: "input",
          message: "enter usage information",
          name: "usage-information",
        }, 
        {
          type: "input",
          message: "list some guidelines for contribution to the project",
          name: "contribution-guidelines",
        }, 
        {
          type: "input",
          message: "provide some instructions for testing",
          name: "test-instructions",
        }, 
        {
          type: "rawlist",
          message: "choose licence",
          name: "licence",
          choices: ["Mit", "Apache", "Boost"]
        }, 
        {
          type: "input",
          message: "what's the name of your GitHub account?",
          name: "gitHubUsername",
        }, 
        {
          type: "input",
          message: "what's your email address?",
          name: "email",
        }, 
    ])
    .then((response) => {    
      let readmeText = "";
          
      readmeText += readmeSections[0].replace("[" + sectionNames[0] + "]", response.projectTitle);
      readmeText += readmeSections[1].replace("[" + sectionNames[1] + "]", response.description + "\r\n");

      //## Table of Contents for sections under title and description
      for (let i = 2; i < sectionNames.length; i++) {
        readmeText += "[" + sectionNames[i] + "](#" + sectionNames[i].toLowerCase() + ")" + "\r\n"; 
      }

      //create sections down to the licence
      for (let sectionIndex = 2; sectionIndex < readmeSections.length - 1; sectionIndex++) {
        readmeText += readmeSections[sectionIndex].replace("[" + sectionNames[sectionIndex] + "]", response[sectionNames[sectionIndex]]);
      }
  
      licenceName = response.licence;
      console.log(licenceName);
      console.log(response.licence === "Mit");
      licenceText = "";
  
      if (licenceName === "Mit") {
          licenceText = fs.readFileSync("./data/mitLicence.txt", "utf8");
      }
      else if (licenceName === "Boost") {
          licenceText = fs.readFileSync("./data/boostLicence.txt", "utf8");
      }
      else {
          licenceText = fs.readFileSync("./data/apacheLicence.txt", "utf8");
      }

      readmeText += readmeSections[6].replace("[" + sectionNames[6] + "]", licenceText);
  
      //contact section
      readmeText += readmeSections[7].replace("[gitHubUsername]", response.gitHubUsername);
      readmeText = readmeText.replace("[email]", response.email);
  
      //remove base template delimiters
      readmeText = readmeText.replace("~", "");
  
      //test output
      fs.writeFileSync("./readmeOut.md", readmeText);
  
    });
}

// Function call to initialize app
init();
