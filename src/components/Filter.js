import React, { Component } from 'react';
import FilterOptions from './FilterOptions';

import TextField from 'material-ui/TextField';

class Filter extends Component {
  render() {
    return (
      <div className="grid-rows-4-columns-3">
        <div className="row1 columns1-3">
          <TextField floatingLabelText="Filter Name" />
        </div>
        <FilterOptions />
      </div>
    );
  }
}

export default Filter;
