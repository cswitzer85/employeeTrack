const mysql2 = require("mysql2/promise");
const inquirer = require("inquirer");
const consoleDotTable = require("console.table");

try {
    cli();
} catch (error) {
    RTCPeerConnection.end();
}

async function cli() {
    const connection = await mysql.createConnection({
       host: "localhost",
       user: "root",
       database: "company_db" 
    });

    const {choice}  await inquirer.prompt([
        {
            type "list",
            name: "firstQ",
            message: "First?",
            choices: ["1", "2", "3", "4"]
        },
        {
            type: "list",
            name: "secondQ",
            message: "What type of employee would you like to add?",
            choices: ["1", "2", "3", "4"]
        },
        {
            type "list",
            name: "thirdQ",
            message: "First?",
            choices: ["1", "2", "3", "4"]
        },
        {
            type "list",
            name: "fourthQ",
            message: "First?",
            choices: ["1", "2", "3", "4"]
        },
                {
            type "list",
            name: "fifthQ",
            message: "First?",
            choices: ["1", "2", "3", "4"]
        }
    ])
}