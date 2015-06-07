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
    return AbcTune;
})();
exports.AbcTune = AbcTune;
