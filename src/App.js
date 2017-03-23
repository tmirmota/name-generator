import React, { Component } from 'react';
import './css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
    this.onClick = this.onClick.bind(this);
    this.state = {
      id: 0,
      name: "Press New Name",
      showFilter: false
    };
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
  onClick() {
    this.setState({ showFilter: (this.state.showFilter ? false : true)})
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="grid-6 text-center">
          <div className="row1 column1-6">
            <CompanyProfile company={this.state} />
          </div>
          <div className="row2 column3-4">
            <RaisedButton label="New Name" secondary={true} style={styles.button} onClick={() => this.handleClick()} />
          </div>
          <div className="row3 column1">
            <FloatingActionButton disabled={this.state.showFilter} onClick={() => this.onClick()}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div className="row3 column2-5 text-left" display="none">
            { this.state.showFilter ? <Filter onClick={() => this.onClick()} /> : null }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
