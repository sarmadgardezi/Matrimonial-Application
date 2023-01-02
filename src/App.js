import React, { Component } from 'react';
import { Store, Provider, connect } from 'react-redux';
import { Header } from './components/header/header';

import { Login } from './components/login/login';
import { Home } from './components/home/home';

class App extends Component {
  render() {
    const { loggedInUser, location } = this.props;
    console.log(this.props)
    return (
      loggedInUser ?
        (<Home location={location} />) :
        (<Login />)
    );
  }
}


function mapStateToProps(state) {
  console.log('state', state)
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export default connect(mapStateToProps)(App);
