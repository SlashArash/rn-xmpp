import React, { StatelessComponent } from 'react';
import { View } from 'react-native';

import IDevice from '../../types/IDevice';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import DeviceCard from '../DeviceCard';

interface IComponentProps {
  devices: IDevice[];
  onPressOnDevice: (device: IDevice) => void;
}

const DeviceList: StatelessComponent<IComponentProps> = ({
  devices,
  onPressOnDevice,
}) => (
  <View>
    <ListTitle>{messages.devices}</ListTitle>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {devices.map((device) => (
        <DeviceCard
          key={`${device.number}+${device.name}`}
          device={device}
          onPressOnDevice={onPressOnDevice}
        />
      ))}
    </View>
  </View>
);

export default DeviceList;
