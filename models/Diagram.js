"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diagram = void 0;
var Diagram = (function () {
    function Diagram() {
        this._name = '';
        this._downStreaks = new Array();
        this._upStreaks = new Array();
    }
    Object.defineProperty(Diagram.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Diagram.prototype, "downStreaks", {
        get: function () {
            return this._downStreaks;
        },
        set: function (v) {
            this._downStreaks = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Diagram.prototype, "upStreaks", {
        get: function () {
            return this._upStreaks;
        },
        set: function (v) {
            this._upStreaks = v;
        },
        enumerable: false,
        configurable: true
    });
    Diagram.prototype.toJSON = function () {
        return {
            name: this.name,
            downStreaks: this.downStreaks,
            upStreaks: this.upStreaks,
        };
    };
    return Diagram;
}());
exports.Diagram = Diagram;
