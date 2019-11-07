const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PostCssPresetEnv = require("postcss-preset-env");
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // Compile ES6 and JSX to JS.
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // Extract CSS into separate files.
          MiniCssExtractPlugin.loader,
          // Resolve CSS imports.
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          // Autoprefix CSS.
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                new PostCssPresetEnv({
                  browsers: "last 2 versions",
                  autoprefixer: true
                })
              ]
            }
          },
          // Compile SCSS to CSS.
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg)$/,
        use: [
          // Resolve url() imports of assets.
          "url-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
  },
  plugins: [
    // Generate `dist/index.html`.
    new HtmlWebPackPlugin({
      favicon: "src/images/favicon.ico",
      template: "src/index.html"
    }),
    // Extract CSS into separate files.
    new MiniCssExtractPlugin(),
    // Format code.
    new PrettierPlugin({
      extensions: [".html", ".js", ".jsx", ".scss"]
    })
  ],
  resolve: {
    extensions: [".mdx", ".js", ".jsx"]
  }
};
