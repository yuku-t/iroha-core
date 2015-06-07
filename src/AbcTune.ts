import header = require("./TuneHeader");
import body = require("./TuneBody");

export class AbcTune {
    tuneHeader: header.TuneHeader;
    tuneBody: body.TuneBody;

    constructor (tuneHeader: header.TuneHeader, tuneBody: body.TuneBody) {
        this.tuneHeader = tuneHeader;
        this.tuneBody = tuneBody;
    }

    getReferenceNumber(): Number {
        return this.tuneHeader.getReferenceNumber();
    }

    getTitle(): String {
        return this.tuneHeader.getTitle();
    }

    getKey(): String {
        return this.tuneHeader.getKey();
    }
}
