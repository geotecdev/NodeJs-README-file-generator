// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create a function to initialize app
function init() {
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
          name: "installInstructions",
        }, 
        {
          type: "input",
          message: "enter usage information",
          name: "usageInformation",
        }, 
        {
          type: "input",
          message: "list some guidelines for contribution to the project",
          name: "contributionInfo",
        }, 
        {
          type: "input",
          message: "provide some instructions for testing",
          name: "testInstructions",
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
      readmeText += readmeSections[0].replace("[projectTitle]", response.projectTitle);
      readmeText += readmeSections[1].replace("[description]", response.description);
      readmeText += readmeSections[2].replace("[installInstructions]", response.installInstructions);
      readmeText += readmeSections[3].replace("[usageInformation]", response.usageInformation);
      readmeText += readmeSections[4].replace("[contributionInfo]", response.contributionInfo);
      readmeText += readmeSections[5].replace("[testInstructions]", response.testInstructions);
  
      const licenceChoice = readmeSections[6].replace("[licence]", response.licence);
      let licenceText = "";
  
      if (licenceChoice === "Mit") {
          licenceText = fs.readFileSync("./data/mitLicence.txt", "utf8");
      }
      else if (licenceChoice === "Boost") {
          licenceText = fs.readFileSync("./data/boostLicence.txt", "utf8");
      }
      else {
          licenceText = fs.readFileSync("./data/apacheLicence.txt", "utf8");
      }
  
      readmeText += readmeSections[6].replace("licence", licenceText);
  
      readmeText += readmeSections[7].replace("[gitHubUsername]", response.gitHubUsername);
      readmeText += readmeSections[8].replace("[email]", response.email);
  
      //remove base template delimiters
      readmeText = readmeText.replace("~", "");
  
      //test output
      fs.writeFileSync("./readmeOut.md", readmeText);
  
    });
}

// Function call to initialize app
init();
