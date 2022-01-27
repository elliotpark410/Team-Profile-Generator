// Including Employee.js module 
const Employee = require('./Employee')

// Create Manager class constructor and use extends to create a child class of a parent class (Employee)
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {

    // Super keyword is used to access and call functions on an object's parent (Employee)
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
      return this.officeNumber;
  }

  getRole() {
      return "Manager";
  }
}


module.exports = Manager;