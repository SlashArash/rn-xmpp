import { ILogin, ILogout, AuthActionTypes } from '../../types/AuthActions';

export const login = (
  ip: string,
  password: string,
  serverName: string,
  userName: string
): ILogin => ({
  type: AuthActionTypes.LOGIN,
  ip,
  password,
  serverName,
  userName,
});

export const logout = (userName: string): ILogout => ({
  type: AuthActionTypes.LOGOUT,
  userName,
});
