import header = require("./TuneHeader");
import body = require("./TuneBody");

export class AbcTune {
    tuneHeader: header.TuneHeader;
    tuneBody: body.TuneBody;

    constructor (tuneHeader: header.TuneHeader, tuneBody: body.TuneBody) {
        this.tuneHeader = tuneHeader;
        this.tuneBody = tuneBody;
    }
}
