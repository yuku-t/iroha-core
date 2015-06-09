import { InformationField } from "./InformationField";

export class TitleField implements InformationField {
    value: string;

    letter = "T";

    constructor(value: string) {
        this.value = value;
    }
}
