import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors,  Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  statusBar:{
    height: 20
  },
  headerView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: Constants.Marin8,
    height: Constants.Marin20,
    borderColor: '#E6E6E6',
    borderBottomWidth: 1,
    shadowOffset: {
     width: 2,
     height: 2,
   },
   shadowColor: '#E6E6E6',
   shadowOpacity: 1,
  },
  arrow_back:{
    width: Constants.Marin4,
    height:Constants.Marin6,
  },
  kmark:{
    width: Constants.Marin8,
    height:Constants.Marin10,
  },
  whitemark:{
    width: Constants.Marin5,
    height:Constants.Marin6,
  },
  notMatchView:{
    height: Constants.Marin14,
    backgroundColor: '#ef6e71',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: Constants.Marin4
  },
  commonTextInput:{
    width: Constants.width*2/3,
    height:Constants.width*2/15,
    borderRadius: Constants.width*2/30,
    backgroundColor: 'white',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font25,
    paddingHorizontal: Constants.Marin6,
    
  },
  sideView:{
    flex: 1,
    alignItems: 'center'
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  marginView1:{
    marginTop: Constants.Marin16
  },
  marginView2:{
    marginTop: Constants.Marin10
  },
  marginView3:{
    marginTop: Constants.Marin6
  },
  marginView4:{
    marginTop: Constants.Marin4
  },
  marginView5:{
    marginTop: Constants.Marin2
  },
  textInput:{
    width:Constants.width*2/3,
    height: Constants.Marin14,
    fontSize: Constants.Font30,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
  },
  textRowInput:{
    width:Constants.width*5/9,
    height: Constants.Marin14,
    fontSize: Constants.Font30,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
  },
  nextButton:{
    width: Constants.width/3,
    height: Constants.width/8,
    borderRadius: Constants.width/16,
    borderWidth: 1,
    borderColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: Constants.Marin6
  },
  rowTextView:{
    flexDirection:'row',
  },
  smallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    color: 'white',
    backgroundColor:'transparent'
  },
  underlineSmallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    color: 'white',
    textDecorationLine: 'underline',
    backgroundColor:'transparent'
  },
  alignItemCenter:{
    alignItems: 'center',
  },
  circleView:{
    width: Constants.Marin12,
    height: Constants.Marin12,
    borderRadius: Constants.Marin6,
    backgroundColor:'#e76065',
    justifyContent:'center',
    alignItems:'center'
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    marginBottom:Constants.Marin1,
    backgroundColor:'transparent'
  },
  eachItem: {
    borderColor: '#E6E6E6',
    borderBottomWidth: 1,
    height: Constants.Marin12,
    justifyContent: 'center',
  },
  settingItem: {
    borderColor: '#E6E6E6',
    borderBottomWidth: 1,
    height: Constants.Marin15,
    justifyContent: 'center',
  },
  loginText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Bold',
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  leftText:{
    fontSize: Constants.Font18,
    fontFamily: 'OpenSans-Light',
    textAlign:'left',
    marginLeft: Constants.Marin4,
  },
  settingText:{
    fontSize: Constants.Font14,
    fontFamily: 'OpenSans-Light',
    textAlign:'left',
    marginLeft: Constants.Marin4,
  },
  centerText:{
    fontSize: Constants.Font20,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  versionText:{
    fontSize: Constants.Font17,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
    marginTop: Constants.Marin2,
    color: Colors.version,
  },
  doneText:{
    fontSize: Constants.Font23,
    fontFamily: 'OpenSans-Bold',
    textAlign:'right',
    color: Colors.done,
    marginRight: Constants.Marin2
  },
  buttonView:{
    width: Constants.Marin13,
    height: Constants.Marin13,
    backgroundColor: Colors.done,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: Constants.Marin3,
    alignSelf: 'center',
    marginTop: Constants.Marin5,
  },
  errorText:{
    fontSize: Constants.Font18,
    fontFamily: 'OpenSans-Bold',
    textAlign:'center',
    color: 'red'
  },
  nextText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  marginFirstView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  marginSecondView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  marginThirdView:{
    marginTop: Constants.Marin7,
    alignItems:'center'
  },
  inputView:{
    marginTop: Constants.Marin1,
    justifyContent:'center',
    alignItems:'center',
  },
  inputRowView:{
    marginTop: Constants.Marin1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  remainView:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingBottom:Constants.Marin8
  },
  shadowButton:{
    width:Constants.Marin30,
    height:Constants.Marin15,
    borderRadius:Constants.Marin7,
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: '#f5f5f5',
    shadowOpacity: 1,
  },
  bottomView:{    
    alignItems:'center',
    justifyContent:'center',
    height: Constants.Marin12,
    borderColor: '#E6E6E6',
    borderTopWidth: 1,
    shadowOffset: {
     width: 2,
     height: 2,
   },
   shadowColor: '#E6E6E6',
   shadowOpacity: 1,
  },
})
