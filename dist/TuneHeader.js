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
    return TuneHeader;
})();
exports.TuneHeader = TuneHeader;
