import React, { Component } from 'react';
import firebase from '../../services/firebase.js';
import { Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn.js';
import SignOut from '../SignOut/SignOut.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        App
        <div>
          <pre>
            {JSON.stringify(this.props.auth)}
          </pre>
          <SignIn signIn={this.props.signIn} />
          <SignOut signOut={this.props.signOut} />
        </div>
      </div>
    );
  }
}

export default App;
