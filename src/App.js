import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from './components/Layout'

import Home from './pages/index'
import Login from './pages/login'
import Register from './pages/register'
import Groups from './pages/groups'
import Dashboard from './pages/dashboard';

import Wallet from './pages/wallet'

import { injectGlobal } from 'styled-components';

import store, { persistor } from './data/store'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before  {
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                  -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"body sans-serifhtml
    font-size: 20px;
    font-weight: 400;
    box-sizing: border-box;

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
              <Route path="/dashboard" component={Dashboard} />
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
