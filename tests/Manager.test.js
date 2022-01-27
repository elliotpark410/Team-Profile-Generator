const Manager = require("../lib/Manager");


describe("Manager class", () => {
  it("should return a Manager object with parameters of string for name, number for id, string for email, and string for office number", () => {
    // Act
    const manager = new Manager('Elliot Park', 1, 'elliotpark410@gmail.com', '949-533-5643');

    // Assert
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
  })


  it("should be able to create an office number with constructor arguments", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const officeNumber = '949-533-5643'
    const manager = new Manager(name, id, email, officeNumber);

    // Assert
    expect(manager.officeNumber).toEqual(officeNumber)
  })


  it("getRole() should return 'Manager'", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const officeNumber = '949-533-5643'
    const manager = new Manager(name, id, email, officeNumber);

    // Assert
    expect(manager.getRole()).toEqual("Manager")
  })
});