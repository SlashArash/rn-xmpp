import IUser from './IUser';
import IPlaces from './IPlaces';

interface IStore {
  auth: IUser;
  places: IPlaces;
}

export default IStore;
