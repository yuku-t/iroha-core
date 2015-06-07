fs           = require "fs"
assert       = require("chai").assert
Parser       = require "../dist/Parser"
{ AbcFile }  = require "../dist/AbcFile"

describe "Parser", ->
  describe ".parse()", ->
    context "when a valid abc notation is given", ->
      it "returns an AbcFile", ->
        fs.readdirSync("test/fixtures").forEach (file) ->
          assert.instanceOf(
            Parser.parse(fs.readFileSync("test/fixtures/#{file}", "utf-8"))
            AbcFile
          )

    context "when an invalid abc notation is given", ->
      it "throws Parser.SyntaxError", ->
        assert.throw(
          -> Parser.parse("invalid abc notation")
          Parser.SyntaxError
        )
