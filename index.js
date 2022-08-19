const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");


//constructors
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const Dist_Dir = path.resolve(__dirname, 'dist');
const outputhPath = path.join(Dist_Dir, 'index.html');
const render = require('./src/page-template');

//empty arrays to hold team members
const teamArr = [];
const idArr = [];

//start of the program

function initApp() {
    function addManager() {
        console.log("Start building the team profile");
        inquirer.prompt([
            {
                type: "input",
                message: "What is the name of the manager?",
                name: "managerName",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager's name";
                }

    },
            { 
                type: "input",
                message: "What is the manager's ID?",
                name: "managerId",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager's ID";
                }   
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "managerEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager's email";
                }
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "managerOfficeNumber",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager's office number";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    } 

    //addTeam function
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                message: "What type of team member would you like to add?",
                name: "addTeam",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(answers => {
            switch (answers.addTeam) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "I don't want to add any more team members":
                    generateHTML();
                    break;
            }
        }).catch(error => {
            console.log(error);
 
        });
    }
    //addEngineer function
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the name of the engineer?",
                name: "engineerName",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's name";
                }
            },
            {
                type: "input",
                message: "What is the engineer's ID?",
                name: "engineerId",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's ID";
                }
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's email";
                }
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username?",
                name: "engineerGithub",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's GitHub username";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        }).catch(error => {
            console.log(error);
        }
        );
    }
    //addIntern function
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the name of the intern?",
                name: "internName",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's name";
                }
            },
            {
                type: "input",
                message: "What is the intern's ID?",
                name: "internId",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's ID";
                }
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's email";
                }
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's school";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            addTeam();
        }).catch(error => {
            console.log(error);
        }
        );
    }
    //generateHTML function
    function generateHTML() {
        if (!fs.existsSync(Dist_Dir)) {
            fs.mkdirSync(Dist_Dir);
        }
        console.log("Generating Team Profile");
        fs.writeFileSync(outputhPath, render(teamArr), "utf-8");
        console.log("Team Profile Generated");
    }
    addManager();
}
initApp();
//end of the program

        