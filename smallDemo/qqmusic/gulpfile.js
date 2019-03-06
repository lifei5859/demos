var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var cssnano  = require('cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var htmlClean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
gulp.task('html',function(){
    return gulp.src('src/html/*.html')
        .pipe(connect.reload())
        .pipe(htmlClean())
        .pipe(gulp.dest('dist/'))

})
gulp.task('js',function(){
    return gulp.src(['src/js/zepto.min.js','src/js/index.js','src/js/module/*.js'])
        .pipe(connect.reload())
        .pipe(concat('index.js'))
        // .pipe(uglify())
        .pipe(rename('main.js'))
        .pipe(gulp.dest('dist/js/'))


});
gulp.task('libs',function () {
    return gulp.src('src/js/libs/*.js')
        .pipe(gulp.dest('dist/js/libs/'))
});
gulp.task('less',function(){
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload())

})
gulp.task('css',['less'],function(){
    var option=[autoprefixer,cssnano];
    return gulp.src('src/css/*.css')
        .pipe(concat('ban.css'))
        .pipe(rename('main.min.css'))
        .pipe(postcss(option))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload())
})
gulp.task('imgs',function(){
    return gulp.src('src/images/*')
        .pipe(imagemin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload())

})
gulp.task('watch',function(){
      gulp.watch('./src/html/*.html',['html']);
      gulp.watch(['src/js/zepto.min.js','src/js/index.js','src/js/module/*.js'],['js']);
      gulp.watch('./src/less/*.less',['less']);
      gulp.watch('./src/css/*.css',['css']);
      gulp.watch('./src/images/*',['imgs']);


})
gulp.task('connect',function(){
    connect.server({
        root : 'dist/',
        port:8090,
        livereload : true
    });

})

gulp.task('default',['html','less','js','libs','css','imgs','watch','connect']);