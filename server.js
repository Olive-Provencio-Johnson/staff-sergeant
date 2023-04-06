const inquirer = require("inquirer");
require("console.table");
const db = require("./db/connection");

// WHEN I start the application
//THEN I am presented with the following OPTIONS: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const prompt = inquirer.createPromptModule();
function runOptions() {
  prompt([
    {
      type: "list",
      name: "options",
      message: "Please select from the list below",
      choices: [
        "View All DEPARTMENTS",
        "View All ROLES",
        "View All EMPLOYEES",
        "Add DEPARTMENT",
        "Add ROLE",
        "Add EMPLOYEE",
        "Update EMPLOYEE ROLE",
      ],
    },
  ]).then(function ({ options }) {
    console.log(options);
    switch (options) {
      case "View All DEPARTMENTS":
        viewDepartments();
        break;
      case "View All ROLES":
        viewRoles();
        break;
      case "View All EMPLOYEES":
        viewEmployee();
        break;
      case "Add DEPARTMENT":
        addDepartment();
        break;
      case "Add ROLE":
        addRole();
        break;
      case "Add EMPLOYEE":
        addEmployee();
        break;
      case "Update EMPLOYEE ROLE":
        updateEmployee();
        break;
    }
  });
}

// WHEN I choose to VIEW all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
  db.promise()
    .query("SELECT * FROM department")
    .then(([rows]) => {
      console.table(rows);
      runOptions();
    });
}

// WHEN I choose to VIEW all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    runOptions();
  });
}

// WHEN I choose to VIEW all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployee() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    runOptions();
  });
}

// WHEN I choose to ADD a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// !!!NEED to insert and PUSH into the department table!!!
function addDepartment() {
    // inquirer prompt to get the department name 
    // .then(answers => { INSERT INTO DEPARTMENT (d)
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    runOptions();
  });
}

// WHEN I choose to ADD a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// !!!NEED to insert and PUSH into the employee role table!!!
function addRole() {
    db.query("SELECT * FROM role", function (err, results) {
      console.table(results);
      runOptions();
    });
  }

// WHEN I choose to ADD an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// !!!NEED to insert and PUSH into the employee table!!!
function addEmployee() {
    db.query("SELECT * FROM role", function (err, results) {
      console.table(results);
      runOptions();
    });
  }

// WHEN I choose to UPDATE an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
// !!!NEED to insert and PUSH into the employee role table!!!
function updateEmployeeRole() {
    db.query("SELECT * FROM role", function (err, results) {
      console.table(results);
      runOptions();
    });
  }

runOptions();
