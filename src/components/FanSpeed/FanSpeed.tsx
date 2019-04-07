import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import StyledText from '../StyledText';
import messages from '../../lib/messages';

const fan = require('../../../assets/images/icons/fan-dark.png');

interface IComponentProps {
  speed: number;
}

const Cooling: React.StatelessComponent<IComponentProps> = ({ speed }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity style={styles.icon}>
      <View style={styles.speedWrapper}>
        <View style={[styles.quarter, styles.topLeft]} />
        <View style={[styles.quarter, styles.topRight]} />
        <View style={[styles.quarter, styles.bottomLeft]} />
        <View style={[styles.quarter, styles.bottomRight]} />
      </View>
      <View style={styles.fillCircle} />
      <Image source={fan} style={styles.image} />
    </TouchableOpacity>
    <StyledText style={styles.legendText}>{messages.speed}</StyledText>
  </View>
);

export default Cooling;
