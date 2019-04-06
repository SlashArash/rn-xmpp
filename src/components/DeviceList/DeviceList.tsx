import React, { StatelessComponent } from 'react';
import { View } from 'react-native';

import IDevice from '../../types/IDevice';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import DeviceCard from '../DeviceCard';

interface IComponentProps {
  devices: IDevice[];
  onChangeDeviceState: (device: IDevice) => () => void;
}

const DeviceList: StatelessComponent<IComponentProps> = ({
  devices,
  onChangeDeviceState,
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
          onChangeDeviceState={onChangeDeviceState}
        />
      ))}
    </View>
  </View>
);

export default DeviceList;
