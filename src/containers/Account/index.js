// @flow

/* REACT */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

/* MODULES */
import { Actions } from 'react-native-router-flux';

import BottomBar from '../../components/BottomBar';
import HeaderNavigation from '../../components/HeaderNavigation';
import Icon from '../../components/Icon';
import TypeImgBtn from '../../components/TypeImgBtn';

/* CONFIGS */
import COLORS from '../../config/colors';
import IMAGES from '../../config/images';
import TEXT_CONSTANTS from '../../config/textConstants';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {
};

type _t_state = {
};

export default class extends Component<_t_props, _t_state> {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <HeaderNavigation
          leftPart={{
            symbol: 'three_dots',
            size: 4,
            // onPress: () => { Actions.pop(); }
          }}

          rightPart={{
            symbol: 'wranch',
            size: 16,
            // onPress: () => { Actions.pop(); }
          }}

          customStyle={styles.customHeader}
        />

        <View style={styles.btnsContainer}>
          <TouchableOpacity
            style={styles.menuBtn}
            onPress={() => {

            }}
          >
            <Icon
              name="Combined-Shape"
              size={14}
              color={COLORS.ACCOUNT.TOP_MENU_BTNS}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => {

            }}
          >
            <Icon
              name="Shape"
              size={18}
              color={COLORS.ACCOUNT.TOP_MENU_BTNS}
            />
          </TouchableOpacity>

        </View>


        <View style={styles.mainValueContainer}>
          <Text
            numberOfLines={1}
            style={styles.mainValue}
          >
            {TEXT_CONSTANTS.ACCOUNT.NAME}
          </Text>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: 70,
          }}
          >
            <Text style={styles.accountType}>
              {TEXT_CONSTANTS.ACCOUNT.STANDART_ACCOUNT}
            </Text>

            <Text style={[styles.accountType, styles.accountTypeSelected]}>
              {TEXT_CONSTANTS.ACCOUNT.UPGRADE}
            </Text>
          </View>
        </View>

        <View style={styles.typeBtnContainer}>
          <View style={styles.btnRow}>
            <TypeImgBtn
              image={IMAGES.UMBRELLA}
              title={TEXT_CONSTANTS.ACCOUNT.INSURANCE}
            />
            <TypeImgBtn
              image={IMAGES.PIGGY_BANK}
              title={TEXT_CONSTANTS.ACCOUNT.SAVINGS}
            />
          </View>
          <View style={styles.btnRow}>
            <TypeImgBtn
              image={IMAGES.MONEY}
              title={TEXT_CONSTANTS.ACCOUNT.CREDIT}
            />
            <TypeImgBtn
              image={IMAGES.CHART}
              title={TEXT_CONSTANTS.ACCOUNT.SAVINGS}
            />
          </View>
        </View>


        <BottomBar />

        <View style={styles.roundBorder} />

      </View>
    );
  }
}
