var path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack')
module.exports = {
  entry: {
    index: './index.js',
    indexM: './index-m.js'
  },
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: '[name]-[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development'
        }
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
          }
        }
      ]
    }]
  },
  devServer: {
    contentBase: false,
    port: '3010',
    proxy: {
      "/api": {
        target: "http://localhost:3020"
      }
    },
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/pc/,
          to: '/index.html'
        },
        {
          from: /^\/indexM/,
          to: '/indexM.html',
        }
      ]
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@assets': path.resolve(__dirname, 'assets/')
    }
  },
  optimization: {
    splitChunks: { // 提取公共文件
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    runtimeChunk: true, // 提取runtime
    minimize: true // 压缩
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './index-m.html',
      filename: 'indexM.html',
      chunks: ['indexM']
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[chunkhash:6].css',
      chunkFilename: '[id]-[chunkhash:6].css',
      ignoreOrder: false
    }),
    new CopyWebpackPlugin([{
      from: 'assets/ueditor',
      to: 'ueditor'
    }])
  ]
}