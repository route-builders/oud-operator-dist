"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidHEXColorError = void 0;
var InvalidHEXColorError = (function () {
    function InvalidHEXColorError(invalidColorCode) {
        this.name = InvalidHEXColorError.name;
        this.message = "Invalid format. should be #RRGGBB or #RGB : (" + invalidColorCode + ")";
    }
    return InvalidHEXColorError;
}());
exports.InvalidHEXColorError = InvalidHEXColorError;
