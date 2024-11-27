const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Punto de entrada de la aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Salida de los archivos
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica esta regla a todos los archivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa babel-loader para transpilar el código
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Configura Babel para usar los presets
          },
        },
      },
      {
        test: /\.css$/, // Para manejar archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Usa el index.html de la carpeta src como plantilla
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Carpeta de archivos estáticos
    compress: true,
    port: 8080, // Puerto del servidor
  },
};