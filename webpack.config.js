/**
 * 
 */

// Look in ./build folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./build/webpack.prod')({env: 'production'});
    break;
  // case 'test':
  // case 'testing':
  //   module.exports = require('./build/webpack.test')({env: 'test'});
  //   break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./build/webpack.dev')({env: 'development'});
}
