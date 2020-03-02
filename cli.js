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
			
						// Add data =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
		case "Create an employee": //first_name, last_name, role_id, manager_id
			var {
				firstName
			} = await inquirer.prompt({
				type: "input",
				name: "firstName",
				message: "What is the new employee's first name",
			})

			var {
				lastName
			} = await inquirer.prompt({
				type: "input",
				name: "lastName",
				message: "What is the new employee's last name",
			})

			var {
				role_id
			} = await inquirer.prompt({
				type: "input",
				name: "role_id",
				message: "What is the new employee's role ID number",
			})
			var {
				manager_id
			} = await inquirer.prompt({
				type: "input",
				name: "manager_id",
				message: "What is the new employee's manager ID number",
			})
			connection.query("INSERT INTO employee SET ?", {
					first_name: firstName,
					last_name: lastName,
					role_id: role_id,
					manager_id: manager_id
				},
				function (err) {
					if (err) throw err;
				}
			);
			console.log("The employee has been added.");
			cliConnection();
			break;

		case "Create a role": //title, salary, department_id
			var {
				newTitle
			} = await inquirer.prompt({
				type: "input",
				name: "newTitle",
				message: "What is the new title?",
			})

			var {
				newSalary
			} = await inquirer.prompt({
				type: "input",
				name: "newSalary",
				message: "What is the salary?",
			})

			var {
				newDep
			} = await inquirer.prompt({
				type: "input",
				name: "newDep",
				message: "What department ID does this role fall under?",
			})
			connection.query("INSERT INTO role SET ?", {
					title: newTitle,
					salary: newSalary,
					department_id: newDep,
				},
				function (err) {
					if (err) throw err;
				}
			);
			console.log("The new role has been added.");
			cliConnection();
			break;

		case "Create a department": //name
			var {
				depName
			} = await inquirer.prompt({
				type: "input",
				name: "depName",
				message: "What is the name of the department you'd like to add?",
			})
			connection.query("INSERT INTO department SET ?", {
					name: depName
				},
				function (err) {
					if (err) throw err;
				}
			);
			console.log("Department has been added.");
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
			var {selectEmpId} = await inquirer.prompt({
				type: "input",
				name: "empId",
				message: "What is the ID of the employee you wish to reassign?",
			})

			var {selectRoleId} = await inquirer.prompt({
				type: "input",
				name: "newRoleId",
				message: "What role ID would you like to assign them?",
			})
			connection.query("UPDATE employee SET employee.role_id = " + selectRoleId +  " where employee.id = " + selectEmpId + ";", {

				},
				function (err) {
					if (err) throw err;
				}
			);
			console.log("The role has been changed.");
			cliConnection();
			break;

	}
};

						// Read/View data =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
function readEmployee() {
	connection.query("SELECT * FROM cliDB.employee;", function (err, res) {
		if (err) throw err;
		console.table(res)
	});
}

function readRole() {
	connection.query("SELECT * FROM cliDB.role;", function (err, res) {
		if (err) throw err;
		console.table(res)
	});
}

function readDepartment() {
	connection.query("SELECT * FROM cliDB.department;", function (err, res) {
		if (err) throw err;
		console.table(res)
	});
}