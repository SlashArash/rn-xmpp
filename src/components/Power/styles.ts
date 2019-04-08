import { StyleSheet } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    borderWidth: 1,
    borderColor: colors.smoke,
    padding: 10,
  },
  auto: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  image: {
    width: 60,
    height: 60,
  },
  legendText: {
    color: colors.black,
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default styles;
