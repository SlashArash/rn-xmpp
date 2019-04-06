import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect, MapStateToProps } from 'react-redux';

import IStore from '../../types/IStore';
import IPlace from '../../types/IPlace';
import IDevices from '../../types/IDevices';

import DeviceList from '../../components/DeviceList';
import { xmpp } from '../../lib/XMPP';

interface IOwnProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IStateToProps {
  place: IPlace;
  devices: IDevices;
}

type IComponentProps = IOwnProps & IStateToProps;

class PlaceScreen extends React.PureComponent<IComponentProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('placeId', 'Place Screen'),
    };
  };

  componentDidMount() {
    this.props.place.devices.forEach((deviceId) => {
      const parted = deviceId.split('+');
      const deviceNumber = parted[0];
      xmpp.getDeviceStatus(deviceNumber);
    });
  }

  render() {
    const devicesId = this.props.place ? this.props.place.devices : [];
    const devices = devicesId.map((deviceId) => this.props.devices[deviceId]);
    return (
      <ScrollView>
        <DeviceList devices={devices} />
      </ScrollView>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state,
  props
) => {
  const placeId = props.navigation.getParam('placeId');

  const place = state.places[placeId];
  const devices = state.devices;

  return { place, devices };
};

export default connect(mapStateToProps)(PlaceScreen);
