DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 

USE employee_db; 

CREATE TABLE department (
id: INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
department_name: VARCHAR(30) NOT NULL, 

);


CREATE TABLE role (
id: INT PRIMARY KEY
title: VARCHAR(30) to hold role title
salary: DECIMAL to hold role salary
department_id: INT NOT NULL, 
FOREIGN KEY (department_id)
REFERENCES department(id)
);


CREATE TABLE employee (
id: INT PRIMARY KEY
first_name: VARCHAR(30) NOT NULL, 
last_name: VARCHAR(30) NOT NULL,
role_id: INT, 
manager_id: INT, 
FOREIGN KEY (role_id), 
REFERENCES role(id), 
FOREIGN KEY (manager_id)
REFERENCES employee(id)
);