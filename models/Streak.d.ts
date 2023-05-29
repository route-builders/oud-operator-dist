import { StHandling } from './StHandling';
export declare class Streak {
    private _operationNum;
    get operationNum(): string;
    set operationNum(v: string);
    private _typeIdx;
    get typeIdx(): number;
    set typeIdx(v: number);
    private _name;
    get name(): string;
    set name(v: string);
    private _no?;
    get no(): string | undefined;
    set no(v: string | undefined);
    private _destIdx;
    get destIdx(): number;
    set destIdx(v: number);
    private _stHandlings;
    get stHandlings(): Array<StHandling>;
    set stHandlings(v: Array<StHandling>);
    private _comment;
    get comment(): string;
    set comment(v: string);
    toJSON(): {
        operationNum: string;
        typeIdx: number;
        name: string;
        no: string | undefined;
        destIdx: number;
        stHandlings: {
            type: number;
            arrival: number;
            departure: number;
            track: number;
        }[];
        comment: string;
    };
}
