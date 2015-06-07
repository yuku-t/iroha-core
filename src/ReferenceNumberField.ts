import field = require("./InformationField");

export class ReferenceNumberField implements field.InformationField {
    value: Number;

    letter = "X";

    constructor(value: Number) {
        this.value = value;
    }
}
