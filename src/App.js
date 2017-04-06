import React, { Component } from 'react';
import axios from 'axios';
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


class App extends Component {
  constructor() {
    super();
    axios.defaults.headers.common['X-Mashape-Authorization'] = API_Words_KEY; // Words API Authentication

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

  state = {
    name: "Press New Name",
    currentCompany: 0,
    companies: [],
    newCompanies: [],
    filterData: []
  }

  enableButton = () => { this.setState({ newButton: true }); }
  disableButton = () => { this.setState({ newButton: false }); }

  handleClick = () => {
    axios.get(wordsUrl, {
      Host: 'https://wordsapiv1.p.mashape.com/'
    })
      .then(res => {
        console.log(res.data.word);
        const name = res.data.word;
        this.setState({ name })
      })
  }

  formData = (newData) => {
    this.state.filterData.push(newData);
    const filterData = this.state.filterData;
    this.setState({ filterData });
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
