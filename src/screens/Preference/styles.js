import {StyleSheet} from 'react-native'
const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors, Fonts, Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.Marin4,
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
  backImage:{
    width: Constants.Marin4,
    height:Constants.Marin7,
  },
  kkImage:{
    width: Constants.Marin8,
    height:Constants.Marin10,
  },
  flexView:{
    flex : 1,
  },
  flexCenter:{
    flex: 1,
    alignItems: 'center'
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light'
  },
  mainView: {
    flex: 1,
    justifyContent:'space-between',
    paddingVertical: Constants.Marin6
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
  rowView:{
    flexDirection:'row',
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
  rowView:{
    flexDirection:'row',
    marginHorizontal: Constants.Marin16,
  },
  cameraView:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#d96869',
    height: Constants.Marin16,
    width: Constants.Marin12,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  camera: {
    width: Constants.Marin5,
    height: Constants.Marin4,
    resizeMode: 'stretch'
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
