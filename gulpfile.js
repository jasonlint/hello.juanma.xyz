// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', gulp.series(function(done) {
  return gulp.src('scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
  done();
}));

// Concatenate & Minify JS
gulp.task('scripts', gulp.series(function(done) {
  return gulp.src('scripts/default.js')
  // .pipe(concat('all.js'))
  // .pipe(gulp.dest('scripts'))
  .pipe(rename('default.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('scripts'));
  done();
}));

// Default Task
gulp.task('default', gulp.series('lint', 'scripts', function(done) {
  done();
}));
