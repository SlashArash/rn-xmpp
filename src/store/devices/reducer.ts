import { produce } from 'immer';

import IDevices from '../../types/IDevices';
import { DevicesActions, DevicesActionTypes } from '../../types/DevicesActions';

const initialState: IDevices = {};

const DevicesReducer = (
  state: IDevices = initialState,
  action: DevicesActions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DevicesActionTypes.ADD:
        draft[action.device.number + action.device.status] = action.device;
        break;
    }
  });

export default DevicesReducer;
