import { ComposerField } from "./ComposerField";
import { InformationField } from "./InformationField";
import { KeyField } from "./KeyField";
import { Key } from "./Key";
import { ReferenceNumberField } from "./ReferenceNumberField";
import { MeterField } from "./MeterField";
import { TitleField } from "./TitleField";

export class TuneHeader {
    referenceNumberField: ReferenceNumberField;
    titleField: TitleField;
    keyField: KeyField;
    meterField: MeterField;
    composerFields: ComposerField[];

    constructor (xf: ReferenceNumberField, tf: TitleField, kf: KeyField, ifs: InformationField[]) {
        this.keyField = kf;
        this.referenceNumberField = xf;
        this.titleField = tf;
        this.composerFields = [];

        ifs.forEach((informationField: InformationField) => {
            if (informationField instanceof ComposerField) {
                this.composerFields.push(informationField);
            } else if (informationField instanceof MeterField) {
                this.meterField = informationField;
            }
        });

        if (this.meterField == null) {
            // when there is no M: field defined, free meter is assumed.
            this.meterField = new MeterField("none");
        }
    }

    getReferenceNumber(): number {
        return this.referenceNumberField.value;
    }

    getTitle(): string {
        return this.titleField.value;
    }

    getKey(): Key {
        return this.keyField.value;
    }

    getMeter(): string {
        return this.meterField.value;
    }

    getComposers(): string[] {
        return this.composerFields.map((composerField: ComposerField) => {
            return composerField.value;
        });
    }
}
