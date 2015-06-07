import field = require("./InformationField");

export class ComposerField implements field.InformationField {
    value: string;

    letter = "C";

    constructor(value: string) {
        this.value = value;
    }
}
