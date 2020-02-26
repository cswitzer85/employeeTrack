const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
const consoleDotTable = require("console.table");
let connection;

const choiceOptions = ["Create an employee",
	"Create a role",
	"Create a department",
	"View employee",
	"View role",
	"View department",
	"Update employee role"
];

try {
	cliConnection();
} catch (error) {
	console.log("error: ", error);
	cliConnection.end();
}


async function cliConnection() {
		connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "rootroot",
		database: "cliDB"
	});
	const {
		choice
	} = await inquirer.prompt({
			type: "list",
			name: "choice",
			message: "What would you like to do?",
			choices: choiceOptions
		}
		// }, << if uncommented, delete yellow curly bracket on line above >> ---------- ReAd BeFoRe UnCoMmEnTiNg! <<-----{{{ <<-----{{{
		// {
		//     type: "list",
		//     name: "secondQ",
		//     message: "What type of employee would you like to add?",
		//     choices: ["1", "2", "3", "4"]
		// }
	)

	switch (choice) {

		case "Create an employee": //first_name, last_name, role_id, manager_id
			var {
				firstName
			} = await requestInput("What is the new employee's first name", "firstName");
			var {
				lastName
			} = await requestInput("What is the new employee's last name", "lastName");
			var {
				role_id
			} = await requestInput("What is the new employee's role ID number", "role_id");
			var {
				manager_id
			} = await requestInput("What is the new employee's manager ID number", "manager_id");
			console.table(first_name, last_name, role_id, manager_id);
			cliConnection();
			break;

		case "Create a role": //title, salary, department_id
			var {
				title
			} = await requestInput("What is the title for the new role?", "title");
			var {
				salary
			} = await requestInput("What is the salary for the new role?", "salary");
			var {
				department_id
			} = await requestInput("What is the department id number for the new role?", "department_id");
			console.table(title, salary, department_id);
			cliConnection();
			break;

		case "Create a department": //name
			var {
				name
			} = await requestInput("What is the name of the new department?", "name");
			console.log(name);
			cliConnection();
			break;

		case "View employee":
			readEmployee();
			cliConnection();
			break;

		case "View role":
			readRole();
			cliConnection();
			break;

		case "View department":
			readDepartment();
			cliConnection();
			break;

		case "Update employee role":
			console.log(differentThing);
			cliConnection();
			break;
	}
};

function readEmployee() {
	connection.query("SELECT * FROM cliDB.employee;", function(err, res) {
	  if (err) throw err;
	  console.table(res)
	});
  }

  function readRole() {
	connection.query("SELECT * FROM cliDB.role;", function(err, res) {
	  if (err) throw err;
	  console.table(res)
	});
  }

  function readDepartment() {
	connection.query("SELECT * FROM cliDB.department;", function(err, res) {
	  if (err) throw err;
	  console.table(res)
	});
  }

function readCliDB() {
	connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, department.name FROM employee"
	+ "INNER join role on role.id = employee.role_id"
	+ "INNER join department on department.id = role.department_id;", function(err, res) {
	  if (err) throw err;
	});
  }
