import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import produce from 'immer';
import { connect, MapStateToProps } from 'react-redux';

import IStatuses from '../../types/IStatuses';
import IRooms from '../../types/IRooms';
import IStore from '../../types/IStore';

import styles from './styles';
import StatusBox from '../../components/StatusBox';
import StatusList from '../../components/StatusList';
import RoomList from '../../components/RoomList';
import Wrapper from '../../components/Wrapper';

interface IOwnProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IStateToProps {
  userName: string | null;
}

type IComponentProps = IOwnProps & IStateToProps;

interface IComponentStates {
  statuses: IStatuses;
  rooms: IRooms;
}

class HomeScreen extends React.Component<IComponentProps, IComponentStates> {
  static navigationOptions = {
    header: null,
  };
  state: IComponentStates = {
    statuses: {},
    rooms: {},
  };

  componentDidMount(): void {
    this.requireStatuses();
    this.requireRooms();
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

  requireRooms = () => {
    const rooms: IRooms = {
      1: { id: 1, type: 'bedRoom', devices: [{ title: 'socket' }] },
      2: { id: 2, type: 'kitchen', devices: [] },
      3: { id: 3, type: 'saloon', devices: [{ title: 'plug' }] },
      4: {
        id: 4,
        type: 'bedRoom',
        devices: [{ title: 'plug' }, { title: 'socket' }, { title: 'socket' }],
      },
      5: {
        id: 5,
        type: 'bath',
        devices: [{ title: 'plug' }, { title: 'thermometer' }],
      },
    };
    this.setState({ rooms });
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
            {this.props.userName && <Text>{this.props.userName}</Text>}
            <RoomList rooms={this.state.rooms} />
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

  return { userName };
};

export default connect(mapStateToProps)(HomeScreen);
