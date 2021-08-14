"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.O_O = void 0;
var oud_to_json_1 = require("@route-builders/oud-to-json");
var Color_1 = require("./models/Color");
var Diagram_1 = require("./models/Diagram");
var Station_1 = require("./models/Station");
var StHandling_1 = require("./models/StHandling");
var Streak_1 = require("./models/Streak");
var TrainType_1 = require("./models/TrainType");
var O_O = (function () {
    function O_O() {
        this._fileType = '';
        this._fileTypeAppComment = '';
        this._name = '';
        this._color = new Color_1.Color();
        this._stations = new Array();
        this._trainTypes = new Array();
        this._diagrams = new Array();
    }
    Object.defineProperty(O_O.prototype, "fileType", {
        get: function () {
            return this._fileType;
        },
        set: function (v) {
            this._fileType = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(O_O.prototype, "fileTypeAppComment", {
        get: function () {
            return this._fileTypeAppComment;
        },
        set: function (v) {
            this._fileTypeAppComment = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(O_O.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(O_O.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (v) {
            this._color = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(O_O.prototype, "stations", {
        get: function () {
            return this._stations;
        },
        set: function (v) {
            this._stations = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(O_O.prototype, "trainTypes", {
        get: function () {
            return this._trainTypes;
        },
        set: function (v) {
            this._trainTypes = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(O_O.prototype, "diagrams", {
        get: function () {
            return this._diagrams;
        },
        set: function (v) {
            this._diagrams = v;
        },
        enumerable: false,
        configurable: true
    });
    O_O.prototype.fromOud = function (lines) {
        var parser = new oud_to_json_1.Oud2JSON(lines);
        var json = JSON.parse(parser.parse());
        var root = json['Rosen'][0];
        this.fileType = json['FileType'];
        this.name = root['Rosenmei'];
        this.stations = root.Eki.map(function (stationJSON) {
            var station = new Station_1.Station();
            station.name = stationJSON.Ekimei;
            station.timeType = Station_1.Station.timeTypeToInt(stationJSON.Ekijikokukeisiki);
            station.scale = Station_1.Station.scaleToInt(stationJSON.Ekikibo);
            station.trainInfoDown = Station_1.Station.trainInfoToInt(stationJSON.DiagramRessyajouhouHyoujiKudari);
            station.trainInfoUp = Station_1.Station.trainInfoToInt(stationJSON.DiagramRessyajouhouHyoujiNobori);
            return station;
        });
        this.trainTypes = root.Ressyasyubetsu.map(function (typeJSON) {
            var trainType = new TrainType_1.TrainType();
            trainType.name = typeJSON.Syubetsumei;
            trainType.shortname = typeJSON.Ryakusyou;
            trainType.trainColor = new Color_1.Color();
            trainType.trainColor.setFromABGR(typeJSON.JikokuhyouMojiColor);
            trainType.fontIdx = parseInt(typeJSON.JikokuhyouFontIndex);
            trainType.lineColor = new Color_1.Color();
            trainType.lineColor.setFromABGR(typeJSON.DiagramSenColor);
            trainType.lineType = TrainType_1.TrainType.lineStyleToInt(typeJSON.DiagramSenStyle);
            if (typeJSON['StopMarkDrawType']) {
                trainType.shoudDrawStopMark = true;
            }
            return trainType;
        });
        function __parseStreaks(NoboriOrKudari) {
            return NoboriOrKudari.Ressya.map(function (t) {
                var streak = new Streak_1.Streak();
                streak.typeIdx = parseInt(t.Syubetsu);
                streak.name = t.Ressyamei;
                streak.operationNum = t.Ressyabangou;
                if (t['Bikou']) {
                    streak.comment = t.Bikou;
                }
                if (t['Gousuu']) {
                    streak.no = t.Gousuu;
                }
                streak.stHandlings = t.EkiJikoku.split(',').map(function (handling) {
                    var stHandling = new StHandling_1.StHandling();
                    if (handling !== '') {
                        var homeAndTimes = handling.split(';');
                        if (homeAndTimes[0]) {
                            stHandling.type = parseInt(homeAndTimes[0]);
                            if (homeAndTimes[1] !== undefined) {
                                var arrAndDep = homeAndTimes[1].split('/');
                                if (arrAndDep[0]) {
                                    if (arrAndDep[1] === undefined) {
                                        stHandling.arrival.setTime(null);
                                        stHandling.departure.setTime(arrAndDep[0]);
                                    }
                                    else if (arrAndDep[1] === '') {
                                        stHandling.arrival.setTime(arrAndDep[0]);
                                        stHandling.departure.setTime(null);
                                    }
                                    else {
                                        stHandling.departure.setTime(arrAndDep[0]);
                                        stHandling.arrival.setTime(arrAndDep[1]);
                                    }
                                }
                            }
                        }
                    }
                    return stHandling;
                });
                return streak;
            });
        }
        this.diagrams = root.Dia.map(function (diaJSON) {
            var dia = new Diagram_1.Diagram();
            dia.name = diaJSON.DiaName;
            dia.downStreaks = __parseStreaks(diaJSON.Kudari[0]);
            dia.upStreaks = __parseStreaks(diaJSON.Nobori[0]);
            return dia;
        });
        return this;
    };
    O_O.prototype.toJSON = function () {
        return {
            fileType: this.fileType,
            fileTypeAppComment: this.fileTypeAppComment,
            name: this.name,
            stations: this.stations,
            trainTypes: this.trainTypes,
            diagrams: this.diagrams,
        };
    };
    return O_O;
}());
exports.O_O = O_O;
