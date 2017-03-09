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

var select = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = null;
  }
  handleClick() {
    var randomNumber = Math.floor(Math.random() * 9);
    this.assignCompany(randomNumber);
  }
  assignCompany(id) {
    this.props.companies.forEach(function(company) {
      if (company.id === id) {
        select = company;
      }
    });
  }
  render() {
    this.assignCompany(1);
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="contents">
            <div className="business-profile">
              <CompanyProfile company={select} />
            </div>
            <div className="main-button">
              <RaisedButton label="New Name" secondary={true} style={style} onClick={() => this.handleClick()} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
