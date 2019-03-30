import { StyleSheet } from 'react-native';

import { colors } from '../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 87.5,
    width: 70,
    opacity: 0.6,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 18,
    marginBottom: 3,
  },
  lightColor: {
    color: '#efefef',
  },
});

export default styles;
