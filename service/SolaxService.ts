import {solaxClient} from '../client';
import {SolaxResponse} from '../types';

export class SolaxService {
  public static async getInverterData(): Promise<SolaxResponse> {
    return await solaxClient.post('', {
      optType: 'ReadRealTimeData',
      pwd: process.env.SOLAX_PASSWORD,
    })
      .then(response => response.data);
  }
}
