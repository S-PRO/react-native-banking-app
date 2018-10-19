import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export default StyleSheet.create({
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 27,
    marginVertical: 20,
    height: 50,
    alignItems: 'center'
  },

  btnText: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 24
  },
  enabledChoise: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    color: COLORS.EXPENDITURE.TYPE_BTN_TEXT_ENABLED,
  },

  disabledChoise: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    color: COLORS.EXPENDITURE.TYPE_BTN_TEXT_DISABLED,
  }
});
