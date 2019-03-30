import IGadget from './IGadget';

interface IRoom {
  id: number;
  type: string;
  devices: IGadget[];
}

export default IRoom;
