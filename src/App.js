import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/header'

import Home from './pages/index'
import Login from './pages/login'
import Register from './pages/register'
import Contacts from './pages/contacts'
import Groups from './pages/groups'
import { injectGlobal } from 'styled-components';

import store, { persistor } from './data/store'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: Arial, Helvetica, sans-serif;
  }

`;


class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/contacts" component={Register} />
              <Route path="/groups" component={Groups} />
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
