import { produce } from 'immer';

import IApp from '../../types/IApp';
import { AppActions, AppActionTypes } from '../../types/AppActions';

const initialState: IApp = {
  userName: null,
  serverName: null,
  ip: null,
  lastUpdateTime: null,
};

const AppReducer = (state: IApp = initialState, action: AppActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AppActionTypes.LOGIN:
        draft.ip = action.ip;
        draft.serverName = action.serverName;
        draft.userName = action.userName;
        break;
      case AppActionTypes.LOGOUT:
        draft.ip = null;
        draft.serverName = null;
        draft.userName = null;
        break;
      case AppActionTypes.UPDATE_TIME:
        draft.lastUpdateTime = action.lastUpdateTime;
        break;
    }
  });

export default AppReducer;
