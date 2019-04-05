import React, { StatelessComponent } from 'react';
import { View } from 'react-native';

import IDevice from '../../types/IDevice';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import DeviceCard from '../DeviceCard';

interface IComponentProps {
  devices: IDevice[];
}

const DeviceList: StatelessComponent<IComponentProps> = ({ devices }) => (
  <View>
    <ListTitle>{messages.devices}</ListTitle>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {devices.map((device) => (
        <DeviceCard key={device.name} device={device} />
      ))}
    </View>
  </View>
);

export default DeviceList;
