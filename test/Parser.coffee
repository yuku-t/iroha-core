fs           = require "fs"
assert       = require("chai").assert
Parser       = require "../dist/Parser"
{ AbcFile }  = require "../dist/AbcFile"
{ Key }      = require "../dist/Key"

readFixture = (name) ->
  fs.readFileSync("test/fixtures/#{name}", "utf-8")

describe "Parser", ->
  describe ".parse()", ->
    context "when a valid abc notation is given", ->
      it "returns an AbcFile", ->
        fs.readdirSync("test/fixtures").forEach (file) ->
          abcFile = Parser.parse(readFixture(file))
          assert.instanceOf(abcFile, AbcFile)

    context "when an invalid abc notation is given", ->
      it "throws Parser.SyntaxError", ->
        assert.throw(
          -> Parser.parse("invalid abc notation")
          Parser.SyntaxError
        )

    context "when abc notation of \"Speed the Plough\" is given", ->
      it "returns an AbcFile with actual headers", ->
        abcTune = Parser.parse(readFixture("speed_the_plough.abc")).abcTune

        assert.equal(abcTune.getReferenceNumber(), 1)
        assert.equal(abcTune.getTitle(), "Speed the Plough")
        assert.instanceOf(abcTune.getKey(), Key)
        assert.equal(abcTune.getKey().toString(), "G")
        assert.equal(abcTune.getMeter(), "4/4")
        assert.equal(abcTune.getUnitNoteLength(), "1/4")
        assert.deepEqual(abcTune.getComposers(), ["Trad."])
