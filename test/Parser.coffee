fs           = require "fs"
assert       = require("chai").assert
Parser       = require "../dist/Parser"
{ AbcFile }  = require "../dist/AbcFile"

describe "Parser", ->
  describe ".parse()", ->
    context "when a valid abc notation is given", ->
      abcNotation = """X:1
        T:Speed the Plough
        M:4/4
        C:Trad.
        K:G
        |:GABc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|
          GABc dedB|dedB dedB|c2ec B2dB|A2F2 G4:|
        |:g2gf gdBd|g2f2 e2d2|c2ec B2dB|c2A2 A2df|
          g2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|"""

      it "returns an AbcFile", ->
        abcFile = Parser.parse(abcNotation)
        assert.instanceOf(abcFile, AbcFile)

        abcTune = abcFile.abcTune
        assert.equal(abcTune.getReferenceNumber(), 1)
        assert.equal(abcTune.getTitle(), "Speed the Plough")
        assert.equal(abcTune.getKey(), "G")
        assert.equal(abcTune.getMeter(), "4/4")
        assert.deepEqual(abcTune.getComposers(), ["Trad."])

    context "when an invalid abc notation is given", ->
      it "throws Parser.SyntaxError", ->
        assert.throw(
          -> Parser.parse("invalid abc notation")
          Parser.SyntaxError
        )
