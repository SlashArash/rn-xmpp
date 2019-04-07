import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.smoke,
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  legendText: {
    color: colors.black,
    fontSize: 20,
  },
});

export default styles;
