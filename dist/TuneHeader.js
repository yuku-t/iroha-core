var TuneHeader = (function () {
    function TuneHeader(xf, tf, ifs) {
        this.referenceNumberField = xf;
        this.titleField = tf;
        this.informationFields = ifs;
    }
    TuneHeader.prototype.getReferenceNumber = function () {
        return this.referenceNumberField.value;
    };
    TuneHeader.prototype.getTitle = function () {
        return this.titleField.value;
    };
    return TuneHeader;
})();
exports.TuneHeader = TuneHeader;
