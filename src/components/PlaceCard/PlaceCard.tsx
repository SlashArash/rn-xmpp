import React, { StatelessComponent } from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import IPlace from '../../types/IPlace';

import styles from './styles';
import { colors } from '../../constants/Theme';
import messages from '../../lib/messages';
import StyledText from '../StyledText';

interface IComponentProps {
  place: IPlace;
}

const requireIcon = (place: IPlace) => {
  let icon = require(`../../../assets/images/icons/unknown-dark.png`);

  if (place.iconNumber === '1') {
    icon = require(`../../../assets/images/icons/bath-dark.png`);
  } else if (place.iconNumber === '2') {
    icon = require(`../../../assets/images/icons/bed-dark.png`);
  } else if (place.iconNumber === '3') {
    icon = require(`../../../assets/images/icons/washing-dark.png`);
  } else if (place.iconNumber === '4') {
    icon = require(`../../../assets/images/icons/tv-dark.png`);
  }
  return icon;
};

const PlaceCard: StatelessComponent<IComponentProps> = ({ place }) => {
  const icon = requireIcon(place);
  return (
    <TouchableHighlight style={styles.card}>
      <View style={styles.cardBody}>
        <Image source={icon} style={styles.icon} />
        <View>
          <StyledText>{place.name}</StyledText>
          <StyledText style={{ color: colors.smoke, fontSize: 10 }}>
            {place.devices.length > 0 ? place.devices.length : messages.without}{' '}
            {messages.device}
          </StyledText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PlaceCard;
