import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Verify from './screens/Verify';
import AddPicture from './screens/AddPicture';
import AddGaurdian from './screens/AddGaurdian';
import Payment from './screens/Payment';
import Complete from './screens/Complete';
import CompleteLI from './screens/CompleteLI';
import Register from './screens/Register';
import Password from './screens/Password';
import MainScreen from './screens/MainScreen';
import AddPictureLI from './screens/AddPictureLI';
import MenuScreen from './screens/Menu';
import Profile from './screens/Profile';
import LostBracelet from './screens/LostBracelet';
import MapScreen from './screens/FinderMap'
import ReunitedScreen from './screens/Reunited'
import MichaelMissingScreen from './screens/MichaelMissing'

const AppNavigator =  StackNavigator({
      Splash: { screen: Splash },
      Login: { screen: Login },
      Verify: { screen: Verify}, 
      Register: { screen: Register }, 
      AddPicture: { screen: AddPicture},
      AddGaurdian: { screen: AddGaurdian },
      Payment: { screen: Payment },
      Complete : { screen: Complete },
      CompleteLI : { screen: CompleteLI },
      Password: { screen: Password },
      MainScreen: { screen: MainScreen },
      AddPictureLI: { screen: AddPictureLI},
      Profile: { screen: Profile },
      LostBracelet: { screen: LostBracelet},
      MapScreen: { screen: MapScreen },
      ReunitedScreen: { screen: ReunitedScreen },
      MichaelMissingScreen: { screen: MichaelMissingScreen },
      MenuScreen: { screen: MenuScreen }

    },{
      swipeEnabled: false,
      lazy: true,
      animationEnabled: true,
      tabBarOptions: {          
        style: {
          paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }        
        
      }    
      // navigationOptions: {

      //   tabBarVisible: false,
      // } 
    }
);

export { AppNavigator };