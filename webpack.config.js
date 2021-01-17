const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    // Don't bundle React
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
