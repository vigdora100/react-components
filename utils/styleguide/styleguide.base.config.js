const path = require("path");
const _ = require("lodash");
const packageManifest = require(path.resolve('package.json'));
const customStyleguideConfig = require(path.resolve('styleguide.config.js'));

const basePathName = path.basename(path.resolve('./'));

const defaultStyleguideConfig = {
  title: 'Zendesk Garden',
  skipComponentsWithoutExample: false,
  serverPort: 5000,
  styleguideDir: `../../demo/components/${basePathName}`,
  showUsage: true,
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
    objectAssign: 'Object.assign'
  },
  require: [
    'babel-polyfill',
    path.resolve(__dirname, 'setup.js'),
    path.resolve(__dirname, 'styles.css')
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.example.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import ${name} from '${packageManifest.name}/${name}'`
  },
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'Wrapper'),
    TableOfContentsRenderer: path.resolve(__dirname, 'TableOfContentsRenderer'),
    // StyleGuideRenderer: path.resolve(__dirname, 'StyleGuideRenderer'),
    LogoRenderer: path.resolve(__dirname, 'LogoRenderer')
  },
  webpackConfig: {
    devtool: 'eval-source-map',
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!buble)/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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
