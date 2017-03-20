import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import companies from './data/companies';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <App companies={companies} />,
  document.getElementById('root')
);
