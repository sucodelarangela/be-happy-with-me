const webpack = require('webpack'); // node_modules
const path = require('path'); // core do Node.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // gera o html em dist automaticamente com base em um modelo na pasta src

module.exports = {
  // informando ao Webpack onde estarão os arquivos-fontes
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'), // local onde o arquivo agrupador será salvo
    filename: 'bundle.js' // arquivo resultante da integração de todos os arquivos
  },
  // para aceitar arquivos .jsx
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // arquivo gerado em dist
      template: path.join(__dirname, 'src/index.html') // template do arquivo em src
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/, // regex para informar ao webpack a extensão do arquivo
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'), // diretório dos arquivos de origem
        use: [
          {
            loader: 'babel-loader', // se os passos acima forem atendidos, executa o babel...
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'] // ... com os seguintes presets
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|ico|png|gif|svg)$/i,
        // loader: 'file-loader?name=img/[name].[ext]'    // código antigo
        use: [
          {
            loader: 'file-loader', // para que as imagens utilizadas no index.html do src sejam transferidas para o build
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // css-loader e style-loader trabalham em conjunto, o 1º fazendo o require dos arquivos e o 2º aplicando0o na página
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: './dist'
    }
  },
  mode: 'development'
};
