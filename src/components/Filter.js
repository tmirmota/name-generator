import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

import FilterForm from './FilterForm';

// material-ui Components
import TextField from 'material-ui/TextField';
import RaisedButton from'material-ui/RaisedButton';
import FlatButton from'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const renderFilterName = props => (
  <TextField
  floatingLabelText={props.label} />
)

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      include: true,
      restrict: 1,
      data: []
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
