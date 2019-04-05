import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import IDevice from '../../types/IDevice';

import styles from './styles';
import StyledText from '../StyledText';

interface IComponentProps {
  device: IDevice;
}

const requireIcon = (device: IDevice) => {
  let icon = device.active
    ? require(`../../../assets/images/icons/bulb-active.png`)
    : require(`../../../assets/images/icons/bulb.png`);
  if (device.type === '1') {
    icon = device.active
      ? require(`../../../assets/images/icons/window-active.png`)
      : require(`../../../assets/images/icons/window.png`);
  } else if (device.type === '3') {
    icon = device.active
      ? require(`../../../assets/images/icons/air-conditioner-active.png`)
      : require(`../../../assets/images/icons/air-conditioner.png`);
  }
  return icon;
};

const DeviceCard: React.StatelessComponent<IComponentProps> = ({ device }) => {
  const icon = requireIcon(device);
  return (
    <TouchableOpacity style={[styles.card]}>
      <View style={styles.cardBody}>
        <Image source={icon} style={styles.icon} />
        <StyledText>{device.name}</StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default DeviceCard;
