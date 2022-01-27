const Intern = require("../lib/Intern");


describe("Intern class", () => {
  it("should return an Intern object with parameters of string for name, number for id, string for email, and string for school", () => {
    // Act
    const intern = new Intern ('Elliot Park', 1, 'elliotpark410@gmail.com', 'UCSB');

    // Assert
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  })


  it("should be able to create a school with constructor arguments", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const school = 'UCSB'
    const intern = new Intern (name, id, email, school);

    // Assert
    expect(intern.school).toEqual(school)
  })


  it("getRole() should return 'Intern'", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const school = 'UCSB'
    const intern = new Intern(name, id, email, school);

    // Assert
    expect(intern.getRole()).toEqual("Intern")
  })
});