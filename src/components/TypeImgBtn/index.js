// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

/* MODULES */
import { Actions } from 'react-native-router-flux';

import BottomBar from "../BottomBar";
import HeaderNavigation from "../HeaderNavigation";
import Icon from "../Icon";

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
    const {
      image,
      title
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {

        }}
      >
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={image}
          size={18}
        />
        <Text style={styles.btnTitle}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
