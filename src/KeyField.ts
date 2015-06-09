import { InformationField } from "./InformationField";
import { Key } from "./Key";

export class KeyField implements InformationField {
    value: Key;

    letter = "K";

    constructor(array: string[]) {
        this.value = new Key(array[0], array[1], array[2]);
    }
}
