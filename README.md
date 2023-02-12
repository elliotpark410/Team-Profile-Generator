# Team-Profile-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


The Team Profile Generator is a command-line application that takes in information about employees on a software engineering team, then generates an index.html webpage that displays summaries for each person. The index.html is dynamically generated with user input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Test-driven development is done with [Jest package](https://www.npmjs.com/package/jest). The purpose of this application is so that developers can quickly create an engineering team summary for new projects. 

<br>

Deployed Sample HTML
> [https://elliotpark410.github.io/Team-Profile-Generator/](https://elliotpark410.github.io/Team-Profile-Generator/)
<br>



## Table of Contents
  * [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Test Instructions](#test-instructions)
  * [Technologies Used](#technologies-used)
  * [Screenshots](#screenshots)
  * [GIF of Application](#gif-of-application)
  * [Code Snippets](#code-snippets)
  * [Learning Points](#learning-points)

<br>


## Getting Started

To begin the application, use the following in command line:

```bash
node index.js
```
<br>


## Installation

1. [Download Node.js](https://nodejs.org/en/download/)

<br>

2. Install node package manager (npm)

`
npm install -g npm
`

<br>

3. install dependencies inquirer and jest

`
npm install inquirer
`

<br>


## Test Instructions

To test with jest (optional)
```bash
npm run test 
```

<br>


## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap CSS](https://getbootstrap.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [npm Inquirer](https://www.npmjs.com/package/inquirer)
* [npm Inquirer](https://www.npmjs.com/package/jest)

<br>

## Screenshots 

<br>
Screenshot of jest in command line after running "npm run test" for test-driven development
<img src="Images\Jest TDD Success screenshot.png" title="Jest Test-Driven Development Success screenshot" width = 700px>

<br>
<br>
Screenshot of inquirer in command line after running "node index.js" to begin application
<img src="Images\Inquirer Command Line Prompt screenshot.png" title="Inquirer Command Line Prompt screenshot" width = 700px>

<br>
<br>
Screenshot of dynamically generated index.html
<img src="Images\Generated HTML Team Page screenshot.png" title="Dynamically Generated HTML Team Page screenshot" width = 700px>

<br>
<br>


## GIF of Application

<img src="Images\Team Profile Generator.gif" title="Team Profile Generator" width = 500px>

[GIF of Application](https://drive.google.com/file/d/1kdESWAR1hzb1fa7N0LL4Lrgjwg3YPNjN/view)

<br>

## Code Snippets

This code snippet shows how you can create dynamically generated HTML file using node.js

* function writeToFile(employeeData) utilizes a node module called "fs", i.e. file system, which allows us to access physical file systems. "fs.writeFile()" method is used to asynchonously write specified data to a file

* function writeToFile(employeeData) creates a file "./dist/index.html" and writes data "employeeData which is dynamically generated HTML using generateHTML.js and teamArray"

* If there is an error during the file writing process, then it will console the error. If there is no error, then it will console "Your team profile has been created"

```

function generateCard(teamArray) {
  writeToFile(generateHTML(teamArray));
}

function writeToFile(employeeData) {
  fs.writeFile("./dist/index.html", employeeData, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created");
    }
  });
}

```

 <br>


## Learning Points

* How to do test-driven development with npm Jest.js

* How to create command line prompts with npm Inquirer.js

* How to create files of dynamically generated HTML content with fs.writeFile() method

* How to create a new instance of an object using Object Oriented Programming e.g. 
```
const John = new Student('John', 'Appleseed', '30');
```

<br>


## Author
 **1. Elliot Park** 

[github](https://github.com/elliotpark410)

<br>

[LinkedIn](https://www.linkedin.com/in/elliot-park/)

<br>

[email](mailto:elliotpark410@gmail.com)

<br>



 
  

 



 



