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
    zIndex: 6,
  },
  legendText: {
    color: colors.black,
    fontSize: 20,
  },
  speedWrapper: {
    position: 'absolute',
    width: 70,
    height: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quarter: {
    width: 33,
    height: 33,
    zIndex: 4,
    margin: 1,
  },
  topLeft: {
    borderTopLeftRadius: 75,
    backgroundColor: colors.purple,
  },
  topRight: {
    borderTopRightRadius: 75,
    backgroundColor: colors.purple,
  },

  bottomLeft: {
    borderBottomLeftRadius: 75,
    backgroundColor: colors.purple,
  },
  bottomRight: {
    borderBottomRightRadius: 75,
    backgroundColor: colors.purple,
  },
  fillCircle: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: 62,
    height: 62,
    borderRadius: 31,
    zIndex: 5,
  },
});

export default styles;
