import React, { Component } from 'react';

import FilterForm from './FilterForm';

/* material-ui Components
import TextField from 'material-ui/TextField';
import RaisedButton from'material-ui/RaisedButton';
import FlatButton from'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
*/

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      include: true,
      restrict: 1
    }
  }

  includeChange = (event, index, include) => this.setState({include});
  restrictChange = (event, index, restrict) => this.setState({restrict});

  render() {
    return (
      <div className="grid-2">
          <FilterForm />
      </div>
    );
  }
}

export default Filter;
