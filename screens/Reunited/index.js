import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
import { Images } from "../../themes"
import styles from './styles'

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class Welcome extends Component {
  constructor(props){
    super(props)
    this.state=({
      select1: true,
      select2: false,
    })
  }
  
  static navigationOptions = {
    header: false,
  };

  goBack(){
    this.props.navigation.goBack()
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
                 
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>          
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>If you are not reuinted, pleasse{'\n'}contact your local police department.</Text>
            <View style={styles.rowView}>
              <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.redButton}>
                <Text style={styles.buttonText}>Go back</Text> 
              </TouchableOpacity>
            </View> 
          </View>
      </View>
    )
  }
}
export default Welcome
