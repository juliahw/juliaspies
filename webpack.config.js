const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const PostCssPresetEnv = require('postcss-preset-env');
const InstagramTokenPlugin = require('./webpack/InstagramTokenPlugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // Compile ES6 and JSX to JS.
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/transform-runtime'],
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // Extract CSS into sepa  rate files.
          MiniCssExtractPlugin.loader,
          // Resolve CSS imports.
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          // Autoprefix CSS.
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                new PostCssPresetEnv({
                  browsers: 'last 2 versions',
                  autoprefixer: true,
                }),
              ],
            },
          },
          // Compile SCSS to CSS.
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
    ],
  },
  optimization: {
    minimizer: ['...', new CssMinimizerWebpackPlugin({})],
  },
  plugins: [
    new ESLintPlugin(),
    // Generate `dist/index.html`.
    new HtmlWebPackPlugin({
      favicon: 'src/images/favicon.ico',
      template: 'src/index.html',
    }),
    // Extract CSS into separate files.
    new MiniCssExtractPlugin(),
    new InstagramTokenPlugin(),
  ],
  resolve: {
    extensions: ['.mdx', '.js', '.jsx'],
  },
};
