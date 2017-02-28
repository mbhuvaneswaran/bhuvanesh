var path  = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, "./app/entry")

  ],
  output : {
    path : path.join(__dirname,'./public/dist'),
    filename : 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        options : {
          presets : ['react','es2015']
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader:'css-loader',
              options : {modules : true,importLoaders : 1}
            }, 'sass-loader']
        })//ExtractTextPlugin.extract("style","css?localIdentName=[hash:base64:5]&modules&importLoaders=1!postcss-loader!sass?outputStyle=expanded")
      }
    ]
  },
  resolve : {
    alias : {
      '@components' : path.join(__dirname,'./app/javascript/components'),
      '@data'  :path.join(__dirname,'./app/javascript/data')
    },
    // extensions listed here can be omitted in `import`s
    extensions: ['.js', '.jsx'],
    // directories which are searched implicitly in `import`s
    modules: ['node_modules']
  },
  plugins: [new ExtractTextPlugin({
    filename : 'bundle.css'
  }),
  new webpack.HotModuleReplacementPlugin(),
new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin({
      template : 'index.html',
      inject:'body',
      filename : '../index.html'
    }),
          ]
}
