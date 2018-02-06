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
     width: 3,
     height: 4,
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
  absoluteView:{
    position:'absolute',
    top: Constants.Marin6,
    left:Constants.width/5,
    width: Constants.width*3/5,
    height:Constants.Marin25,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius: 5,
    paddingVertical: Constants.Marin2
  },
  absoluteButtonView:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: Constants.Marin14,
    width:Constants.width,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  redbutton:{
    flex:1,
    height: Constants.Marin14,
    backgroundColor:'#ef6e71',
    alignItems:'center',
    justifyContent:'center'
  },
  greenbutton:{
    flex:1,
    height: Constants.Marin14,
    backgroundColor:'#5dbb64',
    alignItems:'center',
    justifyContent:'center'
  },
  commonText:{
    fontSize: Constants.Font15,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
    backgroundColor:'transparent',
    marginTop:Constants.Marin4
  },
  buttonText:{
    fontSize: Constants.Font20,
    color:'white'
  },
  sideView:{
    flex: 1,
    alignItems: 'center'
  },
  finderText:{
    fontSize: Constants.Font20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    backgroundColor:'transparent'
  },
  numberText:{
    fontSize: Constants.Font20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
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
  bottomView: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-end',
    paddingBottom: Constants.Marin6
  },
  textInput:{
    marginHorizontal: Constants.Marin16,
    height: Constants.Marin16,
    fontSize: Constants.Font30,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
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
  textInputID:{
    flex: 1,
    height: Constants.Marin16,
    fontSize: Constants.Font30,
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
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
    width: Constants.Marin5,
    height: Constants.Marin5,
    borderRadius: Constants.Marin5/2,
    borderColor: 'white',
    borderWidth: 1 ,
    alignItems: 'center' ,
    justifyContent:'center'
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    alignSelf:'center',
    marginBottom: Constants.Marin1,
    fontFamily: 'OpenSans-Light',
  },
  loginText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Bold',
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font25,
    fontFamily: 'OpenSans-Light',
    textAlign:'center',
  },
  inputView:{
    flexDirection: 'row',
    paddingHorizontal: Constants.Marin8,
    justifyContent:'space-between'
  },
  eachView:{
    marginTop: Constants.Marin10,
    width: Constants.Marin10,
    height: Constants.Marin10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ef6e71',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font30
  },
  forgotButton:{
    marginTop: Constants.Marin8
  },
  forgotText:{
    fontSize: Constants.Font15,
    textAlign:'center',
    fontFamily: 'OpenSans-Light'
  }
})
