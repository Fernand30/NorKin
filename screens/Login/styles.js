import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors,  Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  hearderView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: Constants.Marin8,
    height: Constants.Marin20,
    borderBottomWidth: 1,
    borderColor: '#eaeaea'
  },
  markImage:{
    width: Constants.width/2,
    height:Constants.width/11.2,
    resizeMode: 'stretch',
    marginTop: Constants.Marin15
  },
  kkImage:{
    width: Constants.Marin8,
    height:Constants.Marin10,
  },
  flexView:{
    flex : 1,
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
    fontFamily: 'OpenSans-Light',
  },
  flexCenter:{
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
    marginTop: Constants.Marin8
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
  spinnerStyle: {
    marginBottom: Constants.Marin6,
    width: Constants.width/3,
    height: Constants.width/8,
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
    backgroundColor: '#d96869',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    alignSelf:'center',
    marginBottom: Constants.Marin1
  },
  emptyView:{
    height: Constants.Marin16
  }
})
