const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin'); // already installed by webpack

module.exports = () => {
  return {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'assets/scripts/[name]-[contenthash].bundle.min.js',
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
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          exclude: /node_modules/,
          use: 'url-loader?limit=20480&name=assets/images/[name]-[contenthash].[ext]',
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[contenthash].[ext]&mimetype=application/font-woff',
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[contenthash].[ext]&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=65000&name=assets/fonts/[name]-[contenthash].[ext]&mimetype=application/octet-stream',
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&name=assets/fonts/[name]-[contenthash].[ext]&mimetype=application/vnd.ms-fontobject',
        },
        {
          test: /\.less$/,
          include: [path.resolve(__dirname, 'src/styles')],
          use: [
            MiniCssExtractPlugin.loader,
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
                  plugins: [autoprefixer, cssnano],
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
            MiniCssExtractPlugin.loader,
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
                  plugins: [autoprefixer, cssnano],
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
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        filename: 'index.html',
        minify: false,
      }),
      new MiniCssExtractPlugin({ filename: 'assets/styles/app-[hash].bundle.min.css' }),
      // new CompressionPlugin(),
    ],
    optimization: {
      moduleIds: 'named',
      splitChunks: {
        chunks: 'all',
        name: 'vendor',
      },
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    devtool: false,
    // devServer: {
    //   contentBase: path.resolve(__dirname, 'build'),
    //   historyApiFallback: true,
    //   port: 3000,
    //   hot: true,
    //   host: '0.0.0.0',
    //   publicPath: '/',
    // },
  };
};