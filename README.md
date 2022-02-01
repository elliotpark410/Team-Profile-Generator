# Team-Profile-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


The Team Profile Generator is a command-line application that takes in information about employees on a software engineering team, then generates an index.html webpage that displays summaries for each person. The index.html is dynamically generated with user input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Test-driven development done with [Jest package](https://www.npmjs.com/package/jest). The purpose of this application is so that developers can quickly create an engineering team summary for new projects. 

<br>


## Links

<!-- Deployed Link
> [https://elliotpark410.github.io/Team-Profile-Generator/](https://elliotpark410.github.io/Team-Profile-Generator/)
<br> -->

Github Repository
> [https://github.com/elliotpark410/Team-Profile-Generator](https://github.com/elliotpark410/Team-Profile-Generator)

<br>


## Table of Contents
  * [Getting-Started](#getting-started)
  * [Installation](#installation)
  * [Test-Instructions](#test-instructions)
  * [Technologies-Used](#technologies-used)
  * [Contribution-Guidelines](#contribution-guidelines)
  * [Cloning-Guidelines](#cloning-guidelines)
  * [Screenshots](#screenshots)
  * [GIF-of-Application](#gif-of-application)
  * [Code-Snippets](#code-snippets)
  * [Learning-Points](#learning-points)
  * [Authors](#authors)
  * [License-and-Acknowledgements](#license-and-acknowledgements)
  * [Questions](#questions)

<br>


## Getting-Started

To begin the application, use the following in command line:

```bash
node index.js
```
<br>


## Installation

1. You will need to install Node.js on your local machine. Here is a link below:

>https://nodejs.org/en/download/

<br>

2. Once you have downloaded Node.js, you will want to download node package manager (npm). In command line, you can enter:

>npm install -g npm

<br>

3. After installing npm, you have to initialize npm. In command line, you can enter:

>npm init -y

<br>

4. Now you have to install Inquirer.js which is one of the many node packages. In command line, you can enter:

>npm install inquirer

<br>

5. Additionally, if you would like to run tests, you have to install Jest.js which is one of the many node packages. In command line, you can enter:

>npm install jest

<br>


<!-- ## Prerequisites
Requires node.js, npm inquirer, and npm jest (optional)

<br> -->


## Test-Instructions

To test with jest (optional), use the following in command line:
```bash
npm run test 
```

<br>


## Technologies-Used

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [npm Inquirer](https://www.npmjs.com/package/inquirer)

<br>


## Contribution-Guidelines
To contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<br>


## Cloning-Guidelines

To install this code, please use [Github's guidlines to clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

<br>

Github repository:
>https://github.com/elliotpark410/Team-Profile-Generator

<br>


## Screenshots 

<br>
Screenshot of command line after running "node index.js"
<img src="images\index.js screenshot.png" title="node index.js screenshot" width = 700px>

<br>
<br>
Screenshot of README created (part 1)
<img src="images\1. README screenshot.png" title="README screenshot 1" width = 700px>

<br>
<br>
Screenshot of README created (part 2)
<img src="images\2. README screenshot.png" title="README screenshot 2" width = 700px>

<br>
<br>
Screenshot of README created (part 3)
<img src="images\3. README screenshot.png" title="README screenshot 3" width = 700px>

<br>
<br>


## GIF-of-Application

<img src="images\README Generator.gif" title="README generator" width = 700px>

<br>
<br>


## Code-Snippets

This code snippet shows how you can create an HTML content using jQuery and CSS Bootstrap

* jQuery allows user to dynamically generate HTML code within JavaScript with $(`EnterHTMLContentHere`);

* Bootstrap CSS has pre-built cards with CSS styling that you can grab from their website


```

var fiveDayForecastCard = $(`
    <div class="pl-3">
        <div class="card pl-3 pt-3 mb-3 bg-primary text-light" style="width: 12rem;>
            <div class="card-body">
                <h5>${dateFiveDayForecast}</h5>
                <p>${iconURLFiveDayForecast}</p>
                <p>Temperature: ${cityWeatherFiveDayForecast.temperature} °F</p>
                <p>Humidity: ${cityWeatherFiveDayForecast.humidity}\%</p>
            </div>
        </div>
    <div>
`);

$("#five-day-forecast").append(fiveDayForecastCard);

```

 <br>


## Learning-Points

* How to use jQuery API, and Bootstrap API

* How to fetch and parse data from OpenWeather API

* How to create dynamically generated HTML content in JavaScript with jQuery

* How to persist data with local storage

<br>


## Authors
 **1. Elliot Park** 

[https://github.com/elliotpark410](https://github.com/elliotpark410)
<br>

[https://www.linkedin.com/in/elliot-park/](https://www.linkedin.com/in/elliot-park/)

<br>


## License-and-Acknowledgements

This project is licensed under the MIT license via UC Berkeley's Extension Program

<br>

Additionally, big thank you to Jerome Chenette, Manuel Nunes, Vince Lee, and Hannah Folk for their support and guidance!

<br>


## Questions
If you'd like to learn more about this application, check out my Github profile: [https://github.com/elliotpark410](https://github.com/elliotpark410)

<br>

If you have any questions, please don't hesitate to email me at [elliotpark410@gmail.com](mailto:elliotpark410@gmail.com).

<br>
Copyright (c) 2022 Elliot Park



 
  

 



 



