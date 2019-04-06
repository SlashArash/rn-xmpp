import { combineReducers } from 'redux';

import AppReducer from './app/reducer';
import PlacesReducer from './places/reducer';
import DevicesReducer from './devices/reducer';

export default combineReducers({
  app: AppReducer,
  places: PlacesReducer,
  devices: DevicesReducer,
});
