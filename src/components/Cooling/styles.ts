import { StyleSheet } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.smoke,
    padding: 10,
  },
  image: {
    width: 35,
    height: 35,
  },
  legendText: {
    color: colors.black,
    fontSize: 18,
  },
});

export default styles;
