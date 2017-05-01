import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

// Styles
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Company from './components/Company';
import { Controllers } from './components/Controllers';
import { SavedList } from './components/SavedList';
import { TipInfo } from './components/ToolTip/TipInfo';


// APIs
const API_Words_KEY = 'pn0s9I9O97mshDvk4H8RPynL7S8Hp1vFyebjsn7KY9nUC8A1am'; // Words
const wordsUrl = 'https://wordsapiv1.p.mashape.com/words?frequencyMax=6&frequencyMin=2&lettersMax=10&lettersMin=5&limit=100&page=1&letterPattern=[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,z]&random=true';// Words
// const API_Edgar_KEY = '2p2rpauuyhpukw7624keg3n7'; // Edgar
// const edgarUrl = 'http://edgaronline.api.mashery.com/v2/companies.json?primarysymbols=msft&appkey=' + API_Edgar_KEY; // Edgar


export default class App extends Component {
  state = {
    currentCompany: 0,
    companies: [],
    savedCompanies: [],

    // Buttons
    showStart: true,
    showTip: true,
    disableBackBtn: true
    }

  componentWillMount() {
    axios.defaults.headers.common['X-Mashape-Authorization'] = API_Words_KEY; // Words API Authentication
    this.getCompany();
  }

  startApp = () => {
    this.getCompany();
    this.setState({ showStart: false, showTip: false });
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

        const companiesLength = this.state.companies.length;
        const { currentCompany } = this.state;

        if ((companiesLength - currentCompany) < 5) {
          this.setState(prevState => ({
            companies: prevState.companies.concat(res.data.word)
          }));
          return this.getCompany();
        }
        return null;
      });
  }

  // Should I be combining the nextCompany and backCompany methods
  nextCompany = () => {
    this.setState({ disableBackBtn: false })
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

  saveCompany = () => {
    const { currentCompany, companies } = this.state;
    const company = companies[currentCompany];
    this.setState(prevState => ({
      savedCompanies: prevState.savedCompanies.concat(company)
    }));
  }

  removeCompany = (company) => {
    const { savedCompanies } = this.state;
    const newSavedCompanies = _.pull(savedCompanies, company);
    this.setState({ savedCompanies: newSavedCompanies });
  }

  toggleTip = () => {
    const { showTip } = this.state;
    this.setState({ showTip: !showTip })
  }


  render() {
    const { disableBackBtn, showStart, showTip, currentCompany, companies, savedCompanies } = this.state;
    const company = companies[currentCompany];
    const saved = _.indexOf(savedCompanies, company) >= 0;
    return (
      <MuiThemeProvider>
        <div className="container-fluid background-gradient">

          <div className="company-component mx-auto text-center">
              <div className="mb-5">
                  { !showStart && <Company company={company} /> }
                  <Controllers
                    showStart={showStart}
                    startApp={this.startApp}
                    backCompany={this.backCompany}
                    nextCompany={this.nextCompany}
                    disableBackBtn={disableBackBtn}
                    saveCompany={this.saveCompany}
                    saved={saved}  />
              </div>
            </div>

            <SavedList savedCompanies={savedCompanies} removeCompany={this.removeCompany} />

            <TipInfo
              showTip={showTip}
              showStart={showStart}
              toggleTip={this.toggleTip} />

            <footer className="container footer mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <p className="lead text-white">Business Name Generator</p>
                </div>
                {/* <div className="col-md-6 text-right">
                  <a href="https://github.com/tmirmota/name-generator" className="text-white"><p className="text-white">Check this project out on <i className="fa fa-github"></i></p></a>
                </div> */}
              </div>
            </footer>

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
