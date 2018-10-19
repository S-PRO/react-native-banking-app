import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 44
  },

  leftPartContainer: {
    position: 'absolute',
    left: 8,
    width: 44,
    height: 44
  },

  centerPart: {
    position: 'absolute',
    maxWidth: 200,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center'
  },

  rightPartContainer: {
    position: 'absolute',
    right: 8,
    width: 44,
    height: 44
  },
});
