import React, { StatelessComponent } from 'react';
import { View, ViewProps } from 'react-native';

type IComponentProps = ViewProps;

const Wrapper: StatelessComponent<IComponentProps> = ({
  style,
  ...restProps
}) => (
  <View
    style={[
      { flex: 1, paddingHorizontal: 20, backgroundColor: '#fafafa' },
      style,
    ]}
    {...restProps}
  />
);

export default Wrapper;
