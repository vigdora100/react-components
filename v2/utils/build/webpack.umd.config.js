const path = require('path');
const webpack = require('webpack');

const packageBaseName = path.basename(path.resolve());

module.exports = {
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist', 'umd'),
    publicPath: 'dist/umd',
    filename: `garden-${packageBaseName}.min.js`,
    sourceMapFilename: `garden-${packageBaseName}.sourcemap.js`,
    libraryTarget: 'commonjs',
    library: `Garden${packageBaseName}`
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
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    mangle: {
      except: ['React', 'ReactDOM'],
    },
  })],
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
    }
  }
};
