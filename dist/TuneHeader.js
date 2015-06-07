var composer = require("./ComposerField");
var meter = require("./MeterField");
var TuneHeader = (function () {
    function TuneHeader(xf, tf, kf, ifs) {
        var _this = this;
        this.keyField = kf;
        this.referenceNumberField = xf;
        this.titleField = tf;
        this.composerFields = [];
        ifs.forEach(function (informationField) {
            if (informationField instanceof composer.ComposerField) {
                _this.composerFields.push(informationField);
            }
            else if (informationField instanceof meter.MeterField) {
                _this.meterField = informationField;
            }
        });
        if (this.meterField == null) {
            // when there is no M: field defined, free meter is assumed.
            this.meterField = new meter.MeterField("none");
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
    TuneHeader.prototype.getComposers = function () {
        return this.composerFields.map(function (composerField) {
            return composerField.value;
        });
    };
    return TuneHeader;
})();
exports.TuneHeader = TuneHeader;
