// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
function questionData(fieldName, isRequired, questionsSsv, optionsSsv = "") {
    this.fieldName = fieldName;
    this.isRequired = isRequired;
    this.questionsSsv = questionsSsv;
    this.optionsSsv = optionsSsv;
  
    const questions = questionsSsv.split(";");
    const options = optionsSsv.split(";");
}

function matchData(choiceName, pathOrTemplate) {
    this.choiceName = choiceName;
    this.pathOrTemplate =  pathOrTemplate;


}

//promptSession
function promptSession(questionDataList) {
  let readmeText = "";
  let qIndex = 0;

  const askQuestion = () => {
    let test = "";
    inquirer.prompt([
        {
            name: "answer", 
            message: "enter a string to add to concat readme Result"
        }
    ]).then((response) => {
        readmeText += response.answer + '\r\n';
      qIndex++;
      // limit recursion to 10 answers
      if (qIndex < 10) {
        // Ask the next question
        askQuestion ();
      }
      else {
        readmeText += response.answer + '\r\n';
        console.log(readmeText);
        return;
      }
    });
  };        
  askQuestion();                                                                                                            
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
  
  const questionDataList = [
    new questionData("projectTitle", true, "what is your project's title?"),
    new questionData("description", true, "enter a brief description of your application"),
    new questionData("installInstructions", false, "use codeblock (y/n)?;enter installation instructions"),
    new questionData("usageInformation", false, "use codeblock (y/n)?;enter usage information", ""),
    new questionData("contributionInfo", false, "list some guidelines for contribution to the project"),
    new questionData("testInstructions", false, "provide some instructions for testing"),
    new questionData("licence", false, "choose a licence", "MIT;Boost;Apache"),
    new questionData("gitHubUsername", true, "what is your username on GitHub?"),
    new questionData("email", true, "what is your email address?")
  ]

    //read & split base template text
    const baseTemplateText = fs.readFileSync("./data/baseTemplate.txt", "utf8");
    const readmeSections = baseTemplateText.split("~");

    //add the text of each document section to its matching question
    for (let i = 0; i < questionDataList.length; i++) {
      let qData = questionDataList[i];
      qData["docSectionText"] = readmeSections[i];
    }


    promptSession(questionDataList);
}

// Function call to initialize app
init();
