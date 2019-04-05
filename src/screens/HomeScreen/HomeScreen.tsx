import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import produce from 'immer';
import { connect, MapStateToProps } from 'react-redux';

import { xmpp } from '../../lib/XMPP';
import IStatuses from '../../types/IStatuses';
import IStore from '../../types/IStore';
import IPlaces from '../../types/IPlaces';

import styles from './styles';
import StatusBox from '../../components/StatusBox';
import StatusList from '../../components/StatusList';
import PlaceList from '../../components/PlaceList';
import Wrapper from '../../components/Wrapper';

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

class HomeScreen extends React.Component<IComponentProps, IComponentStates> {
  static navigationOptions = {
    header: null,
  };
  state: IComponentStates = {
    statuses: {},
    rooms: {},
  };

  componentDidMount() {
    this.requirePlaces();
    this.requireStatuses();
  }

  requireStatuses = () => {
    const statuses: IStatuses = {
      1: { id: 1, title: 'normal', active: false },
      2: { id: 2, title: 'reception', active: true },
      3: { id: 3, title: 'sleep', active: false },
      4: { id: 4, title: 'travel', active: false },
    };
    this.setState({ statuses });
  };

  requirePlaces = () => {
    xmpp.message(
      `client&${this.props.userName}&${
        this.props.serverName
      }&00:00:00&0&&client`
    );
  };

  handleSelectStatus = (statusId: number) => () => {
    this.setState((prevState) => {
      return {
        statuses: produce(prevState.statuses, (draftStatuses) => {
          Object.values(draftStatuses).forEach((status) => {
            status.active = status.id === statusId;
          });
        }),
      };
    });
  };

  handlePressOnAPlace = (placeId: string) => () => {
    this.props.navigation.navigate('Place', { placeId });
  };

  render() {
    return (
      <Wrapper>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <StatusBox />
          <View style={styles.body}>
            <StatusList
              statuses={this.state.statuses}
              onPress={this.handleSelectStatus}
            />
            <PlaceList
              places={this.props.places}
              onPressOnAPlace={this.handlePressOnAPlace}
            />
            <Text style={styles.getStartedText}>Rastech Co.</Text>
          </View>
        </ScrollView>
      </Wrapper>
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

export default connect(mapStateToProps)(HomeScreen);
