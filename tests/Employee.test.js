const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("should return an employee object with parameters of string, number, and string", () => {
    // Act
    const employee = new Employee('Elliot Park', 1, 'elliotpark410@gmail.com');

    // Assert
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  })

  it("should be able to create a name with constructor arguments", () => {
    // Act
    const name = 'Elliot';
    const employee = new Employee(name);

    // Assert
    expect(employee.name).toEqual(name)
  })


  it("should be able to create an id with constructor arguments", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const employee = new Employee(name, id);

    // Assert
    expect(employee.id).toEqual(id)
  })


  it("should be able to create an email with constructor arguments", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const employee = new Employee(name, id, email);

    // Assert
    expect(employee.email).toEqual(email)
  })


  it("getName() should return the name entered", () => {
    // Act
    const name = 'Elliot';
    const employee = new Employee(name);

    // Assert
    expect(employee.getName()).toEqual(name)
  })

  
  it("getId() should return the id entered", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const employee = new Employee(name, id);

    // Assert
    expect(employee.getId()).toEqual(id)
  })


  it("getEmail() should return the email entered", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com';
    const employee = new Employee(name, id, email);

    // Assert
    expect(employee.getEmail()).toEqual(email)
  })


  it("getRole() should return 'employee'", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com';
    const employee = new Employee(name, id, email);

    // Assert
    expect(employee.getRole()).toEqual("Employee")
  })
});