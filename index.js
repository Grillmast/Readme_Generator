const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Please provide a title for your project.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide the steps required to install this project, if any.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license for your project',
            choices: [
                "MIT",
                "Apache 2.0",
                "GPL 3.0",
                "BSD 3",
                "None"
            ],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'List how the user would interact with this project. How will they be using it?'
        },
        {
            type: 'input',
            name: 'features',
            message: 'List some features aobut this project here'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Let other developers know how they can contribute to your project if wanted.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you have tests for the application, please provide instructions on how to test and examples.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ];

  

    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    }

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README.md file....");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}


init();