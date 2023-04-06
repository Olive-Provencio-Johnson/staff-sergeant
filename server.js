const inquirer = require("inquirer");
require("console.table");
const db = require("./db/connection");

// start the command line application, and connect to the database with options to view view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
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

// view all current departments in the database
function viewDepartments() {
  db.promise()
    .query("SELECT * FROM department")
    .then(([rows]) => {
      console.table(rows);
      runOptions();
    });
}

// view all current employee roles in the database
function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    runOptions();
  });
}

// view all current employees in the database, including their roleID and managerID
function viewEmployee() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    runOptions();
  });
}

//add a department name to the database
function addDepartment() {
  // inquirer prompt to get the department name
  inquirer
    .prompt({
      type: "input",
      message: "Enter the department name:",
      name: "departmentName",
    })
    .then((answers) => {
      db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        [answers.departmentName],
        function (err, results) {
          if (err) throw err;
          console.log(
            `${answers.departmentName} department has been added successfully!`
          );
          runOptions();
        }
      );
    });
}

// add employee role to the database
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the role title:",
        name: "roleTitle",
      },
      {
        type: "input",
        message: "Enter the role salary:",
        name: "roleSalary",
      },
      {
        type: "input",
        message: "Enter the role's department id:",
        name: "departmentId",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answers.roleTitle, answers.roleSalary, answers.departmentId],
        function (err, results) {
          if (err) throw err;
          console.log(`${answers.roleTitle} has been added successfully!`);
          runOptions();
        }
      );
    });
}

// add employee to the database
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the employee's first name:",
        name: "firstName",
      },
      {
        type: "input",
        message: "Enter the employee's last name:",
        name: "lastName",
      },
      {
        type: "input",
        message: "Enter the employee's role id:",
        name: "roleId",
      },
      {
        type: "input",
        message: "Enter the employee's manager id:",
        name: "managerId",
      },
    ])
    .then((answers) => {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          answers.firstName,
          answers.lastName,
          answers.roleId,
          answers.managerId,
        ],
        function (err, results) {
          if (err) throw err;
          console.log(
            `${
              (answers.firstName, answers.lastName)
            } has been added successfully to the database!`
          );
          runOptions();
        }
      );
    });
}

// update employee role ID in the database
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Enter the employee ID for the employee you would like to update:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the New Role ID for the employee:",
        name: "roleId",
      },
    ])
    .then((answers) => {
      db.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [answers.roleId, answers.id],
        function (err, results) {
          if (err) throw err;
          console.log(
            `employee ${answers.id} has been successfully updated in the database!`
          );
          runOptions();
        }
      );
    });
}

runOptions();
