import React, { StatelessComponent } from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import IRoom from '../../types/IRoom';

import styles from './styles';
import { colors } from '../../constants/Theme';
import messages from '../../lib/messages';
import StyledText from '../StyledText';

interface IComponentProps {
  room: IRoom;
}

const requireIcon = (room: IRoom) => {
  let icon = require(`../../../assets/images/icons/unknown-dark.png`);

  if (room.type === 'bath') {
    icon = require(`../../../assets/images/icons/bath-dark.png`);
  } else if (room.type === 'bedRoom') {
    icon = require(`../../../assets/images/icons/bed-dark.png`);
  } else if (room.type === 'kitchen') {
    icon = require(`../../../assets/images/icons/washing-dark.png`);
  } else if (room.type === 'saloon') {
    icon = require(`../../../assets/images/icons/tv-dark.png`);
  }
  return icon;
};

const RoomCard: StatelessComponent<IComponentProps> = ({ room }) => {
  const icon = requireIcon(room);
  return (
    <TouchableHighlight style={styles.card}>
      <View style={styles.cardBody}>
        <Image source={icon} style={styles.icon} />
        <View>
          <StyledText>{messages.roomType(room.type)}</StyledText>
          <StyledText style={{ color: colors.smoke, fontSize: 10 }}>
            {room.devices.length > 0 ? room.devices.length : messages.without}{' '}
            {messages.device}
          </StyledText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default RoomCard;
