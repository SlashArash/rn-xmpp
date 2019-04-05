import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect, MapStateToProps } from 'react-redux';

import IStatuses from '../../types/IStatuses';
import IStore from '../../types/IStore';
import IPlaces from '../../types/IPlaces';

import { baseFont } from '../../constants/Theme';

interface IOwnProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IStateToProps {
  userName: string | null;
  serverName: string | null;
  places: IPlaces;
}

type IComponentProps = IOwnProps & IStateToProps;

interface IComponentStates {
  statuses: IStatuses;
  rooms: IPlaces;
}

class PlaceScreen extends React.PureComponent<
  IComponentProps,
  IComponentStates
> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('placeId', 'Place Screen'),
    };
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Rastech Co.</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state
) => {
  const userName = state.auth.userName;
  const serverName = state.auth.serverName;
  const places = state.places;

  return { userName, serverName, places };
};

export default connect(mapStateToProps)(PlaceScreen);
