import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Login } from './login/login';
import App from '../App'
import { Header } from './header/header';


const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header store={store} />
      <Router>
        <Route path="/" component={App} />
      </Router>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root