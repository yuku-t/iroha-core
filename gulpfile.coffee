gulp    = require "gulp"
mocha   = require "gulp-mocha"
peg     = require "gulp-peg"
rename  = require "gulp-rename"
require "coffee-script/register" # For mocha

gulp.task "default", ["peg"]

gulp.task "peg", ->
  gulp
    .src("src/abc.peg")
    .pipe(peg())
    .pipe(rename("parser.js"))
    .pipe(gulp.dest("dist"))

gulp.task "test", ->
  gulp
    .src("test/*.coffee", read: false)
    .pipe(mocha())
