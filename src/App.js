import React, { Component } from 'react';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


import CompanyProfile from './components/CompanyProfile';

const style = {
  margin: 12,
};

var selection = {
  id: 0,
  name: "Press New Name"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.assignCompany = this.assignCompany.bind(this);
    this.state = selection;
  }
  handleClick() {
    var randomNumber = Math.floor(Math.random() * 9);
    this.assignCompany(randomNumber);
    this.setState(selection)
  }
  assignCompany(id) {
    this.props.companies.forEach(function(company) {
      if (company.id === id) {
        selection = company;
      }
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="contents">
            <div className="business-profile">
              <CompanyProfile company={this.state} />
            </div>
            <div className="main-button">
              <button label="New Name" secondary={true} style={style} onClick={() => this.handleClick()} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
