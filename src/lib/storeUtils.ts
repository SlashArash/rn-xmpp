import IPlaces from '../types/IPlaces';
import { deviceType } from '../types/types';
import IDevice from '../types/IDevice';
import IDevices from '../types/IDevices';

interface IServerDevice {
  '@attributes': {
    number: string;
    name: string;
    type: deviceType;
    status: 'A' | 'B';
    iconnumber: string;
  };
}

interface IServerPlace {
  '@attributes': { name: string; iconnumber: string };
  placeitem: IServerDevice[];
}

interface IServerPlaces {
  '@attributes': { id: string };
  place: IServerPlace[];
}

export const normalizePlaces = (
  serverPlaces: IServerPlaces
): [IPlaces, IDevices] => {
  const places: IPlaces = {};
  let devices: IDevices = {};
  serverPlaces.place.forEach((place: IServerPlace) => {
    places[place['@attributes'].name] = {
      iconNumber: place['@attributes'].iconnumber,
      name: place['@attributes'].name,
      devices: devicesName(place.placeitem),
    };
    devices = { ...devices, ...normalizeDevices(place.placeitem) };
  });
  return [places, devices];
};

const normalizeDevices = (serverDevices: IServerDevice[]): IDevices => {
  return serverDevices.reduce(
    (devices: IDevices, serverDevice: IServerDevice) => {
      const device: IDevice = {
        iconnumber: serverDevice['@attributes'].iconnumber,
        number: serverDevice['@attributes'].number,
        name: serverDevice['@attributes'].name,
        type: serverDevice['@attributes'].type,
        status: serverDevice['@attributes'].status,
        active: false,
      };
      const deviceId = `${device.number}+${device.status}`;
      devices[deviceId] = device;
      return devices;
    },
    {}
  );
};

const devicesName = (serverDevices: IServerDevice[]): string[] => {
  return serverDevices.map(
    (serverDevice: IServerDevice) =>
      `${serverDevice['@attributes'].number}+${
        serverDevice['@attributes'].status
      }`
  );
};
