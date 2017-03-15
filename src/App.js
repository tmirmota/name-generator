import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { Row } from 'react-foundation/lib/components/grid';

import CompanyProfile from './components/CompanyProfile';
import Filter from './components/Filter';

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
        <div>
          <Row>
            <Row>
              <CompanyProfile company={this.state} />
            </Row>
            <Row>
              <RaisedButton label="New Name" secondary={true} style={style} onClick={() => this.handleClick()} />
            </Row>
            <Row>
              <Filter />
            </Row>
          </Row>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
