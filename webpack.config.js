module.exports = {
  devTool: 'source_map',
  entry: [
    './src/index'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}