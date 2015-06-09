import { InformationField } from "./InformationField";

export class ReferenceNumberField implements InformationField {
    value: number;

    letter = "X";

    constructor(value: number) {
        this.value = value;
    }
}
