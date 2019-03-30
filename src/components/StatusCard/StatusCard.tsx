import React from 'react';
import {
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  View,
} from 'react-native';

import IStatus from '../../types/IStatus';

import styles from './styles';
import messages from '../../lib/messages';
import StyledText from '../StyledText';

interface IComponentProps {
  status: IStatus;
  onPress: (event: GestureResponderEvent) => void;
}

const requireIcon = (status: IStatus) => {
  let icon = status.active
    ? require(`../../../assets/images/icons/unknown-light.png`)
    : require(`../../../assets/images/icons/unknown-dark.png`);
  if (status.title === 'sleep') {
    icon = status.active
      ? require(`../../../assets/images/icons/night-light.png`)
      : require(`../../../assets/images/icons/night-dark.png`);
  } else if (status.title === 'travel') {
    icon = status.active
      ? require(`../../../assets/images/icons/flight-light.png`)
      : require(`../../../assets/images/icons/flight-dark.png`);
  } else if (status.title === 'normal') {
    icon = status.active
      ? require(`../../../assets/images/icons/weather-light.png`)
      : require(`../../../assets/images/icons/weather-dark.png`);
  } else if (status.title === 'reception') {
    icon = status.active
      ? require(`../../../assets/images/icons/food-light.png`)
      : require(`../../../assets/images/icons/food-dark.png`);
  }
  return icon;
};

const StatusCard: React.StatelessComponent<IComponentProps> = ({
  status,
  onPress,
}) => {
  const icon = requireIcon(status);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, status.active && styles.active]}
    >
      <View style={styles.cardBody}>
        <Image source={icon} style={styles.icon} />
        <StyledText style={status.active && styles.activeText}>
          {messages[status.title]}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default StatusCard;
