import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import StyledText from '../StyledText';
import messages from '../../lib/messages';

const snow = require('../../../assets/images/icons/snow-dark.png');
const snowActive = require('../../../assets/images/icons/snow-active.png');

interface IComponentProps {
  active: boolean;
}

const Cooling: React.StatelessComponent<IComponentProps> = ({ active }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity style={styles.icon}>
      {active ? (
        <Image source={snowActive} style={styles.image} />
      ) : (
        <Image source={snow} style={styles.image} />
      )}
    </TouchableOpacity>
    <StyledText style={styles.legendText}>{messages.cooling}</StyledText>
  </View>
);

export default Cooling;
