import { combineReducers } from 'redux';

import AuthReducer from './auth/reducer';
import PlacesReducer from './places/reducer';
import DevicesReducer from './devices/reducer';

export default combineReducers({
  auth: AuthReducer,
  places: PlacesReducer,
  devices: DevicesReducer,
});
