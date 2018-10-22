import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'transparent',
    flexDirection: 'column',
    width: 158,
    height: 156,
    alignItems: 'center'
  },
  image: {
    height: 60,
    width: 60,
    marginTop: 32
  },
  btnTitle: {
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
    textAlign: "center",
    color: COLORS.ACCOUNT.TITLE,
    fontSize: 16,
    marginTop: 14
  }

});
