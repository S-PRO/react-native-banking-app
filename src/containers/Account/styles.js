import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column'
  },
  customHeader: {
    borderBottomColor: COLORS.ACCOUNT.BORDER,
    borderBottomWidth: 1,
    height: 30,
    marginBottom: 30
  },
  currencyName: {
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
    textAlign: "center",
    color: COLORS.CURRENCY_TOP_TITLE,
    fontSize: 15,
  },
  topBtn: {
    paddingHorizontal: 25,
    alignSelf: 'center'
  },
  topBtnContiner: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnsContainer: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  menuBtn: {
    width: 44,
    height: 44
  },
  mainValueContainer: {
    width: '100%',
    height: 64,
    flexDirection: 'column',
    marginTop: 30,
  },

  mainValue: {
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
    textAlign: "center",
    color: COLORS.ACCOUNT.TITLE,
    fontSize: 20,
    height: 24,
  },

  accountType: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    textAlign: "center",
    color: COLORS.ACCOUNT.STANDART_ACCOUNT,
    fontSize: 15,
    height: 18,
  },

  accountTypeSelected: {
    color: COLORS.ACCOUNT.ACCOUNT_SELECTED,
  },

  roundBorder: {
    position: 'absolute',
    top: -80,
    left: 55,
    width: 300,
    height: 300,
    borderRadius: 300,
    borderBottomColor: COLORS.ACCOUNT.BORDER,
    borderWidth: 1,
    transform: [
      { scaleX: 5 }
    ]
  },
  typeBtnContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 21
  }

});
