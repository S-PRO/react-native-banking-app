import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export default StyleSheet.create({
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
    justifyContent: 'space-between'
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
    color: COLORS.MAIN.MAIN_VALUE,
    fontSize: 40,
    height: 44,
  },
  mainValueSubtitle: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    textAlign: "center",
    color: COLORS.MAIN.MAIN_VALUE,
    fontSize: 14,
  },

  equivalentValueContainer: {
    width: '100%',
    height: 64,
    flexDirection: 'column',
    marginTop: 30,
  },
  equivalentValue: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    textAlign: "center",
    color: COLORS.MAIN.MAIN_VALUE,
    fontSize: 20,
    height: 24,
  },
  equivalentSubtitle: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    textAlign: "center",
    color: COLORS.MAIN.MAIN_VALUE,
    fontSize: 14,
  },

  sectionList: {
    marginTop: 45,
    height: 20,
    marginHorizontal: 21
  },

  sectionHeader: {
    fontFamily: FONTS.AVENIR_NEXT_DEMIBOLD,
    textAlign: "left",
    color: COLORS.MAIN.SECTION_HEADER,
    fontSize: 13,
  },

  itemContainer: {
    height: 80,
    flex: 1,
    flexDirection: 'row'
  },
  itemDetailsContainer: {
    flexDirection: 'column',
    marginLeft: 80,
    width: 180,
    height: 43,
    alignSelf: 'center'
  },

  itemDetailsTitle: {
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
    textAlign: "left",
    color: COLORS.MAIN.LIST_ITEM_TITLE,
    fontSize: 16,
    lineHeight: 22
  },

  itemDetailsSubTitle: {
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
    textAlign: "left",
    color: COLORS.MAIN.LIST_ITEM_SUBTITLE,
    fontSize: 14,
    lineHeight: 19
  },
  itemDetailsValue: {
    width: 70,
    alignSelf: 'center',
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
    textAlign: "right",
    color: COLORS.MAIN.LIST_ITEM_VALUE,
    fontSize: 16,
    lineHeight: 22
  }
});
