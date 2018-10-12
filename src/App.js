import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header'
import Layout from './components/Layout'

import Home from './pages/index'
import Login from './pages/login'
import Register from './pages/register'
import Contacts from './pages/contacts'
import Groups from './pages/groups'

import Wallet from './pages/wallet'

import { injectGlobal } from 'styled-components';

import store, { persistor } from './data/store'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                  -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"body sans-serifhtml
    font-size: 20px;
    font-weight: 400;
  }

`;


class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/contacts" component={Register} />
              <Route path="/groups" component={Groups} />
              <Route path="/wallet" component={Wallet} />
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
