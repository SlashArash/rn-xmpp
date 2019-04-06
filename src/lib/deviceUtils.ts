import IDevice from '../types/IDevice';

export const changeLampState = (lamp: IDevice): string => {
  const newA = lamp.status === 'A' ? (lamp.active ? '0' : '1') : '2';
  const newB = lamp.status === 'B' ? (lamp.active ? '0' : '1') : '2';
  return `K-V-${lamp.number}-${newA}-${newB}-48-48-0-0`;
};
