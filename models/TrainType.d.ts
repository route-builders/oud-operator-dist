import { Color } from './Color';
export declare class TrainType {
    private _name;
    get name(): string;
    set name(v: string);
    private _shortname;
    get shortname(): string;
    set shortname(v: string);
    private _trainColor;
    get trainColor(): Color;
    set trainColor(v: Color);
    private _fontIdx;
    get fontIdx(): number;
    set fontIdx(v: number);
    private _lineColor;
    get lineColor(): Color;
    set lineColor(v: Color);
    private _lineType;
    get lineType(): number;
    set lineType(v: number);
    private _lineWeight;
    get lineWeight(): number;
    set lineWeight(v: number);
    private _shoudDrawStopMark;
    get shoudDrawStopMark(): boolean;
    set shoudDrawStopMark(v: boolean);
    constructor();
    static lineStyleToInt(str: string): number;
    toJSON(): {
        name: string;
        shortname: string;
        trainColor: Color;
        fontIdx: number;
        lineColor: Color;
        lineType: number;
        lineWeight: number;
        shoudDrawStopMark: boolean;
    };
}
//# sourceMappingURL=TrainType.d.ts.map