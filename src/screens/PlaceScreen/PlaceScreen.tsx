import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect, MapStateToProps } from 'react-redux';

import IStore from '../../types/IStore';
import IPlace from '../../types/IPlace';

import DeviceList from '../../components/DeviceList';

interface IOwnProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IStateToProps {
  place: IPlace;
}

type IComponentProps = IOwnProps & IStateToProps;

class PlaceScreen extends React.PureComponent<IComponentProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('placeId', 'Place Screen'),
    };
  };

  render() {
    const devices = this.props.place ? this.props.place.devices : [];

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

  return { place };
};

export default connect(mapStateToProps)(PlaceScreen);
