import React from 'react';
import {ImageBackground} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import * as configureStore from './reduxStore';
import * as actions from './actions';
import { AppNavigator } from './navigationConfig';
import OneSignal from 'react-native-onesignal';
import { Font } from 'expo';
import {Images} from './themes'
 
// we create a new Root component to use as middle-component-ware-thing. 
class Root extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })}
      />
    );
  }
}
// just like any redux connected component, we connect it to redux store and let it know about the state of the nav object in the store. 
const mapStateToProps = state => ({
  nav: state.nav,
});
// connect it to redux, and name is AppWithNavigationState. Voila! 
const AppWithNavigationState = connect(mapStateToProps)(Root);
// finally we can initialise the store
const store = configureStore.configure();
// Wrap AppWithNavigation state inside Provider instead of the MainNavigator/AppNavigator 
class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    OneSignal.configure({});
   await Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
      'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      'OpenSans-ExtraBoldItalic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
      'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSans-LightItalic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
      'OpenSans-SemiboldItalic': require('./assets/fonts/OpenSans-SemiboldItalic.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded)
      return <ImageBackground source={Images.background} style = {{flex:1}} />
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
export default App;

