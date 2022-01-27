// Including Employee.js module 
const Employee = require('./Employee')

// Create Engineer class constructor and use extends to create a child class of a parent class (Employee)
class Engineer extends Employee {
  constructor(name, id, email, github) {

    // Super keyword is used to access and call functions on an object's parent (Employee)
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
      return this.github;
  }

  getRole() {
      return "Engineer";
  }
}


module.exports = Engineer;