import React, { Component } from "react"
import { Keyboard, View, Image, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView} from "react-native"
import {connect} from 'react-redux';
import { Images } from '../../themes';
import styles from './styles';
import Spinner from '../../components/spinner';
import { verify } from '../../actions';

class Verify extends Component {
  constructor(props){
    super(props)
    this.state = { vCode: "", loading: false, showError: "" }
  }
  
  static navigationOptions = () => { 
    return {
        tabBarVisible: true,
        header: false,
    }
}
componentDidMount() {
  Keyboard.dismiss();
}


  handleSubmit = async () => {   
    
    const { vCode, loading, showError } = this.state;
    const { userEmail} = this.props
    this.setState({showError: ""})
    
    if (vCode == "") {
      this.setState({showError: "Code should be filled"})
      return;
    }
    this.setState({loading: true})
    await this.props.verify(userEmail, vCode); 
    const { route, vError } = this.props;
    this.setState({loading: false})
    console.log('router is', route);
    
    
    if (vError) {
      return this.setState({showError: vError});
    }          

    if (route.message === "registered_user"){
      return this.props.navigation.navigate("AddPicture");
    }

    if (route.message === "new_user"){
      return this.props.navigation.navigate("Register")
      console.log('go to new user');
      
    }

  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner />
    }
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
                  <Text style={styles.commonText}>Verification code</Text> 
                </View>
              <View style={styles.marginView5}>
                <TextInput style={styles.commonTextInput}
                  underlineColorAndroid='transparent'               
                  placeholder="******"
                  onChangeText={(vCode) => this.setState({vCode})}
                  value={this.state.vCode}
                  autoCapitalize="none"
                  autoCorrect={false}
                /> 
              </View>
              
              <View style={styles.marginView4}>
                <TouchableOpacity>
                  <Text style={styles.smallText}>lkke mmotatt koden?</Text> 
                </TouchableOpacity>  
              </View>
              <View style={styles.marginView2} >
                <Text style={styles.commonText}>{this.state.showError}</Text>
              </View>
              <View style={styles.bottomView}>
              <View style={styles.spinnerStyle}>
                {this.renderButton()}
                </View> 
              </View>
      </KeyboardAvoidingView>
        </ImageBackground>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  const { vError, route, userEmail } = auth;
  return { vError, route, userEmail }
}

export default connect(mapStateToProps, {verify})(Verify)
