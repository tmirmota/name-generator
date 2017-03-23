import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from'material-ui/RaisedButton';
import FlatButton from'material-ui/FlatButton';

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      include: true,
      restrict: 1,
    };
  }

  includeChange = (event, index, include) => this.setState({include});
  restrictChange = (event, index, restrict) => this.setState({restrict});

  render() {
    return (
      <div className="grid-2">
        <div className="row1 column1">
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
        <div className="row1 column2">
          <TextField hintText="Example: 'Br'"/>
        </div>
        <div className="row3 column1-2 text-center">
          <RaisedButton label="Save" />
          <FlatButton label="Cancel" onClick={() => this.props.onClick()} />
        </div>
      </div>
    );
  }
}

export default FilterOptions;
