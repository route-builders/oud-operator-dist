"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidABGRColorError = void 0;
var InvalidABGRColorError = (function () {
    function InvalidABGRColorError(invalidColorCode) {
        this.name = InvalidABGRColorError.name;
        this.message = "Invalid format. should be #AABBGGRR : (" + invalidColorCode + ")";
    }
    return InvalidABGRColorError;
}());
exports.InvalidABGRColorError = InvalidABGRColorError;
