// Node package Inquirer to capture user input in command line
const inquirer = require('inquirer');




// Include Employee, Manager, Engineer, and Intern modules
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create empty array to include team members
const teamArray = [];

// Create questions object with Manager, Engineer, and Intern as keys. Each key (Manager, Engineer, and Intern) is an array with nested objects for prompt
const questions = {
  Manager: [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter a name." }
        },
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "id",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter an id." }
        },
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "email",
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter an email.' }
        },
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter a phone number." }
        },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"]
    },
  ],


  Engineer: [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter a name." }
        },
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "id",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter an id." }
        },
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter an email.' }
        },
    },
    {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "github",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter a github username." }
        },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"]
    },
  ],


  Intern: [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter a name." }
        },
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "id",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter an id." }
        },
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter an email.' }
        },
    },
    {
        type: "input",
        message: "What is the intern's school name?",
        name: "school",
        validate: (input) => {
            if (input) {
                return true
            } else { return "Please enter a school." }
        },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"]
    },
  ],
}


const teamMemberType = [
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "teamMember",
      choices: ["Manager", "Engineer", "Intern"]
    }
];


function init() {
  inquirer.prompt(teamMemberType)
    .then(answer => {
        if (answer.teamMember === 'Manager') {
            inquirer.prompt(questions.Manager) 
                .then(answer => {
                    const manager = new Manager
                        (
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );
                    

                    teamArray.push(manager);
                    if (answer.addTeamMember === 'yes') {
                        init();
                    } else {
                        // 
                    }
                });

            
        } else if (answer.teamMember === 'Engineer') {
            inquirer.prompt(questions.Engineer) 
                .then(answer => {
                    const engineer = new Engineer
                        (
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );
                    

                    teamArray.push(engineer);
                    if (answer.addTeamMember === 'yes') {
                        init();
                    } else {
                        // 
                    }
                })
            
        } else if (answer.teamMember === 'Intern') {
            inquirer.prompt(questions.Intern) 
                .then(answer => {
                    const intern = new Intern
                        (
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );
                    

                    teamArray.push(intern);
                    if (answer.addTeamMember === 'yes') {
                        init();
                    } else {
                        // 
                    }
                })
        }   
    })
}

init()

