import {
  ILogin,
  ILogout,
  AppActionTypes,
  IUpdateTime,
} from '../../types/AppActions';

export const login = (
  ip: string,
  password: string,
  serverName: string,
  userName: string
): ILogin => ({
  type: AppActionTypes.LOGIN,
  ip,
  password,
  serverName,
  userName,
});

export const logout = (userName: string): ILogout => ({
  type: AppActionTypes.LOGOUT,
  userName,
});

export const updateTime = (lastUpdateTime: string | null): IUpdateTime => ({
  type: AppActionTypes.UPDATE_TIME,
  lastUpdateTime,
});
