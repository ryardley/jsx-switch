import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';

gulp.task('watch', () => watch(['lib/*'], { ignoreInitial: false })
  .pipe(babel())
  .pipe(gulp.dest('dist')));

gulp.task('build', () => gulp.src(['lib/*'])
  .pipe(babel())
  .pipe(gulp.dest('dist')));

gulp.task('default', ['watch'])
