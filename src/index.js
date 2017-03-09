import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Companies from './data/Companies';

ReactDOM.render(
  <App companies={Companies} />,
  document.getElementById('root')
);
