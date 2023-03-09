import PromptSync from "prompt-sync";
import chalk from "chalk";
const prompt = PromptSync();

let soma = 0;
let i = 0;
let numero;


do  {
    numero = Number.parseInt(prompt(chalk.greenBright("Informe um número diferente de 0: ")));
    if (numero === 0) break;

    soma += numero;
    i++;
} while (true);

console.log(chalk.redBright(`A média dos números é ${soma/i}`));