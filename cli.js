const mysql2 = require("mysql2/promise");
const inquirer = require("inquirer");
const consoleDotTable = require("console.table");

const choiceOptions = [
	"Create an employee",
	"Create a role",
	"Create a department",
	"View employee",
	"View role",
	"View department",
	"Update employee role"
];

try {
	cli();
} catch (error) {
	connection.end();
}

async function cli() {
	const connection = await mysql2.createConnection({
        host: "localhost",
        port: 9001,
        user: "root",
        password: "rootroot",
		database: "company_db"
	});

	const { choice } = await inquirer.prompt([{
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
	])

	switch (choice) {

		case "Create an employee": //first_name, last_name, role_id, manager_id
			var {
				firstName
			} = await requestInput("What is the new employee's first name", firstName);
			var {
				lastName
			} = await requestInput("What is the new employee's last name", lastName);
			var {
				role_id
			} = await requestInput("What is the new employee's role ID number", role_id);
			var {
				manager_id
			} = await requestInput("What is the new employee's manager ID number", manager_id);
			console.log(first_name, last_name, role_id, manager_id);
			cli();
			break;

		case "Create a role": //title, salary, department_id
			var {
				title
			} = await requestInput("What is the title for the new role?", title);
			var {
				salary
			} = await requestInput("What is the salary for the new role?", salary);
			var {
				department_id
			} = await requestInput("What is the department id number for the new role?", department_id);
			console.log(title, salary, department_id);
			cli();
			break;

		case "Create a department": //name
			var {
				name
			} = await requestInput("What is the name of the new department?", name);
			console.log(name);
			cli();
			break;

			// case "View employee":
			//     console.log(employeeSomething);
			//     cli();
			//     break;

			// case "View role":
			//     console.log(roleSomething);
			//     cli();
			//     break;

			// case "View department":
			//     console.log(departmentSomething);
			//     cli();
			//     break;

			// case "Update employee role":
			//     console.log(differentThing);
			//     cli();
			//     break;
	}
};
