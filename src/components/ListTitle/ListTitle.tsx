import React, { StatelessComponent } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

import { baseFont, colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  title: {
    fontFamily: baseFont,
    fontSize: 18,
    color: colors.black,
    textAlign: 'right',
  },
});

type IComponentProps = TextProps

const ListTitle: StatelessComponent<IComponentProps> = ({ style, ...restProps }) => (
  <Text style={[styles.title, style]} {...restProps}/>
);

export default ListTitle;
