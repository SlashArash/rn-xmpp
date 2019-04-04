import { combineReducers } from 'redux';

import AuthReducer from './auth/reducer';
import PlacesReducer from './places/reducer';

export default combineReducers({
  auth: AuthReducer,
  places: PlacesReducer,
});
