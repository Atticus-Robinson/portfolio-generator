const inquirer = require("inquirer");
/*
const fs = require("fs");
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name, github);

fs.writeFile("./index.html", pageHTML, (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete!");
});
*/

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username: ",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter a GitHub link: ");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an About section?',
      default: false
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself: ",
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    },
  ]);
};

const promptProject = (portfolioData) => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name: ");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter a description: ");
            return false;
          }
        }
      },
      {
        type: "checkbox",
        name: "link",
        message: "What did you build this project with?",
        choices: [
          "Javascript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Node",
          "MySQL",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project: ",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please enter a link: ");
            return false;
          }
        }
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
