export enum DevicesActionTypes {
  UPDATE_STATUS = '@devices/UPDATE_STATUS',
}

export interface IUpdateStatus {
  type: DevicesActionTypes.UPDATE_STATUS;
  deviceNumber: string;
  part3: string;
  part4: string;
  part5: string;
  part6: string;
  part7: string;
}

export type DevicesActions = IUpdateStatus;
