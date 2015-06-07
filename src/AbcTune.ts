import header = require("./TuneHeader");
import body = require("./TuneBody");

export class AbcTune {
    tuneHeader: header.TuneHeader;
    tuneBody: body.TuneBody;

    constructor (tuneHeader: header.TuneHeader, tuneBody: body.TuneBody) {
        this.tuneHeader = tuneHeader;
        this.tuneBody = tuneBody;
    }

    getReferenceNumber(): number {
        return this.tuneHeader.getReferenceNumber();
    }

    getTitle(): string {
        return this.tuneHeader.getTitle();
    }

    getKey(): string {
        return this.tuneHeader.getKey();
    }

    getComposers(): Array<string> {
        return this.tuneHeader.getComposers();
    }
}
