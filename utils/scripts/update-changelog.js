#!/usr/bin/env node

const inquirer = require('inquirer');

inquirer.prompt([{
  type: 'input',
  name: 'first_name',
  message: "What's your first name"
}])
  .then(answers => {
    console.log(answers);
  });
