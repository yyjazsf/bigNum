/**
 * 
 */

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './dist/index.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, 
        exclude: /node_modules/,
        loader: 'ts-loader' 
      }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  
};
