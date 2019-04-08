import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';
import StyledText from '../StyledText';

interface IComponentProps {
  value: number;
  onChangeValue: (number) => void;
}

class Temperature extends React.PureComponent<IComponentProps> {
  handleChangeValue = (type: 'decrease' | 'increase') => () => {
    const { value } = this.props;
    if (type === 'decrease') {
      this.props.onChangeValue(value - 1);
    } else if (type === 'increase') {
      this.props.onChangeValue(value + 1);
    }
  };

  render() {
    const { value } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.handleChangeValue('decrease')}>
          <StyledText style={styles.arrowNumbers}>{value - 1}</StyledText>
        </TouchableOpacity>
        <StyledText style={styles.mainNumber}>{value}</StyledText>
        <TouchableOpacity onPress={this.handleChangeValue('increase')}>
          <StyledText style={styles.arrowNumbers}>{value + 1}</StyledText>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Temperature;
