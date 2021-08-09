import { Streak } from './Streak';
export declare class Diagram {
    private _name;
    get name(): string;
    set name(v: string);
    private _downStreaks;
    get downStreaks(): Array<Streak>;
    set downStreaks(v: Array<Streak>);
    private _upStreaks;
    get upStreaks(): Array<Streak>;
    set upStreaks(v: Array<Streak>);
    toJSON(): {
        name: string;
        downStreaks: Streak[];
        upStreaks: Streak[];
    };
}
