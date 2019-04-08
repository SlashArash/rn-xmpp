import { DevicesActionTypes, IUpdateStatus } from '../../types/DevicesActions';

export const updateDevice = (
  deviceNumber: string,
  part3: string,
  part4: string,
  part5: string,
  part6: string,
  part7: string
): IUpdateStatus => ({
  type: DevicesActionTypes.UPDATE_STATUS,
  deviceNumber,
  part3,
  part4,
  part5,
  part6,
  part7,
});
