import {solaxClient} from '../client';
import {SolaxResponse} from '../types';
import {AxiosResponse} from "axios";

export class SolaxService {
  public static async getInverterData(): Promise<SolaxResponse> {
    return await solaxClient.post('', {
      optType: 'ReadRealTimeData',
      pwd: process.env.SOLAX_PASSWORD,
    })
      .then((response: AxiosResponse<SolaxResponse>) => response.data);
  }
}
