import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
    zIndex: 6,
  },
  legendText: {
    color: colors.black,
    fontSize: 18,
  },
  speedWrapper: {
    position: 'absolute',
    width: 60,
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quarter: {
    width: 28,
    height: 28,
    zIndex: 4,
    margin: 1,
  },
  topLeft: {
    borderTopLeftRadius: 60,
  },
  topRight: {
    borderTopRightRadius: 60,
  },

  bottomLeft: {
    borderBottomLeftRadius: 60,
  },
  bottomRight: {
    borderBottomRightRadius: 60,
  },
  active: {
    backgroundColor: colors.blue,
  },
  fillCircle: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: 53,
    height: 53,
    borderRadius: 27,
    zIndex: 5,
  },
});

export default styles;
