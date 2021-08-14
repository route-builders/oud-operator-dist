"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streak = void 0;
var Streak = (function () {
    function Streak() {
        this._operationNum = '';
        this._typeIdx = 0;
        this._name = '';
        this._destIdx = 0;
        this._stHandlings = new Array();
        this._comment = '';
    }
    Object.defineProperty(Streak.prototype, "operationNum", {
        get: function () {
            return this._operationNum;
        },
        set: function (v) {
            this._operationNum = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Streak.prototype, "typeIdx", {
        get: function () {
            return this._typeIdx;
        },
        set: function (v) {
            this._typeIdx = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Streak.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Streak.prototype, "no", {
        get: function () {
            return this._no;
        },
        set: function (v) {
            this._no = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Streak.prototype, "destIdx", {
        get: function () {
            return this._destIdx;
        },
        set: function (v) {
            this._destIdx = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Streak.prototype, "stHandlings", {
        get: function () {
            return this._stHandlings;
        },
        set: function (v) {
            this._stHandlings = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Streak.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (v) {
            this._comment = v;
        },
        enumerable: false,
        configurable: true
    });
    Streak.prototype.toJSON = function () {
        return {
            operationNum: this.operationNum,
            typeIdx: this.typeIdx,
            name: this.name,
            no: this.no,
            destIdx: this.destIdx,
            stHandlings: this.stHandlings,
            comment: this.comment,
        };
    };
    return Streak;
}());
exports.Streak = Streak;
