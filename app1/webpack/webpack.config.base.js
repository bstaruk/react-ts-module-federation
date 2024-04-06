const ESLintPlugin = require('eslint-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const deps = require('../package.json').dependencies;

module.exports = {
  context: path.resolve(process.cwd(), 'src'),
  entry: path.join(process.cwd(), 'src/index.ts'),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.tsx', '.ts', '.css', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash:8][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.ts', '.tsx'],
    }),
    new ModuleFederationPlugin({
      /**
       * Learn more about Webpack Module Federation:
       * https://module-federation.io/guide/basic/webpack.html
       */
      name: 'app1',
      remotes: {
        micro1: 'micro1@http://localhost:3030/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: { singleton: true },
        'react-dom': {
          singleton: true,
        },
      },
    }),
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
};
