'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var debug = require('gulp-debug');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var spawn = require('child_process').spawn;

function theError(error){
    //var type = (error.plugin != 'gulp-sass') ? 'SCRIPTS' : 'SASS';
    //console.warn(error);
    //console.log('\n::::::: ERRO COMPILANDO '+type+'. AGUARDANDO CORREÇÃO. ::::::::')
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
        .pipe(changed('./public/assets', {extension: '.min.css'}))
        .pipe(debug({title: 'SASS:'}))
        //.pipe(rename({suffix: '.min'}))
		.pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'nested'
        }).on('error', theError))
		.pipe(gulp.dest('./public/assets'))
		.pipe(browserSync.stream());
});

gulp.task('jsmin', function () {
    gulp.src('./src/**/*.js')
        .pipe(changed('./public/assets', {extension: '.min.js'}))
        .pipe(debug({title: 'JS:'}))
        //.pipe(rename({suffix: '.min'}))
        .pipe(jsmin())
        .pipe(gulp.dest('./public/assets'))
        .on('error', gutil.log)
		.on('end', function(){
            browserSync.reload();
        });
});

//watch
gulp.task('refresh', function(){
	browserSync.reload();
});

gulp.task('watch', ['sass', 'jsmin'], function(){
	browserSync.init({
		server: {
			baseDir: './public'
		},
		open: false
	});

	gulp.watch('./src/**/*.sass', ['sass']);
	gulp.watch(['./public/*.html', './public/templates/**/*.html', './public/templates/*.html'], ['refresh']);
	gulp.watch('./src/**/*.js', ['jsmin']);
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
