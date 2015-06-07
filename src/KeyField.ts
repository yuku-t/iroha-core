import field = require("./InformationField");

export class KeyField implements field.InformationField {
    value: string;

    letter = "K";

    constructor(value: string) {
        this.value = value;
    }
}
