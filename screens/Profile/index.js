import _ from 'lodash';
import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView, ListView} from "react-native"
import {connect} from 'react-redux';
import {parentUpdate } from '../../actions/childrenActions';
import ListItem from './ListItem';
import { Images } from "../../themes";
import styles from './styles';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class Profile extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    header: false,
  };

   componentWillMount() {
    this.createDataSource(this.props);
  }
  // componentWillReceiveProps({ gaurdians}) {
  //   this.createDataSource( gaurdians);
  //   console.log('2nd profile props are', gaurdians);
  // }

  createDataSource({ gaurdians }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(gaurdians);

  }

  renderRow(gaurdian) {
    return <ListItem gaurdian={gaurdian} />
  }

  goBack(){
    this.props.navigation.goBack();
  }

  goSave(){
    console.log(this.props);
  }

  handleDelete = () => {
    console.log('hi');
  }

  handleLost = () => {
    this.props.navigation.navigate('LostBracelet');
  }

  addGuardian = () => {
    // this.props.navigation.navigate('AddGaurdian');
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
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
              <View style={{flex:1}}/>
          </View>
          <ScrollView>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Full name</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput style={styles.textInput}
              underlineColorAndroid='transparent'
              value={this.props.parentName}
              onChangeText={value => this.props.parentUpdate({ prop: 'parentName', value })}
              autoCorrect={false}
            />
          </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>TIF.number with country code</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput style={styles.textInput}
              underlineColorAndroid='transparent'
              value={this.props.mobile}
              onChangeText={value => this.props.parentUpdate({ prop: 'mobile', value })}
              autoCorrect={false}
              keyboardType='numeric'
            />
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>E-mail address</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput}
               underlineColorAndroid='transparent'
               keyboardType='email-address'
               value={this.props.email}
               onChangeText={value => this.props.parentUpdate({ prop: 'email', value })}
               autoCapitalize="none"
               autoCorrect={false}
              />
            </View>
              <Text style={styles.codeText}>Guardians</Text>
              <Text style={styles.adminiText}>Administrator (you)</Text>
              <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />

            <View style={styles.marginSecondView}>
              <TouchableOpacity style={styles.circleView} onPress={this.addGuardian}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.remainView}>
              <TouchableOpacity onPress={this.goSave.bind(this)} style={styles.shadowButton}>
                <Text style={styles.nextText}>Save</Text>
              </TouchableOpacity>
              <View style={styles.buttomContainer}>
              <TouchableOpacity style={styles.textContainer} onPress={this.handleDelete} >
                <Text style={styles.codeText}>
                 Delete Profile
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textContainer} onPress={this.handleLost} >
                <Text style={styles.codeText}>
                  Lost Bracelet?
                </Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      </View>
    )
  }
}
const mapStateToProps = ({ childrenReducer }) => {
  const  { email, parentName, mobile, gaurdians } = childrenReducer;
  return { email, parentName, mobile, gaurdians }
}
export default connect(mapStateToProps, {parentUpdate})(Profile);
