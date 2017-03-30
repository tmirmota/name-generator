import React, { Component } from 'react';
import './css/App.css';
import createHistory from 'history/createMemoryHistory';



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
    newButton: true,
    data:[]
  }

  enableButton = () => {
    this.setState({ newButton: true });
  }

  disableButton = () => {
    this.setState({ newButton: false });
  }

  randCompany = (companies) => {
    const randomNumber = Math.floor(Math.random()*companies.length);
    const company = companies[randomNumber];
    this.setState({ name: company.name });
    companies.splice(randomNumber,1);
  }

  handleClick = () => {
    const companies = this.props.companies;
    if (companies.length > 1) {
      this.randCompany(companies);
    } else {
      this.randCompany(companies);
      this.disableButton();
    }
  }

  formData = (newData) => {
    this.state.data.push(newData);
    this.setState({ data: this.state.data });
  }

  render() {
    const history = createHistory();
    return (
      <MuiThemeProvider>

        <div className="grid-6 text-center">
          <div className="row1 column1-6">
            <CompanyProfile company={this.state} handleChange={this.handleClick} />
          </div>

          <div className="column3-4">
            <p>{this.props.companies.length} Companies</p>
          </div>

          <div className="row2 column3-4">
            <RaisedButton label="New Name" secondary={true} onClick={this.handleClick} disabled={!this.state.newButton} />
            <RaisedButton label="Back" onClick={history.goBack()}/>
          </div>

          <div className="row3 column1-6">
            <FilterForm sendFormData={this.formData} />
          </div>

          <div className="row4 column2-5">
            <FiltersTable data={this.state.data} />
          </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
