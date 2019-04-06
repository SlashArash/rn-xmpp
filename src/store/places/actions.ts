import {
  PlacesActionTypes,
  IAddSeveralPlaces,
} from '../../types/PlacesActions';
import IPlaces from '../../types/IPlaces';
import IDevices from '../../types/IDevices';

export const addPlaces = (data: [IPlaces, IDevices]): IAddSeveralPlaces => ({
  type: PlacesActionTypes.ADD_SEVERAL_PLACES,
  places: data[0],
  devices: data[1],
});
