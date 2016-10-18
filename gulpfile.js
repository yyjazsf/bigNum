
var path = require('path')
var runSequence = require('run-sequence')
var browserSync = require('browser-sync')
var gulp = require('gulp')
var $ = require('gulp-load-plugins')({ lazy: true })

var tsProject = $.typescript.createProject("tsconfig.json")

gulp.task('default', () => {

  runSequence(
    'ts',
    'browser'
  );

  gulp.watch('./src/ts/*.ts',['ts']);
});

gulp.task('browser', () => {
  var options = {
    port: 3000,
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'info',
    logPrefix: 'gulp',
    notify: true,
    reloadDelay: 0, // 1000,
    online: false
  };

  options.server = {
    baseDir: [
      './src',
      './dist'
    ]
  };
  options.files = [
    './src/**',
    './dist/**',
  ];
  browserSync(options);

});

gulp.task('ts',()=>{
  return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest('./dist/js'))
});

// use this for gulp-plumber
function swallowError(error) {
  // If you want details of the error in the console
  console.error(error.toString());
  this.emit('end');
}



