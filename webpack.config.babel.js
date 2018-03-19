import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  module: {
    rules: [
      {
        // Fonts
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]'
        }
      },
      {
        // Javascript
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        options: {
          presets: ['env']
        }
      },
      {
        // Vanilla CSS
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        // SCSS
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin(path.join('..', 'css', 'app.css'))
  ],

  context: path.join(__dirname, 'src'),
  entry: {
    app: ['./js/app']
  },

  output: {
    path: path.join(__dirname, 'static', 'assets', 'js'),
    filename: '[name].js'
  }
}
