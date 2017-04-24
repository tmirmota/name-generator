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
// const API_Edgar_KEY = '2p2rpauuyhpukw7624keg3n7'; // Edgar
// const edgarUrl = 'http://edgaronline.api.mashery.com/v2/companies.json?primarysymbols=msft&appkey=' + API_Edgar_KEY; // Edgar


export default class App extends Component {
  state = {
    currentCompany: 0,
    companies: [],

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
        if (res.data.word.indexOf(" ") >= 0) {
          return this.getCompany();
        }
        this.setState(prevState => ({
          companies: prevState.companies.concat(res.data.word)
        }));
        const companiesLength = this.state.companies.length;
        const { currentCompany } = this.state;
        // The if should build the array 5 companies in future
        // Need to find a new way to loop method so that it stays a maximum of 5 companies in advance
        const difference = companiesLength - currentCompany;
        if (difference < 5) {
          return this.getCompany();
        }
        return null;
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
    if (this.state.currentCompany === 1) {
      this.setState({disableBackBtn: true})
    }
    this.setState(prevState => ({
      currentCompany: (prevState.currentCompany - 1)
    }));
  }

  startApp = () => {
    this.getCompany();
    this.setState({ showStart: false });
  }

  render() {
    const { disableBackBtn, showStart, currentCompany } = this.state;
    const company = this.state.companies[currentCompany];
    return (
      <MuiThemeProvider>
        <div className="container-fluid background-gradient">
          <div className="company-component mx-auto text-center">
            { showStart &&
              <RaisedButton label="Start Search" onClick={this.startApp} /> }
              <div className="mb-5">
              { !showStart &&
                <Company company={company} /> }
              </div>
            { !showStart &&
              <RaisedButton
                label="Back"
                className="controller-buttons"
                onClick={this.backCompany}
                disabled={disableBackBtn} /> }
            { !showStart &&
              <RaisedButton
                label="Next"
                className="controller-buttons"
                onClick={this.nextCompany} /> }
          </div>

          <div className="row">

          </div>

        </div>
      </MuiThemeProvider>
    );
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
