import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ListItem extends Component {
    render() {        
        const {childrenName, wristband} = this.props.child;
        return (    
            <View style={styles.shadowView}>
                <Text style={styles.boldText}>{childrenName}</Text> 
                <Text style={styles.codeText}>{wristband}</Text> 
            </View>
        );
    }
}

export default ListItem;