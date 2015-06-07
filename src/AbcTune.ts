import body = require("./TuneBody");
import header = require("./TuneHeader");
import key = require("./Key");

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

    getKey(): key.Key {
        return this.tuneHeader.getKey();
    }

    getMeter(): string {
        return this.tuneHeader.getMeter();
    }

    getComposers(): string[] {
        return this.tuneHeader.getComposers();
    }
}
