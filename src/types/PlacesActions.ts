import IPlaces from './IPlaces';
import IDevices from './IDevices';

export enum PlacesActionTypes {
  ADD_SEVERAL_PLACES = '@places/ADD_SEVERAL_PLACES',
  ADD_DEVICE = '@places/ADD_DEVICE',
}

export interface IAddSeveralPlaces {
  type: PlacesActionTypes.ADD_SEVERAL_PLACES;
  places: IPlaces;
  devices: IDevices;
}

export type PlacesActions = IAddSeveralPlaces;
