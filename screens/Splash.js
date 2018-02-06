import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import {Images} from '../themes';

class Splash extends Component {
    componentDidMount(props) {
        this.timeoutHandle = setTimeout( props => {
            this.props.navigation.navigate('Login');
        }, 2500);
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }
    render() {
        return (
            
            <ImageBackground source={Images.background} style = {styles.container} />
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#E76D71",

    }
});

export default Splash;