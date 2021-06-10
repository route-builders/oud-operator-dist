export declare class Station {
    private _name;
    get name(): string;
    set name(v: string);
    private _timeType;
    get timeType(): number;
    set timeType(v: number);
    private _scale;
    get scale(): number;
    set scale(v: number);
    private _trainInfoDown;
    get trainInfoDown(): number;
    set trainInfoDown(v: number);
    private _trainInfoUp;
    get trainInfoUp(): number;
    set trainInfoUp(v: number);
    private _boundary;
    get boundary(): boolean;
    set boundary(v: boolean);
    private _additionalOption;
    get additionalOption(): number;
    set additionalOption(v: number);
    private _shouldShowLineNumberDown;
    get shouldShowLineNumberDown(): boolean;
    set shouldShowLineNumberDown(v: boolean);
    private _shouldShowLineNumberUp;
    get shouldShowLineNumberUp(): boolean;
    set shouldShowLineNumberUp(v: boolean);
    private _shouldShowLines;
    get shouldShowLines(): boolean;
    set shouldShowLines(v: boolean);
    private _lines;
    get lines(): {
        name: string;
        shortname: string;
    }[];
    set lines(v: {
        name: string;
        shortname: string;
    }[]);
    private _mainLineDown;
    get mainLineDown(): number;
    set mainLineDown(v: number);
    private _mainLineUp;
    get mainLineUp(): number;
    set mainLineUp(v: number);
    static timeTypeToInt(value: string): number;
    parseTimeType(): string;
    static scaleToInt(value: string): number;
    parseScale(): string;
    static trainInfoToInt(value: string): number;
    toJSON(): {
        name: string;
        timeType: number;
        scale: number;
        trainInfoDown: number;
        trainInfoUp: number;
        boundary: boolean;
        additionalOption: number;
        shouldShowLineNumberDown: boolean;
        shouldShowLineNumberUp: boolean;
        shouldShowLines: boolean;
        lines: {
            name: string;
            shortname: string;
        }[];
        mainLineDown: number;
        mainLineUp: number;
    };
}
//# sourceMappingURL=Station.d.ts.map