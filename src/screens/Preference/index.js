import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput} from "react-native"
import { Images } from "../../themes"
import { Actions } from 'react-native-router-flux';
import styles from './styles'
class Welcome extends Component {
  constructor(props){
    super(props)
  }

  render(){
    
  	return(
      <View style = {styles.container}> 
          <View style={styles.hearderView}>
              <View style={styles.flexView}>
                  <Image source={Images.back} style={styles.backImage}/>
              </View>
              <View style={styles.flexCenter}>
                  <Image source={Images.kk} style={styles.kkImage}/> 
              </View>
              <View style={styles.flexView} />
          </View>
          <View style={styles.mainView}>
              <Text style={styles.commonText}>Fill inn your child&rsquo;s details</Text>
              <Text style={styles.commonText}>Full name</Text> 
              <TextInput underlineColorAndroid='transparent' style={styles.textInput} placeholder='Mary Smith' placeholderTextColor='#b0b0b0'/>   
              <Text style={styles.commonText}>Wristband ID</Text> 
              <View style={styles.rowView}>
                  <TextInput underlineColorAndroid='transparent' style={styles.textInputID} placeholder='AB 000000' placeholderTextColor='#b0b0b0'/>
                  <View style={styles.cameraView}>
                      <Image source={Images.camera} style={styles.camera}/> 
                  </View>
              </View>   
              <Text style={styles.commonText}>Press the camera icon to take a{'\n'}picture of your wristband</Text> 
              <Text style={styles.commonText}>Add guardian (1-4)</Text> 
              <View style={styles.alignItemCenter}>
                  <View style={styles.circleView}>
                      <Text style={styles.plusText}>+</Text> 
                  </View>
              </View>
              <View style={styles.emptyView}/>
              <Text style={styles.commonText}>Next</Text> 
          </View>
          
  
      </View>
    )
  }
}
export default Welcome
