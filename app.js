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


//Set variable for array of employee answer data
const employeeList = [];

//Also variable for htmlPage render function to work
let htmlPage;


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

// Always prompt for a manager to start
employeePrompt("Manager");

//switch questions based on employee type
function employeePrompt(employeeType) {
    const typeQuestions = [...employeeQuestions];

    switch (employeeType) {
        case "Manager":
            typeQuestions.push({
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
            });
            break;
        case "Engineer":
            typeQuestions.push({
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "github",
            });
            break;
        case "Intern":
            typeQuestions.push({
                type: "input",
                message: "What is the intern's school?",
                name: "school",
            });
            break;
        default:
            break;
    }
}
//Keep asking if the user wants to add another employee 
employeeQuestions.push({
    type: "list",
    message: "Do you want to add another employee?",
    name: "employeeType",
    choices: [
        "Engineer",
        "Intern",
        "None"
    ],
})

//push the user answers into the employeeList object
inquirer.prompt(employeeQuestions).then(function (answers) {
    switch (employeeType) {
        case "Manager":
            employeeList.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
            break;
        case "Engineer":
            employeeList.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
            break;
        case "Intern":
            employeeList.push(new Intern(answers.name, answers.id, answers.email, answers.school))
            break;
        default:
            break;
    }

    //Once the user selects "none", move to render the html page
    if (answers.employeeType !== "None") {
        employeePrompt(answers.employeeType);
    }
    else {
        // call html renderer to write the final html file in the output folder
        console.log("Calling render");
        htmlPage = render(employeeList);

        fs.writeFile("output/team.html", htmlPage, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("Success! See your team html page");
        });
    }
});




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

