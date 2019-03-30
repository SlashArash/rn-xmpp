import * as React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';
import messages from '../../lib/messages';
import StyledText from '../StyledText';

class StatusBox extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Image
          source={require(`../../../assets/images/light.png`)}
          style={styles.image}
        />
        <View style={styles.textWrapper}>
          <StyledText style={[styles.mainText, styles.lightColor]}>
            {messages.activeSensors}: 12
          </StyledText>
          <StyledText style={styles.lightColor}>
            {messages.temperature}: 26 ℃
          </StyledText>
        </View>
      </View>
    );
  }
}

export default StatusBox;
