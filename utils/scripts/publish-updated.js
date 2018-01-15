const childProcess = require('child_process');
const path = require('path');


const tagString = childProcess
  .execSync('git tag -l --contains HEAD')
  .toString().trim();

const updatedPackages = tagString.split('\n').map(tagString => tagString.split('@')[0]);

const lernaPath = path.resolve(__dirname, '..', '..', 'node_modules', '.bin', 'lerna');
const lernaPackagesScope = updatedPackages.join(',');
console.log(lernaPackagesScope);

childProcess.execSync(`${lernaPath} exec --bail=<boolean> --scope ${lernaPackagesScope} -- npm publish dist`);

