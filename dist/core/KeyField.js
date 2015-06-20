var Key_1 = require("./Key");
var KeyField = (function () {
    function KeyField(array) {
        this.letter = "K";
        this.value = new Key_1.Key(array[0], array[1], array[2]);
    }
    return KeyField;
})();
exports.KeyField = KeyField;
