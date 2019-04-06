export enum DevicesActionTypes {
  UPDATE_STATUS = '@devices/UPDATE_STATUS',
}

export interface IUpdateStatus {
  type: DevicesActionTypes.UPDATE_STATUS;
  deviceNumber: string;
  statusA: number;
  statusB: number;
}

export type DevicesActions = IUpdateStatus;
