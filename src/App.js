import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

// Styles
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import Company from './components/Company';

// APIs
const API_Words_KEY = 'pn0s9I9O97mshDvk4H8RPynL7S8Hp1vFyebjsn7KY9nUC8A1am'; // Words
const wordsUrl = 'https://wordsapiv1.p.mashape.com/words/?lettersMin=5&lettersMax=10&letterPattern=[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,z]&random=true'; // Words
const API_Edgar_KEY = '2p2rpauuyhpukw7624keg3n7'; // Edgar
const edgarUrl = 'http://edgaronline.api.mashery.com/v2/companies.json?primarysymbols=msft&appkey=' + API_Edgar_KEY; // Edgar

export default class App extends Component {
  state = {
    currentCompany: 0,
    companies: [ { word: "Press Start App" } ],
    filterData: [],

    // Buttons
    showStart: true,
    disableBackBtn: true
    }

  componentWillMount() {
    axios.defaults.headers.common['X-Mashape-Authorization'] = API_Words_KEY; // Words API Authentication
    this.getCompany();
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

  // Should I be combining the nextCompany and backCompany methods
  nextCompany = () => {
    if (this.state.currentCompany > 0) {
      this.setState({ disableBackBtn: false})
    }
    this.setState(prevState => ({
      currentCompany: (prevState.currentCompany + 1)
    }));
    this.getCompany();
  }

  backCompany = () => {
    if (this.state.currentCompany === 2) {
      this.setState({disableBackBtn: true})
    }
    this.setState(prevState => ({
      currentCompany: (prevState.currentCompany - 1)
    }));
  }

  render() {
    const company = this.state.companies[this.state.currentCompany];
    return (
      <MuiThemeProvider>
        <div className="wrapper">
          <div className="row text-center">
            <Company company={company} />
          </div>

          <div className="row text-center cmd-buttons">
            { this.state.showStart &&
              <RaisedButton label="Start App" onClick={this.startApp} /> }
            { !this.state.showStart &&
              <RaisedButton label="Back" onClick={this.backCompany} disabled={this.state.disableBackBtn} /> }
            { !this.state.showStart &&
              <RaisedButton label="Next" onClick={this.nextCompany} /> }
          </div>

        </div>
      </MuiThemeProvider>
    );
  }

  startApp = () => {
    this.nextCompany();
    this.setState({ showStart: false });
  }

  // // Edgar API
  // componentWillMount() {
  //
  //   axios.get(edgarUrl, {
  //     ApplicationKey: {API_Edgar_KEY},
  //     Host: 'edgaronline.api.mashery.com',
  //     Accept: 'application/json'
  //   })
  //     .then(res => {
  //       console.log(res);
  //     });
  // }
}
