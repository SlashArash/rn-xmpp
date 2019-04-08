import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import StyledText from '../StyledText';
import messages from '../../lib/messages';
import { devicePower } from '../../types/types';

const snow = require('../../../assets/images/icons/power-dark.png');
const snowActive = require('../../../assets/images/icons/power-active.png');

interface IComponentProps {
  state: devicePower;
  onChange: (state: devicePower) => void;
}

const powerStateList = ['off', 'on', 'auto'];

class Power extends React.PureComponent<IComponentProps> {
  handleChangePower = () => {
    let newState: devicePower = 'off';
    if (this.props.state === 'on') {
      newState = 'auto';
    } else if (this.props.state === 'off') {
      newState = 'on';
    } else if (this.props.state === 'auto') {
      newState = 'off';
    }
    this.props.onChange(newState);
  };
  render() {
    const { state } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.icon, state === 'auto' && styles.auto]}
          onPress={this.handleChangePower}
        >
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
  }
}

export default Power;
