#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const git = require('simple-git')(path.resolve(__dirname, '..', '..'));
const updatedPackage = require(path.resolve('package.json'));

function welcomMessage() {
  const packageName = chalk.red(`(${updatedPackage.name})`);
  const packageVersion = chalk.yellow(`[${updatedPackage.version}]`);
  console.log(chalk.blue(`### Updating changelog of ${packageName} to ${packageVersion} ###`));
}

function retrieveChangelogContent() {
  return fs.readFileSync(path.resolve('CHANGELOG.md'), 'utf8');
}

let changelogContent = retrieveChangelogContent();

git.log({ from: 'HEAD', to: 'HEAD~2'}, (err, data) => {
  console.log(data);
});

// ### [13.10.1] (2017-12-20)
// - [#447](https://github.com/zendeskgarden/react-components/pull/447) Revert: Add React v16 as a valid peer dependency ([Austin Green](mailto:austingreenkansas@gmail.com))

// Content goes here

// inquirer.prompt([{
//   type: 'input',
//   name: 'title',
//   message: 'Changelog Title',
//   default: '[#447](https://github.com/zendeskgarden/react-components/pull/447) Revert: Add React v16 as a valid peer dependency ([Austin Green](mailto:austingreenkansas@gmail.com))'
// }, {
//   type: 'input',
//   name: 'content',
//   message: 'Changelog Content'
// }])
//   .then(answers => {
//     console.log(answers);
//     console.log(changelogContent);
//   });

// function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace(/string to be replaced/g, 'replacement');

//   fs.writeFile(someFile, result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
// }

// console.log(updatedPackage);


