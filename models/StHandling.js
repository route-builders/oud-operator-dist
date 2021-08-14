"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StHandling = void 0;
var Time_1 = require("./Time");
var StHandling = (function () {
    function StHandling() {
        this._type = 0;
        this._arrival = new Time_1.Time();
        this._departure = new Time_1.Time();
        this._track = 0;
        this.type = 0;
        this.arrival = new Time_1.Time();
        this.departure = new Time_1.Time();
    }
    Object.defineProperty(StHandling.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (v) {
            this._type = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StHandling.prototype, "arrival", {
        get: function () {
            return this._arrival;
        },
        set: function (v) {
            this._arrival = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StHandling.prototype, "departure", {
        get: function () {
            return this._departure;
        },
        set: function (v) {
            this._departure = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StHandling.prototype, "track", {
        get: function () {
            return this._track;
        },
        set: function (v) {
            this._track = v;
        },
        enumerable: false,
        configurable: true
    });
    StHandling.prototype.toJSON = function () {
        return {
            type: this.type,
            arrival: this.arrival.getTime(),
            departure: this.departure.getTime(),
            track: this.track,
        };
    };
    return StHandling;
}());
exports.StHandling = StHandling;
