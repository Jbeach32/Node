// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: "What is the title of your README?"
},
{
    type: 'input',
    name: 'description',
    message: "Please provide what you would like your description section to say:"
},
{
    type: 'input',
    name: 'installation',
    message: "How should users install your application?"
},
{
    type: 'input',
    name: 'usage', 
    message: "How should users use your application?"
},
{
    type: 'list',
    name: 'license',
    message: "Please select a License.",
    choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3']
},
{
    type: 'input',
    name: 'contributing',
    message: "Are there any contributors to your application?"
},
{
    type: 'input',
    name: 'tests',
    message: "Please display any tests required to run this application."
},
{
    type: 'input',
    name: 'questions', 
    message: "Please type any quesyions you may have and add you Github or email in the following questions so I can respond."
},
{
    type: 'input',
    name: 'githubUsername', 
    message: "Please provide your GitHub username:"
},
{
    type: 'input',
    name: 'email', 
    message: "Please provide your email address:"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {function writeToFile(fileName, data) {
    const readmeContent = `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}

    ## Credits
    ${data.contributing}
  
    ## License
    ![License](<URL to License Badge>)
    ${data.license}
  
    `;
  
    // Write the content to the specified file
    fs.writeFileSync(fileName, readmeContent);
  }}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeContent = generateMarkdown(data); 
        fs.writeFileSync('README.md', readmeContent);
        console.log('README.md generated successfully!');
      });
}

// Function call to initialize app
init();
