import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import StyledText from '../StyledText';
import messages from '../../lib/messages';

const fan = require('../../../assets/images/icons/fan-dark.png');

interface IComponentProps {
  speed: number;
  onChange: (spedd: number) => void;
}

class FanSpeed extends React.PureComponent<IComponentProps> {
  handleChange = () => {
    let speed = this.props.speed + 1;
    if (this.props.speed === 4) {
      speed = 0;
    }
    this.props.onChange(speed);
  };

  render() {
    const { speed } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.icon} onPress={this.handleChange}>
          <View style={styles.speedWrapper}>
            <View
              style={[
                styles.quarter,
                styles.topLeft,
                speed >= 4 && styles.active,
              ]}
            />
            <View
              style={[
                styles.quarter,
                styles.topRight,
                speed >= 1 && styles.active,
              ]}
            />
            <View
              style={[
                styles.quarter,
                styles.bottomLeft,
                speed >= 3 && styles.active,
              ]}
            />
            <View
              style={[
                styles.quarter,
                styles.bottomRight,
                speed >= 2 && styles.active,
              ]}
            />
          </View>
          <View style={styles.fillCircle} />
          <Image source={fan} style={styles.image} />
        </TouchableOpacity>
        <StyledText style={styles.legendText}>{messages.speed}</StyledText>
      </View>
    );
  }
}

export default FanSpeed;
