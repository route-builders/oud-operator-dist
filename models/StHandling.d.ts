import { Time } from './Time';
export declare class StHandling {
    private _type;
    get type(): number;
    set type(v: number);
    private _arrival;
    get arrival(): Time;
    set arrival(v: Time);
    private _departure;
    get departure(): Time;
    set departure(v: Time);
    private _track;
    get track(): number;
    set track(v: number);
    constructor();
    toJSON(): {
        type: number;
        arrival: number;
        departure: number;
        track: number;
    };
}
//# sourceMappingURL=StHandling.d.ts.map