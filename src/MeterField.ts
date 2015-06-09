import { InformationField } from "./InformationField";

export class MeterField implements InformationField {
    value: string;

    letter = "M";

    constructor(value: string) {
        this.value = value;
    }
}
