/**
 * 
 */
const helpers = require('./helpers');
const webpack = require('webpack');

/*
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
/*
 * Webpack Constants
 */
const METADATA = {
  title: 'big num operate',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
}


/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  isProd = options.env === 'production';
  return {

    /*
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     */
    //cache: false,

    /*
     * The entry point for the bundle
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      index: './src/index.ts'
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],

      // An array of directory names to be resolved to the current directory
      modules: [helpers.root('src'), 'node_modules'],
    },
    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
      /*
       * Typescript loader support for .ts
       *
       * See: https://github.com/s-panferov/awesome-typescript-loader
       */
      rules: [
        {
          test: /\.ts$/,
          loaders: 'awesome-typescript-loader',//,
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        /*
        * Json loader support for *.json files.
        *
        * See: https://github.com/webpack/json-loader
        */
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        /* Raw loader support for *.html
        * Returns file content as string
        *
        * See: https://github.com/webpack/raw-loader
        */
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },

        /* File loader for supporting images, for example, in CSS files.
         */
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file'
        },

      ]

    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      /*
      * Plugin: ForkCheckerPlugin
      * Description: Do type checking in a separate process, so webpack don't need to wait.
      *
      * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
      */
      new ForkCheckerPlugin(),

      /*
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),

      /*
      * Plugin: ScriptExtHtmlWebpackPlugin
      * Description: Enhances html-webpack-plugin functionality
      * with different deployment options for your scripts including:
      *
      * See: https://github.com/numical/script-ext-html-webpack-plugin
      */
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
    ],

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  }
}


