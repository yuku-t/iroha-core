import field = require("./InformationField");

export class KeyField implements field.InformationField {
    value: String;

    letter = "K";

    constructor(value: String) {
        this.value = value;
    }
}
