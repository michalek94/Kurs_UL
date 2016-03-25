var gulp = require('gulp');
var gulp_concat = require('gulp-concat');
var gulp_jshint = require('gulp-jshint');

var path = {
    scripts: ['src/*.js']  
};

gulp.task('jshint', function () {
    gulp.src(path.scripts)
        .pipe(gulp_jshint('.jshintrc'))
        .pipe(gulp_jshint.reporter('default'));
});

gulp.task('concat', function () {
    gulp.src(path.scripts)
        .pipe(gulp_concat('calc.js'))
        .pipe(gulp.dest('./build'));         
});

gulp.task('default', ['concat']);