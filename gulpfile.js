const
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  uncss = require('gulp-uncss'),
  htmlmin = require('gulp-htmlmin'),
  size = require('gulp-size'),
  sizereport = require('gulp-sizereport'),
  runSequence = require('run-sequence'),
  cssnano = require('gulp-cssnano');

gulp.task('pack-js', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery-scrollify/jquery.scrollify.min.js', 'src/js/scroll.js', 'src/js/nav.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('pack-css', function() {
  return gulp.src(['src/css/reset.css', 'node_modules/bulma/css/bulma.css', 'node_modules/font-awesome/css/font-awesome.min.css', 'src/css/style.css'])
    .pipe(concat('stylesheet.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('public/css'));
});

gulp.task('remove-unused-css', function() {
  return gulp.src('public/css/stylesheet.css')
    .pipe(uncss({
      html: ['src/index.html']
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('imagemin', () =>
  gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('public/img'))
);

gulp.task('minify-html', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('sizereport', function() {
  return gulp.src('./public/**/*')
    .pipe(sizereport());
});

gulp.task('import-icon-font', function() {
  return gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'))
});

gulp.task('default', function(done) {
  runSequence('pack-js', 'imagemin', 'minify-html', 'remove-unused-css', 'import-icon-font', 'pack-css', 'sizereport', function() {
    done();
  });
});