import { deviceType } from './types';

interface IDevice {
  number: string;
  name: string;
  type: deviceType;
  status: 'A' | 'B';
  iconnumber: string;
  active: 'on' | 'off' | 'auto';
  fanSpeed?: number;
  cooling?: boolean;
  temperature?: number;
}

export default IDevice;
