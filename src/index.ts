import 'dotenv/config'
import {HaService, SolaxService} from "./service";
import {mapperRegistry} from "./MapperRegistry";

(async () => {
  try {
    const solaxJson = await SolaxService.getInverterData();
    const data = mapperRegistry.map(solaxJson);
    await HaService.updateState(data);

    console.log('Data updated successfully!')
  } catch (error) {
    console.error((error as any));
  }
})();
