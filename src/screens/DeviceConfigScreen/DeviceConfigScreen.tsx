import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect } from 'react-redux';
import produce from 'immer';

import styles from './styles';
import messages from '../../lib/messages';
import { xmpp } from '../../lib/XMPP';
import Cooling from '../../components/Cooling';
import IDevice from '../../types/IDevice';
import FanSpeed from '../../components/FanSpeed';
import Power from '../../components/Power';
import Temperature from '../../components/Temperature';
import { changeThermostatState } from '../../lib/deviceUtils';
import IStore from '../../types/IStore';
import { devicePower } from '../../types/types';

interface IOwnProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IStateToProps {
  device: IDevice;
}

type IComponentProps = IOwnProps & IStateToProps;

class DeviceConfigScreen extends React.PureComponent<IComponentProps> {
  static navigationOptions = ({ navigation }) => {
    const device = navigation.getParam('device');
    const title = `${messages.config} ${device.name}`;
    return {
      title,
    };
  };

  state = { device: this.props.navigation.getParam('device') };

  handleChangePower = (choice: string) => {
    const device = produce(this.props.device, (draft) => {
      draft.active = choice as devicePower;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  handleChangeTemperature = (newValue: number) => {
    const device = produce(this.props.device, (draft) => {
      draft.temperature = newValue;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  handleChangeFanSpeed = (newSpeed: number) => {
    const device = produce(this.props.device, (draft) => {
      draft.fanSpeed = newSpeed;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  handleChangeCooling = (newValue: boolean) => {
    const device = produce(this.props.device, (draft) => {
      draft.cooling = newValue;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  render() {
    const { device } = this.props;

    return (
      <View style={styles.mainWrapper}>
        <View style={styles.buttonWrapper}>
          <Cooling
            active={!!device.cooling}
            onChange={this.handleChangeCooling}
          />
          <FanSpeed
            speed={device.fanSpeed as number}
            onChange={this.handleChangeFanSpeed}
          />
        </View>
        <Temperature
          value={device.temperature as number}
          onChange={this.handleChangeTemperature}
        />
        <Power state={device.active} onChange={this.handleChangePower} />
      </View>
    );
  }
}

const mapStateToProps = (state: IStore, props: IComponentProps) => {
  const routeDevice: IDevice = props.navigation.getParam('device');
  const device = state.devices[routeDevice.number][routeDevice.status];
  return { device };
};

export default connect(mapStateToProps)(DeviceConfigScreen);
