const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

module.exports = function(options={}) {
  let cnf = {
    mode: options.dev ? 'development' : 'production',
    entry: {
      'bundle.js': [
        // 'babel-polyfill',
        './src/index.jsx',
        // './src/styles/grid/index.scss',
        './src/styles/index.scss',
      ]
    },
    resolve: {
      extensions: ['.webpack.js', '.js', '.jsx', 'scss'],
      modules: [path.dirname(__dirname), './node_modules'],
      alias: {
        '~': path.resolve(__dirname, './src'),
        'react': path.resolve(path.join(__dirname, 'node_modules', 'react'))
      },
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]',
      publicPath: '/dist/',
      chunkFilename : '[name]-[hash].js'
    },
    performance: {
      hints: options.dev ? 'warning' : false,
    },
    module: {
      rules: [
        { 
          test: /\.jsx?$/, 
          // exclude: path.join(__dirname, 'node_modules'),
          loader: 'babel-loader',
        },
        {
          test: /\.styl$/, 
          loader: [
            'style-loader',
            'css-loader',
            // { loader: 'postcss-loader', options: { sourceMap: true } },
            'stylus-loader'
          ]
        },
        {
          test: /\.scss$/, 
          loader: [
            'style-loader',
            'css-loader',
            // { loader: 'postcss-loader', options: { sourceMap: true } },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, './node_modules')]
              }
            }
            
          ]
        },
        {
          test: /flag-icon-css.+\.svg/,
          use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
          exclude: [
            path.resolve(__dirname, 'node_modules', 'flag-icon-css'),
          ],
          loader: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        }
      ]
    }
  };

  cnf.devtool = 'source-map';
  let plugins = [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /ru|en/
    ),
  ];
  cnf.plugins = plugins;
  return cnf;
};