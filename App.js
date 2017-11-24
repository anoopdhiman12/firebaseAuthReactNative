import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/component/common';





class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCq26uwYseSKJrGpMjL5_mIr768fGD5_NQ',
            authDomain: 'authentication-124b8.firebaseapp.com',
            databaseURL: 'https://authentication-124b8.firebaseio.com',
            projectId: 'authentication-124b8',
            storageBucket: 'authentication-124b8.appspot.com',
            messagingSenderId: '325899147048'
          })
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
              
                </View>
        );
    }
}

export default App;




