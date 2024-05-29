import {SensorAttribute, SolaxData} from "../types";
import {haClient} from "../client";
import {sensors} from "../sensors";

export class HaService {
  public static async updateState(data: SolaxData) {

    return await Promise.all(
      Object.entries(data)
        .map(([key, value]) => {
          console.log(key);
          const attribute = sensors[key as keyof SolaxData];

          if (attribute) {
            return HaService.send(key, value, attribute);
          }
        })
    );

  }

  private  static async send(key: string, state: string | number, attribute: SensorAttribute) {
    return haClient.post(`/api/states/sensor.${process.env.HA_SENSOR_BASE_NAME}_${key}`, {
      state: state,
      attributes: {
        ...attribute,
        device: HaService.device,
      },
    });
  }

  private static get device() {
    return {
      identifiers: [process.env.HA_DEVICE_IDENTIFIER],
      name: process.env.HA_DEVICE_NAME,
      manufacturer: process.env.Solax,
      model: process.env.HA_DEVICE_MODEL,
      sw_version: '1.0',
    };
  }
}
