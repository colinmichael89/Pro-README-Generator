// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateREADME");

// Array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a short description of your project.",
      name: "description",
    },
    {
      type: "list",
      message: "What license should your project have?",
      name: "license",
      choices: [
        "MIT",
        "Unlicense",
        "Apache 2.0",
        "GNU v3",
        "BSD 3-Clause",
        "Mozilla Public License 2.0",
      ],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
      default: "npm i",
    },
    {
      type: "input",
      message: "What command should be used to run tests?",
      name: "tests",
      default: "npm run test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repository?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repository?",
      name: "contribute",
    },
  ])
  .then((answers) => {
    fs.writeFile("README.md", generateREADME(answers), (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
