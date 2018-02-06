import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import { DangerZone } from 'expo';
import { Button } from 'react-native-elements';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const { Payments } = DangerZone;

// Payments.initialize({
//     publishableKey: 'pk_test_yPlBoXVGw9SaBcMLAdxoXHj4'
//   });

class MainScreen extends Component {
    state = { showCard: '', email: '', card: '', expiry: '', cvc: '', switch: false, error: '' };

    static navigationOptions = props => {
        return {           
            tabBarVisible: true           
        };
    };

    async handlePayments () {
        const options = {
            smsAutofillDisabled: true,
            requiredBillingAddressFields: 'full',
        }

        const token = await Payments.paymentRequestWithCardFormAsync(options);

        console.log(token);
        
    }

    resetFields = () => {
        this.setState({error : ''});
        this.setState({ iconColor: 'green'});
        this.setState({textColor: '#000'});
    }

    handleSubmit = () => {
        this.resetFields();
        const {email, card, expiry, cvc } = this.state;
        const str = card.replace(/\s/g, '');
        // console.log(email);
        console.log(str);
        if (email=='' || card=='' || expiry=='' || expiry=='' || cvc=='' ) {
            this.setState({error : 'All feilds are required!'});
            this.setState({iconColor: '#F44336'});
            this.setState({textColor: '#F44336'});
        }
        
    }

    handleCard = (card) => {                
        const v = card.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || ''
        const parts = []
        for (i=0, len=match.length; i<len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          this.setState({card:  parts.join(' ') });
        } else {
          this.setState({card});
        }
        
    }
    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ color: 'white', fontSize: 36, paddingTop: 20 }}>K</Text>
                    <Text style={{ color: 'white', paddingTop: 10, paddingBottom: 20, paddingHorizontal: 60, textAlign: 'center'}}>Please pay the 3.90$ annual adminisration fee.</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.section}>
                        <EvilIcons name="envelope" size={30} color="#8BC34A" style={{paddingTop: 5}} />
                        <View style={styles.inputContainer}>
                            <View style={styles.label} >
                                <TextInput
                                value="Email"
                                editable={false}
                                style={{ fontSize: 16, fontWeight: 'bold'}}
                                />
                            </View>
                            <View style={styles.inputField} >
                                <TextInput
                                placeholder="user@email.com"
                                autoCorrect={false}
                                value={this.state.email}
                                onChangeText={email => this.setState({email}) } 
                                underlineColorAndroid='transparent'
                                style={{ fontSize: 14, fontWeight: 'bold'}}
                                keyboardType='email-address'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <EvilIcons name="credit-card" size={30} color="#8BC34A" />
                        <View style={styles.inputContainer}>
                            <View style={styles.label} >
                                <TextInput
                                value="Card"
                                editable={false}
                                style={{ fontSize: 16, fontWeight: 'bold' }}
                                />
                            </View>
                            <View style={styles.inputField} >
                                <TextInput
                                placeholder="•••• •••• •••• ••••"
                                autoCorrect={false}
                                value={this.state.card}
                                onChangeText={card => this.handleCard(card) } 
                                underlineColorAndroid='transparent'
                                style={{ fontSize: 14, fontWeight: 'bold'}}
                                keyboardType="numeric"
                                maxLength={19}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 0}}>
                        <View style={[styles.section, {flex: 1}]}>
                            <EvilIcons name="calendar" size={30} color="#8BC34A" />
                            <View style={styles.inputContainer}>
                                <View style={styles.label} >
                                    <TextInput
                                    value="Expiry"
                                    editable={false}
                                    style={{ fontSize: 16, fontWeight: 'bold'}}
                                    />
                                </View>
                                <View style={{paddingLeft: 10, width: '100%',  }} >
                                    <TextInput
                                    placeholder="MMYY"
                                    autoCorrect={false}
                                    value={this.state.expiry}
                                    onChangeText={expiry => this.setState({expiry}) } 
                                    underlineColorAndroid='transparent'
                                    style={{ fontSize: 14, fontWeight: 'bold'}}
                                    keyboardType="numeric"
                                    maxLength={4}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.section, {flex: 1,borderLeftWidth: 1, borderLeftColor: '#d8d8d8', paddingLeft: 5 }]}>
                            <EvilIcons name="lock" size={30} color="#8BC34A" />
                            <View style={[styles.inputContainer]}>
                                <View style={styles.label} >
                                    <TextInput
                                    value="CVC"
                                    editable={false}
                                    style={{ fontSize: 16, fontWeight: 'bold', }}
                                    />
                                </View>
                                <View style={{paddingLeft: 10, width: '100%',  }} >
                                    <TextInput
                                    placeholder="123"
                                    autoCorrect={false}
                                    value={this.state.cvc}
                                    onChangeText={cvc => this.setState({cvc}) } 
                                    underlineColorAndroid='transparent'
                                    style={{ fontSize: 14, fontWeight: 'bold'}}
                                    keyboardType="numeric"
                                    maxLength={3}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <EvilIcons name="user" size={30} color="green" />
                        <View style={[styles.inputContainer, {flex:1,justifyContent: 'space-between'}]}>
                            <View >
                                <View style={{ width: 150 , paddingLeft: 10}} >
                                    <TextInput
                                    value="Remember me"
                                    editable={false}
                                    style={{ fontSize: 16, fontWeight: 'bold'}}
                                    />
                                </View>
                            </View>
                            <View >
                                <Switch
                                onValueChange={ (value) => this.setState({switch: value})}
                                value={this.state.switch}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.error}>
                        <Text style={{ color: 'red', fontSize: 18}}>{this.state.error}</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 0 }}>
                    <Button 
                     title="Pay $3.90"
                     backgroundColor="#03A9F4"
                     containerViewStyle={{ width: '100%', marginLeft: 0}}
                     icon={{name: "checkbox-marked-circle-outline", type: "material-community", size: 20}} 
                     onPress={this.handleSubmit}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 24
    },
    header: {  
        backgroundColor: '#E76D71',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'flex-start',
    },
    section: {        
        flexDirection: 'row',
        paddingTop: 10,
        marginLeft: 5,
    },
    inputContainer: {
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        borderBottomColor: '#d8d8d8',
        paddingBottom: 5
    },
    label: {
        width: 50,
        paddingLeft: 5,
        
    },
    inputField: {        
        width: 300,
        paddingLeft: 10,

    },
    error: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    }
  });

export default MainScreen;