import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

import messages from '../../lib/messages';

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
  render() {
    const device = this.props.navigation.getParam('device');

    return (
      <View>
        <Text>Modal</Text>
      </View>
    );
  }
}

export default DeviceConfigScreen;
