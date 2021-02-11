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
      message: 'Please provide instructions for testing.',
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

// This function writes the README file 
function writeToFile(fileName, data) {
    //Project title
    fs.writeFile(`${fileName}.md`,
    //Table of Contents 
    //Installation
    //Usage
    //License
    //Contributing 
    //Tests
    //Questions

`# **${data.title}

## **Description**
${data.description}

## **Table of Contents**
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## **Installation**
${data.installation}

## **Usage**
${data.usage}

## **License**
This project is covered under the ${data.license}.

## **Contributing**
${data.contributing}

## **Tests**
${data.tests}

## **Questions**
Please contact me if you have any questions.
<br>
Email: ${data.email}
<br>
GitHub: https://github.com/${data.github}`,
        (err) => err ? console.error(err) : 
        console.log("Your README file has been created!")
    );

}

// This will initialize the program 
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(answers.title, answers);
    });
}

// This function calls to initialize the README generator 
init();
