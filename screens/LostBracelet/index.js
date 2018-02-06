import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
import { connect } from 'react-redux';
import { Images } from "../../themes";
import styles from './styles';
import ListItem from './ListItem';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class LostBracelet extends Component {
  constructor(props){
    super(props)
    this.state=({
      select1: true,
      select2: false,
    })
  }
  
  static navigationOptions = {
    header: false,
  };
  componentWillMount() {     
    this.createDataSource(this.props);
  }
  componentWillReceiveProps({ children}) {
    this.createDataSource( children);
    console.log('2nd profile props are', children);
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
  goBack(){
    this.props.navigation.navigate('Profile')
  }

  check1(){
    this.setState({
      select1:!this.state.select1
    })
  }

  check2(){
    this.setState({
      select2:!this.state.select2
    })
  }

  goDelete(){
    this.props.navigation.navigate('MichaelMissing')
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
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Which wristband have you lost?</Text> 
          </View>
          <ListItem />  
          <View style={styles.rowView}>
            <TouchableOpacity onPress={this.goDelete.bind(this)} style={styles.shadowButton}>
              <Text style={styles.codeText}>Delete</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goDelete.bind(this)} style={styles.shadowButton}>
              <Text style={styles.codeText}>Replace</Text> 
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
const mapStateToProps = ({ childrenReducer }) => {  
  const  { children } = childrenReducer;  
  return { children }
}
export default connect(mapStateToProps, null)(LostBracelet); 
