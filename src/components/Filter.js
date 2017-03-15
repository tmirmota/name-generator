import React, { Component } from 'react';
import FilterOptions from './FilterOptions';

import TextField from 'material-ui/TextField';

import { Row, Column } from 'react-foundation/lib/components/grid';

class Filter extends Component {
  render() {
    return (
      <div>
        <Row>
          <Column small={3} centerOnLarge>
            <TextField floatingLabelText="Filter Name" />
            <FilterOptions />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Filter;
