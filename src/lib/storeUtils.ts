import IPlaces from '../types/IPlaces';
import { deviceType } from '../types/types';
import IDevice from '../types/IDevice';

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
): [IPlaces, IDevice[]] => {
  const places: IPlaces = {};
  let devices: IDevice[] = [];
  serverPlaces.place.forEach((place: IServerPlace) => {
    places[place['@attributes'].name] = {
      iconNumber: place['@attributes'].iconnumber,
      name: place['@attributes'].name,
      devices: devicesName(place.placeitem),
    };
    devices = [...devices, ...normalizeDevices(place.placeitem)];
  });
  return [places, devices];
};

const normalizeDevices = (serverDevices: IServerDevice[]): IDevice[] => {
  return serverDevices.reduce(
    (devices: IDevice[], serverDevice: IServerDevice) => {
      const device: IDevice = {
        iconnumber: serverDevice['@attributes'].iconnumber,
        number: serverDevice['@attributes'].number,
        name: serverDevice['@attributes'].name,
        type: serverDevice['@attributes'].type,
        status: serverDevice['@attributes'].status,
        active: false,
      };
      devices.push(device);
      return devices;
    },
    []
  );
};

const devicesName = (serverDevices: IServerDevice[]): string[] => {
  const deviceSet = new Set();
  serverDevices.forEach((serverDevice: IServerDevice) =>
    deviceSet.add(serverDevice['@attributes'].number)
  );
  return [...deviceSet];
};
