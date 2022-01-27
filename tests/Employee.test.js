const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("should return an employee object", () => {
    // Act
    const employee = new Employee('Elliot', 1, 'elliotpark410@gmail.com');

    // Assert
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  })
});