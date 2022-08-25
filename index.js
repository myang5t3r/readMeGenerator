// Modules
var inquirer = require('inquirer');
var fs = require('fs');
var generateMd = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'title',
     message: "What's your project title?",
   },
    {
     type: 'input',
     name: 'gitHubName',
     message: "What is your gitHub user name?",
   },
    {
     type: 'input',
     name: 'email',
     message: "What is your email address?",
   },
    {
     type: 'input',
     name: 'projectDescription',
     message: "Provide a description of what your project is about, be sure to include what technologies and why.",
   },
   {
    type: 'list',
    name: 'license',
    message: "Please select a license",
    choices: ['Apache 2.0','GNU GPLv3', 'MIT', 'ISC'],
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the steps to install your project?",
  },
  {
    type: 'input',
    name: 'usages',
    message: "Provide instructions and examples for how to use application.",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Include guidelines for how to contribute to project.",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Provide examples on how to test application",
  },
  ];
  

  inquirer.prompt(questions).then((answers) => {
    // console.log('\n:JSON-Object');
    // console.log(JSON.stringify(answers, null, '  '));
    writeToFile('test.txt', JSON.stringify(answers, null, '  '))
  });

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (e) =>
    e ?console.error(e) : console.log('Markdown file Created') )
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
 

