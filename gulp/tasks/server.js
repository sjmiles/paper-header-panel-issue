var gulp = require('gulp');
var refresh  = require('gulp-livereload');
var connect = require('./connect').connect
var watch = require('./connect').watch


// Watch for changes
var Xwatch = function () {
    gulp.watch(['./app/src/**/*.js', './app/index.html']);
    gulp.watch(['./app/**/*']).on('change', refresh.changed);
    gulp.watch('bower.json', ['wiredep']);
};



gulp.task('server', function () {
   connect();
});

