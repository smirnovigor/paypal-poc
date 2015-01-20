var gulp = require('gulp');
var to5 = require("gulp-6to5");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function () {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(to5())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});