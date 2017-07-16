import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDXj6EY2uqro92uRqumhJVxO-oLZzu03B8',
      authDomain: 'apollohealth-acaa4.firebaseapp.com',
      databaseURL: 'https://apollohealth-acaa4.firebaseio.com',
      storageBucket: 'apollohealth-acaa4',
      messagingSenderId: '979068510435'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(()=>{}, {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
  }
}


export default App;
