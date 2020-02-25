DROP DATABASE IF EXISTS cliDB;
CREATE database cliDB;
USE cliDB;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name varchar(30), 
    last_name, varchar(30),
    role_id, int, FK,
    manager_id, int, FK;
    PRIMARY KEY (id)
    );

  CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title, varchar(30),
    salary, decimal,
    department_id, int, FK
    PRIMARY KEY (id)
    );

  CREATE TABLE department ( 
    id INT NOT NULL AUTO_INCREMENT,
    name, varchar(30)
    PRIMARY KEY (id)
  );

insert into employee (first_name, last_name, role_id, manager_id)
    values  ("John", "Doe", 1, 1),
            ("Jane", "Doe", 2, 2),
            ("Don", "Ho", 2, 1),
            ("Tarzan", "O'Jungle", 3, 4),
            ("Jane", "O'Jungle", 4, 3),
            ("Jane", "Jetson", 5, 5)

insert into role (title, salary, department_id)
    values  ("Pawn", 30000, 1),
            ("Knight", 75000, 2),
            ("Bishop", 60000, 4),
            ("Tree Swinger", 20000, 3),
            ("Entitled", 160000, 3),
            ("Tech Officer", 58000, 2),

insert into employee (name)
    values  ("Mail Room"),
            ("Logistics"),
            ("Management"),
            ("Accounting")




SELECT * FROM cliDB;


