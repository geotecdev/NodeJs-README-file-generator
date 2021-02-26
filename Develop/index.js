// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    
    //project title
    //description
    //installation instructions
    //usage information
    //countribution guidelines
    //test instructions
    //choose licence
    //github user name
    //email address

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
        type: "editor",
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
    console.log("projectTitle");
    console.log(response.projectTitle);
    console.log("description");
    console.log(response.description);
    console.log("installInstructions");
    console.log(response.installInstructions);
    console.log("usageInformation");
    console.log(response.usageInformation);
    console.log("contributionInfo");
    console.log(response.contributionInfo);
    console.log("testInstructions");
    console.log(response.testInstructions);
    console.log("licence");
    console.log(response.licence);
    console.log("gitHubUsername");
    console.log(response.gitHubUsername);
    console.log("email");
    console.log(response.email);
    

  });

}

// Function call to initialize app
init();
