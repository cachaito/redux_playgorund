import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navBar';
import LoginBoxContainer from '../containers/loginBox';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>HiveDownloads POC</h2>
          <NavBar />
        </div>
        <div className="App-body">
          <Switch>
            <Route path='/login' component={LoginBoxContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
