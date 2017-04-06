import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import FilterForm from './components/FilterForm';
import FiltersTable from './components/FiltersTable';
import CompanyProfile from './components/CompanyProfile';

// Edgar Data
const API_Words_KEY = 'pn0s9I9O97mshDvk4H8RPynL7S8Hp1vFyebjsn7KY9nUC8A1am';
const url = 'https://wordsapiv1.p.mashape.com/words/soliloquy';

class App extends Component {

  componentDidMount() {
    axios.defaults.baseURL = 'https://wordsapiv1.p.mashape.com/';
    axios.defaults.headers.common['X-Mashape-Authorization'] = API_Words_KEY;
    axios.get(url)
      .then(res => {
        console.log(res);
      })
  }
  state = {
    name: "Press New Name",
    current: 0,

    // Arrays
    companies: [],
    newCompanies: [],
    filterData: [],
    data: [],

    // Buttons
    newButton: true,
    cancelButton: false
  }

  enableButton = () => { this.setState({ newButton: true }); }
  disableButton = () => { this.setState({ newButton: false }); }

  checkCancelButton = () => {
    if (this.state.newCompanies.length > 1) {
      this.setState({ cancelButton: true })
    } else {
      this.setState({ cancelButton: false })
    }
  }

  checkNewButton = () => {
    if (this.state.companies.length > 0) {
      this.setState({ newButton: true })
    } else {
      this.setState({ newButton: false })
    }
  }

  backButton = () => {
    const newCompanies = this.state.newCompanies;
    this.state.companies.push(newCompanies[newCompanies.length - 1]);
    newCompanies.pop();
    const backCompany = newCompanies[newCompanies.length - 1];

    this.setCompany(backCompany);
    this.checkCancelButton();
    this.checkNewButton();
  }

  randCompany = (companies) => {
    const randomNumber = Math.floor(Math.random()*companies.length);
    const company = companies[randomNumber];
    this.state.newCompanies.push(company);
    this.setCompany(company);
    companies.splice(randomNumber,1);
  }

  setCompany = (company) => {
    this.setState({ name: company.name });
  }

  handleClick = () => {
    if (this.state.companies.length === 0) {
      this.props.companies.map((company) => this.state.companies.push(company));
    }
    const companies = this.state.companies;
    if (companies.length > 1) {
      this.randCompany(companies);
    } else {
      this.randCompany(companies);
      this.disableButton();
    }
    this.checkCancelButton();
  }

  formData = (newData) => {
    this.state.filterData.push(newData);
    this.setState({ filterData: this.state.filterData });
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="grid-6 text-center">
          <div className="row1 column1-6">
            <CompanyProfile company={this.state} handleChange={this.handleClick} />
          </div>

          <div className="column3-4">
            <p>{this.state.companies.length} Companies</p>
          </div>

          <div className="row2 column3-4">
            <RaisedButton label="New Name" secondary={true} onClick={this.handleClick} disabled={!this.state.newButton} />
            <RaisedButton label="Back" onClick={this.backButton} disabled={!this.state.cancelButton}/>
          </div>

          <div className="row3 column1-6">
            <FilterForm sendFormData={this.formData} />
          </div>

          <div className="row4 column2-5">
            <FiltersTable data={this.state.filterData} />
          </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
