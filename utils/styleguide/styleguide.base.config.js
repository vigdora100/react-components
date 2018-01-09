const path = require("path");
const _ = require("lodash");
const packageManifest = require(path.resolve('package.json'));
const customStyleguideConfig = require(path.resolve('styleguide.config.js'));

const packageName = packageManifest.name &&
    packageManifest.name.replace('@zendeskgarden/', '');

const basePathName = path.basename(path.resolve('./'));

const defaultStyleguideConfig = {
  title: 'Zendesk Garden',
  skipComponentsWithoutExample: false,
  serverPort: 5000,
  styleguideDir: `../../demo/iframes/${basePathName}`,
  showUsage: true,
  require: [
    'babel-polyfill',
    path.resolve(__dirname, 'setup.js'),
    path.resolve(__dirname, 'styles.css')
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.example.md');
  },
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'Wrapper'),
    TableOfContentsRenderer: path.resolve(__dirname, 'TableOfContentsRenderer'),
    // StyleGuideRenderer: path.resolve(__dirname, 'StyleGuideRenderer'),
    LogoRenderer: path.resolve(__dirname, 'LogoRenderer')
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        },
        {
          test: /\.svg$/,
          loader: 'raw-loader'
        }
      ]
    }
  }
};

module.exports = _.extend(defaultStyleguideConfig, customStyleguideConfig);
