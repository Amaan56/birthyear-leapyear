const readlineSync = require('readline-sync');

const chalk = require('chalk');

const username = readlineSync.question(
  chalk.blue('Hello User, What is your name? ')
);

console.log(chalk.cyan('Hello ' + username));

const yearInput = readlineSync.question(
  chalk.yellow('Enter your birth year: ')
);

const year = parseInt(yearInput);

if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
  console.log(chalk.green('Your birth year ' + year + ' is a leap year'));
} else {
  console.log(chalk.green('Your birth year ' + year + ' is not a leap year'));
}
