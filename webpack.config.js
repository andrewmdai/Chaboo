const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.tsx',
  mode: "production",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    // static: {
    //   publicPath: '/dist',
    //   directory: path.resolve(__dirname, 'dist'),
    // },
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
      '/api': {
        target: 'http://localhost:3000', // Replace this with the backend server URL
        secure: false, // Set to false if your backend server doesn't have HTTPS
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Rewrite the path to remove '/api' before sending the request
        },
      },
    },
  },
};
