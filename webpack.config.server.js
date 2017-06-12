const webpack = require('webpack');
const ngtools = require('@ngtools/webpack');
const path = require('path');

module.exports = {
  entry: {
    server: './src/main.server.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: '[name].js'
  },
  plugins: [
    new ngtools.AotPlugin({
      "entryModule": "app/app.module.server#AppServerModule",
      "hostReplacementPaths": {
        "environments/environment.ts": "environments/environment.ts"
      },
      "exclude": [],
      "tsConfigPath": "src/tsconfig.app.json",
      "skipCodeGeneration": true
    }),
    new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           postcss: {}
         }
    })
  ],
  module: {
    rules: [{
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader"
        ],
      }
    ]
  },
}
