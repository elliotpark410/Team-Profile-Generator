// Node package Inquirer to capture user input in command line
const inquirer = require("inquirer");

// Node package for reading and writing files
const fs = require("fs");

// Include Manager, Engineer, and Intern modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import generateHTML.js to render dynamic cards with inquirer prompt answers
const generateHTML = require("./src/generateHTML");

// Create empty array to include team members. Used as a placeholder to determine which cards to generate
const teamArray = [];

// Create array with first inquirer prompt question. Used to determine subsequent questions
const teamMemberType = [
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "teamMember",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ];

// Create array with prompt questions for Manager, Engineer, and Intern
const questions = {

  Manager: [
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a name.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "id",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an id.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team manager's email?",
      name: "email",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an email.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a phone number.";
        }
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"],
    },
  ],

  Engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a name.";
        }
      },
    },
    {
      type: "input",
      message: "What is the engineer's id?",
      name: "id",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an id.";
        }
      },
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an email.";
        }
      },
    },
    {
      type: "input",
      message: "What is the engineer's Github username?",
      name: "github",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a github username.";
        }
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"],
    },
  ],

  Intern: [
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a name.";
        }
      },
    },
    {
      type: "input",
      message: "What is the intern's id?",
      name: "id",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an id.";
        }
      },
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an email.";
        }
      },
    },
    {
      type: "input",
      message: "What is the intern's school name?",
      name: "school",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a school.";
        }
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"],
    },
  ],
};


// Create function to initialize prompt
function init() {

    // Run teamMemberType question first 
  inquirer.prompt(teamMemberType).then((answer) => {

    //   If teamMemberType is 'Manager', then execute inquirer prompt questions for manager
    if (answer.teamMember === "Manager") {
      inquirer.prompt(questions.Manager).then((answer) => {

        //   Create new manager object with answers selected from inquirer prompt
        const manager = new Manager(
          answer.name,
          answer.id,
          answer.email,
          answer.officeNumber
        );

        // push manager object to teamArray to generate cards
        teamArray.push(manager);

        // if user answers "yes" that they would like to add another team member, start the inquirer prompt all over again
        if (answer.addTeamMember === "yes") {
          init();

        //   if user answers "no" we push teamArray to generateCard function
        } else {
          generateCard(teamArray);
        }
      });

     //   If teamMemberType is 'Engineer', then execute inquirer prompt questions for engineer 
    } else if (answer.teamMember === "Engineer") {
      inquirer.prompt(questions.Engineer).then((answer) => {

        //   Create new engineer object with answers selected from inquirer prompt
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );

        // push engineer object to teamArray to generate cards
        teamArray.push(engineer);

         // if user answers "yes" that they would like to add another team member, start the inquirer prompt all over again
        if (answer.addTeamMember === "yes") {
          init();
         //   if user answers "no" we push teamArray to generateCard function
        } else {
          generateCard(teamArray);
        }
      });


      //   If teamMemberType is 'Intern', then execute inquirer prompt questions for intern 
    } else if (answer.teamMember === "Intern") {
      inquirer.prompt(questions.Intern).then((answer) => {

        // Create new intern object with answers selected from inquirer prompt
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        
        // push intern object to teamArray to generate cards
        teamArray.push(intern);

        // if user answers "yes" that they would like to add another team member, start the inquirer prompt all over again
        if (answer.addTeamMember === "yes") {
          init();

        //   if user answers "no" we push teamArray to generateCard function
        } else {
          generateCard(teamArray);
        }
      });
    }
  });
}

// call initialize function 
init();



// Create function to generateCards for the objects that are in the teamArray
function generateCard(teamArray) {
  // generate => string
  // take tstring and pass it to writeFile
  writeToFile(generateHTML(teamArray));
  // take return string
  // create file
  // writeToFile
}


// Create function for fs.writeFile so it creates a new index.html with dynamically generated data using  function "generateHTML(teamArray)"
function writeToFile(employeeData) {
  fs.writeFile("./dist/index.html", employeeData, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created");
    }
  });
}
