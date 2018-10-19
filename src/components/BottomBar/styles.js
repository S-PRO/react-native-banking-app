import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export default StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },

  homeBtn: {
    flex: 1,
    paddingLeft: 21
  },

  statBtn: {
    flex: 1,
    paddingLeft: 21
  },

  notificationBtn: {
    flex: 4,
    alignItems: 'center'
  },
});
