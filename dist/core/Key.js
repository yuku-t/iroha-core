/// <reference path="../typings/underscore/underscore.d.ts" />
var _ = require("underscore");
var Key = (function () {
    function Key(note, accidental, mode) {
        this.note = note;
        this.accidental = accidental;
        this.mode = mode ? mode.toLowerCase() : "major";
    }
    Key.prototype.toString = function () {
        var mode = this.mode === "minor" ? "m" : "";
        return _.compact([this.note, this.accidental, mode]).join("");
    };
    return Key;
})();
exports.Key = Key;
