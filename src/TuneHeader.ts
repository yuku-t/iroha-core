import field = require("./InformationField");
import key = require("./KeyField");
import reference = require("./ReferenceNumberField");
import title = require("./TitleField");

export class TuneHeader {
    referenceNumberField: reference.ReferenceNumberField;
    titleField: title.TitleField;
    keyField: key.KeyField;
    informationFields: Array<field.InformationField>;

    constructor (xf: reference.ReferenceNumberField, tf: title.TitleField, kf: key.KeyField, ifs: Array<field.InformationField>) {
        this.keyField = kf;
        this.informationFields = ifs;
        this.referenceNumberField = xf;
        this.titleField = tf;
    }

    getReferenceNumber(): Number {
        return this.referenceNumberField.value;
    }

    getTitle(): String {
        return this.titleField.value;
    }

    getKey(): String {
        return this.keyField.value;
    }
}
