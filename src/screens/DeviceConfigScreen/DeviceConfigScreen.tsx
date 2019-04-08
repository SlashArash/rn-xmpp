import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

import styles from './styles';
import messages from '../../lib/messages';
import Cooling from '../../components/Cooling';
import IDevice from '../../types/IDevice';
import FanSpeed from '../../components/FanSpeed';
import Power from '../../components/Power';
import Temperature from '../../components/Temperature';

interface IComponentProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

class DeviceConfigScreen extends React.PureComponent<IComponentProps> {
  static navigationOptions = ({ navigation }) => {
    const device = navigation.getParam('device');
    const title = `${messages.config} ${device.name}`;
    return {
      title,
    };
  };

  state = { power: 'auto', temperature: 25 };

  handleChangePower = (choice: string) => {
    this.setState({ power: choice });
  };

  handleChangeTemperature = (newValue: number) => {
    this.setState({ temperature: newValue });
  };

  render() {
    const device: IDevice = this.props.navigation.getParam('device');

    return (
      <View style={styles.mainWrapper}>
        <View style={styles.buttonWrapper}>
          <Cooling active={!device.active} />
          <FanSpeed speed={3} />
        </View>
        <Temperature
          value={this.state.temperature}
          onChangeValue={this.handleChangeTemperature}
        />
        <Power state={'on'} />
      </View>
    );
  }
}

export default DeviceConfigScreen;
