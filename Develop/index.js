// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

//promptSession
function promptSession() {
  let readmeText = "";
  let qIndex = 0; // Store the number of wrong answers
  const askQuestion = () => {
    inquirer.prompt([{name: "answer", message: "enter a string to add to concat readme Result"}]).then((response) => {
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
    
    //read & split base template text
    const baseTemplateText = fs.readFileSync("./data/baseTemplate.txt", "utf8");
    const readmeSections = baseTemplateText.split("~");

    const promptData = [
        {
            valueName: "projectTitle",
            question: "Enter the title of your application"
        },
        {
            valueName: "description",
            question: "Provide a brief description of what the app does"
        }
    ];

    //promptSession(promptData);

    promptSession();
}

// Function call to initialize app
init();
