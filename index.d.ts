import { Color } from './models/Color';
import { Diagram } from './models/Diagram';
import { Station } from './models/Station';
import { TrainType } from './models/TrainType';
export declare class O_O {
    private _fileType;
    get fileType(): string;
    set fileType(v: string);
    private _fileTypeAppComment;
    get fileTypeAppComment(): string;
    set fileTypeAppComment(v: string);
    private _name;
    get name(): string;
    set name(v: string);
    private _color;
    get color(): Color;
    set color(v: Color);
    private _stations;
    get stations(): Array<Station>;
    set stations(v: Array<Station>);
    private _trainTypes;
    get trainTypes(): Array<TrainType>;
    set trainTypes(v: Array<TrainType>);
    private _diagrams;
    get diagrams(): Array<Diagram>;
    set diagrams(v: Array<Diagram>);
    fromOud(lines: Array<string>): O_O;
    toJSON(): {
        fileType: string;
        fileTypeAppComment: string;
        name: string;
        stations: Station[];
        trainTypes: TrainType[];
        diagrams: Diagram[];
    };
}
