import IDevice from '../../types/IDevice';
import { DevicesActionTypes, IAdd } from '../../types/DevicesActions';

export const updateDevice = (device: IDevice): IAdd => ({
  type: DevicesActionTypes.ADD,
  device,
});
