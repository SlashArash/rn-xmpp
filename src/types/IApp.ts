import IUser from './IUser';

interface IApp extends IUser {
  lastUpdateTime: string | null;
}

export default IApp;
