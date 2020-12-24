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
  console.log(
    chalk.cyanBright('When others will be 40 you will be just 10 years of old!')
  );
} else {
  console.log(chalk.green('Your birth year ' + year + ' is not a leap year'));
  console.log(
    chalk.cyanBright(
      'You are lucky you get to celebrate your birthday every year!'
    )
  );
}
