const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const __DEV__ = process.env.NODE_ENV !== 'production';

function addHash() {
  return __DEV__ ? '' : '[chunkhash:8]';
}

const extractSCSS = new ExtractTextPlugin(`css/main.css?${addHash()}`);
const extractCSS = new ExtractTextPlugin(`css/plugins.css?${addHash()}`);

let config = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendors: [ 'vue' ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `js/[name].js?${addHash()}`,
  },
  devtool: __DEV__ ? 'source-map' : '',
  devServer: {
    contentBase: path.resolve('public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: false,
            loader: {
              scss: 'vue-style-loader!css-loader!sass-loader'
            }
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: { minimize: !__DEV__ }
            },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: [{
            loader: 'css-loader',
            options: { minimize: !__DEV__ }
          }]
        })
      },
      {
        test: /\.(png|gif|jpg|svg|ttf|woff|woff2|otf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
            publicPath: '../assets/'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
      filename: `js/[name].js?${addHash()}`
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.DefinePlugin({ __DEV__ }),
    extractCSS,
    extractSCSS
  ]
};

if (!__DEV__) {
  config.plugins.push(
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new webpack.optimize.UglifyJsPlugin({ parallel: true })
  );
}

module.exports = config;
