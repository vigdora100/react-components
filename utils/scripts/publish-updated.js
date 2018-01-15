// const childProcess = require('child_process');
// const path = require('path');


// const tagString = childProcess
//   .execSync('git tag -l --contains HEAD')
//   .toString().trim();

// const updatedPackages = tagString.split('\n').map(tagString => tagString.split('@')[0]);

// const lernaPath = path.resolve(__dirname, '..', '..', 'node_modules', '.bin', 'lerna');
// const lernaPackageScope = updatedPackages.join(',');

// // childProcess.execSync(`${lernaPath} exec -- npm publish dist --scope ${lernaPackageScope}`);

// console.log(lernaPackageScope);
