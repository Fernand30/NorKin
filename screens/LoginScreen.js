import React from 'react';
import { StyleSheet, Text, View , Image , TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import { Button } from 'react-native-elements';
import Spinner from '../components/spinner';
import { emailLogin } from '../actions';

class LoginScreen extends React.Component {
    static navigationOptions = () => {
        return {
            tabBarVisible: true,
        }
    }
    state = { email: "", loading: false }

    handleSubmit = async () => {      
        
        
        this.setState({loading: true})
        await this.props.emailLogin(this.state.email);
               
        const { message } = this.props.login
        if (this.props.error) {
            this.setState({loading: false})
            return;
        }
        
        if (message ==="verify_user" || message === "new_user")
            return this.props.navigation.navigate("loginVerf")

        if (message === "authorized_email")
            return this.props.navigation.navigate("loginVerf")
               
    }

    renderButton = () => {
        if(this.state.loading)
            return <Spinner />
        return (
            <Button             
                onPress={this.handleSubmit}
                title="Next"                
                buttonStyle={styles.button}
            />
        )
    }

  render() {
    
    return (
      <View style={styles.container}>


       <View style={styles.header}>
           <Image
           style={{width: 29, height: 29}}
           source={{uri: 'http://www.playground2.no/wp-content/uploads/2018/01/k.png'}}
               />

       </View>

      <View style={styles.title}>
        <View style={styles.logo}>
            <Image
                style={{width: 225, height: 65}}
                source={{uri: 'http://www.playground2.no/wp-content/uploads/2017/12/Logohvit-e1513880830542.png'}}
            />

        </View>
      </View>


      <View>
       <Text style ={styles.text}>E-mail address</Text>
       <TextInput style ={styles.input}
        placeholder="john@kinder-id.com"
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        autoCapitalize="none"
        />
        </View>
        <View style={styles.errorSyle}>
            <Text style={styles.textB} >{this.props.error}</Text>
        </View>
            <View style={styles.buttonContainer}>
              {this.renderButton()}
            </View>

<Text style={styles.textT}>By pressing next you accept our terms and conditions </Text>


          </View>


    );
  }
}


// STYLE PROPS

const styles = StyleSheet.create({
// cotainer element
container:{
backgroundColor: '#F7797C',
flex: 1,
alignItems:'center',

},
// Text
  text: {
  justifyContent: 'center',
  alignItems:'center',
  textAlign:'center',
  color:'#ffffff',
  fontSize: 18,
  textShadowColor: 'rgba(0, 0, 0, 0.03)',
  textShadowOffset: { width: 26, height: 0 },
  textShadowRadius: 29,
  lineHeight: 30.32,
  letterSpacing: 0.03,
  paddingTop: 25,
  margin: 2,
//   fontFamily: 'open-sans-bold'
  },
// text input
  input: {
    width: 254,
    height: 53,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 7,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    textAlign: 'center',

// Header
  },
header:{
  width: 455,
  height: 72,
  borderColor: 'rgba(0, 0, 0, 0.21)',
  borderStyle: 'solid',
  borderWidth: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 25,
  flexDirection: 'row',

},
button: {

shadowColor: 'rgba(0, 0, 0, 0.03)',
shadowOffset: { width: 26, height: 0 },
shadowRadius: 29,
borderRadius: 50,
borderWidth: 1,
borderColor: '#ffffff',
justifyContent:'center',
alignItems:'center',
backgroundColor: '#F7797C',

},
buttonContainer: {
    width: 103,
    height: 49,
    marginTop: 220,
},
textB: {
color: '#ffffff',


},
title: {
paddingTop: 20,
},

logo:{
  margin: 30,

},
textT:{
  margin: 13,
  marginTop: 30,
  color:'#ffffff'


},
errorSyle: {
    justifyContent: 'center',
    alignItems:'center',        
    marginTop: 50
}

});

const mapStateToProps = ({ auth }) => {
    const { error, login } = auth;
    return { error, login }
}


export default connect(mapStateToProps, {emailLogin})(LoginScreen);