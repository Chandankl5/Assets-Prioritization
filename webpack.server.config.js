const nodeExternals = require("webpack-node-externals");
const { join } = require("path");

const babelLoader = {
  test: /\.(js|jsx)/,
  use: "babel-loader",
}

const cssLoader = () => 'css-loader';

const styleLoader = {
  test: /\.(css)/,
  use: [cssLoader]
}

const loaders = [
  babelLoader,
  styleLoader
]

const Config = () => {

  return {
    entry: './app.js',
    output: {
      filename: "server.js",
      path:join(process.cwd(), 'dist')
    },
    target: "node",
    mode: "none",
    watch: true,
    module: { rules: loaders },
    externals: [ nodeExternals() ],
    resolve: {
      extensions: [ '.js', '.jsx', '.scss', '.css' ]
    }
  };  
};

module.exports = Config;