const inquirer = require("inquirer");
const actionMethods = require("./utils/actionMethods");
const chalk = require("chalk");

selectOption();

function selectOption() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What you want to do?",
            choices: [
                "Create Account",
                "Account Balance",
                "Deposit",
                "Withdraw",
                "Exit",
            ]
        },
    ]).then(({action}) => {
        switch (action){
            case "Create Account":
                actionMethods.createAccount();
                break;

            case "Exit":
                console.log(chalk.bgBlue.black("Obrigado por usar o accounts!"));
                process.exit();
                break;
        }
    }).catch(err => console.log(err.message))
}