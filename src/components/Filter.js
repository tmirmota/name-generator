import React, { Component } from 'react';
import FilterOptions from './FilterOptions';
import FilterList from './FilterList';

import TextField from 'material-ui/TextField';

class Filter extends Component {
  render() {
    return (
      <div className="grid-1">
        <div className="row1 column1">
          <TextField floatingLabelText="Filter Name" />
        </div>
        <div className="row2 column1">
          <FilterOptions onClick={() => this.props.onClick()} />
        </div>
        <div className="row3 column1">
          <FilterList />
        </div>
      </div>
    );
  }
}

export default Filter;
