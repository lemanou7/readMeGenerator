// Declaring the dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");

//This will Prompt a series of questions to build the README.md file

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project: "
    },

    {
        type: "input",
        name: "installation",
        message: "Describe the installation process please ", 
    },

    {
        type: "input",
        name: "usage",
        message: "What the the purpose of the project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license will you use for this project? ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who is/are the contributor(s) of this project?"
    },
    {
        type: "input",
        name: "test",
        message: "Is there any test?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username:"
    },
    
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])
.then(
    (
        {
            title,description,installation,usage,
            license,contributing,test,
            username,email,
        }
    )=>{

        
const readmeTemplate = `

# ${title}

## Description
${description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credit](#credit)
* [License](#license)


# Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Test
${test}

# My Contact
* Github: https://github.com/${username}
* Email: ${email}`;

writeToFile(readmeTemplate); 

}
    
);

//function to create the readme file
function writeToFile(template){
//    fileName = fileName.toLowerCase().split(' ').join('');
    // let file = `${fileName.toLowerCase().split(" ").join('').md}`;
    fs.writeFile('./readme.md', template, (err) =>{
        if(err){
            console.log(err);
        }
        console.log("Readme build succesfully!");
    });
    
    
   
}

