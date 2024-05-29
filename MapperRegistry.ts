import {Mapper, SolaxResponse} from "./types";
import {X3hybridG1Mapper} from "./mapper/X3hybridG1Mapper";

class MapperRegistry {
    private mappers: Mapper[] = [
        new X3hybridG1Mapper(),
    ];

    public map(solaxJson: SolaxResponse) {
        const mapper = this.mappers.find(mapper => mapper.type === solaxJson.type);

        if (!mapper) {
            throw new Error(`No mapper found for type ${solaxJson.type}`);
        }

        return mapper.map(solaxJson);
    }
}

export const mapperRegistry = new MapperRegistry();
