import {
  PlacesActionTypes,
  IAddSeveralPlaces,
} from '../../types/PlacesActions';
import IPlaces from '../../types/IPlaces';
import IDevice from '../../types/IDevice';

export const addPlaces = (data: [IPlaces, IDevice[]]): IAddSeveralPlaces => ({
  type: PlacesActionTypes.ADD_SEVERAL_PLACES,
  places: data[0],
  devices: data[1],
});
