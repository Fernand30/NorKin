import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Images } from "../../themes"
import styles from './styles'
import MapView from 'react-native-maps';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const LATITUDE = 59.923022;
const LONGITUDE = 10.739413;

class Welcome extends Component {
  constructor(props){
    super(props)
  }
  
  static navigationOptions = {
    header: false,
  };

  goBack(){
    this.props.navigation.goBack()
  }

  notReunited(){
    this.props.navigation.navigate('ReunitedScreen')
  }

  goReunited(){
    this.props.navigation.navigate('Reunited')
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white" barStyle='dark-content'/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
                <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.arrow_back}>
                  <Image source={Images.arrow_back} style={styles.arrow_back}/>
                </TouchableOpacity>  
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>
          <View style={{flex:1}}  >
            <MapView
              style={{flex:1}}
              initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <MapView.Marker
                image={Images.kmarker}
                coordinate={{latitude: LATITUDE+0.0001,longitude: LONGITUDE-0.0017}}
              />
            </MapView>      
            <View style={styles.absoluteView}>
              <Text style={styles.finderText}>Finders number</Text>
              <Text style={styles.numberText}>+47 412 69 949</Text>
              <Text style={styles.commonText}>Dalsbergstien 6A, 0220, OSLO</Text>
            </View>
            <View style={styles.absoluteButtonView}>
              <TouchableOpacity onPress={this.notReunited.bind(this)} style={styles.redbutton}>
                <Text style={styles.buttonText}>Not reunited</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goReunited.bind(this)} style={styles.greenbutton}>
                <Text style={styles.buttonText}>Reuinted</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}
export default Welcome
