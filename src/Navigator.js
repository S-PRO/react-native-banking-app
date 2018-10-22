// @flow

import React, { Component } from 'react';

import {
  Scene,
  Router,
  Tabs
} from 'react-native-router-flux';

import Main from './containers/Main';
import Expenses from './containers/Expenses';
import Account from './containers/Account';

type _t_props = {

};

export default class Navigator extends Component<_t_props> {

  handleBackButton = () => true

  render() {
    return (
      <Router hideNavBar backAndroidHandler={this.handleBackButton}>
        <Scene key="root" hideNavBar>
          <Tabs hideTabBar>
            <Scene key="Main" component={Main} initial hideNavBar />
            <Scene key="Account" component={Account} hideNavBar />
          </Tabs>
          <Scene key="Expenses" component={Expenses} hideNavBar />
        </Scene>
      </Router>
    );
  }
}
