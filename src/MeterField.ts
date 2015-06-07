import field = require("./InformationField");

export class MeterField implements field.InformationField {
    value: string;

    letter = "M";

    constructor(value: string) {
        this.value = value;
    }
}
