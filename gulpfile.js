'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bourbon = require('node-bourbon'),
	browserSync = require("browser-sync").create(),
	reload = browserSync.reload;

gulp.task('reload', function() {
  browserSync.reload();
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

});


gulp.task('sass', function () {
	gulp.src('app/styles/**.scss')
	.pipe(sass({
    includePaths: bourbon.includePaths,
    outputStyle: 'compressed',
    sourcemap: true
  }).on('error', sass.logError))
	.pipe(gulp.dest('app/styles/'))
	.pipe(reload({stream:true}))
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.scss', { interval: 500 }, ['sass']);
	gulp.watch("app/**/*.html", { interval: 500 }, ['reload']);
	gulp.watch("app/**/*.js", { interval: 500 }, ['reload']);
});

gulp.task('default', ['sass', 'serve', 'watch']);