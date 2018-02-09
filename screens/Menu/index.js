import _ from 'lodash';
import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, ListView, KeyboardAvoidingView, PickerIOS} from "react-native"
import axios from 'axios';
import {connect} from 'react-redux';
import { ImagePicker } from 'expo';
import { Images } from "../../themes";
import styles from './styles';
import Spinner from '../../components/spinner';
import { childUpdate, saveImage } from '../../actions/regActions';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

// const data = ["belal Nabhani", "Hakam Nabhani", "hussein Dib"];

class AddPicture extends Component {
  constructor(){
    super();

    
    this.state = {
      color: '#e76065',
      loading: false,
      showError: ''
    };    
  }  
  
  static navigationOptions = {
    tabBarVisible: true,
    header: false,
  };

  saveData = async () => {
    
  }

  takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync();
    console.log('PICTURE ', pickerResult);
    
    if (!pickerResult.cancelled) {
      this.props.saveImage(pickerResult.uri);
      this.setState({color: '#53B768'})
    }
  };

  

  handleSubmit = async() => {
    const { childName, wristband, uri } = this.props; 

    if(wristband=='' || uri=='' || childName=='') {
      return this.setState({showError: 'All fields are required!'})
    }

    // return this.props.navigation.navigate('Payment');
    return this.props.navigation.navigate('CompleteLI');
  }

  addGuardian = () => {
    this.props.navigation.navigate('AddGaurdian');
  }

  goBack(){
    this.props.navigation.goBack()
  }

  render(){        
  	return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style = {styles.container}>
        <MyStatusBar backgroundColor="white"/>
        <View style={styles.headerView}> 
          <View style={{flex:1}}>
            <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.arrow_back}>
              <Image source={Images.arrow_back} style={styles.arrow_back}/>
            </TouchableOpacity>  
          </View>             
          <View style={{flex:1,alignItems:'center'}}>
            <Image source={Images.kmark} style={styles.kmark}/>
          </View> 
          <View style={{flex:1}}>
            <TouchableOpacity>
              <Text style={styles.doneText}>Done</Text> 
            </TouchableOpacity>
          </View>             
        </View> 
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>SETTINGS</Text> 
        </View>    
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>EditProfile</Text> 
        </TouchableOpacity>     
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>Lost bracelet</Text> 
        </TouchableOpacity>     
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>Share Kinder ID</Text> 
        </TouchableOpacity>     
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>Legal</Text> 
        </TouchableOpacity>     
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>Cyber security tips</Text> 
        </TouchableOpacity>     
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>Support &amp; FAQ</Text> 
        </TouchableOpacity>  
        <TouchableOpacity style={styles.eachItem}>
          <Text style={styles.leftText}>Rate Kinder ID</Text> 
        </TouchableOpacity> 
        <View>          
          <TouchableOpacity style={styles.buttonView}>
            <Image source={Images.whitemark} style={styles.whitemark}/>
          </TouchableOpacity>
          <Text style={styles.versionText}>Version 1.0</Text> 
        </View> 
        <View style={{flex:1,justifyContent:'flex-end'}}>
          <TouchableOpacity style={styles.bottomView}>
            <Text style={styles.centerText}>Log out</Text> 
          </TouchableOpacity>
        </View> 
      </View>
    </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = ({ reg }) => {
  const { childName, wristband, uri } = reg;
  return { childName, wristband, uri }
}

export default connect(mapStateToProps, {childUpdate, saveImage})(AddPicture)
