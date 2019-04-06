import { DevicesActionTypes, IUpdateStatus } from '../../types/DevicesActions';

export const updateDevice = (
  deviceNumber: string,
  statusA: number,
  statusB: number
): IUpdateStatus => ({
  type: DevicesActionTypes.UPDATE_STATUS,
  deviceNumber,
  statusA,
  statusB,
});
