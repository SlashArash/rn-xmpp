export enum AppActionTypes {
  LOGIN = '@app/LOGIN',
  LOGOUT = '@app/LOGOUT',
  UPDATE_TIME = '@app/UPDATE_TIME',
}

export interface ILogin {
  type: AppActionTypes.LOGIN;
  ip: string | null;
  password: string | null;
  serverName: string | null;
  userName: string | null;
}

export interface ILogout {
  type: AppActionTypes.LOGOUT;
  userName: string | null;
}

export interface IUpdateTime {
  type: AppActionTypes.UPDATE_TIME;
  lastUpdateTime: string;
}

export type AppActions = ILogin | ILogout | IUpdateTime;
