"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
var Time = (function () {
    function Time(v) {
        this.seconds = 0;
        if (v === undefined || v === null) {
            this.seconds = -1;
            return;
        }
        this.setTime(v);
    }
    Object.defineProperty(Time.prototype, "isNull", {
        get: function () {
            return this.seconds < 0;
        },
        enumerable: false,
        configurable: true
    });
    Time.prototype.getTime = function () {
        return this.seconds;
    };
    Time.prototype.setTime = function (v) {
        if (v === null || v.match(/^[0-9]{3,6}$/) === null) {
            this.seconds = -1;
            return;
        }
        var time = parseInt(v);
        if (3 <= v.length && v.length <= 4) {
            this.seconds = Math.floor(time / 100) * 3600 + (time % 100) * 60;
        }
        else if (5 <= v.length && v.length <= 6) {
            this.seconds = Math.floor(time / 10000) * 3600 + Math.floor((time % 10000) / 100) * 60 + (time % 100);
        }
    };
    Time.prototype.compareWith = function (time) {
        var difference = this.seconds - time.seconds;
        if (difference < 0) {
            return -1;
        }
        else if (difference == 0) {
            return 0;
        }
        else {
            return 1;
        }
    };
    Time.prototype.differenceTo = function (time) {
        return new Time(((this.seconds - time.seconds) | 0).toString());
    };
    return Time;
}());
exports.Time = Time;
