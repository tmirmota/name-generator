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


class App extends Component {
  state = {
    name: "Press New Name",
    showTable: false,
    data:[]
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name === this.state.name) {
      this.handleClick();
    }
  }

  handleClick() {
    var randomNumber = Math.floor(Math.random() * 9);
    this.props.companies.findIndex((company, index) => {
        if (randomNumber === index) {
          this.setState({name: company.name});
      }
    });
  }

  filterData(company) {
    return(company === "Facebook");
  }

  submitForm(value) {
    this.state.data.push(value);
    this.setState({data: this.state.data, showTable: true});
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
            <FilterForm submitForm={() => this.submitForm()} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
