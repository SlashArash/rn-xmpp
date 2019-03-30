export enum AuthActionTypes {
  LOGIN = '@auth/LOGIN',
  LOGOUT = '@auth/LOGOUT',
}

export interface ILogin {
  type: AuthActionTypes.LOGIN;
  ip: string | null;
  password: string | null;
  serverName: string | null;
  userName: string | null;
}

export interface ILogout {
  type: AuthActionTypes.LOGOUT;
  userName: string | null;
}

export type AuthActions = ILogin | ILogout;
