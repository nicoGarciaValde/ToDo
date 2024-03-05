const gulp = require('gulp');
const terser = require('gulp-terser'); // Asegúrate de instalar este paquete también

gulp.task('minify-js', function() {
  return gulp.src('src/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist'));
});