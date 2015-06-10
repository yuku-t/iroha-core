{ assert } = require "chai"
{ MeterField } = require "../dist/MeterField"

describe "MeterField", ->
  meterField = null

  describe "#getUnitNoteLength()", ->
    subject = (value) ->
      (new MeterField(value)).getUnitNoteLength()

    context 'when it is constructed with "4/4"', ->
      it 'returns "1/4"', ->
        assert.equal(subject("4/4"), "1/4")

    context 'when it is constructed with "(2+3+2)/8"', ->
      it 'returns "1/8"', ->
        assert.equal(subject("(2+3+2)/8"), "1/8")

    context 'when it is constructed with "C"', ->
      it 'returns "1/4"', ->
        assert.equal(subject("C"), "1/4")

    context 'when it is constructed with "C|"', ->
      it 'returns "1/2"', ->
        assert.equal(subject("C|"), "1/2")

    context 'when it is constructed with "none"', ->
      it 'returns undefined', ->
        assert.isUndefined(subject("none"))
