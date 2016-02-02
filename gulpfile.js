var bourbon = require('node-bourbon'),
    browserSync = require('browser-sync').create(),
    clean = require('gulp-clean'),
    cssNano = require('gulp-cssnano'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass'),
    usemin = require('gulp-usemin');

gulp.task('build', ['clean', 'usemin', 'images', 'serve-prod']);

gulp.task('clean', function() {
  gulp.src('prod', {
    read: false
  })
  .pipe(clean());
});

gulp.task('default', ['serve']);

gulp.task('images', function() {
  gulp.src('dev/img/*')
  .pipe(imagemin({
    optimizationLevel:  3,
    progressive:        true,
    interlaced:         true
  }))
  .pipe(gulp.dest('prod/img'));
});

gulp.task('jshint', function() {
  gulp.src('dev/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter());
});

gulp.task('jscs', function() {
  gulp.src('dev/js/*.js')
  .pipe(jscs())
  .pipe(jscs.reporter());
});

gulp.task('sass', function() {
  gulp.src('dev/sass/*.scss')
  .pipe(sass({
    includePaths: require('node-bourbon').includePaths
  }).on('error', sass.logError))
  .pipe(gulp.dest('dev/css'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: 'dev'
  });

  gulp.watch('dev/js/*.js', ['jshint', 'jscs']).on('change', browserSync.reload);
  gulp.watch('dev/sass/*.scss', ['sass']);
  gulp.watch('dev/*.html').on('change', browserSync.reload);
});

gulp.task('serve-prod', function() {
  browserSync.init({
    server: 'prod',
    port: process.env.PORT || 5000
  })
});

gulp.task('usemin', function() {
  gulp.src('dev/*.html')
  .pipe(usemin({
    css: [cssNano(), rev()]
  }))
  .pipe(gulp.dest('prod'));
});
