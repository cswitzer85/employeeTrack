USE cliDB;

insert into employee (first_name, last_name, role_id, manager_id)
    values  ("John", "Doe", 1, 6),
            ("Jane", "Doe", 2, 6),
            ("Don", "Ho", 2, 6),
            ("Jane", "O'Jungle", 4, 6),
            ("Jane", "Jetson", 3, 6);

insert into employee (first_name, last_name, role_id)
    values  ("Tarzan", "O'Jungle", 4);


insert into role (title, salary, department_id)
    values  ("Pawn", 30000, 1),
            ("Knight", 75000, 2),
            ("Bishop", 60000, 4),
            ("Tree Swinger", 20000, 3);

insert into department (name)
    values  ("Mail Room"),
            ("Logistics"),
            ("Management"),
            ("Accounting");
