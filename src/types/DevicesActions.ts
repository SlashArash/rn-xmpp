import IDevice from './IDevice';

export enum DevicesActionTypes {
  ADD = '@devices/ADD',
}

export interface IAdd {
  type: DevicesActionTypes.ADD;
  device: IDevice;
}

export type DevicesActions = IAdd;
