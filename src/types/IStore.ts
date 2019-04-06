import IUser from './IUser';
import IPlaces from './IPlaces';
import IDevices from './IDevices';

interface IStore {
  auth: IUser;
  places: IPlaces;
  devices: IDevices;
}

export default IStore;
