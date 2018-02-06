import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, KeyboardAvoidingView, Keyboard, AsyncStorage} from "react-native"
import {connect} from 'react-redux';
import { Images } from "../../themes";
import styles from './styles';
import { authorize } from '../../actions';


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class Password extends Component {
  constructor(props){
    super(props)
    this.state = { num1: "", num2: "", num3: "", num4: "", num5: "", num6: "", showError: ""}
  }
  
  static navigationOptions = {
    header: false,
  };

  // move this after user successuflly logged in
  // componentDidMount() {
  //   this._init();

  // }

  // _init = async () => {
  //   let sessionToken = await AsyncStorage.getItem('kinderID_sessionToken');    
  //   await this.props.getUserFromToken(sessionToken);
    
  //   registerForNotification(this.props.userData.email);
  // }
  
  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  handleSubmit = async (num6) => {
    const { num1, num2, num3, num4, num5 } = this.state;
    const password = num1+num2+num3+num4+num5+num6;
    const {email} = this.props.userEmail.user;
    this.setState({showError: ""})
    
    await this.props.authorize(email, password);    
    const {aError, authorized, token} = this.props;
    
    if (authorized) {
      Keyboard.dismiss();
      await AsyncStorage.setItem('kinderID_sessionToken', token);
      return this.props.navigation.navigate('MainScreen');
    } else {
      this.setState({showError: aError.message})
    }

  }

  renderError = () => {
    if (this.state.showError) {
      return (        
          <View style={styles.sideView}>
            <View style={styles.circleView}>
              <Text style={styles.smallText}>i</Text> 
            </View>
          <Text style={styles.smallText}>{this.state.showError}</Text> 
          </View>        
      );
    }
    return <View />
  }

  render(){
    const { navigate } = this.props.navigation;
    
    
  	return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>              
            <View style={{flex:1,alignItems:'center'}}>
            < Image source={Images.kmark} style={styles.kmark}/>
            </View>
             
          </View>
          <View style={styles.notMatchView}>
            {this.renderError()}
          </View>
          <Text style={styles.loginText}>Log in</Text> 
          <Text style={styles.codeText}>Enter your security code to log in</Text> 
          <View style={styles.inputView}>
            <TextInput 
              ref='1'
              style={styles.eachView} 
              secureTextEntry={true} 
              autoFocus={true} 
              keyboardType="numeric"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              blurOnSubmit={false}
              maxLength={1}
              value={this.state.num1}
              onChangeText={num1 => {
                this.setState({num1})                
                if(num1 && num1.length == 1){
                  this.focusNextField('2');
                }
              }}
              onSubmitEditing={() => this.focusNextField('2')}
            />
            <TextInput 
              ref='2'
              style={styles.eachView} 
              secureTextEntry={true}               
              keyboardType="numeric"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              blurOnSubmit={false}
              maxLength={1}
              value={this.state.num2}
              onChangeText={num2 => {
                this.setState({num2})                
                if(num2 && num2.length == 1){
                  this.focusNextField('3');
                }
              }}
              onSubmitEditing={() => this.focusNextField('3')}
            />
            <TextInput 
              ref='3'
              style={styles.eachView} 
              secureTextEntry={true}               
              keyboardType="numeric"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              blurOnSubmit={false}
              maxLength={1}
              value={this.state.num3}
              onChangeText={num3 => {
                this.setState({num3})                
                if(num3 && num3.length == 1){
                  this.focusNextField('4');
                }
              }}
              onSubmitEditing={() => this.focusNextField('4')}
            />
            <TextInput 
              ref='4'
              style={styles.eachView} 
              secureTextEntry={true}              
              keyboardType="numeric"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              blurOnSubmit={false}
              maxLength={1}
              value={this.state.num4}
              onChangeText={num4 => {
                this.setState({num4})                
                if(num4 && num4.length == 1){
                  this.focusNextField('5');
                }
              }}
              onSubmitEditing={() => this.focusNextField('5')}
            />
            <TextInput 
              ref='5'
              style={styles.eachView} 
              secureTextEntry={true}           
              keyboardType="numeric"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              blurOnSubmit={false}
              maxLength={1}
              value={this.state.num5}
              onChangeText={num5 => {
                this.setState({num5})                
                if(num5 && num5.length == 1){
                  this.focusNextField('6');
                }
              }}
              onSubmitEditing={() => this.focusNextField('6')}
            />
            <TextInput
              ref='6'
              style={styles.eachView} 
              secureTextEntry={true}               
              keyboardType="numeric"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}                             
              blurOnSubmit={false}
              maxLength={1}
              value={this.state.num6}
              onChangeText={num6 => {
                this.setState({num6})
                if (num6 && num6.length == 1)
                  this.handleSubmit(num6)         
            }}
              onSubmitEditing={() => this.handleSubmit(num6)}         
            />                      
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgotten password?</Text> 
          </TouchableOpacity>  
      </View>
      </KeyboardAvoidingView>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  const {  userEmail, aError, authorized, token } = auth;
  return {  userEmail, aError, authorized, token }
}

export default connect(mapStateToProps, {authorize})(Password) 
