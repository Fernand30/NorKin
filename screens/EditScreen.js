import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class EditScreen extends Component {
    static navigationOptions = props => {
        return {
            headerTitle: 'Edit Kinder',
            tabBarVisible: false,
            headerRight: 
            (<Button
                title="Add Kinder"
                onPress={() => props.navigation.navigate('addKinder')}
            />),
            style: { marginTop: 24 }
        };
    };
    render() {
        return (
            <View style={styles.container} >
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });

export default EditScreen;