import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
// Styles
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
  constructor() {
    super();
    axios.defaults.headers.common['X-Mashape-Authorization'] = API_Words_KEY; // Words API Authentication
    this.getCompany();
    this.state = {
      currentCompany: 0,
      companies: [],
      filterData: [],

      // Buttons
      showStart: true

    }
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
        const companies = this.state.companies.length;
        const currentCompany = this.state.currentCompany;
        // The if should build the array 5 companies in future
        // Need to find a new way to loop method so that it stays a maximum of 5 companies in advance
        if ((companies - currentCompany) < 5) {
          return this.getCompany();
        }
      });
  }

  handleClick = (symbol) => {
    this.setState(prevState => ({
      currentCompany: (prevState.currentCompany symbol 1)
    }));
    this.getCompany();
  }

  render() {
    const company = this.state.companies[this.state.currentCompany];
    return (
      <MuiThemeProvider>
        <div>
          <CompanyProfile company={company} />

          { this.state.showStart ? <RaisedButton label="Start App" onClick={this.startApp} /> :
            <div>
              <RaisedButton label="Back" onClick={this.handleClick(false)} />
              <RaisedButton label="Next" secondary={true} onClick={this.handleClick(true)} />
            </div> }

          <FilterForm sendFormData={this.formData} />
          <FiltersTable data={this.state.filterData} />

        </div>
      </MuiThemeProvider>
    );
  }

  enableButton = () => { this.setState({ newButton: true }); }
  disableButton = () => { this.setState({ newButton: false }); }

  startApp = () => {
    this.handleClick();
    this.setState({ showStart: false });
  }
  formData = (newData) => {
    this.setState(prevState => ({
      filterData: prevState.filterData.concat(newData)
    }));
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
