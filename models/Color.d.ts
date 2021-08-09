export declare class Color {
    private _r;
    private _g;
    private _b;
    constructor(v?: string);
    setFromHEX(v: string): void;
    setFromABGR(v: string): void;
    RGB(): string;
    HEX(withSharp?: boolean): string;
    BGR(withSharp?: boolean): string;
    toJSON(): {
        r: number;
        g: number;
        b: number;
    };
}
