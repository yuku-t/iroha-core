module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { Start: peg$parseStart },
        peg$startRuleFunction  = peg$parseStart,

        peg$c0 = function(abcTune) { return new AbcFile(abcTune); },
        peg$c1 = peg$FAILED,
        peg$c2 = function(tuneHeader, tuneBody) { return new AbcTune(tuneHeader, tuneBody); },
        peg$c3 = [],
        peg$c4 = function(xf, tf, ifs, kf) {
            return new TuneHeader(xf, tf, kf, ifs);
          },
        peg$c5 = "C:",
        peg$c6 = { type: "literal", value: "C:", description: "\"C:\"" },
        peg$c7 = function(text) { return new ComposerField(text); },
        peg$c8 = "K:",
        peg$c9 = { type: "literal", value: "K:", description: "\"K:\"" },
        peg$c10 = function(key) { return new KeyField(key); },
        peg$c11 = "M:",
        peg$c12 = { type: "literal", value: "M:", description: "\"M:\"" },
        peg$c13 = function(text) { return new MeterField(text); },
        peg$c14 = "T:",
        peg$c15 = { type: "literal", value: "T:", description: "\"T:\"" },
        peg$c16 = function(text) { return new TitleField(text); },
        peg$c17 = "X:",
        peg$c18 = { type: "literal", value: "X:", description: "\"X:\"" },
        peg$c19 = function(number) { return new ReferenceNumberField(number); },
        peg$c20 = null,
        peg$c21 = /^[A-G]/,
        peg$c22 = { type: "class", value: "[A-G]", description: "[A-G]" },
        peg$c23 = "#",
        peg$c24 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c25 = "b",
        peg$c26 = { type: "literal", value: "b", description: "\"b\"" },
        peg$c27 = function(mode) { return mode; },
        peg$c28 = function() { return "major"; },
        peg$c29 = function() { return "minor"; },
        peg$c30 = /^[m]/i,
        peg$c31 = { type: "class", value: "[m]i", description: "[m]i" },
        peg$c32 = /^[a]/i,
        peg$c33 = { type: "class", value: "[a]i", description: "[a]i" },
        peg$c34 = /^[j]/i,
        peg$c35 = { type: "class", value: "[j]i", description: "[j]i" },
        peg$c36 = /^[o]/i,
        peg$c37 = { type: "class", value: "[o]i", description: "[o]i" },
        peg$c38 = /^[r]/i,
        peg$c39 = { type: "class", value: "[r]i", description: "[r]i" },
        peg$c40 = /^[i]/i,
        peg$c41 = { type: "class", value: "[i]i", description: "[i]i" },
        peg$c42 = /^[n]/i,
        peg$c43 = { type: "class", value: "[n]i", description: "[n]i" },
        peg$c44 = function(tuneLines) { return new TuneBody(tuneLines); },
        peg$c45 = function(elements) { return new TuneLine(_.compact(elements)); },
        peg$c46 = function() { return null; },
        peg$c47 = function(elements) { return new NotesGroup(elements); },
        peg$c48 = function(pitch, noteLength) { return new Note(pitch, noteLength); },
        peg$c49 = /^[a-gA-G]/,
        peg$c50 = { type: "class", value: "[a-gA-G]", description: "[a-gA-G]" },
        peg$c51 = "/",
        peg$c52 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c53 = "|:",
        peg$c54 = { type: "literal", value: "|:", description: "\"|:\"" },
        peg$c55 = function() { return new StartOfRepeatedSection(); },
        peg$c56 = ":|",
        peg$c57 = { type: "literal", value: ":|", description: "\":|\"" },
        peg$c58 = function() { return new EndOfRepeatedSection(); },
        peg$c59 = "|",
        peg$c60 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c61 = function() { return new BarLine(); },
        peg$c62 = "\r\n",
        peg$c63 = { type: "literal", value: "\r\n", description: "\"\\r\\n\"" },
        peg$c64 = "\n",
        peg$c65 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c66 = /^[ \t]/,
        peg$c67 = { type: "class", value: "[ \\t]", description: "[ \\t]" },
        peg$c68 = function(cs) { return cs.join(""); },
        peg$c69 = /^[^\n]/,
        peg$c70 = { type: "class", value: "[^\\n]", description: "[^\\n]" },
        peg$c71 = /^[0-9]/,
        peg$c72 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c73 = function(d) { return parseInt(d, 10); },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parseStart() {
      var s0;

      s0 = peg$parseAbcFile();

      return s0;
    }

    function peg$parseAbcFile() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseAbcTune();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseAbcTune() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseTuneHeader();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTuneBody();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c2(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseTuneHeader() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseReferenceNumberField();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTitleField();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseInformationField();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseInformationField();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseKeyField();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c4(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseInformationField() {
      var s0;

      s0 = peg$parseComposerField();
      if (s0 === peg$FAILED) {
        s0 = peg$parseMeterField();
      }

      return s0;
    }

    function peg$parseComposerField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c5) {
        s1 = peg$c5;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTextString();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLinefeed();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c7(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseKeyField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c8) {
        s1 = peg$c8;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseKey();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLinefeed();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c10(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseMeterField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c11) {
        s1 = peg$c11;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c12); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTextString();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLinefeed();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c13(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseTitleField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c14) {
        s1 = peg$c14;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseTextString();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLinefeed();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c16(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseReferenceNumberField() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c17) {
        s1 = peg$c17;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNumber();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseLinefeed();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c19(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseKey() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseKeyNote();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseKeyAccidental();
        if (s2 === peg$FAILED) {
          s2 = peg$c20;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseModeSpec();
          if (s3 === peg$FAILED) {
            s3 = peg$c20;
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseKeyNote() {
      var s0;

      if (peg$c21.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }

      return s0;
    }

    function peg$parseKeyAccidental() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 35) {
        s0 = peg$c23;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 98) {
          s0 = peg$c25;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
      }

      return s0;
    }

    function peg$parseModeSpec() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseSpace();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseSpace();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseMode();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c27(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseMode() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseModeMajor();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c28();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseModeMinor();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c29();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseModeMajor() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (peg$c30.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c32.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c33); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c34.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c35); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            if (peg$c36.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c37); }
            }
            if (s5 !== peg$FAILED) {
              if (peg$c38.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c39); }
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c1;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c1;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$c20;
            }
            if (s4 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseModeMinor() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (peg$c30.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        if (peg$c40.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c41); }
        }
        if (s3 !== peg$FAILED) {
          if (peg$c42.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
          if (s4 !== peg$FAILED) {
            if (peg$c36.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c37); }
            }
            if (s5 !== peg$FAILED) {
              if (peg$c38.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c39); }
              }
              if (s6 !== peg$FAILED) {
                s3 = [s3, s4, s5, s6];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$c1;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$c1;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c1;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c1;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c20;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseTuneBody() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseTuneLine();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseTuneLine();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseTuneLine() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseElement();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseElement();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLinefeed();
        if (s2 === peg$FAILED) {
          s2 = peg$c20;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c45(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseElement() {
      var s0, s1;

      s0 = peg$parseNotesGroup();
      if (s0 === peg$FAILED) {
        s0 = peg$parseBarSymbol();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseSpace();
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c46();
          }
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseNotesGroup() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseNoteElement();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseNoteElement();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseNoteElement() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsePitch();
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNoteLength();
        if (s2 === peg$FAILED) {
          s2 = peg$c20;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c48(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsePitch() {
      var s0;

      if (peg$c49.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c50); }
      }

      return s0;
    }

    function peg$parseNoteLength() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseNumber();
      if (s1 === peg$FAILED) {
        s1 = peg$c20;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (input.charCodeAt(peg$currPos) === 47) {
          s4 = peg$c51;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c52); }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (input.charCodeAt(peg$currPos) === 47) {
              s4 = peg$c51;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c52); }
            }
          }
        } else {
          s3 = peg$c1;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNumber();
          if (s4 === peg$FAILED) {
            s4 = peg$c20;
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c1;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c1;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c20;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseBarSymbol() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c53) {
        s1 = peg$c53;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c54); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c55();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c56) {
          s1 = peg$c56;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c58();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 124) {
            s1 = peg$c59;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c60); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c61();
          }
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseLinefeed() {
      var s0;

      if (input.substr(peg$currPos, 2) === peg$c62) {
        s0 = peg$c62;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s0 = peg$c64;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c65); }
        }
      }

      return s0;
    }

    function peg$parseSpace() {
      var s0;

      if (peg$c66.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c67); }
      }

      return s0;
    }

    function peg$parseTextString() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseTextChar();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseTextChar();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c68(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseTextChar() {
      var s0;

      if (peg$c69.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }

      return s0;
    }

    function peg$parseNumber() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];
      if (peg$c71.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c72); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c71.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c72); }
          }
        }
      } else {
        s2 = peg$c1;
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c73(s1);
      }
      s0 = s1;

      return s0;
    }


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


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();