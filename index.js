// Node fs (file system) module to read, create update, delete, and rename files
const fs = require('fs');

// Node path module to interact with file paths
const path = require('path');

// Node package Inquirer to capture user input in command line

const Employee = require('.lib/Employee');
const Manager = require('.lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');


const questions = {
  Manager: [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's name." }
        },
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's id." }
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else { return 'Please enter a valid email address.' }
        },
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's office number." }
        },
    },
    {
        type: "list",
        name: "addNew",
        message: "Do you want to add another employee",
        choices: ["yes", "no"]
    }
]