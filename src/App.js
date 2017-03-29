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
    data:[]
  }

  handleClick = () => {
    const companies = this.props.companies;
    const company = companies[Math.floor(Math.random()*companies.length)];
    this.setState({ name: company.name });
  }

  formData = (newData) => {
    this.state.data.push(newData);
    this.setState({ data: this.state.data });
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="grid-6 text-center">
          <div className="row1 column1-6">
            <CompanyProfile company={this.state} handleChange={this.handleClick} />
          </div>

          <div className="row2 column3-4">
            <RaisedButton label="New Name" secondary={true} onClick={this.handleClick} />
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
