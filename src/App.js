import React, { Component } from 'react';
import './css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { Row, Column } from 'react-foundation/lib/components/grid';

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
        <div>
          <Row className="text-center">
            <Row>
              <Column small={3} centerOnSmall>
                <CompanyProfile company={this.state} />
              </Column>
            </Row>
            <Row>
              <Column small={3} centerOnSmall>
                <RaisedButton label="New Name" secondary={true} style={styles.button} onClick={() => this.handleClick()} />
              </Column>
            </Row>
            <Row>
              <Column large={8} centerOnLarge>
                <Filter />
              </Column>
            </Row>
          </Row>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
