const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

teamMembers = {}

function createManager() {
    //prompts to create the manager
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is your first name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is your last name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        },

    //.then(function() {store manager data into an object then call creatTeam function})    
    ]).then(function(answers) {
        const manager = new manager(answers.firstName, answers.lastName, answers.email, answers.officeNumber)
        teamMembers.push(manager);

        createTeam();
    });
    
};

function createTeam() {
    inquirer.prompt([
        {
            type: "checkbox",
            name: "teamMember",
            message: "What team member do you want to add?",
            choices: ["Engineer", "Intern", "None"]

        },
    ]).then(function(answers) {
        switch(answers.name) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "None":
                buildTeam();
                default:
                break;
        }
    });
};

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the team member's first name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the team member's last name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team member's email address?",
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is their GitHub username?",
        },
    ]).then(function(answers) {
        const engineer = new engineer(answers.firstName, answers.lastName, answers.email, answers.gitHub)
        teamMembers.push(engineer);

        createTeam();
    });
};

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the team member's first name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the team member's last name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team member's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is their school?",
        },
    ]).then(function(answers) {
        const intern = new intern(answers.firstName, answers.lastName, answers.email, answers.school)
        teamMembers.push(school);
        
        createTeam();
    });
};

createManager();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
