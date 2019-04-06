import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import IDevice from '../../types/IDevice';
import mapDeviceType from '../../lib/mapDeviceType';

import styles from './styles';
import StyledText from '../StyledText';

interface IComponentProps {
  device: IDevice;
  onChangeDeviceState: (device: IDevice) => () => void;
}

const requireIcon = (device: IDevice) => {
  const deviceType = mapDeviceType(device.type);
  let icon = device.active
    ? require(`../../../assets/images/icons/bulb-active.png`)
    : require(`../../../assets/images/icons/bulb.png`);
  if (deviceType === 'curtain') {
    icon = device.active
      ? require(`../../../assets/images/icons/window-active.png`)
      : require(`../../../assets/images/icons/window.png`);
  } else if (deviceType === 'thermostat') {
    icon = device.active
      ? require(`../../../assets/images/icons/air-conditioner-active.png`)
      : require(`../../../assets/images/icons/air-conditioner.png`);
  }
  return icon;
};

const DeviceCard: React.StatelessComponent<IComponentProps> = ({
  device,
  onChangeDeviceState,
}) => {
  const icon = requireIcon(device);
  return (
    <TouchableOpacity
      style={[styles.card]}
      onPress={onChangeDeviceState(device)}
    >
      <View style={styles.cardBody}>
        <Image source={icon} style={styles.icon} />
        <StyledText>{device.name}</StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default DeviceCard;
