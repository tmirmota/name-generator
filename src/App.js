import React, { Component } from 'react';
import './css/App.css';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import CompanyProfile from './components/CompanyProfile';
import FilterForm from './components/FilterForm';

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
  state = {
    id: 0,
    name: "Press New Name"
  }

  handleClick = () => {
    var randomNumber = Math.floor(Math.random() * 9);
    this.assignCompany(randomNumber);
    this.setState(selection)
  }

  assignCompany = (id) => {
    this.props.companies.forEach(function(company) {
      if (company.id === id) {
        selection = company;
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="grid-6 text-center">
          <div className="row1 column1-6">
            <CompanyProfile company={this.state} />
          </div>
          <div className="column1-6">
            <h3>{this.props.companies.length} available</h3>
          </div>
          <div className="row2 column3-4">
            <RaisedButton label="New Name" secondary={true} style={styles.button} onClick={() => this.handleClick()} />
          </div>
          <div className="row3 column1-6">
            <FilterForm />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
