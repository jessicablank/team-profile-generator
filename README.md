# Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description:  
 A Command Line Interface Application to collect user information about a web-development team and generate an HTML page with contact details for each team member. 

    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

## Installation Instructions
All of the folders in this repository are required as well as npm node modules and npm inquirer.
`npm install`
`npm i inquirer --save` 

## Usage
[YouTube Video Guide](https://youtu.be/uHwMRGr__9I)

![Generated_HTML](https://github.com/jessicablank/team-profile-generator/blob/master/homepagescreenshot.PNG)

* Start the project in your terminal by entering `node app.js` and follow the prompts to enter team member data. 
* Once you indicate there are no more team members to enter, the application will generate a static HTML page with the team member data. 
* If you run the application again, the previous data will overwrite the `team.html` file! If you want to save your work, be sure to copy the entire output folder into another folder so the `style.css` and html background picture will persist. 

## Contributing
Create a pull request. 

## Tests
There are pre-coded tests utilizing npm jest built into the application. Simply type `npm run test` into the terminal to see those tests.
Other tests include: 
* WHEN the user starts the program, 
* THEN manager information is requested including an office phone. 
* WHEN the user selects to enter engineer data, 
* THEN user is prompted to enter information excluding a phone number but including a GitHub username. 
* WHEN the user selects to enter intern data, THEN the user is prompted to enter information excluding a phone number or GitHub account, but including a school name.
* WHEN the user selects no more employees to enter,
* THEN the application renders a stylized HTML file presenting cards with team member data.  

## Questions
You can reach the author, Jessica Blankemeier,  via [github](http://github.com/jessicablank) and [email](mailto:jessicablankemeier@gmail.com)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)

