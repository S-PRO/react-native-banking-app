// @flow

/* REACT */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
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
        <TouchableOpacity
          style={styles.homeBtn}
        >
          <Icon
            name="home"
            size={20}
            color={COLORS.BOTTOM_MENU.ICON_FILL}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.statBtn}
        >
          <Icon
            name="stats"
            size={20}
            color={COLORS.BOTTOM_MENU.ICON_FILL}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.notificationBtn}
        >
          <Icon
            name="notification"
            size={20}
            color={COLORS.BOTTOM_MENU.ICON_FILL}
          />
        </TouchableOpacity>

      </View>
    );
  }
}
