var composer = require("./ComposerField");
var TuneHeader = (function () {
    function TuneHeader(xf, tf, kf, ifs) {
        this.keyField = kf;
        this.informationFields = ifs;
        this.referenceNumberField = xf;
        this.titleField = tf;
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
        var result = [];
        this.informationFields.forEach(function (informationField) {
            if (informationField instanceof composer.ComposerField) {
                result.push(informationField.value);
            }
        });
        return result;
    };
    return TuneHeader;
})();
exports.TuneHeader = TuneHeader;
