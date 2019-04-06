import { produce } from 'immer';

import IDevices from '../../types/IDevices';
import { DevicesActions, DevicesActionTypes } from '../../types/DevicesActions';
import { PlacesActionTypes, PlacesActions } from '../../types/PlacesActions';

const initialState: IDevices = {};

const DevicesReducer = (
  state: IDevices = initialState,
  action: DevicesActions | PlacesActions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PlacesActionTypes.ADD_SEVERAL_PLACES:
        Object.values(action.devices).forEach((device) => {
          draft[device.number] = {
            ...draft[device.number],
            [device.status]: device,
          };
        });
        break;
      case DevicesActionTypes.UPDATE_STATUS:
        draft[action.deviceNumber]['A'].active = action.statusA === 1;
        draft[action.deviceNumber]['B'].active = action.statusB === 1;
        break;
    }
  });

export default DevicesReducer;
