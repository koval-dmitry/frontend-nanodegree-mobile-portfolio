var gulp = require('gulp');
var browserSync = require('browser-sync');
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

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['browserSync', 'watch'],
    callback
  )
})