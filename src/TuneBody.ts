import { TuneLine } from "./TuneLine";

export class TuneBody {
    tuneLines: TuneLine[];

    constructor (tuneLines: TuneLine[]) {
        this.tuneLines = tuneLines;
    }
}
