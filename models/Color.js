"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var InvalidABGRColorError_1 = require("../errors/InvalidABGRColorError");
var InvalidHEXColorError_1 = require("../errors/InvalidHEXColorError");
var Color = (function () {
    function Color(v) {
        this._r = 0;
        this._g = 0;
        this._b = 0;
        if (v === undefined) {
            return;
        }
        this.setFromHEX(v);
    }
    Color.prototype.setFromHEX = function (v) {
        var matchResults = [
            v.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),
            v.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
        ];
        if (matchResults[0]) {
            var strR = matchResults[0][1];
            var strG = matchResults[0][2];
            var strB = matchResults[0][3];
            if (strR && strG && strB) {
                this._r = parseInt("".concat(strR).concat(strR), 16);
                this._g = parseInt("".concat(strG).concat(strG), 16);
                this._b = parseInt("".concat(strB).concat(strB), 16);
                return;
            }
        }
        else if (matchResults[1]) {
            var strR = matchResults[1][1];
            var strG = matchResults[1][2];
            var strB = matchResults[1][3];
            if (strR && strG && strB) {
                this._r = parseInt(strR, 16);
                this._g = parseInt(strG, 16);
                this._b = parseInt(strB, 16);
                return;
            }
        }
        throw new InvalidHEXColorError_1.InvalidHEXColorError(v);
    };
    Color.prototype.setFromABGR = function (v) {
        var matchResult = v.match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
        if (matchResult) {
            var strR = matchResult[4];
            var strG = matchResult[3];
            var strB = matchResult[2];
            if (strR && strG && strB) {
                this._r = parseInt(strR, 16);
                this._g = parseInt(strG, 16);
                this._b = parseInt(strB, 16);
                return;
            }
        }
        throw new InvalidABGRColorError_1.InvalidABGRColorError(v);
    };
    Color.prototype.RGB = function () {
        return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')';
    };
    Color.prototype.HEX = function (withSharp) {
        if (withSharp === void 0) { withSharp = true; }
        return (withSharp ? '#' : '') + this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
    };
    Color.prototype.BGR = function (withSharp) {
        if (withSharp === void 0) { withSharp = true; }
        return (withSharp ? '#' : '') + this._b.toString(16) + this._g.toString(16) + this._r.toString(16) + '00';
    };
    Color.prototype.toJSON = function () {
        return {
            r: this._r,
            g: this._g,
            b: this._b,
        };
    };
    return Color;
}());
exports.Color = Color;
