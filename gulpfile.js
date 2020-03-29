var gulp = require('gulp'),
           postcss = require('gulp-postcss'),
           autoprefixer = require('autoprefixer'),
           cssvar = require('postcss-simple-vars'),
           nest = require('postcss-nested'),
           cssimport = require('postcss-import');


gulp.task('default', async function(){

    console.log("test")
    

});



gulp.task('style', async function(){

   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssimport,autoprefixer, cssvar, nest,]))
   .pipe(gulp.dest('./app/temp/styles'))

});