import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ListItem extends Component {
    render() {  
        const {gaurdianName, gaurdianTel, gaurdianEmail } = this.props.gaurdian;       
        return (    
            <View style={styles.shadowView}>
                <Text style={styles.johnText}>{gaurdianName}</Text> 
                <Text style={styles.numberText}>{gaurdianTel}</Text> 
                <Text style={styles.numberText}>{gaurdianEmail}</Text> 
            </View>
        );
    }
}

export default ListItem;