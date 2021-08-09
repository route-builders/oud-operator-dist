export declare class Time {
    get isNull(): boolean;
    private seconds;
    constructor(v?: string | null);
    getTime(): number;
    setTime(v: string | null): void;
    compareWith(time: Time): number;
    differenceTo(time: Time): Time;
}
