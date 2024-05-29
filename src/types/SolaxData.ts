import {RunMode} from "./RunMode";

export interface SolaxData {
  sn: string;
  reg: string;
  runMode: RunMode;

  yieldToday: number;
  yieldTotal: number;

  feedInPower: number;
  feedInEnergy: number;
  consumeEnergy: number;

  dc1Power: number;
  dc2Power: number;
  dc1Voltage: number;
  dc2Voltage: number;
  dc1Current: number;
  dc2Current: number;

  epsAVoltage: number;
  epsBVoltage: number;
  epsCVoltage: number;

  epsAPower: number;
  epsBPower: number;
  epsCPower: number;

  epsACurrent: number;
  epsBCurrent: number;
  epsCCurrent: number;

  batteryPower: number;
  batteryCapacity: number;
  batteryVoltage: number;
  batteryTemperature: number;

  gridAVoltage: number;
  gridBVoltage: number;
  gridCVoltage: number;

  gridACurrent: number;
  gridBCurrent: number;
  gridCCurrent: number;

  gridAFrequency: number;
  gridBFrequency: number;
  gridCFrequency: number;

  gridAPower: number;
  gridBPower: number;
  gridCPower: number;
}
