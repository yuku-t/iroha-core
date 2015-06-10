var AbcTune = (function () {
    function AbcTune(tuneHeader, tuneBody) {
        this.tuneHeader = tuneHeader;
        this.tuneBody = tuneBody;
    }
    AbcTune.prototype.getReferenceNumber = function () {
        return this.tuneHeader.getReferenceNumber();
    };
    AbcTune.prototype.getTitle = function () {
        return this.tuneHeader.getTitle();
    };
    AbcTune.prototype.getKey = function () {
        return this.tuneHeader.getKey();
    };
    AbcTune.prototype.getMeter = function () {
        return this.tuneHeader.getMeter();
    };
    AbcTune.prototype.getComposers = function () {
        return this.tuneHeader.getComposers();
    };
    AbcTune.prototype.getUnitNoteLength = function () {
        return this.tuneHeader.getUnitNoteLength();
    };
    return AbcTune;
})();
exports.AbcTune = AbcTune;
