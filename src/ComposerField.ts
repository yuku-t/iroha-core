import field = require("./InformationField");

export class ComposerField implements field.InformationField {
    value: String;

    letter = "C";

    constructor(value: String) {
        this.value = value;
    }
}
