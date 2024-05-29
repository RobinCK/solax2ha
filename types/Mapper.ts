import {SolaxResponse} from "./SolaxResponse";
import {SolaxData} from "./SolaxData";

export interface Mapper {
    type: number;
    map(data: SolaxResponse): SolaxData;
}
