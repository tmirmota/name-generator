import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import CompanyName from './components/CompanyName';
import Companies from './data/Companies';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
  margin: 12,
};

function randomNumber() {
  Math.floor(Math.random() * 10 + 1);
}

const id = randomNumber();
const company = "Foodee";

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {company};
  }
  handleClick() {
    randomNumber();
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="contents">
            <div className="business-name">
              <CompanyName name={this.state.company}/>
            </div>
            <div className="main-button">
              <RaisedButton label="New Name" secondary={true} style={style} onClick={this.handleClick()} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
