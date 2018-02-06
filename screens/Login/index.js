import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView} from "react-native"
import {connect} from 'react-redux';
import { Images } from "../../themes";
import styles from './styles';
import Spinner from '../../components/spinner';
import { login } from '../../actions';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = { email: "", loading: false, showError: "" }
  }

  static navigationOptions = () => {
    return {
      tabBarVisible: true,
      header: null,
    }
  }

  handleSubmit = async() => {
    const { email, loading, showError } = this.state;
    this.setState({showError: ""})
    
    if (email == "") {
      this.setState({showError: "Email should be filled"})
      return;
    }
    this.setState({loading: true})
    await this.props.login(this.state.email); 
    const { userEmail, error } = this.props;
    this.setState({loading: false})
    if (error) {
      this.setState({showError: error});
      return;
    }          
    console.log('userEmail is', userEmail);
    
    const { message } = userEmail       
    if (message ==="registered_user" || message === "new_user")
        return this.props.navigation.navigate("Verify")

    if (message === "authorized_email")
        return this.props.navigation.navigate("Password")
    
  }
  
  renderButton = () => {
    if (this.state.loading)
      return <Spinner />;
    return (
      <TouchableOpacity onPress={this.handleSubmit} style={styles.nextButton}>
        <Text style={styles.commonText}>Next</Text>
      </TouchableOpacity>
    );
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <ImageBackground source={Images.background} style = {styles.container}>   
      <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={Images.mark} style={styles.markImage}/>          
              <View style={styles.marginView1}>
                <Text style={styles.commonText}>E-mail address</Text> 
              </View>
              <View style={styles.marginView5}>
                <TextInput style={styles.commonTextInput}
                  underlineColorAndroid='transparent'               
                  placeholder="john@kinder-id.com"
                  keyboardType='email-address'
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.marginView2} >
                <Text style={styles.commonText}>{this.state.showError}</Text>
              </View> 
              <View style={styles.bottomView}>
              <View style={styles.spinnerStyle}>
              {this.renderButton()}
              </View>
                <View style={styles.rowTextView}>
                  <Text style={styles.smallText}>By pressing next you accept our</Text>
                  <Text style={styles.underlineSmallText}>Terms and conditions</Text>
                </View>
              </View>
      </KeyboardAvoidingView>
        </ImageBackground>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { error, userEmail } = auth;
  return { error, userEmail }
}

export default connect(mapStateToProps, {login})(Login)
