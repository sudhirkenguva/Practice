'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');



gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expand' }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('../sourcemaps/sass'))
        .pipe(gulp.dest('./css'));
});


gulp.task('cssmin', ['sass'], function() {
    return gulp.src('css/*.css')
        .pipe(concatCss('css/bundle.css'))
        .pipe(cleanCSS({ debug: true }, function(details) {
            console.log(details.name + '[' + details.stats.originalSize + ' -->' + details.stats.minifiedSize + ' bytes ] ');
        }))
        .pipe(rename('test.min.css'))
        .pipe(gulp.dest('./cssmin'));
});


gulp.task("default", ['cssmin'], function() {
    gulp.watch('./sass/**/*.scss', ['cssmin']);
});