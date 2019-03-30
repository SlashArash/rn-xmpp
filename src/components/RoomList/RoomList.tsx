import React, { StatelessComponent } from 'react';
import { View } from 'react-native';

import IRooms from '../../types/IRooms';

import messages from '../../lib/messages';
import ListTitle from '../ListTitle';
import RoomCard from '../RoomCard';

interface IComponentProps {
  rooms: IRooms;
}

const RoomList: StatelessComponent<IComponentProps> = ({ rooms }) => (
  <View>
    <ListTitle>{messages.rooms}</ListTitle>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Object.values(rooms).map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </View>
  </View>
);

export default RoomList;
