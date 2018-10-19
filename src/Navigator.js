// @flow

import React, { Component } from 'react';

import {
  Scene,
  Tabs,
  Router,
  Actions
} from 'react-native-router-flux';
import Main from './containers/Main';

type _t_props = {

};

export default class Navigator extends Component<_t_props> {

  handleBackButton = () => true

  render() {
    return (
      <Router backAndroidHandler={this.handleBackButton}>
        <Scene key="root" hideNavBar>
          <Scene key="Main" component={Main} initial />
        </Scene>
      </Router>
    );
  }
}
