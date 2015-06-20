{
  var _                      = require("underscore")
    , AbcFile                = require("./AbcFile").AbcFile
    , AbcTune                = require("./AbcTune").AbcTune
    , BarLine                = require("./BarLine").BarLine
    , ComposerField          = require("./ComposerField").ComposerField
    , EndOfRepeatedSection   = require("./EndOfRepeatedSection").EndOfRepeatedSection
    , KeyField               = require("./KeyField").KeyField
    , MeterField             = require("./MeterField").MeterField
    , Note                   = require("./Note").Note
    , NotesGroup             = require("./NotesGroup").NotesGroup
    , ReferenceNumberField   = require("./ReferenceNumberField").ReferenceNumberField
    , StartOfRepeatedSection = require("./StartOfRepeatedSection").StartOfRepeatedSection
    , TitleField             = require("./TitleField").TitleField
    , TuneBody               = require("./TuneBody").TuneBody
    , TuneHeader             = require("./TuneHeader").TuneHeader
    , TuneLine               = require("./TuneLine").TuneLine
}

Start
  = AbcFile

AbcFile
  = abcTune:AbcTune { return new AbcFile(abcTune); }

AbcTune
  = tuneHeader:TuneHeader tuneBody:TuneBody { return new AbcTune(tuneHeader, tuneBody); }

TuneHeader
  = xf:ReferenceNumberField tf:TitleField ifs:InformationField* kf:KeyField {
    return new TuneHeader(xf, tf, kf, ifs);
  }

InformationField
  = ComposerField
  / MeterField

ComposerField
  = "C:" text:TextString Linefeed { return new ComposerField(text); }

KeyField
  = "K:" key:Key Linefeed { return new KeyField(key); }

MeterField
  = "M:" meter:$Meter Linefeed { return new MeterField(meter); }

TitleField
  = "T:" text:TextString Linefeed { return new TitleField(text); }

ReferenceNumberField
  = "X:" number:Number Linefeed { return new ReferenceNumberField(number); }

Key
  = KeyNote KeyAccidental? ModeSpec?

KeyNote
  = [A-G]

KeyAccidental
  = "#"
  / "b"

ModeSpec
  = Space* mode:Mode { return mode; }

Mode
  = ModeMajor { return "major"; }
  / ModeMinor { return "minor"; }

ModeMajor
  = [m]i [a]i [j]i ([o]i [r]i)?

ModeMinor
  = [m]i ([i]i [n]i [o]i [r]i)?

Meter
  = "C"
  / "C|"
  / Number "/" Number
  / "(" Number ("+" Number)+ ")/" Number

TuneBody
  = tuneLines:TuneLine+ { return new TuneBody(tuneLines); }

TuneLine
  = elements:Element+ Linefeed? { return new TuneLine(_.compact(elements)); }

Element
  = NotesGroup
  / BarSymbol
  / Space { return null; }

NotesGroup
  = elements:NoteElement+ { return new NotesGroup(elements); }

NoteElement
  = pitch:$Pitch noteLength:NoteLength? { return new Note(pitch, noteLength); }

Pitch
  = [a-gA-G]

NoteLength
  = Number? ("/"+ Number?)?

BarSymbol
  = "|:" { return new StartOfRepeatedSection(); }
  / ":|" { return new EndOfRepeatedSection(); }
  / "|"  { return new BarLine(); }

Linefeed
  = "\r\n" / "\n"

Space
  = [ \t]

TextString
  = cs:TextChar* { return cs.join(""); }

TextChar
  = [^\n]

Number
  = d:$[0-9]+ { return parseInt(d, 10); }
