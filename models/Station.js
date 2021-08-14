"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
var Station = (function () {
    function Station() {
        this._name = '';
        this._timeType = 0;
        this._scale = 0;
        this._trainInfoDown = 0;
        this._trainInfoUp = 0;
        this._boundary = false;
        this._additionalOption = 0;
        this._shouldShowLineNumberDown = false;
        this._shouldShowLineNumberUp = false;
        this._shouldShowLines = false;
        this._lines = [];
        this._mainLineDown = 0;
        this._mainLineUp = 0;
    }
    Object.defineProperty(Station.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "timeType", {
        get: function () {
            return this._timeType;
        },
        set: function (v) {
            this._timeType = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (v) {
            this._scale = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "trainInfoDown", {
        get: function () {
            return this._trainInfoDown;
        },
        set: function (v) {
            this._trainInfoDown = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "trainInfoUp", {
        get: function () {
            return this._trainInfoUp;
        },
        set: function (v) {
            this._trainInfoUp = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "boundary", {
        get: function () {
            return this._boundary;
        },
        set: function (v) {
            this._boundary = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "additionalOption", {
        get: function () {
            return this._additionalOption;
        },
        set: function (v) {
            this._additionalOption = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "shouldShowLineNumberDown", {
        get: function () {
            return this._shouldShowLineNumberDown;
        },
        set: function (v) {
            this._shouldShowLineNumberDown = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "shouldShowLineNumberUp", {
        get: function () {
            return this._shouldShowLineNumberUp;
        },
        set: function (v) {
            this._shouldShowLineNumberUp = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "shouldShowLines", {
        get: function () {
            return this._shouldShowLines;
        },
        set: function (v) {
            this._shouldShowLines = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "lines", {
        get: function () {
            return this._lines;
        },
        set: function (v) {
            this._lines = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "mainLineDown", {
        get: function () {
            return this._mainLineDown;
        },
        set: function (v) {
            this._mainLineDown = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Station.prototype, "mainLineUp", {
        get: function () {
            return this._mainLineUp;
        },
        set: function (v) {
            this._mainLineUp = v;
        },
        enumerable: false,
        configurable: true
    });
    Station.timeTypeToInt = function (value) {
        switch (value) {
            case 'Jikokukeisiki_Hatsuchaku':
                return 10;
            case 'Jikokukeisiki_KudariChaku':
                return 20;
            case 'Jikokukeisiki_NoboriChaku':
                return 30;
            default:
                return 0;
        }
    };
    Station.prototype.parseTimeType = function () {
        switch (this.timeType) {
            case 10:
                return 'Jikokukeisiki_Hatsuchaku';
            case 20:
                return 'Jikokukeisiki_KudariChaku';
            case 30:
                return 'Jikokukeisiki_NoboriChaku';
            default:
                return 'Jikokukeisiki_Hatsu';
        }
    };
    Station.scaleToInt = function (value) {
        switch (value) {
            case 'Ekikibo_Syuyou':
                return 10;
            default:
                return 0;
        }
    };
    Station.prototype.parseScale = function () {
        switch (this.scale) {
            case 10:
                return 'Ekikibo_Syuyou';
            default:
                return 'Ekikibo_Ippan';
        }
    };
    Station.trainInfoToInt = function (value) {
        switch (value) {
            case 'DiagramRessyajouhouHyouji_Anytime':
                return 20;
            case 'DiagramRessyajouhouHyouji_Not':
                return 0;
            default:
                return 10;
        }
    };
    Station.prototype.toJSON = function () {
        return {
            name: this.name,
            timeType: this.timeType,
            scale: this.scale,
            trainInfoDown: this.trainInfoDown,
            trainInfoUp: this.trainInfoUp,
            boundary: this.boundary,
            additionalOption: this.additionalOption,
            shouldShowLineNumberDown: this.shouldShowLineNumberDown,
            shouldShowLineNumberUp: this.shouldShowLineNumberUp,
            shouldShowLines: this.shouldShowLines,
            lines: this.lines,
            mainLineDown: this.mainLineDown,
            mainLineUp: this.mainLineUp,
        };
    };
    return Station;
}());
exports.Station = Station;
