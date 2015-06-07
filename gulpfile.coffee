gulp    = require "gulp"
mocha   = require "gulp-mocha"
peg     = require "gulp-peg"
rename  = require "gulp-rename"
ts      = require "gulp-typescript"
tslint  = require "gulp-tslint"
require "coffee-script/register" # For mocha

gulp.task "default", ["peg", "ts"]

gulp.task "peg", ->
  gulp
    .src("src/abc.peg")
    .pipe(peg())
    .pipe(rename("Parser.js"))
    .pipe(gulp.dest("dist"))

gulp.task "ts", ->
  tsResult = gulp
    .src("src/**/*.ts")
    .pipe(ts(
      module: "commonjs"
      outDir: "dist"
    ))
  tsResult
    .dts
    .pipe(gulp.dest("dist/definitions"))
  tsResult
    .js
    .pipe(gulp.dest("dist"))

gulp.task "test", ->
  gulp
    .src("test/*.coffee", read: false)
    .pipe(mocha())

gulp.task "tslint", ->
  gulp
    .src("src/*.ts")
    .pipe(tslint(require("./tslint.config")))
    .pipe(tslint.report("prose"))
