// Including Employee.js module 
const Employee = require('./Employee')

// Create Intern class constructor and use extends to create a child class of a parent class (Employee)
class Intern extends Employee {
  constructor(name, id, email, school) {

    // Super keyword is used to access and call functions on an object's parent (Employee)
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
      return this.school;
  }

  getRole() {
      return "Intern";
  }
}


module.exports = Intern;