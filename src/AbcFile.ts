import tune = require("./AbcTune");

export class AbcFile {
    abcTune: tune.AbcTune;

    constructor (abcTune: tune.AbcTune) {
        this.abcTune = abcTune;
    }
}
