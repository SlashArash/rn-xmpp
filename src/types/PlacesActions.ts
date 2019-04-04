import IPlaces from './IPlaces';

export enum PlacesActionTypes {
  ADD_SEVERAL_PLACES = '@places/ADD_SEVERAL_PLACES',
}

export interface IAddSeveralPlaces {
  type: PlacesActionTypes.ADD_SEVERAL_PLACES;
  places: IPlaces;
}

export type PlacesActions = IAddSeveralPlaces;
