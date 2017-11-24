import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native'; 
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {        
    state = { email: '', password: '', error: '', loading: false }
    OnButtonPress() {
        const { email, password}  = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Authentication Failed.' })

            });
        });
    }


    renderButton(){
        if(this.state.loading) {
            return<Spinner size="small"/>;
        }
        return (
            <Button onPress={this.OnButtonPress.bind(this)} >Log In</Button>
        );
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
                     {this.renderButton()}
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
