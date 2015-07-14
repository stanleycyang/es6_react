var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source =  require('vinyl-source-stream');

gulp.task('build', function(){
    browserify({
        entries: './js/components/index.js',
        extensions: ['.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
