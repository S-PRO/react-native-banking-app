// @flow

/* REACT */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SectionList
} from 'react-native';

/* MODULES */
import { Actions } from 'react-native-router-flux';

import BottomBar from '../../components/BottomBar';

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

const listData = [
  {
    title: 'TODAY',
    data: [
      { title: 'Pandora', subTitle: 'Monthly subscription', value: '$5.00' }
    ]
  },
  {
    title: 'YESTURDAY',
    data: [
      { title: 'JesicaReynols', subTitle: 'Payback time :)', value: '$3.65' },
      { title: 'Exchange', subTitle: 'USD to EUR', value: '$129.00' }
    ]
  }
];

export default class extends Component<_t_props, _t_state> {
  constructor(props) {
    super(props);

    this.state = {
      mainValue: "$7'265.50",
      equivalentValue: "$15'320.00",
    };
  }

  renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  )

  renderItem = ({ item, index }) => (
    <View
      key={index}
      style={styles.itemContainer}
    >
      <View style={styles.itemDetailsContainer}>
        <Text
          style={styles.itemDetailsTitle}
        >
          {item.title}
        </Text>
        <Text
          style={styles.itemDetailsSubTitle}
        >
          {item.subTitle}
        </Text>
      </View>
      <Text
        numberOfLines={1}
        style={styles.itemDetailsValue}
      >
        {item.value}
      </Text>
    </View>
  )

  render() {
    const {
      mainValue,
      equivalentValue
    } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.WHITE, flexDirection: 'column' }}>
        <View style={styles.topBtnContiner}>
          <TouchableOpacity style={styles.topBtn}>
            <Text style={styles.currencyName}>
              {TEXT_CONSTANTS.MAIN.EUR_BTN}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}>
            <Text style={styles.currencyName}>
              {TEXT_CONSTANTS.MAIN.GBP_BTN}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainValueContainer}>
          <Text
            numberOfLines={1}
            style={styles.mainValue}
          >
            {mainValue}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.mainValueSubtitle}
          >
            {TEXT_CONSTANTS.MAIN.MAIN_VALUE_SUBTITLE}
          </Text>
        </View>

        <View style={styles.equivalentValueContainer}>
          <Text
            numberOfLines={1}
            style={styles.equivalentValue}
          >
            {equivalentValue}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.equivalentSubtitle}
          >
            {TEXT_CONSTANTS.MAIN.EQUIVALENT_VALUE_SUBTITLE}
          </Text>
        </View>

        <SectionList
          style={styles.sectionList}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={listData}
          keyExtractor={(item, index) => item + index}
        />
        <BottomBar />

      </View>
    );
  }
}
