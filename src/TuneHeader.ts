import reference = require("./ReferenceNumberField");
import title = require("./TitleField");
import field = require("./InformationField");

export class TuneHeader {
    referenceNumberField: reference.ReferenceNumberField;
    titleField: title.TitleField;
    informationFields: Array<field.InformationField>;

    constructor (xf: reference.ReferenceNumberField, tf: title.TitleField, ifs: Array<field.InformationField>) {
        this.referenceNumberField = xf;
        this.titleField = tf;
        this.informationFields = ifs;
    }
}
