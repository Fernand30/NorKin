import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from "../../themes";
import styles from './styles';

class ListItem extends Component {
    constructor(props){
        super(props)
        this.state=({
          select1: true,
          
        })
      }
      check1(){
        this.setState({
          select1:!this.state.select1
        })
      }
    
   
    render() { 
        const {childrenName, id} = this.props.child;
        console.log('child name ', childrenName);
        
        return (    
            <View>
                <TouchableOpacity onPress={this.check1.bind(this)} style={styles.listView}>
                {(this.state.select1)?<Text style={styles.selectcodeText}>Michael</Text>:<Text style={styles.codeText}>Michael</Text> }
                {(this.state.select1)?<Image source={Images.check} style={styles.check}/>:null}
              </TouchableOpacity>  
            </View>
        );
    }
}

export default ListItem;