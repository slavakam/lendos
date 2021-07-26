const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'assets/scripts/[name]-[fullhash].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.less'],
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          exclude: /node_modules/,
          use: 'url-loader?limit=20480&name=assets/images/[name]-[hash].[ext]',
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/font-woff',
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=65000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/octet-stream',
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[hash].[ext]&mimetype=application/vnd.ms-fontobject',
        },
        {
          test: /\.less$/,
          include: [path.resolve(__dirname, 'src/styles')],
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.less$/,
          exclude: [path.resolve(__dirname, 'src/styles')],
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2,
                modules: { localIdentName: '[local]___[hash:base64:5]' },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: { sourceMap: true },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        filename: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      historyApiFallback: true,
      port: 3000,
      hot: true,
      host: '0.0.0.0',
      publicPath: '/',
    },
    devtool: 'eval-source-map',
  };
};
