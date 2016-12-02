'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');
var htmlmin = require('gulp-htmlmin');
var image = require('gulp-image');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var debug = require('gulp-debug');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var spawn = require('child_process').spawn;

function theError(error){
    gutil.beep();
    gutil.log(error.formatted);
    this.emit('end');
}

//reload configs
gulp.task('gulp-reload', function() {
	spawn('gulp', ['watch'], {stdio: 'inherit'});
	process.exit();
});

//default tasks
gulp.task('sass', function(){
	gulp.src('./src/**/*.sass')
        .pipe(changed('./app', {extension: '.css'}))
        .pipe(debug({title: 'SASS:'}))        
		.pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'nested'
        }).on('error', theError))
		.pipe(gulp.dest('./app'))
		.pipe(browserSync.stream());
});

gulp.task('jsmin', function () {
    gulp.src('./src/**/*.js')
        .pipe(changed('./app', {extension: '.js'}))
        .pipe(debug({title: 'JS:'}))        
        .pipe(jsmin())
        .pipe(gulp.dest('./app'))
        .on('error', gutil.log)
		.on('end', function(){
            browserSync.reload();
        });
});

gulp.task('minify', function() {
  return gulp.src(['./src/*.html', './src/**/*.html', './src/**/**/*.html'])
    .pipe(changed('./app', {extension: '.html'}))
    .pipe(debug({title: 'Html:'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

gulp.task('image', function () {
  gulp.src(
      [
          './src/*.jpg', './src/**/*.jpg', './src/**/**/*.jpg',
          './src/*.png', './src/**/*.png', './src/**/**/*.png',
          './src/*.gif', './src/**/*.gif', './src/**/**/*.gif',
          './src/*.svg', './src/**/*.svg', './src/**/**/*.svg',
      ]
    )
    .pipe(image())
    .pipe(gulp.dest('./app'));
});

//watch
gulp.task('refresh', function(){
	browserSync.reload();
});

gulp.task('watch', ['sass', 'jsmin', 'minify', 'image'], function(){
	browserSync.init({
		server: {
			baseDir: './app'
		},
		open: false
	});

	gulp.watch('src/**/*.sass', ['sass']);
    gulp.watch('src/**/*.js', ['jsmin']);
	gulp.watch(['src/*.html', 'src/**/*.html'], ['minify']);
    gulp.watch([
          './src/*.jpg', './src/**/*.jpg', './src/**/**/*.jpg',
          './src/*.png', './src/**/*.png', './src/**/**/*.png',
          './src/*.gif', './src/**/*.gif', './src/**/**/*.gif',
          './src/*.svg', './src/**/*.svg', './src/**/**/*.svg',
    ], ['image']);

	//gulp.watch('./gulpfile.js', ['gulp-reload']);
});

/*
Refs:
https://www.npmjs.com/package/gulp
https://www.browsersync.io/docs/gulp
https://www.browsersync.io/docs/options
https://gist.github.com/moolen/5076285
https://www.npmjs.com/package/gulp-sass/
https://www.npmjs.com/package/gulp-jsmin/
*/
