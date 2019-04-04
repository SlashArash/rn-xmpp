import { deviceType } from './types';

interface IDevice {
  number: string;
  name: string;
  type: deviceType;
  status: 'A' | 'B';
  iconnumber: string;
}

export default IDevice;
