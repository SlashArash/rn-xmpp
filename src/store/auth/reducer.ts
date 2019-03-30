import { produce } from 'immer';

import IUser from '../../types/IUser';
import { AuthActions, AuthActionTypes } from '../../types/AuthActions';

const initialState: IUser = {
  userName: null,
  serverName: null,
  ip: null,
};

const AuthReducer = (state: IUser = initialState, action: AuthActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AuthActionTypes.LOGIN:
        draft.ip = action.ip;
        draft.serverName = action.serverName;
        draft.userName = action.userName;
        break;
      case AuthActionTypes.LOGOUT:
        draft.ip = null;
        draft.serverName = null;
        draft.userName = null;
        break;
    }
  });

export default AuthReducer;
