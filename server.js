const inquirer = require('inquirer'); 
const express = require ('express'); 
const mysql = require('mysql2'); 

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database 
const db = mysql.createConnection(
    {
      host: '127.0.01',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employee_db database.`)
  );


// WHEN I start the application
//THEN I am presented with the following OPTIONS: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

function runOptions() {
    inquirer.createPromptModule([
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
                "Update EMPLOYEE ROLE"

            ]
        }
    ])

};

// WHEN I choose to VIEW all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
      });
};


// WHEN I choose to VIEW all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
      });
};

// WHEN I choose to VIEW all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployee() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
      });
};

// WHEN I choose to ADD a department
// THEN I am prompted to enter the name of the department and that department is added to the database


// WHEN I choose to ADD a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database


// WHEN I choose to ADD an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database


// WHEN I choose to UPDATE an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
