import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/component/common';
import LoginForm from './src/component/LoginForm';




class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'xxxxx',
            authDomain: 'xxxxx',
            databaseURL: 'xxxx',
            projectId: 'xxxx',
            storageBucket: 'xxxx',
            messagingSenderId: 'xxxx'
          })
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
              <LoginForm/>
                </View>
        );
    }
}

export default App;




