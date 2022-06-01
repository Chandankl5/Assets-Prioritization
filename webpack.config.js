const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require("path");

const babelLoader = {
  test: /\.(js|jsx)/,
  use: "babel-loader",
}

const cssLoader = () => 'css-loader';

const styleLoader = {
  test: /\.(css)/,
  use: [MiniCssExtractPlugin.loader ,cssLoader]
}

const loaders = [
  babelLoader,
  styleLoader
]

const Config = () => {

  return {
    entry: './src/index.js',
    output: {
      filename: '[name].js',
      chunkFilename: "[name].js",
      path:join(process.cwd(), 'dist')
    },
    target: "web",
    mode: "development",
		devtool: "source-map",
    watch: false,
    module: {
      rules: loaders
    },
    plugins: [new MiniCssExtractPlugin({
      filename: '[name].css',
    })]
  };
};

const styleConfig = Config({
  entry: {
    'non-critical-styles': './src/non-critical-styles.css'
  } ,
  output: {
    fileName: '[name].css'
  }
})

const jsConfig = Config({
  entry: './src/index.js',
  output: {
    fileName: '[name].js'
  }
})

module.exports = [Config];