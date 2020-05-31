const 


const questions = [
    //array of questions
    // What is Project title [string]
    // What is Description [string]
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



//packages: fs package, path, inquirer
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
