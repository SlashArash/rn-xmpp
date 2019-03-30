import React, { StatelessComponent } from 'react';
import { Platform, StyleSheet, TextInput, TextInputProps } from 'react-native';

import { baseFont, colors } from '../../constants/Theme';

type IComponentProps = TextInputProps;

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    color: colors.black,
    fontFamily: baseFont,
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
});

const Input: StatelessComponent<IComponentProps> = ({
  style,
  ...restProps
}) => <TextInput style={[styles.input, style]} {...restProps} />;

export default Input;
