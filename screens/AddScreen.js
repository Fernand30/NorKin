import React from 'react';
import { StyleSheet, Text, View , Image , TextInput,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {
    static navigationOptions = () => {
        return {
            tabBarVisible: true,
        }
    }

    render() {
        return (
          <View style={styles.container}>
    
    
           <View style={styles.header}>
               <Image
               style={{width: 29, height: 29}}
               source={{uri: 'http://www.playground2.no/wp-content/uploads/2018/01/k.png'}}
                   />
    
           </View>
    
          <View style={styles.title}>
           <Text> Fill inn your child’s details</Text>
          </View>
    
    
          <View>
           <Text style ={styles.text}>Full name</Text>
           <TextInput style ={styles.input}
            placeholder="John Smith"
            onChangeText={(text) => this.setState({text})}
            />
            </View>
    
            <View>
             <Text style ={styles.text}>Wristband ID</Text>
             <TextInput style ={styles.input}
              placeholder="(+47) 000 00 000"
              onChangeText={(text) => this.setState({text})}
              />
              </View>
              <Text style ={styles.textinfo}>Press the camera icon to take a
               picture of your wristband</Text>
               <Text style ={styles.textinfo}>Add guardian (1-4)</Text>
    
    
    
    
              <View>
                <Image
                style={{width: 45, height: 45}}
                source={{uri: 'http://www.playground2.no/wp-content/uploads/2018/01/add.png'}}
    
                    />
    
                </View>
    
                <View style={styles.button}>
                 <Text>Next</Text>
                </View>
    
    
          </View>
        );
      }
    }
    
    
    // STYLE PROPS
    
    const styles = StyleSheet.create({
    // cotainer element
    container:{
    backgroundColor: '#f8f8f8',
    flex: 1,
    alignItems:'center',
    
    },
    // Text
      text: {
      justifyContent: 'center',
      alignItems:'center',
      textAlign:'center',
      color:'#000000',
      fontSize: 13,
      textShadowColor: 'rgba(0, 0, 0, 0.03)',
      textShadowOffset: { width: 26, height: 0 },
      textShadowRadius: 29,
      lineHeight: 30.32,
      letterSpacing: 0.03,
      paddingTop: 25,
      },
    // text input
      input: {
        width: 254,
        height: 43,
        shadowColor: 'rgba(0, 0, 0, 0.03)',
        shadowOffset: { width: 26, height: 0 },
        shadowRadius: 29,
        borderRadius: 11,
        backgroundColor: '#ffffff',
        textAlign:'center'
    
    // Header
      },
    header:{
      width: 455,
      height: 72,
      borderColor: 'rgba(0, 0, 0, 0.21)',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 25,
      flexDirection: 'row',
    
    },
    button: {
    width: 83,
    height: 39,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: { width: 26, height: 0 },
    shadowRadius: 29,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 120,
    },
    title: {
    paddingTop: 37,
    
    },
    textinfo: {
    textAlign:'center',
    margin: 20,
    
    }
    
    });
    