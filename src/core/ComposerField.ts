import { InformationField } from "./InformationField";

export class ComposerField implements InformationField {
    value: string;

    letter = "C";

    constructor(value: string) {
        this.value = value;
    }
}
