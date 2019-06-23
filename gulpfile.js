var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
var minifyjs = require('gulp-js-minify');
var rename = require("gulp-rename");

//сжимаем js.файлы
gulp.task('minify-js', function(cb){
  return gulp.src(['src/js/*.js', '!src/js/*.min.js' ])
    .pipe(minifyjs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));

  cb();
});

// cжимаем css
gulp.task('minify-css', function(cb) {
  gulp.src('src/css/*.css')
  .pipe(cleanCss ({
    compatibility: 'ie8'
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'))

  cb();
});

// переносим сжатые бибилиотеки в dist
gulp.task('move-min-js', function(cb) {
  return gulp.src('src/js/*.min.js')
  .pipe(gulp.dest('dist/js'))

  cb();
});

// cжимаем html файл
gulp.task('minify-html', function(cb) {
  gulp.src('src/*.html')
  .pipe(htmlMin ({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))

  cb();
});

// перекидываем шрифты
gulp.task('move-fonts', function(cb) {
  return gulp.src('src/fonts/**/*.*')
  .pipe(gulp.dest('dist/fonts'))

  cb();
});

var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (cb) {
  gulp.src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
        key: 'HPULULvNdCHMLxBYmK6evKEyS719KzXe'
    }))
    .pipe(gulp.dest('dist/img/'));

    cb();
});

gulp.task('default', gulp.parallel('tinypng', 'minify-css', 'minify-html', function (cb) {
  cb();
}));

// 'minify-js', 'move-min-js', 'minify-css', 'minify-html', 'move-fonts', 'tinypng',