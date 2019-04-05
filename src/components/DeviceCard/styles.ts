import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '25%',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 5,
    padding: 20,
    margin: 10,
    backgroundColor: '#ffffff',
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
  active: {
    backgroundColor: colors.blue,
  },
  cardBody: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  activeText: {
    color: '#ffffff',
  },
});

export default styles;
