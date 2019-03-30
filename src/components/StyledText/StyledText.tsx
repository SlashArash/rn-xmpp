import React, { StatelessComponent } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { baseFont, colors } from '../../constants/Theme';

interface IComponentProps {
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: baseFont,
    color: colors.black,
  },
});

const StyledText: StatelessComponent<IComponentProps> = ({
  style,
  ...restProps
}) => <Text {...restProps} style={[styles.text, style]} />;

export default StyledText;
