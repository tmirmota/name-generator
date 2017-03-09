import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import CompanyProfile from './components/CompanyProfile';

const style = {
  margin: 12,
};

var randomNumber = 2;

class App extends Component {
  constructor() {
    super();
    this.handleClick = handleClick.bind(this);
  }
  handleClick() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
  }
  render() {
    var select = [];
    this.props.companies.forEach(function(company) {
      if(company.id === randomNumber) {
        select = company;
      }
    });
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="contents">
            <div className="business-profile">
              <CompanyProfile company={select} />
            </div>
            <div className="main-button">
              <RaisedButton label="New Name" style={style} onClick={() => this.handleClick()} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
