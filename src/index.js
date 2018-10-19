// @flow

import React, { Component } from 'react';
import {
  View,
  NetInfo,
  Text,
  Alert,
  StyleSheet,
  Platform
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

// import { Actions } from 'react-native-router-flux';
import Navigator from './Navigator';
import TEXT_CONSTANTS from "./config/textConstants";

type _t_props = {
  auth: {
    isHydrated: boolean,
  },
  loader: {
    show: boolean
  }
};

const styles = StyleSheet.create({
  internetConectionContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
    marginBottom: isIphoneX() ? 15 : 0
  }
});

export default class App extends Component<_t_props> {
  constructor() {
    super();
    this.state = {
      isOnline: true
    };
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange(connectionInfo) {
    if (connectionInfo.type === 'none') {
      Alert.alert('Error', 'No internet connection detected');
      this.setState({ isOnline: false });
    } else {
      this.setState({ isOnline: true });
    }
  }

  /**
    Loader we will use when app fetch data from backend
    it shows on full screen
    it can be made transparent
   */
  render() {
    const {
      isOnline
    } = this.state;

    return (
      <View style={styles.container}>
        {isOnline ? (
          <Navigator />
        ) : (
          <View style={styles.internetConectionContainer}>
            <Text>
              {TEXT_CONSTANTS.APP.CHECK_INTERNET}
            </Text>
          </View>
        )}
      </View>
    );

  }
}
