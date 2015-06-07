import field = require("./InformationField");
import key = require("./Key");

export class KeyField implements field.InformationField {
    value: key.Key;

    letter = "K";

    constructor(array: string[]) {
        this.value = new key.Key(array[0], array[1], array[2]);
    }
}
