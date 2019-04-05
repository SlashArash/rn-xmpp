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

export const normalizePlaces = (serverPlaces: IServerPlaces): IPlaces => {
  return serverPlaces.place.reduce((places: IPlaces, place: IServerPlace) => {
    places[place['@attributes'].name] = {
      iconNumber: place['@attributes'].iconnumber,
      name: place['@attributes'].name,
      devices: normalizeDevices(place.placeitem),
    };
    return places;
  }, {});
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
