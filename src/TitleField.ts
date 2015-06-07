import field = require("./InformationField");

export class TitleField implements field.InformationField {
    value: string;

    letter = "T";

    constructor(value: string) {
        this.value = value;
    }
}
