import axios from 'axios';
import React, { Component } from "react"
import { connect } from 'react-redux';
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, AsyncStorage} from "react-native"
import { DangerZone } from 'expo';
let { Lottie } = DangerZone;
import { Images } from "../../themes"
import styles from './styles';
const done = require('./check.json');

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class Complete extends Component {
  constructor(props){
    super(props);
    this.state = {
      animation: done,
      message: "Registering User..."      
    };
  }
  
  static navigationOptions = {
    header: false,
  };

  componentDidMount() {
    this._handleRegisterUser();
    
  }
  
  _handleRegisterUser = async () => {
    const {
      userEmail,
      parentName,
      parentTel,
      parentPassword,    
      childName,
      wristband,
      uri,
      gaurdianData
    } = this.props;
    console.log('all props are ', this.props);
    
   
    const apiUrl = "https://api.kinder-id.com/mobile/registeruser";   
      
    const data = new FormData();        
    data.append('avatar', {
      uri,
      type: 'image/jpg', 
      name: wristband
    });
    
    const children = {
      childrenName: childName,
      wristband
    };
    data.append('email', userEmail.user.email);
    data.append('parentName', parentName); 
    data.append('mobile', parentTel); 
    data.append('parentPassword', parentPassword); 
    data.append('children', JSON.stringify(children)); 
    data.append('gaurdians', JSON.stringify(gaurdianData));
          
    
    console.log('data', data);
    try {
      let response = await fetch(apiUrl, {
        method: 'post',
        body: data,        
        headers: {'Content-Type': 'multipart/form-data'}
      });      
      let parsedResponse = await response.json(); 
      await AsyncStorage.setItem('kinderID_sessionToken', parsedResponse.token);
      this.animation.play(); 
      this.setState({message: "Payment Complete"});
       
    } catch (err) {
      this.setState({message : "An error occured while registering"});   
    }
    
  };
 
  goBack(){
    this.props.navigation.goBack()
  }

  goNext(){    
    this.props.navigation.navigate('MainScreen')
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"  barStyle="dark-content"/>
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
          <View style={styles.mainView}>
            <View style={styles.eachView}>
                <View style={styles.circleView}>
                  {this.state.animation &&
                  <Lottie                    
                    ref={animation => {
                      this.animation = animation;
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: '#ef6e71',
                    }}
                    source={this.state.animation}
                  />}
                </View>
                <Text style={styles.smallText}>{this.state.message}</Text> 
            </View>
            <View style={styles.eachView}>
              <TouchableOpacity style={styles.button} onPress={() => this.goNext()}>
                <Text style={styles.nextText}>Next</Text> 
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}

const mapStateToProps = ({ reg, auth }) => {
  const {
    parentName,
    parentTel,
    parentPassword,    
    childName,
    wristband,
    uri,
    gaurdianData
   } = reg;
   const { userEmail } = auth;
  return {
    userEmail,
    parentName,
    parentTel,
    parentPassword,    
    childName,
    wristband,
    uri,
    gaurdianData
   }
};

export default connect(mapStateToProps, null)(Complete);
