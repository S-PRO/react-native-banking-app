// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

/* MODULES */
import { Actions } from 'react-native-router-flux';

import Icon from '../Icon';

/* CONFIGS */
import COLORS from '../../config/colors';
import IMAGES from '../../config/images';
import TEXT_CONSTANTS from '../../config/textConstants';

/* STYLES */
import styles from './styles';

/* TYPES */
type _t_props = {
  leftPart: {
    symbol: string,
    onPress: () => void
  },
  centerPart: {
    title: string
  }
};

type _t_state = {
};

export default class extends Component<_t_props, _t_state> {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  _renderLeftPart = () => {
    const {
      leftPart
    } = this.props;

    if (leftPart) {
      const {
        symbol,
        onPress
      } = leftPart;

      return (
        <TouchableOpacity
          style={styles.leftPartContainer}
          onPress={onPress}
        >
          <Icon
            name={symbol}
            size={14}
            color={COLORS.HEADER.BACK_BTN}
          />
        </TouchableOpacity>
      );
    }

    return (
      <View
        style={styles.leftPartContainer}
      />
    );
  }

  _renderCenterPart = () => {
    const {
      centerPart
    } = this.props;

    if (centerPart) {
      const {
        title
      } = centerPart;

      return (
        <Text
          style={styles.centerPart}
        >
          {title}
        </Text>
      );
    }

    return (
      <View style={styles.centerPart} />
    );
  }

  _renderRightPart = () => {
    const {
      rightPart
    } = this.props;

    if (rightPart) {
      const {
        symbol,
        onPress
      } = rightPart;

      return (
        <TouchableOpacity
          style={styles.rightPartContainer}
          onPress={onPress}
        >
          <Icon
            name={symbol}
            size={14}
            color={COLORS.HEADER.BACK_BTN}
          />
        </TouchableOpacity>
      );
    }

    return (
      <View
        style={styles.rightPartContainer}
      />
    );
  }

  render() {
    const leftPart = this._renderLeftPart();
    const centerPart = this._renderCenterPart();
    const rightPart = this._renderRightPart();
    return (
      <View style={styles.container}>
        {leftPart}
        {centerPart}
        {rightPart}

      </View>
    );
  }
}
