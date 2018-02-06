import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

class AuthScreen extends Component {
    static navigationOptions = () => {
        return {
            tabBarVisible: true,
        }
    }
    render() {
        return (
            <View style={styles.container} >
            <View style={styles.header}>
                <Text style={[styles.textColor, {fontSize: 36}]}>Kinder</Text>
                <Text style={[styles.textColor, { fontSize: 36, fontWeight: 'bold'}]}>ID</Text>
                <Text style={[styles.textColor, { fontSize: 8, fontWeight: 'bold', lineHeight: 18 }]}>TM</Text>
            </View>
            <View style={styles.body}>
                <Text style={[styles.textColor]}>Pleas fill in your wristband ID</Text>
                <View style={styles.textContainer}>
                    <Text style={[styles.textColor, { fontSize: 26, paddingHorizontal: 30}]}>AB 00000</Text>
                </View>
                <TouchableOpacity
                 onPress={() => console.log('pressed register!!')}
                >
                    <View><Text style={[styles.textColor]}>Register</Text></View>
                </TouchableOpacity >
            </View>
            <View style={styles.footer}>
                <Button
                  raised
                  onPress={() => console.log('Button Pressed!!')}
                  title="Log in"
                  color="black"
                  backgroundColor= "#fff"
                  borderRadius={25}
                  buttonStyle={{ paddingHorizontal: 25, borderRadius: 25}}
                />
                <Text style={[styles.textColor, {fontSize: 12, paddingTop: 15, paddingHorizontal: 60 }]}>By pressing register you agree to the terms and condition found on our website.</Text>
                <Text style={[styles.textColor, {fontSize: 10, paddingTop: 5}]}>
                  Safty Innovation Group
                  <MaterialIcons name="copyright" size={10} />
                </Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E76D71",
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        flex: 1,
        // backgroundColor: '#E91E63',
        justifyContent: 'center',
        paddingTop: 100,
        flexDirection: 'row'
    },
    textColor: {
        color: '#fff'
    },
    body: {
        flex: 2,
        alignItems: 'center',
        // backgroundColor: '#FF9800',
        paddingTop: 10,
    },
    textContainer: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#fff',
        marginVertical: 15,
        paddingHorizontal: 40,
        paddingVertical: 15,

    },
    footer: {
        flex: 1,
        // backgroundColor: '#795548',
        alignItems: 'center',
        // justifyContent: 'flex-end'
    },
  });

export default AuthScreen;