import React, { Component } from 'react';
import FilterOptions from './FilterOptions';

import TextField from 'material-ui/TextField';


class Filter extends Component {
  render() {
    return (
      <div>
        <div>
          <TextField floatingLabelText="Filter Name" />
        </div>
        <div>
          <FilterOptions />
        </div>
      </div>
    );
  }
}

export default Filter;
