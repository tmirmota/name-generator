import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './css/App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import FilterForm from './components/FilterForm';
import FiltersTable from './components/FiltersTable';
import CompanyProfile from './components/CompanyProfile';

// APIs
const API_Words_KEY = 'pn0s9I9O97mshDvk4H8RPynL7S8Hp1vFyebjsn7KY9nUC8A1am'; // Words
const wordsUrl = 'https://wordsapiv1.p.mashape.com/words/?random=true'; // Words
const API_Edgar_KEY = '2p2rpauuyhpukw7624keg3n7'; // Edgar
const edgarUrl = 'http://edgaronline.api.mashery.com/v2/companies.json?primarysymbols=msft&appkey=' + API_Edgar_KEY; // Edgar

export default class App extends Component {
  state = {
    name: "Press New Name",
    currentCompany: 0,
    companies: [],
    filterData: []
  }
  constructor() {
    super();
    axios.defaults.headers.common['X-Mashape-Authorization'] = API_Words_KEY; // Words API Authentication
    this.addCompany();
  }

  getCompany() {
    // Words API
    axios.get(wordsUrl, {
      Host: 'https://wordsapiv1.p.mashape.com/'
    })
      .then(res => {
        this.setState(prevState => ({
          companies: prevState.companies.concat(res.data)
        }));
      });
  }

  addCompany() {
    if ((this.state.companies.length - this.state.currentCompany) < 5) {
      console.log((this.state.companies.length - this.state.currentCompany));
      this.getCompany();
    }

  }


  enableButton = () => { this.setState({ newButton: true }); }
  disableButton = () => { this.setState({ newButton: false }); }

  handleClick = () => {
    const company = this.state.companies[this.state.currentCompany];
    const name = company.word;
    this.setState({ name });
    this.setState(prevState => ({
      currentCompany: (prevState.currentCompany + 1)
    }));
    this.addCompany();
  }

  formData = (newData) => {
    this.setState(prevState => ({
      filterData: prevState.filterData.concat(newData)
    }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <CompanyProfile company={this.state} handleChange={this.handleClick} />

          <RaisedButton label="New Name" secondary={true} onClick={this.handleClick} />
          <RaisedButton label="Back" onClick={this.backButton} disabled={!this.state.cancelButton}/>

          <FilterForm sendFormData={this.formData} />
          <FiltersTable data={this.state.filterData} />

        </div>
      </MuiThemeProvider>
    );
  }
  componentWillMount() {
    // Edgar API
    axios.get(edgarUrl, {
      ApplicationKey: {API_Edgar_KEY},
      Host: 'edgaronline.api.mashery.com',
      Accept: 'application/json'
    })
      .then(res => {
        console.log(res);
      });
  }
}
