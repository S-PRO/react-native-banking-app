// @flow

import React from 'react';
import {
  View,
  ActivityIndicator,
  Platform
} from 'react-native';

import COLORS from '../../config/colors';

import styles from './styles';

type _t_props = {
    show: boolean,
};

const Loader = (props: _t_props) => {
  const {
    show,
  } = props;
  if (show) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator
          size={Platform.OS === 'android' ? 40 : 0}
          color={COLORS.BLUE_LOADER}
        />
      </View>
    );
  }
  return null;
};

export default Loader;
