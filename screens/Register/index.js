import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, KeyboardAvoidingView } from "react-native"
import { connect } from 'react-redux';
import { Images } from "../../themes";
import styles from './styles';
import Spinner from '../../components/spinner';
import { userUpdate } from '../../actions/regActions';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class Register extends Component {
  constructor(props){
    super(props);

    this.state = { showError: "", loading: false }
  }
  
  static navigationOptions = {
    header: false,
  };

  handleSubmit = async() => {
    const { parentName, parentTel, parentPassword, parentRPassword } = this.props;
    if (parentName=='' || parentTel=='' || parentPassword=='' || parentRPassword==''){
      return this.setState({showError: "All fields are required!"});
    }
    if (parentPassword.length < 6)  {
      return this.setState({showError: "Password must be 6 digits!"});
    }
    if (parentPassword != parentRPassword) {
      return this.setState({showError: "Password does not match!"});
    }
    return this.props.navigation.navigate('AddPicture');
  }

  renderButton = () => {
    if (this.state.loading)
      return <Spinner />;
    return (
      <TouchableOpacity onPress={this.handleSubmit} style={styles.shadowButton}>
        <Text style={styles.nextText}>Next</Text> 
      </TouchableOpacity>
    );
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style = {styles.container}>
         <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>              
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={Images.kmark} style={styles.kmark}/>
            </View>                            
          </View>          
          <View style={styles.marginFirstView}>
            <Text style={styles.codeText}>Please fill in your contact information</Text> 
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Full name</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput} 
              underlineColorAndroid='transparent'               
              placeholder='John Smith'
              value={this.props.parentName}
              onChangeText={value => this.props.userUpdate({ prop: 'parentName', value })}
              autoCorrect={false}
            />  
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>TIF. with country code</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput} 
              underlineColorAndroid='transparent'               
              placeholder='(+47) 000 00 000'
              value={this.props.parentTel}
              onChangeText={value => this.props.userUpdate({ prop: 'parentTel', value })}
              autoCorrect={false}
              keyboardType='numeric'
            />  
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Password</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              keyboardType="numeric"            
              placeholder='123456'
              maxLength={6}
              value={this.props.parentPassword}
              onChangeText={value => this.props.userUpdate({ prop: 'parentPassword', value })}
              autoCorrect={false}
            />  
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Repeat Password</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput} 
              secureTextEntry={true}
              keyboardType="numeric"
              underlineColorAndroid='transparent'               
              placeholder='123456'
              maxLength={6}
              value={this.props.parentRPassword}
              onChangeText={value => this.props.userUpdate({ prop: 'parentRPassword', value })}
              autoCorrect={false}
            />  
          </View>
          <View style={styles.marginView2} >
            <Text style={styles.errorText}>{this.state.showError}</Text>
          </View>
          <View style={styles.remainView}>
              {this.renderButton()}
          </View>
      </View>
    </KeyboardAvoidingView>
    )
  }
}
const mapStateToProps = ({ reg }) => {
  const { parentName, parentTel, parentPassword, parentRPassword } = reg;
  return { parentName, parentTel, parentPassword, parentRPassword };
};
export default connect(mapStateToProps, {userUpdate})(Register);
