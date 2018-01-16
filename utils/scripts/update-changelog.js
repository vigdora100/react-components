#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const git = require('simple-git')(path.resolve(__dirname, '..', '..'));
const changelogPath = path.resolve('CHANGELOG.md');
const updatedPackage = require(path.resolve('package.json'));
const CHANGELOG_DELIMITER = '<!-- BEGIN_CHANGELOG -->';

function welcomeMessage() {
  const packageName = chalk.red(`(${updatedPackage.name})`);
  const packageVersion = chalk.yellow(`[${updatedPackage.version}]`);
  console.log(chalk.blue(`### Updating changelog of ${packageName} to ${packageVersion} ###`));
}

function successMessage() {
  console.log(chalk.green(`### Successfully updated changelog ###`));
}

function retrieveChangelogContent() {
  return new Promise((resolve, reject) => {
    fs.readFile(changelogPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

function retrieveGitLog() {
  return new Promise((resolve, reject) => {
    git.log({ from: 'HEAD', to: 'HEAD~2'}, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

function formatNewChangelogText(changelogContent, gitLog) {
  const commitMeta = gitLog.all[1];
  // const defaultTitle = `### [${updatedPackage.version}](https://github.com/zendeskgarden/react-components/commit/${commitMeta.hash}) ${commitMeta.message} ([${commitMeta.author_name}](mailto:${commitMeta.author_email}))`;

  return inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'Changelog Title',
    default: commitMeta.message
  }, {
    type: 'input',
    name: 'content',
    message: 'Changelog Content (optional)'
  }])
    .then(({ title, content }) => {
      const packageVersion = updatedPackage.version;
      const commitDate = commitMeta.date.split(' ')[0];
      const author = `([${commitMeta.author_name}](mailto:${commitMeta.author_email}))`;

      let newChangelogContent = `${CHANGELOG_DELIMITER}

## ${packageVersion} (${commitDate})

${title} ${author}
`;

      if (content) {
        newChangelogContent += `\n\n- ${content}`;
      }
      newChangelogContent += '\n';

      return changelogContent.replace(CHANGELOG_DELIMITER, newChangelogContent);
    });
}

function writeNewChangelog(newChangelogContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile(changelogPath, newChangelogContent, err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
}

welcomeMessage();

Promise.all([retrieveChangelogContent(), retrieveGitLog()])
  .then(data => formatNewChangelogText(data[0], data[1]))
  .then(writeNewChangelog)
  .then(successMessage);
