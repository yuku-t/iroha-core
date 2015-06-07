import field = require("./InformationField");

export class TitleField implements field.InformationField {
    value: String;

    letter = "T";

    constructor(value: String) {
        this.value = value;
    }
}
