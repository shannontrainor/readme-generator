//require packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")


//List of questions on command
const questions = [
    {
        type: "input",
        name: "github username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "project title",
        message: "What is the title of your repo?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your repo"
    },
    {
        type: "input",
        name: "installation",
        message: "What command will be run to install your repo?",
        default: "npm i"    //will default answer
    },
    {
        type: "input",
        message: "test",
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
        name: "project URL",
        message: "Provide a URL for your GitHub profile picture"
    }

    //array of questions
    // What is Table of Contents[array:string, or object]
    // What is Installation process/how to install [string]
    // Usage [string]
    // What is License string
    // Who are contributors []
    // What are your Tests [string]
    // What are your Questions [array:string]
        // User GitHub profile picture [string - img url]
        // User GitHub email [string]
];

function writeToFile(fileName, data) {
    // where file will be placed
    //create file with name fileName
    //write to file fileName data
}

function init() {
    //initialize anything needed

}

init();



//questions: 
    //github username
    // email
    // url for project
    // project name
    // description
    // what kind of license (list of options)
        //choices key
    // command - attach default answer (npm i will be assigned)
    // command run to run tests (default answer npm test) 
        // default key
// function - fs write to file
    //1. file name writing to (ReadMe.md)
    //2. what we are writing to file
        //call function to organize ReadME
        // respond to function with what we are writing to file
    
//create array of questions
    //pass array inside inquirer.promt
    //.then
// pass string to name file
//pass function for responses to questions to gen Readme
//return final product
//console.log(data)
//writeFileSync 
