const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { run } = require("jest");

//Set object for standard employee questions
const employeeQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
    }
];





//     managerPrompt() {
//         return inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     message: `What is your manager's name?`,
//                     name: "name",
//                 },
//                 {
//                     type: "input",
//                     message: "What is your manager's id?",
//                     name: "id",
//                 },
//                 {
//                     type: "input",
//                     message: "What is your manager's email?",
//                     name: "email",
//                 },
//                 {
//                     type: "input",
//                     message: "What is your manager's office number?",
//                     name: "officeNumber",
//                 },
//             ]).then(({ manager }) => {
//                 this.manager.push(manager);
//                 return this.continuePrompt();
//             });
//     }

//     continuePrompt() {
//         return inquirer
//             .prompt([
//                 {
//                     type: "confirm",
//                     name: "addEmployee",
//                     message: "Would you like to add another Employee?",
//                 },
//             ]).then(({ addEmployee }) => {
//                 if (addEmployee) {
//                     return this.employeePrompt();
//                 }
//                 else {
//                     console.log("Rendering HTML Page");
//                     htmlPage = render(employeeList);

//                     fs.writeFile("output/team.html", html, function (error) {
//                         if (error) {
//                             return console.log(error);
//                         }
//                         console.log("Success!");
//                     });
//                 }
//             }  
//     }
// }
    
//     // const engineerQuestions = [
//     //     {
//     //         type: "input",
//     //         message: "What is your engineer's name?",
//     //         name: "name",
//     //     },
//     //     {
//     //         type: "input",
//     //         message: "What is your engineers's id?",
//     //         name: "id",
//     //     },
//     //     {
//     //         type: "input",
//     //         message: "What is your engineer's email?",
//     //         name: "email",
//     //     },
//     //     {
//     //         type: "input",
//     //         message: "What is your engineer's GitHub username?",
//     //         name: "github",
//     //     },
//     // ];

//     // const internQuestions = [
//     //     {
    //         type: "input",
    //         message: "What is your intern's name?",
    //         name: "name",
    //     },
    //     {
    //         type: "input",
    //         message: "What is your intern's id?",
    //         name: "id",
    //     },
    //     {
    //         type: "input",
    //         message: "What is your intern's email?",
    //         name: "email",
    //     },
    //     {
    //         type: "input",
    //         message: "What is your intern's school?",
    //         name: "school",
    //     },
    // ];

