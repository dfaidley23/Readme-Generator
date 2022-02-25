// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
   inquirer.prompt([
            {
                type: 'input',
                name: 'username',
                message: "What is your GitHub username?"
            },
            {
                type: 'input',
                name: 'repo',
                message: "What is the name of your GitHub repo?"
            },
            {
                type: "input",
                name: "title",
                message: "What is your Projects Title?"
            },
            {
                type: "input",
                name: "description",
                message: "What is your Projects Description?"
            },
            {
                type: "input",
                name: "tableOfContents",
                message: "What are your Projects Table Of Contents?"
            },
            {
                type: "input",
                name: "installation",
                message: "How do you install your Project?"
            },
            {
                type: "input",
                name: "usage",
                message: "How would someone use your Application?"
            },
            {
                type: "list",
                name: "license",
                message: "Which License would you like to use for your project?",
                choices: ["MIT", "ISC", "Apache", "No License"]
            },
            {
                type: "input",
                name: "constributions",
                message: "Who helped contribute to your Project?"
            },
            {
                type: "input",
                name: "test",
                message: "How do you test your Apps functionality?"
            },
            {
                type: "input",
                name: "questions",
                message: "How would someone contact you for questions? This could be your email address or Cell number or both."
            },
        ]).then(data => {console.table(data)
            fs.writeFile(fileName, `## Title: \n${data.title}\n## Description: \n${data.description}\n## Table of Contents: \n${data.tableOfContents}\n## Installation: \n${data.installation}\n## Usage: \n${data.usage}\n \n${generateMarkdown(data)}\n## Contributions: \n${data.constributions}\n## Test: \n${data.test}\n## Questions: \n${data.questions}\n${data.username}\n${data.repo}`, (err) => {
                if(err) throw err}
            )
        })

};


// TODO: Create a function to initialize app
function init() {
    writeToFile("./output/README.md", {
        username: "",
        repo: "",
        title: "",
        description: "",
        tableOfContents: "",
        installation: "",
        usage: "",
        license: "",
        constributions: "",
        test: "",
        questions: "",
    });
};


// Function call to initialize app
init();
