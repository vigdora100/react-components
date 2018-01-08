const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const packageBaseName = path.basename(path.resolve());
// const uppercaseString = string => string.charAt(0).toUpperCase() + string.slice(1);

const config = {
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    publicPath: 'dist',
    filename: `index.js`,
    sourceMapFilename: `[name].sourcemap.js`,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  // plugins: [new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false,
  //   },
  //   mangle: {
  //     except: ['React', 'ReactDOM'],
  //   },
  // })],
  plugins: [],
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    },
    'styled-components': {
      root: 'StyledComponents',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components'
    },
    'classnames': {
      root: 'classnames',
      commonjs2: 'classnames',
      commonjs: 'classnames',
      amd: 'classnames'
    },
    'zendesk': /@zendesk/
  }
};

if (process.env.BUNDLE_ANALYZER === "true") {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
