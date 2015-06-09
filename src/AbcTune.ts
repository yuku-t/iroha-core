import { TuneBody } from "./TuneBody";
import { TuneHeader } from "./TuneHeader";
import { Key } from "./Key";

export class AbcTune {
    tuneHeader: TuneHeader;
    tuneBody: TuneBody;

    constructor (tuneHeader: TuneHeader, tuneBody: TuneBody) {
        this.tuneHeader = tuneHeader;
        this.tuneBody = tuneBody;
    }

    getReferenceNumber(): number {
        return this.tuneHeader.getReferenceNumber();
    }

    getTitle(): string {
        return this.tuneHeader.getTitle();
    }

    getKey(): Key {
        return this.tuneHeader.getKey();
    }

    getMeter(): string {
        return this.tuneHeader.getMeter();
    }

    getComposers(): string[] {
        return this.tuneHeader.getComposers();
    }
}
