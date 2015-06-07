/// <reference path="typings/underscore/underscore.d.ts" />

import _ = require("underscore");

export class Key {
    note: string;
    accidental: string;
    mode: string;

    constructor(note: string, accidental: string, mode: string) {
        this.note = note;
        this.accidental = accidental;
        this.mode = mode ? mode.toLowerCase() : "major";
    }

    toString(): string {
        var mode: string = this.mode === "minor" ? "m" : "";
        return _.compact([this.note, this.accidental, mode]).join("");
    }
}
