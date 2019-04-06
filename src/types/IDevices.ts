import IDevice from './IDevice';

interface IDevices {
  [deviceNumber: string]: { [status: string]: IDevice };
}

export default IDevices;
