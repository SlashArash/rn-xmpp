import {
  PlacesActionTypes,
  IAddSeveralPlaces,
} from '../../types/PlacesActions';
import IPlaces from '../../types/IPlaces';

export const addPlaces = (places: IPlaces): IAddSeveralPlaces => ({
  type: PlacesActionTypes.ADD_SEVERAL_PLACES,
  places,
});
