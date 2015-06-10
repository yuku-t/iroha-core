import { InformationField } from "./InformationField";

export class MeterField implements InformationField {
    value: string;

    letter = "M";

    constructor(value: string) {
        this.value = value;
    }

    getMeter(): string {
        var meter: string;
        switch (this.value) {
            case "C":
                meter = "4/4";
                break;
            case "C|":
                meter = "2/2";
                break;
            case "none":
                meter = null;
                break;
            default:
                meter = this.value;
        }
        return meter;
    }

    getUnitNoteLength(): string {
        var meter = this.getMeter();
        if (meter === null) {
            return undefined;
        }
        var base = meter.split("/")[1];
        return base ? `1/${base}` : "1";
    }
}
