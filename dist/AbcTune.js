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
    return AbcTune;
})();
exports.AbcTune = AbcTune;
