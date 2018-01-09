const gulp = require("gulp");

gulp.task('copy', () => {
  return gulp.src(['package.json', 'README.md'])
    .pipe(gulp.dest('./dist'));
});

gulp.task("default", gulp.series('copy'));
