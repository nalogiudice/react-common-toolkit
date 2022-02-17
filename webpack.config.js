const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
  module: {
    rules: [
{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
 {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
resolve: {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
},
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
},
 plugins: [htmlPlugin]
};