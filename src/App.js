import React, { Component } from 'react';
import './css/App.css';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import FilterForm from './components/FilterForm';
import FiltersTable from './components/FiltersTable';
import CompanyProfile from './components/CompanyProfile';


class App extends Component {
  state = {
    name: "Press New Name",
    current: 0,
    newButton: true,
    companies: [],
    newCompanies: [],
    filterData: []
  }

  enableButton = () => { this.setState({ newButton: true }); }
  disableButton = () => { this.setState({ newButton: false }); }

  backButton = () => {
    const newCompanies = this.state.newCompanies;
    newCompanies.pop();
    const backCompany = newCompanies[newCompanies.length - 1];
    this.setCompany(backCompany);
  }

  randCompany = (companies) => {
    const randomNumber = Math.floor(Math.random()*companies.length);
    const company = companies[randomNumber];
    companies.splice(randomNumber,1);
    this.state.newCompanies.push(company);
    this.setCompany(company);
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
            <RaisedButton label="Back" onClick={this.backButton}/>
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
