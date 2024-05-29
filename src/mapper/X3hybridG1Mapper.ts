/**
 * Data mapper for Solax Power X3-Hybrid G1, G2, G3
 */
import {Mapper, RunMode, SolaxResponse} from "../types";
import {read16BitSigned, read32BitSigned, read32BitUnsigned} from "../utils";

export class X3hybridG1Mapper implements Mapper {
  public type = 5;

  public map(solaxJson: SolaxResponse) {
    return {
      sn: solaxJson.sn,
      reg: solaxJson.Information[2],
      runMode: Object.values(RunMode)[solaxJson.Data[18]],

      yieldToday: solaxJson.Data[21] / 10,
      yieldTotal: read32BitUnsigned(solaxJson.Data[19], solaxJson.Data[20]) / 10,

      feedInPower: read32BitSigned(solaxJson.Data[65], solaxJson.Data[66]),
      feedInEnergy: read32BitUnsigned(solaxJson.Data[67], solaxJson.Data[68]) / 100,
      consumeEnergy: read32BitUnsigned(solaxJson.Data[69], solaxJson.Data[70]) / 100,

      dc1Power: solaxJson.Data[13],
      dc2Power: solaxJson.Data[14],
      dc1Voltage: solaxJson.Data[9] / 10,
      dc2Voltage: solaxJson.Data[10] / 10,
      dc1Current: solaxJson.Data[11] / 10,
      dc2Current: solaxJson.Data[12] / 10,

      epsAVoltage: solaxJson.Data[54] / 10,
      epsBVoltage: solaxJson.Data[55] / 10,
      epsCVoltage: solaxJson.Data[56] / 10,

      epsAPower: read16BitSigned(solaxJson.Data[60]),
      epsBPower: read16BitSigned(solaxJson.Data[61]),
      epsCPower: read16BitSigned(solaxJson.Data[62]),

      epsACurrent: read16BitSigned(solaxJson.Data[57]) / 10,
      epsBCurrent: read16BitSigned(solaxJson.Data[58]) / 10,
      epsCCurrent: read16BitSigned(solaxJson.Data[59]) / 10,

      batteryPower: read16BitSigned(solaxJson.Data[26]),
      batteryCapacity: solaxJson.Data[28],
      batteryVoltage: solaxJson.Data[24] / 100,
      batteryTemperature: read16BitSigned(solaxJson.Data[27]),

      gridAVoltage: solaxJson.Data[0] / 10,
      gridBVoltage: solaxJson.Data[1] / 10,
      gridCVoltage: solaxJson.Data[2] / 10,

      gridACurrent: read16BitSigned(solaxJson.Data[3]) / 10,
      gridBCurrent: read16BitSigned(solaxJson.Data[4]) / 10,
      gridCCurrent: read16BitSigned(solaxJson.Data[5]) / 10,

      gridAFrequency: solaxJson.Data[15] / 100,
      gridBFrequency: solaxJson.Data[16] / 100,
      gridCFrequency: solaxJson.Data[17] / 100,

      gridAPower: read16BitSigned(solaxJson.Data[6]),
      gridBPower: read16BitSigned(solaxJson.Data[7]),
      gridCPower: read16BitSigned(solaxJson.Data[8]),
    }
  }
}
