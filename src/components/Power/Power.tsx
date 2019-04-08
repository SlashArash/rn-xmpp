import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import StyledText from '../StyledText';
import messages from '../../lib/messages';

const snow = require('../../../assets/images/icons/power-dark.png');
const snowActive = require('../../../assets/images/icons/power-active.png');

interface IComponentProps {
  state: 'on' | 'off' | 'auto';
}

const Power: React.StatelessComponent<IComponentProps> = ({ state }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity style={[styles.icon, state === 'auto' && styles.auto]}>
      {state === 'auto' ? (
        <StyledText style={styles.text}>AUTO</StyledText>
      ) : state === 'on' ? (
        <Image source={snowActive} style={styles.image} />
      ) : (
        <Image source={snow} style={styles.image} />
      )}
    </TouchableOpacity>
    <StyledText style={styles.legendText}>{messages.power}</StyledText>
  </View>
);

export default Power;
