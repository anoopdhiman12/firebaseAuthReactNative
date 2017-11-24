import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native'; 
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {        
    state = { email: '', password: '', error: ''}
    OnButtonPress() {
        const { email, password}  = this.state;
        this.setState({ error: ''});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Authentication Failed.' })

            });
        });
    }

    render() {
        return (

            <Card>
                <CardSection>
                    <Input 
                    placeholder = "user@email.com"
                    label = "Email"
                    value = {this.state.email}
                    onChangeText= { email => this.setState({ email })}
                     />
                    </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry = { true }
                    label = "password"
                    placeholder="password"
                    value={this.state.password}
                    onChangeText= { password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle} >
                    {this.state.error}
                    </Text>


                <CardSection>
                     <Button onPress={this.OnButtonPress.bind(this)} >Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
