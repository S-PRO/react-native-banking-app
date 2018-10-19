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
import TypeContainer from '../../components/TypeContainer';

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
    image: IMAGES.SUITCASE,
    title: 'Travel',
    subtitle: '$425.00',
    persentValue: '50%'
  },
  {
    image: IMAGES.BASKET,
    title: 'Groceries',
    subtitle: '$213.00',
    persentValue: '25%'
  },
  {
    image: IMAGES.FOOD,
    title: 'Restaurants',
    subtitle: '$82.25',
    persentValue: '10%'
  },
  {
    image: IMAGES.BUS,
    title: 'Public transport',
    subtitle: '$40.50',
    persentValue: '5%'
  }
];

export default class extends Component<_t_props, _t_state> {
  constructor(props) {
    super(props);

    this.state = {
      titleValue: "$850.50",
    };
  }

  renderItem = ({ item, index }) => (
    <View
      key={index}
      style={styles.itemContainer}
    >
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={item.image}
      />

      <View style={styles.itemDetailsContainer}>
        <Text
          numberOfLines={1}
          style={styles.itemDetailsTitle}
        >
          {item.title}
        </Text>
        <Text
          numberOfLines={1}
          style={styles.itemDetailsSubTitle}
        >
          {item.subtitle}
        </Text>
      </View>
      <Text
        numberOfLines={1}
        style={styles.itemDetailsValue}
      >
        {item.persentValue}
      </Text>
    </View>
  )

  render() {
    const {
      titleValue
    } = this.state;
    return (
      <View style={styles.container}>

        <HeaderNavigation
          leftPart={{
            symbol: 'arrow_left',
            onPress: () => { Actions.pop(); }
          }}

          centerPart={{
            title: TEXT_CONSTANTS.EXPENDITURE.HEADER_TITLE
          }}
        />

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
            {titleValue}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.mainValueSubtitle}
          >
            {TEXT_CONSTANTS.EXPENDITURE.VALUE_SUBTITLE}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.mainValueSubtitle}
          >
            {TEXT_CONSTANTS.EXPENDITURE.VALUE_DURATION}
          </Text>
        </View>

        <TypeContainer />

        <FlatList
          style={styles.list}
          data={listData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item + index}
        />

        <BottomBar />

      </View>
    );
  }
}
