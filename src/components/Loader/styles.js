import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
