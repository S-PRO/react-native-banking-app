// @flow

import React, { Component } from 'react';

import {
  Scene,
  Router,
} from 'react-native-router-flux';

import Main from './containers/Main';
import Expenses from './containers/Expenses';

type _t_props = {

};

export default class Navigator extends Component<_t_props> {

  handleBackButton = () => true

  render() {
    return (
      <Router backAndroidHandler={this.handleBackButton}>
        <Scene key="root" hideNavBar>
          <Scene key="Main" component={Main} initial />
          <Scene key="Expenses" component={Expenses} />
        </Scene>
      </Router>
    );
  }
}
