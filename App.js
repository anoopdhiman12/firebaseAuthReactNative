import React, { Component } from 'react';
import { View  } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/component/common';
import LoginForm from './src/component/LoginForm';




class App extends Component {
    state = { loggedIn : null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCq26uwYseSKJrGpMjL5_mIr768fGD5_NQ',
            authDomain: 'authentication-124b8.firebaseapp.com',
            databaseURL: 'https://authentication-124b8.firebaseio.com',
            projectId: 'authentication-124b8',
            storageBucket: 'authentication-124b8.appspot.com',
            messagingSenderId: '325899147048'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true: return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false: return <LoginForm/>   
            default: return <Spinner size="large"/>         
        }
        

        return <LoginForm/>;
    }


    render() {
        return (
            <View>
                <Header headerText='Authentication' />
              {this.renderContent()}
                </View>
        );
    }
}

export default App;




