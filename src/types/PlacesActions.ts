import IPlaces from './IPlaces';
import IDevice from './IDevice';

export enum PlacesActionTypes {
  ADD_SEVERAL_PLACES = '@places/ADD_SEVERAL_PLACES',
  ADD_DEVICE = '@places/ADD_DEVICE',
}

export interface IAddSeveralPlaces {
  type: PlacesActionTypes.ADD_SEVERAL_PLACES;
  places: IPlaces;
  devices: IDevice[];
}

export type PlacesActions = IAddSeveralPlaces;
