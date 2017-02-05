import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CompanyName from './components/CompanyName';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="contents">
            <div className="business-name">
              <CompanyName />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
