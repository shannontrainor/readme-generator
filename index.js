//require packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")


//List of questions for user to answer
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your repo?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your repo:"
    },
    {
        type: "input",
        name: "installation",
        message: "What command will be run to install your repo?",
        default: "npm i"    //will default answer
    },
    {
        type: "input",
        name: "test",
        message: "What command will be run to test your repo?",
        default: "npm test"     //will default answer
    },
    {
        type: "input",
        name: "usage",
        message: "What is the use of this repo?"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: [      //will provide list of options for user to choose
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "What will the user need to know about contributing to this repo?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address?"
    },
    {
        type: "input",
        name: "url",
        message: "Provide a URL for your GitHub project"
    }

    // What is Table of Contents[array:string, or object]
];



function writetoFile(fileName, data) {
    //writeFileSync to write data to fileName
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);  //my tutor showed me this portion and I am not sure I 100% understand it  
    // where file will be placed
}

function init() {
        //pass array of questions inside inquirer.prompt
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log(inquirerResponses);
            //writetoFile ReadMe.md
            //call function to organize readme
            //respond to function with what we are writing to file
        writetoFile("README2.md", generateMarkdown({...inquirerResponses}));
            //pass function for responses to questions to gen Readme

    });
  
}

init();     //return final product

//console.log(data)
    
