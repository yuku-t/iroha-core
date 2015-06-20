var MeterField = (function () {
    function MeterField(value) {
        this.letter = "M";
        this.value = value;
    }
    MeterField.prototype.getMeter = function () {
        var meter;
        switch (this.value) {
            case "C":
                meter = "4/4";
                break;
            case "C|":
                meter = "2/2";
                break;
            case "none":
                meter = null;
                break;
            default:
                meter = this.value;
        }
        return meter;
    };
    MeterField.prototype.getUnitNoteLength = function () {
        var meter = this.getMeter();
        if (meter === null) {
            return undefined;
        }
        var base = meter.split("/")[1];
        return base ? "1/" + base : "1";
    };
    return MeterField;
})();
exports.MeterField = MeterField;
