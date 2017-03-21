import React, { Component } from 'react';
import FilterOptions from './FilterOptions';

import TextField from 'material-ui/TextField';

class Filter extends Component {
  render() {
    return (
      <div>
        <div className="wrapper-2 text-left">
          <TextField floatingLabelText="Filter Name" />
          <FilterOptions />
        </div>
      </div>
    );
  }
}

export default Filter;
