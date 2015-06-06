fs                     = require "fs"
assert                 = require("chai").assert
{ parse, SyntaxError } = require "../dist/parser"
{ AbcFile }            = require "../dist/AbcFile"

describe "parse", ->
  fs.readdirSync("test/fixtures").forEach (file) ->
    context "when the contents of #{file} is given", ->
      it "returns an AbcFile", ->
        assert.instanceOf(
          parse(fs.readFileSync("test/fixtures/#{file}", "utf-8"))
          AbcFile
        )
