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
          const deviceId = `${device.number}+${device.status}`;
          draft[deviceId] = device;
        });
        break;
      case DevicesActionTypes.ADD:
        const deviceId = `${action.device.number}+${action.device.status}`;
        draft[deviceId] = action.device;
        break;
    }
  });

export default DevicesReducer;
