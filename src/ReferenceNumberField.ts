import field = require("./InformationField");

export class ReferenceNumberField implements field.InformationField {
    value: number;

    letter = "X";

    constructor(value: number) {
        this.value = value;
    }
}
