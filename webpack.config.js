/* eslint-disable */
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const sortMediaQueries = require('postcss-sort-media-queries')
const helpers = require('./helpers.twig.js')

module.exports = (env) => {
  const isDev = env.mode === 'development'
  const devServer = {
    port: env.port || 3000,
    open: false,
    // historyApiFallback: true // для SPA
  }
  const htmlPlugins = generateHtmlPlugins(path.resolve(__dirname, 'src', 'templates', 'views'))

  return {
    mode: env.mode,
    entry: path.resolve(__dirname, 'src', 'js', 'index.js'),

    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },

    stats: {
      // Вывод в консоль
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    },

    plugins: [
      ...htmlPlugins,
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src', 'assets', 'fonts'), to: 'fonts' },
          { from: path.resolve(__dirname, 'src', 'assets', 'images'), to: 'images' },
          { from: path.resolve(__dirname, 'src', 'assets', 'favicon'), to: 'favicon' }
        ]
      })
    ],

    module: {
      rules: [
        {
          test: /\.twig$/,
          use: [
            'raw-loader',
            {
              loader: 'twig-html-loader',
              options: {
                namespaces: {
                  layouts: path.resolve(__dirname, 'src', 'templates', 'layouts'),
                  includes: path.resolve(__dirname, 'src', 'templates', 'includes')
                },
                ...helpers()
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { url: false }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    sortMediaQueries()
                  ]
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },

    resolve: {
      extensions: ['.js'],
      // alias: {
      //   '@': path.resolve(__dirname, 'src')
      // }
    },

    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? devServer : undefined
  }
}

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map((item) => {
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      chunks: [`${name}`, 'main'],
      inject: 'body',
      minify: false
    })
  })
}
