"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainType = void 0;
var Color_1 = require("./Color");
var TrainType = (function () {
    function TrainType() {
        this._name = '';
        this._shortname = '';
        this._trainColor = new Color_1.Color();
        this._fontIdx = 0;
        this._lineColor = new Color_1.Color();
        this._lineType = 0;
        this._lineWeight = 0;
        this._shoudDrawStopMark = false;
    }
    Object.defineProperty(TrainType.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "shortname", {
        get: function () {
            return this._shortname;
        },
        set: function (v) {
            this._shortname = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "trainColor", {
        get: function () {
            return this._trainColor;
        },
        set: function (v) {
            this._trainColor = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "fontIdx", {
        get: function () {
            return this._fontIdx;
        },
        set: function (v) {
            this._fontIdx = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "lineColor", {
        get: function () {
            return this._lineColor;
        },
        set: function (v) {
            this._lineColor = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "lineType", {
        get: function () {
            return this._lineType;
        },
        set: function (v) {
            this._lineType = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "lineWeight", {
        get: function () {
            return this._lineWeight;
        },
        set: function (v) {
            this._lineWeight = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrainType.prototype, "shoudDrawStopMark", {
        get: function () {
            return this._shoudDrawStopMark;
        },
        set: function (v) {
            this._shoudDrawStopMark = v;
        },
        enumerable: false,
        configurable: true
    });
    TrainType.lineStyleToInt = function (str) {
        switch (str) {
            case 'SenStyle_Tensen':
                return 10;
            case 'SenStyle_Hasen':
                return 20;
            default:
                return 0;
        }
    };
    TrainType.prototype.toJSON = function () {
        return {
            name: this.name,
            shortname: this.shortname,
            trainColor: this.trainColor,
            fontIdx: this.fontIdx,
            lineColor: this.lineColor,
            lineType: this.lineType,
            lineWeight: this.lineWeight,
            shoudDrawStopMark: this.shoudDrawStopMark,
        };
    };
    return TrainType;
}());
exports.TrainType = TrainType;
