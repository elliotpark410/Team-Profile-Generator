const Engineer = require("../lib/Engineer");


describe("Engineer class", () => {
  it("should return an Engineer object with parameters of string for name, number for id, string for email, and string for github", () => {
    // Act
    const engineer = new Engineer ('Elliot Park', 1, 'elliotpark410@gmail.com', 'elliotpark410');

    // Assert
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  })


  it("should be able to create a github username with constructor arguments", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const github = 'elliotpark410'
    const engineer = new Engineer (name, id, email, github);

    // Assert
    expect(engineer.github).toEqual(github)
  })


  it("getRole() should return 'Engineer'", () => {
    // Act
    const name = 'Elliot';
    const id = 1;
    const email = 'elliotpark410@gmail.com'
    const github = 'elliotpark410'
    const engineer = new Engineer(name, id, email, github);

    // Assert
    expect(engineer.getRole()).toEqual("Engineer")
  })
});