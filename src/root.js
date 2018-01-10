import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,  Scene} from 'react-native-router-flux'

import Preference from './screens/Preference';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "preference" component = {Preference} hideNavBar={true} {...this.props} initial/>
    </Scene>
 </Router>


);

export default Routes