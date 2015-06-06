fs                     = require "fs"
assert                 = require("chai").assert
{ parse, SyntaxError } = require "../dist/parser"

describe "parse", ->
  fs.readdirSync("test/fixtures").forEach (file) ->
    it "can parse #{file}", ->
      assert.doesNotThrow(
        -> parse(fs.readFileSync("test/fixtures/#{file}", "utf-8"))
        SyntaxError
      )
