var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('default', function() {
    // Single entry point to browserify
    gulp.src('client/javascripts/app.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('./public/javascripts'));

    gulp.src('node_modules/chartist-plus/chartist-plus.css')
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('client/javascripts/app.js', ['default'], function() {
        console.log('compiling');
    });
    gulp.watch('node_modules/chartist-plus/chartist-plus.js', ['default'], function() {
        console.log('compiling');
    });
});
