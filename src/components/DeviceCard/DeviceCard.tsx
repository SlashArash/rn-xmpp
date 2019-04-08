import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import IDevice from '../../types/IDevice';
import mapDeviceType from '../../lib/mapDeviceType';

import styles from './styles';
import StyledText from '../StyledText';

const bulbActive = require(`../../../assets/images/icons/bulb-active.png`);
const bulb = require(`../../../assets/images/icons/bulb-dark.png`);
const windowActive = require(`../../../assets/images/icons/window-active.png`);
const window = require(`../../../assets/images/icons/window-dark.png`);
const airConditionerActive = require(`../../../assets/images/icons/air-conditioner-active.png`);
const airConditioner = require(`../../../assets/images/icons/air-conditioner-dark.png`);

interface IComponentProps {
  device: IDevice;
  onPressOnDevice: (device: IDevice) => void;
}

class DeviceCard extends React.PureComponent<IComponentProps> {
  handlePressOnCard = () => {
    this.props.onPressOnDevice(this.props.device);
  };

  getIcon = (device: IDevice) => {
    const deviceType = mapDeviceType(device.type);
    let icon = device.active ? bulbActive : bulb;
    if (deviceType === 'curtain') {
      icon = device.active ? windowActive : window;
    } else if (deviceType === 'thermostat') {
      icon = device.active ? airConditionerActive : airConditioner;
    }
    return icon;
  };

  render() {
    const { device } = this.props;
    const icon = this.getIcon(device);

    return (
      <View>
        <TouchableOpacity
          style={[styles.card]}
          onPress={this.handlePressOnCard}
        >
          <View style={styles.cardBody}>
            <Image source={icon} style={styles.icon} />
            <StyledText>{device.name}</StyledText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeviceCard;
