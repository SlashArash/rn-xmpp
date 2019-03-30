import React, { StatelessComponent } from 'react';
import {
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Platform,
} from 'react-native';

import { colorTypes } from '../../types/types';

import { colors } from '../../constants/Theme';
import StyledText from '../StyledText';

interface IComponentProps {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  color?: colorTypes;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    marginVertical: 8,
    padding: 8,
    backgroundColor: colors.purple,
    ...Platform.select({
      ios: {
        shadowColor: colors.smoke,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

const Button: StatelessComponent<IComponentProps> = ({
  title,
  style,
  color,
  ...restProps
}) => (
  <TouchableOpacity
    {...restProps}
    style={[styles.button, color && { backgroundColor: colors[color] }, style]}
  >
    <StyledText style={styles.text}>{title}</StyledText>
  </TouchableOpacity>
);

export default Button;
