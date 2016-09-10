var gulp = require('gulp');
var jade = require('gulp-jade');
var prettify = require('gulp-prettify');
var rename = require('gulp-rename');
var minify = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var PostcssSimpleVars = require('postcss-simple-vars');
var PostcssNested = require('postcss-nested');
var PostcssMixins = require('postcss-mixins');
var PostcssImport = require('postcss-import');

var paths = {
  'src': 'src/',
  'dist': 'dist/'
}

gulp.task('bs', function() {
  browserSync.init({
    server: {
      baseDir: paths.dist,
      index: 'index.html'
    },
    notify: true
  });
});

gulp.task('html', function() {
  return gulp.src([
    paths.src + '**/*.jade',
    '!' + paths.src + '**/_*.jade'
    ])
    .pipe(jade())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('prettify', ['html'], function() {
  return gulp.src(paths.dist + '**/*.html')
    .pipe(prettify({
      brace_style: 'collapse',
      indent_size: 2,
      indent_char: ' '
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('css', function() {
  var processors = [
      cssnext(),
      PostcssMixins(),
      PostcssSimpleVars(),
      PostcssNested(),
      PostcssImport(),
  ];
  return gulp.src([
    paths.src + 'css/*.css',
    '!' + paths.src + 'css/_*.css'
    ])
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dist + 'css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('concat', ['css'],function() {
  return gulp.src([paths.src + 'css/_reset.css', paths.dist + 'css/style.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.dist + 'css/'));
});

gulp.task('watch', function() {
  gulp.watch([paths.src + '**/*.jade'], ['prettify']);
  gulp.watch([paths.src + 'css/*.css'], ['concat']);
});

gulp.task('default', ['bs', 'prettify', 'concat', 'watch']);
