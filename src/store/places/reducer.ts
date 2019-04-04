import { produce } from 'immer';

import IPlaces from '../../types/IPlaces';
import { PlacesActions, PlacesActionTypes } from '../../types/PlacesActions';

const initialState: IPlaces = {};

const PlacesReducer = (state: IPlaces = initialState, action: PlacesActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PlacesActionTypes.ADD_SEVERAL_PLACES:
        Object.values(action.places).forEach((place) => {
          draft[place.name] = place;
        });
        break;
    }
  });

export default PlacesReducer;
