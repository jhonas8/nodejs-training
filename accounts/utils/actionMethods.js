const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require("fs");

const createAccount = () => {
    console.log(chalk.bgGreen.black("Obrigado por escolher nosso banco!"));
    console.log(chalk.green("Defina as opcoes da sua conta a seguir."));
    buildAccount();
}

module.exports = {
    createAccount,
};


function buildAccount() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite um nome para a sua conta: ",
        }
    ]).then(({accountName})=>{
        if(!fs.existsSync("accounts")) {
            fs.mkdirSync("accounts");
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(
                chalk.bgRed.black("Esta conta ja existe!")
            );
            buildAccount();
            return;
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance": 0}',
            (err) => console.log(err.message)
        )

        console.log(chalk.green(`A conta ${accountName} foi criada!`));

    }).catch(err=>console.log(err.message));
}