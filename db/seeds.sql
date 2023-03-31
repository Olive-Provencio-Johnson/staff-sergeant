USE employee_db;

INSERT INTO department (department_name) 
VALUES ('Admin'), 
    ('Human Resources'),
    ('Finance'),
    ('Engineering')
    ('Research')
    ('Executive Office')
    ('Operations');

INSERT INTO role (title, salary, department_id) 
VALUES ('Administrator', 50000, 1), 
    ('HR Department Head ', 90000, 2),
    ('Chief Finance Officer ', 120000, 3),
    ('Lead Engineer', 120000, 4), 
    ('Director of Research', 120000, 5),
    ('Chief Executive Officer', 150000, 6),
    ('Chief Operations Officer', 150000, 7),
    ('Support Staff Manager', 75000, 8);

 

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Mila', 'Kunis', 1, NULL), 
    ('Kit', 'Harrington', 2, NULL),
    ('The', 'Weekend', 3, NULL),
    ('Cardi', 'B', 3, NULL),
    ('Michael', 'Scott', 4, NULL),
    ('Jack', 'Black', 5, NULL),
    ('Kelly', 'Clarkson', 6, NULL),
    ('Joaquin', 'Phoenix', 7, NULL),
    ('Frank', 'Ocean', 8, NULL);