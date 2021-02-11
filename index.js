var inquirer = require("inquirer")
var fs = require("fs")

inquirer

    .prompt([
        {
            type: "input",
            message: "What is your project's title?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your project's description?",
            name: "description",
        },
    ]).then((response) => {
        let template = `# tThis is a markdown file titled \n ${response.title} \n # Description is \n ${response.description}`
        fs.writeFile("readme.md", template, (err) => {
            if (err) console.log(err)
        })
    })