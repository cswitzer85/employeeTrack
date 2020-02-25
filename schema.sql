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


SELECT * FROM cliDB;


