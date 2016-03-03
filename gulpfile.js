var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-html-minifier');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  })
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('src/*.html', browserSync.reload);
})

// Optimizing Images 
gulp.task('images', function(){
  return gulp.src('src/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist'))
});

// Minify JS Files
gulp.task('compress', function() {
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Minify HTML
gulp.task('minifyhtml', function() {
  gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

// Minify CSS
gulp.task('minifycss', function() {
    return gulp.src('src/**/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist', 'images', 'compress', 'minifyhtml', 'minifycss',
    callback
  )
})