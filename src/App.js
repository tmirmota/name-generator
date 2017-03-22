import React, { Component } from 'react';
import './css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import CompanyProfile from './components/CompanyProfile';
import Filter from './components/Filter';

const styles = {
  button: {
    margin: 12,
  },
  centered: {
    margin: 'auto',
  }
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
        <div className="grid-rows-6-columns-6 text-center">
          <div className="row1-2 column2-5">
            <CompanyProfile company={this.state} />
          </div>
          <div className="row3 column3-4">
            <RaisedButton label="New Name" secondary={true} style={styles.button} onClick={() => this.handleClick()} />
          </div>
          <div className="row4 column2-5">
            <Filter />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
