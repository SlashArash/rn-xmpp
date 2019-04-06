import IPlaces from './IPlaces';
import IDevices from './IDevices';
import IApp from './IApp';

interface IStore {
  app: IApp;
  places: IPlaces;
  devices: IDevices;
}

export default IStore;
