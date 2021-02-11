const inquirer = require('inquirer');
const fs = require('fs');

// Questions for the user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please give instructions for installation.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What are the instructions for usage?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Please provide instructions for testing',
      name: 'testing',
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like to use?",
      choices: [
          "MIT",
          "APACHE 2.0",
          "GPL 3.0",
          "BSD 3",
          "None"
      ],
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username.',
      name: 'github'
  },
  {
      type: 'input',
      message: 'Please enter your email address.',
      name: 'email'
  },
    ]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

// This will initialize the program 
function init() {
  inquirer
  .prompt(questions)
  .then(function(data) {
      console.log("Success!");
      writeToFile("README.md", generateMarkdown(data));
      console.log("Generating README")
  })
} 

// This function calls to initialize the README generator 
init();
