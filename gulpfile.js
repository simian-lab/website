'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bourbon = require('node-bourbon');

gulp.task('sass', function () {
	gulp.src('app/styles/**.scss')
	.pipe(sass({
    includePaths: bourbon.includePaths,
    outputStyle: 'compressed'
  }).on('error', sass.logError))
	.pipe(gulp.dest('app/styles/'))
});

gulp.task('sass:watch', function(){
	gulp.watch('app/**/*.scss', ['sass']);
});