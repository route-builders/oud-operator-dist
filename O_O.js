!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,(()=>(()=>{"use strict";var e={956:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InvalidFileTypeError=void 0;t.InvalidFileTypeError=function(){this.name="InvalidFileTypeError",this.message="cannot detect text encoding. please load text file."}},470:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Oud2JSON=t.InvalidFileTypeError=void 0;var i=n(956);Object.defineProperty(t,"InvalidFileTypeError",{enumerable:!0,get:function(){return i.InvalidFileTypeError}});var r=n(97);Object.defineProperty(t,"Oud2JSON",{enumerable:!0,get:function(){return r.Oud2JSON}})},97:function(e,t,n){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Oud2JSON=void 0;var r=n(956),o=/^([a-zA-Z0-9_]+)\.$/,s=/^\.$/,a=/^([a-zA-Z0-9_]+)=(.*)$/,u=function(){function e(e){this.sources=e,this.output={}}return e.prototype.parse=function(){var e=this.makeObj(this.output,0).parent;return JSON.stringify(e)},e.prototype.makeObj=function(e,t){for(var n,u,p=t;p<this.sources.length;p++){var c=this.sources[p];if(c){var f=c.match(a);if(f){var h=f[1],l=f[2];h&&!Object.prototype.hasOwnProperty.call(e,h)&&(e=i(i({},e),((n={})[h]=null!=l?l:"",n)))}else{var d=c.match(o);if(d&&d[1]){var y=d[1],m=e[y];if("string"==typeof m)throw new r.InvalidFileTypeError;m||(m=[],e=i(i({},e),((u={})[y]=m,u)));var b=this.makeObj({},p+1),_=b.parent,g=b.idx;m.push(_),e[y]=m,p=g}else if(c.match(s))return{parent:e,idx:p}}}}return{parent:e,idx:-1}},e}();t.Oud2JSON=u},361:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InvalidABGRColorError=void 0;t.InvalidABGRColorError=function e(t){this.name=e.name,this.message="Invalid format. should be #AABBGGRR : (".concat(t,")")}},501:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InvalidHEXColorError=void 0;t.InvalidHEXColorError=function e(t){this.name=e.name,this.message="Invalid format. should be #RRGGBB or #RGB : (".concat(t,")")}},473:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;var i=n(361),r=n(501),o=function(){function e(e){this._r=0,this._g=0,this._b=0,void 0!==e&&this.setFromHEX(e)}return e.prototype.setFromHEX=function(e){var t=[e.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),e.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/)];if(t[0]){var n=t[0][1],i=t[0][2],o=t[0][3];if(n&&i&&o)return this._r=parseInt("".concat(n).concat(n),16),this._g=parseInt("".concat(i).concat(i),16),void(this._b=parseInt("".concat(o).concat(o),16))}else if(t[1]&&(n=t[1][1],i=t[1][2],o=t[1][3],n&&i&&o))return this._r=parseInt(n,16),this._g=parseInt(i,16),void(this._b=parseInt(o,16));throw new r.InvalidHEXColorError(e)},e.prototype.setFromABGR=function(e){var t=e.match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);if(t){var n=t[4],r=t[3],o=t[2];if(n&&r&&o)return this._r=parseInt(n,16),this._g=parseInt(r,16),void(this._b=parseInt(o,16))}throw new i.InvalidABGRColorError(e)},e.prototype.RGB=function(){return"rgb("+this._r+", "+this._g+", "+this._b+")"},e.prototype.HEX=function(e){return void 0===e&&(e=!0),(e?"#":"")+this._r.toString(16)+this._g.toString(16)+this._b.toString(16)},e.prototype.BGR=function(e){return void 0===e&&(e=!0),(e?"#":"")+this._b.toString(16)+this._g.toString(16)+this._r.toString(16)+"00"},e.prototype.toJSON=function(){return{r:this._r,g:this._g,b:this._b}},e}();t.Color=o},348:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Diagram=void 0;var n=function(){function e(){this._name="",this._downStreaks=new Array,this._upStreaks=new Array}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"downStreaks",{get:function(){return this._downStreaks},set:function(e){this._downStreaks=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"upStreaks",{get:function(){return this._upStreaks},set:function(e){this._upStreaks=e},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return{name:this.name,downStreaks:this.downStreaks,upStreaks:this.upStreaks}},e}();t.Diagram=n},559:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StHandling=void 0;var i=n(251),r=function(){function e(){this._type=0,this._arrival=new i.Time,this._departure=new i.Time,this._track=0,this.type=0,this.arrival=new i.Time,this.departure=new i.Time}return Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"arrival",{get:function(){return this._arrival},set:function(e){this._arrival=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"departure",{get:function(){return this._departure},set:function(e){this._departure=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"track",{get:function(){return this._track},set:function(e){this._track=e},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return{type:this.type,arrival:this.arrival.getTime(),departure:this.departure.getTime(),track:this.track}},e}();t.StHandling=r},839:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Station=void 0;var n=function(){function e(){this._name="",this._timeType=0,this._scale=0,this._trainInfoDown=0,this._trainInfoUp=0,this._boundary=!1,this._additionalOption=0,this._shouldShowLineNumberDown=!1,this._shouldShowLineNumberUp=!1,this._shouldShowLines=!1,this._lines=[],this._mainLineDown=0,this._mainLineUp=0}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeType",{get:function(){return this._timeType},set:function(e){this._timeType=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trainInfoDown",{get:function(){return this._trainInfoDown},set:function(e){this._trainInfoDown=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trainInfoUp",{get:function(){return this._trainInfoUp},set:function(e){this._trainInfoUp=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this._boundary},set:function(e){this._boundary=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"additionalOption",{get:function(){return this._additionalOption},set:function(e){this._additionalOption=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShowLineNumberDown",{get:function(){return this._shouldShowLineNumberDown},set:function(e){this._shouldShowLineNumberDown=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShowLineNumberUp",{get:function(){return this._shouldShowLineNumberUp},set:function(e){this._shouldShowLineNumberUp=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShowLines",{get:function(){return this._shouldShowLines},set:function(e){this._shouldShowLines=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lines",{get:function(){return this._lines},set:function(e){this._lines=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mainLineDown",{get:function(){return this._mainLineDown},set:function(e){this._mainLineDown=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mainLineUp",{get:function(){return this._mainLineUp},set:function(e){this._mainLineUp=e},enumerable:!1,configurable:!0}),e.timeTypeToInt=function(e){switch(e){case"Jikokukeisiki_Hatsuchaku":return 10;case"Jikokukeisiki_KudariChaku":return 20;case"Jikokukeisiki_NoboriChaku":return 30;default:return 0}},e.prototype.parseTimeType=function(){switch(this.timeType){case 10:return"Jikokukeisiki_Hatsuchaku";case 20:return"Jikokukeisiki_KudariChaku";case 30:return"Jikokukeisiki_NoboriChaku";default:return"Jikokukeisiki_Hatsu"}},e.scaleToInt=function(e){return"Ekikibo_Syuyou"===e?10:0},e.prototype.parseScale=function(){return 10===this.scale?"Ekikibo_Syuyou":"Ekikibo_Ippan"},e.trainInfoToInt=function(e){switch(e){case"DiagramRessyajouhouHyouji_Anytime":return 20;case"DiagramRessyajouhouHyouji_Not":return 0;default:return 10}},e.prototype.toJSON=function(){return{name:this.name,timeType:this.timeType,scale:this.scale,trainInfoDown:this.trainInfoDown,trainInfoUp:this.trainInfoUp,boundary:this.boundary,additionalOption:this.additionalOption,shouldShowLineNumberDown:this.shouldShowLineNumberDown,shouldShowLineNumberUp:this.shouldShowLineNumberUp,shouldShowLines:this.shouldShowLines,lines:this.lines,mainLineDown:this.mainLineDown,mainLineUp:this.mainLineUp}},e}();t.Station=n},454:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Streak=void 0;var n=function(){function e(){this._operationNum="",this._typeIdx=0,this._name="",this._destIdx=0,this._stHandlings=new Array,this._comment=""}return Object.defineProperty(e.prototype,"operationNum",{get:function(){return this._operationNum},set:function(e){this._operationNum=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeIdx",{get:function(){return this._typeIdx},set:function(e){this._typeIdx=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"no",{get:function(){return this._no},set:function(e){this._no=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"destIdx",{get:function(){return this._destIdx},set:function(e){this._destIdx=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stHandlings",{get:function(){return this._stHandlings},set:function(e){this._stHandlings=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"comment",{get:function(){return this._comment},set:function(e){this._comment=e},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return{operationNum:this.operationNum,typeIdx:this.typeIdx,name:this.name,no:this.no,destIdx:this.destIdx,stHandlings:this.stHandlings.map((function(e){return e.toJSON()})),comment:this.comment}},e}();t.Streak=n},251:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Time=void 0;var n=function(){function e(e){this.seconds=0,null!=e?this.setTime(e):this.seconds=-1}return Object.defineProperty(e.prototype,"isNull",{get:function(){return this.seconds<0},enumerable:!1,configurable:!0}),e.prototype.getTime=function(){return this.seconds},e.prototype.setTime=function(e){if(null!==e&&null!==e.match(/^[0-9]{3,6}$/)){var t=parseInt(e);3<=e.length&&e.length<=4?this.seconds=3600*Math.floor(t/100)+t%100*60:5<=e.length&&e.length<=6&&(this.seconds=3600*Math.floor(t/1e4)+60*Math.floor(t%1e4/100)+t%100)}else this.seconds=-1},e.prototype.compareWith=function(e){var t=this.seconds-e.seconds;return t<0?-1:0==t?0:1},e.prototype.differenceTo=function(t){return new e((this.seconds-t.seconds|0).toString())},e}();t.Time=n},844:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TrainType=void 0;var i=n(473),r=function(){function e(){this._name="",this._shortname="",this._trainColor=new i.Color,this._fontIdx=0,this._lineColor=new i.Color,this._lineType=0,this._lineWeight=0,this._shoudDrawStopMark=!1}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shortname",{get:function(){return this._shortname},set:function(e){this._shortname=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trainColor",{get:function(){return this._trainColor},set:function(e){this._trainColor=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontIdx",{get:function(){return this._fontIdx},set:function(e){this._fontIdx=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineColor",{get:function(){return this._lineColor},set:function(e){this._lineColor=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineType",{get:function(){return this._lineType},set:function(e){this._lineType=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWeight",{get:function(){return this._lineWeight},set:function(e){this._lineWeight=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shoudDrawStopMark",{get:function(){return this._shoudDrawStopMark},set:function(e){this._shoudDrawStopMark=e},enumerable:!1,configurable:!0}),e.lineStyleToInt=function(e){switch(e){case"SenStyle_Tensen":return 10;case"SenStyle_Hasen":return 20;default:return 0}},e.prototype.toJSON=function(){return{name:this.name,shortname:this.shortname,trainColor:this.trainColor.toJSON(),fontIdx:this.fontIdx,lineColor:this.lineColor.toJSON(),lineType:this.lineType,lineWeight:this.lineWeight,shoudDrawStopMark:this.shoudDrawStopMark}},e}();t.TrainType=r}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}var i={};return(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.O_O=void 0;var t=n(470),r=n(473),o=n(348),s=n(839),a=n(559),u=n(454),p=n(844),c=function(){function e(){this._fileType="",this._fileTypeAppComment="",this._name="",this._color=new r.Color,this._stations=new Array,this._trainTypes=new Array,this._diagrams=new Array}return Object.defineProperty(e.prototype,"fileType",{get:function(){return this._fileType},set:function(e){this._fileType=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fileTypeAppComment",{get:function(){return this._fileTypeAppComment},set:function(e){this._fileTypeAppComment=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(e){this._color=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stations",{get:function(){return this._stations},set:function(e){this._stations=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trainTypes",{get:function(){return this._trainTypes},set:function(e){this._trainTypes=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"diagrams",{get:function(){return this._diagrams},set:function(e){this._diagrams=e},enumerable:!1,configurable:!0}),e.prototype.fromOud=function(e){var n=new t.Oud2JSON(e),i=JSON.parse(n.parse()),c=i.Rosen[0];function f(e){return e.Ressya.map((function(e){var t=new u.Streak;return t.typeIdx=parseInt(e.Syubetsu),t.name=e.Ressyamei,t.operationNum=e.Ressyabangou,e.Bikou&&(t.comment=e.Bikou),e.Gousuu&&(t.no=e.Gousuu),t.stHandlings=e.EkiJikoku.split(",").map((function(e){var t=new a.StHandling;if(""!==e){var n=e.split(";");if(n[0]&&(t.type=parseInt(n[0]),void 0!==n[1])){var i=n[1].split("/");i[0]&&(void 0===i[1]?(t.arrival.setTime(null),t.departure.setTime(i[0])):""===i[1]?(t.arrival.setTime(i[0]),t.departure.setTime(null)):(t.departure.setTime(i[0]),t.arrival.setTime(i[1])))}}return t})),t}))}return this.fileType=i.FileType,this.name=c.Rosenmei,this.stations=c.Eki.map((function(e){var t=new s.Station;return t.name=e.Ekimei,t.timeType=s.Station.timeTypeToInt(e.Ekijikokukeisiki),t.scale=s.Station.scaleToInt(e.Ekikibo),t.trainInfoDown=s.Station.trainInfoToInt(e.DiagramRessyajouhouHyoujiKudari),t.trainInfoUp=s.Station.trainInfoToInt(e.DiagramRessyajouhouHyoujiNobori),t})),this.trainTypes=c.Ressyasyubetsu.map((function(e){var t=new p.TrainType;return t.name=e.Syubetsumei,t.shortname=e.Ryakusyou,t.trainColor=new r.Color,t.trainColor.setFromABGR(e.JikokuhyouMojiColor),t.fontIdx=parseInt(e.JikokuhyouFontIndex),t.lineColor=new r.Color,t.lineColor.setFromABGR(e.DiagramSenColor),t.lineType=p.TrainType.lineStyleToInt(e.DiagramSenStyle),e.StopMarkDrawType&&(t.shoudDrawStopMark=!0),t})),this.diagrams=c.Dia.map((function(e){var t=new o.Diagram;return t.name=e.DiaName,t.downStreaks=f(e.Kudari[0]),t.upStreaks=f(e.Nobori[0]),t})),this},e.prototype.toJSON=function(){return{fileType:this.fileType,fileTypeAppComment:this.fileTypeAppComment,name:this.name,stations:this.stations,trainTypes:this.trainTypes,diagrams:this.diagrams}},e}();e.O_O=c})(),i})()));