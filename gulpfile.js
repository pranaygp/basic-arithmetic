const gulp = require("gulp");
var babel = require('gulp-babel');

gulp.task("default",['build']);

gulp.task("build", () => {
  return gulp.src("src/artmtc.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"))
})
