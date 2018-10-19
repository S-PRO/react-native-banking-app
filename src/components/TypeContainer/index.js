// @flow

/* REACT */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

/* MODULES */


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
      activeChoice: 0,
    };
  }

  render() {
    const {
      activeChoice
    } = this.state;
    return (
      <View style={styles.typeContainer}>
        <TouchableOpacity
          onPress={() => {
            this.setState(() => ({ activeChoice: 0 }));
          }}
        >
          <Text style={[styles.btnText, activeChoice === 0 ? styles.enabledChoise : styles.disabledChoise]}>
            {TEXT_CONSTANTS.EXPENDITURE.MERCHANT}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState(() => ({ activeChoice: 1 }));
          }}
        >
          <Text style={[styles.btnText, activeChoice === 1 ? styles.enabledChoise : styles.disabledChoise]}>
            {TEXT_CONSTANTS.EXPENDITURE.CATEGORY}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState(() => ({ activeChoice: 2 }));
          }}
        >
          <Text style={[styles.btnText, activeChoice === 2 ? styles.enabledChoise : styles.disabledChoise]}>
            {TEXT_CONSTANTS.EXPENDITURE.COUNTRY}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
