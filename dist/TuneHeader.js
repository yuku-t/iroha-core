var ComposerField_1 = require("./ComposerField");
var MeterField_1 = require("./MeterField");
var TuneHeader = (function () {
    function TuneHeader(xf, tf, kf, ifs) {
        var _this = this;
        this.keyField = kf;
        this.referenceNumberField = xf;
        this.titleField = tf;
        this.composerFields = [];
        ifs.forEach(function (informationField) {
            if (informationField instanceof ComposerField_1.ComposerField) {
                _this.composerFields.push(informationField);
            }
            else if (informationField instanceof MeterField_1.MeterField) {
                _this.meterField = informationField;
            }
        });
        if (this.meterField == null) {
            // when there is no M: field defined, free meter is assumed.
            this.meterField = new MeterField_1.MeterField("none");
        }
    }
    TuneHeader.prototype.getReferenceNumber = function () {
        return this.referenceNumberField.value;
    };
    TuneHeader.prototype.getTitle = function () {
        return this.titleField.value;
    };
    TuneHeader.prototype.getKey = function () {
        return this.keyField.value;
    };
    TuneHeader.prototype.getMeter = function () {
        return this.meterField.value;
    };
    TuneHeader.prototype.getComposers = function () {
        return this.composerFields.map(function (composerField) {
            return composerField.value;
        });
    };
    TuneHeader.prototype.getUnitNoteLength = function () {
        return this.meterField.getUnitNoteLength();
    };
    return TuneHeader;
})();
exports.TuneHeader = TuneHeader;
