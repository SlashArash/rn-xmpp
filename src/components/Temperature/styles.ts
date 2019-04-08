import { StyleSheet } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.smoke,
  },
  mainNumber: {
    color: colors.black,
    fontSize: 55,
  },
  arrowNumbers: {
    color: colors.smoke,
    fontSize: 30,
  },
});

export default styles;
