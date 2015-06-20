var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BarSymbol_1 = require("./BarSymbol");
var BarLine = (function (_super) {
    __extends(BarLine, _super);
    function BarLine() {
        _super.apply(this, arguments);
    }
    return BarLine;
})(BarSymbol_1.BarSymbol);
exports.BarLine = BarLine;
