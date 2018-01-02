#!/usr/bin/env node

const inquirer = require('inquirer');
const program = require('commander');
const chalk = require('chalk');
const childProcess = require('child_process');
const path = require('path');

const Pelorous = chalk.hex('#30AABC');
const lernaPath = path.resolve(__dirname, '..', '..', 'node_modules', '.bin', 'lerna');

const GardenSplashScreen = () => {
    console.log(Pelorous('#########################################'));
    console.log(Pelorous('##  Zendesk Garden - React Components  ##'));
    console.log(Pelorous('#########################################'));
};

const RetrievePackages = new Promise((resolve, reject) => {
    childProcess.exec(`${lernaPath} ls --json`, (err, stdout, stderr) => {
        if (err) {
            return;
        }

        resolve(JSON.parse(stdout));
        reject(stderr);
    });
});

const PromptUserForPackages = (packages) => {
    const packageList = packages.map(p => {
        let name = '';

        if (p.private) {
            name += `${chalk.yellow('[PRIVATE]')} `;
        }

        name += p.name;

        if (p.version) {
            name += ` ${chalk.gray('v' + p.version)}`;
        }

        return {
            name,
            value: p.name
        };
    });

    return inquirer.prompt([{
        type: 'list',
        name: 'package',
        message: 'What package would you like to run locally?',
        choices: packageList
    }]);
};

const FormatAnswers = answers => answers.package;

const StartLerna = (scope, script) => {
    const lernaStart = childProcess.spawn(lernaPath, ['run', script, '--stream', '--scope', scope]);

    lernaStart.stdout.on('data', data => {
        process.stdout.write(data);
    });

    lernaStart.stderr.on('data', data => {
        process.stderr.write(data);
    });
};

GardenSplashScreen();
program
    .version('0.0.1')
    .option('--scope [scope]')
    .option('--script [script]')
    .parse(process.argv);

if (program.scope) {
    StartLerna(program.scope, program.script);
} else {
    RetrievePackages
        .then(PromptUserForPackages)
        .then(FormatAnswers)
        .then(scope => StartLerna(scope, program.script));
}
