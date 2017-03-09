import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import companies from './data/companies';

ReactDOM.render(
  <App companies={companies} />,
  document.getElementById('root')
);
