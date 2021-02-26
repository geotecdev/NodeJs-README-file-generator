// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

//promptAction ctor
function promptAction(valueName, message) {
    this.valueName = valueName;
    this.message = message;
    //
    this.execute = function() {
      inquirer.prompt([{
        name: this.valueName,
        type: "input",
        message: this.message
      }])
      .then((answer) => {
        return answer[this.valueName];
      });
    }
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    
    //read & split base template text
    const baseTemplateText = fs.readFileSync("./data/baseTemplate.txt", "utf8");
    const readmeSections = baseTemplateText.split("~");

    const promptActions = [
        new promptAction("projectTitle", "Enter the title of your application"),
        new promptAction("description", "Provide a brief description of what the app does")
    ];

    for (let i = 0; i < promptActions.length; i++) {
        process() {
            
        }

        function getPaResult() {
            let paResult = promptActions[i].execute()
        }        
        .then((paResult) => {
            console.log(paResult);
        });        
      }
}

// Function call to initialize app
init();
