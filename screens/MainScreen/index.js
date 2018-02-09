import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, AsyncStorage, ListView, ScrollView} from "react-native"
import {connect} from 'react-redux';
import { Images } from "../../themes"
import styles from './styles';
import {fetchChildren} from '../../actions/childrenActions';
import registerForNotification from '../../services/push_notification';
import ListItem from './ListItem';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class MainScreen extends Component {
  constructor(props){
    super(props)
  }
  
  static navigationOptions = {
    header: false,
  }; 

  
  componentWillMount() {
      this.props.fetchChildren();
      this.createDataSource(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  
  createDataSource({ children }) {    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(children);

  }

  renderRow(child) {
    return <ListItem child={child} />
  }

  handleAddChild = () => {
    this.props.navigation.navigate('AddPictureLI');
  }
  goEdit(){
    //this.props.navigation.navigate('Profile');
    this.props.navigation.navigate('MenuScreen');
  }

  goLocation(){
    this.props.navigation.navigate('MichaelMissingScreen');
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>              
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>              
          </View>
          <ScrollView>
          <View >
            <ListView 
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />          
            <View style={styles.marginSecondView}>
              <TouchableOpacity style={styles.circleView} onPress={this.handleAddChild} >
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.remainView}>
            <TouchableOpacity onPress={this.goEdit.bind(this)}  style={styles.shadowButton}>
              <Text style={styles.nextText}>Settings</Text> 
            </TouchableOpacity>  
          </View>

          <TouchableOpacity onPress={this.goLocation.bind(this)}  style={{alignSelf:'center',marginTop: 150}}>
            <Text style={styles.nextText}>any location</Text> 
          </TouchableOpacity>  


          </ScrollView>
      </View>
    )
  }
}
const mapStateToProps = ({ childrenReducer }) => {    
  const  {children} = childrenReducer;
  return { children }
}
export default connect(mapStateToProps, {fetchChildren}) (MainScreen);
