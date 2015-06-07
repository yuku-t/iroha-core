import composer = require("./ComposerField");
import field = require("./InformationField");
import key = require("./KeyField");
import reference = require("./ReferenceNumberField");
import meter = require("./MeterField");
import title = require("./TitleField");

export class TuneHeader {
    referenceNumberField: reference.ReferenceNumberField;
    titleField: title.TitleField;
    keyField: key.KeyField;
    meterField: meter.MeterField;
    composerFields: composer.ComposerField[];

    constructor (xf: reference.ReferenceNumberField, tf: title.TitleField, kf: key.KeyField, ifs: field.InformationField[]) {
        this.keyField = kf;
        this.referenceNumberField = xf;
        this.titleField = tf;
        this.composerFields = [];

        ifs.forEach((informationField: field.InformationField) => {
            if (informationField instanceof composer.ComposerField) {
                this.composerFields.push(informationField);
            } else if (informationField instanceof meter.MeterField) {
                this.meterField = informationField;
            }
        });

        if (this.meterField == null) {
            // when there is no M: field defined, free meter is assumed.
            this.meterField = new meter.MeterField("none");
        }
    }

    getReferenceNumber(): number {
        return this.referenceNumberField.value;
    }

    getTitle(): string {
        return this.titleField.value;
    }

    getKey(): string {
        return this.keyField.value;
    }

    getComposers(): string[] {
        return this.composerFields.map((composerField: composer.ComposerField) => {
            return composerField.value;
        });
    }
}
