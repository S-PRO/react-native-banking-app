import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'mobx-react/native';

import stores from './src/stores';
import App from './src';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default () => (
  <View style={styles.container}>
    {/* <StatusBar
      barStyle="light-content"
    /> */}
    <Provider {...stores}>
      <App />
    </Provider>
  </View>
);
