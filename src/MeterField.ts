import field = require("./InformationField");

export class MeterField implements field.InformationField {
    value: String;

    letter = "M";

    constructor(value: String) {
        this.value = value;
    }
}
