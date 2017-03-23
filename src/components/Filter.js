import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

import FilterList from './FilterList';

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

        <form>
          <div className="row1 column1-2">
            <Field name="filterName" component={renderFilterName} label="Filter Name" />
          </div>

          <div className="row2 column1-2">
            <DropDownMenu value={this.state.include} onChange={this.includeChange}>
              <MenuItem value={true} primaryText="Include" />
              <MenuItem value={false} primaryText="Exclude" />
            </DropDownMenu>
            <DropDownMenu value={this.state.restrict} onChange={this.restrictChange}>
              <MenuItem value={1} primaryText="Equal to (=)" />
              <MenuItem value={2} primaryText="Contains" />
              <MenuItem value={3} primaryText="Starts with" />
            </DropDownMenu>
          </div>

          <div className="row3 column1-2">
            <TextField hintText="Example: 'Br'"  />
          </div>

          <div className="row4 column1-2">
            <RaisedButton label="Save" type="submit" handleClick={() => this.props.handleClick()}/>
            <FlatButton label="Cancel" onClick={() => this.props.onClick()} />
          </div>
        </form>

        <div className="row5 column1-2">
          <FilterList />
        </div>
      </div>
    );
  }
}

export default Filter;
