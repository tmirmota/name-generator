import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from'material-ui/RaisedButton';
import FlatButton from'material-ui/FlatButton';

import { Row, Column } from 'react-foundation/lib/components/grid';

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      include: true,
      restrict: 1
    };
  }

  includeChange = (event, index, include) => this.setState({include});
  restrictChange = (event, index, restrict) => this.setState({restrict});

  render() {
    return (
      <div>
        <Row>
          <Column className="text-left">
            <DropDownMenu value={this.state.include} onChange={this.includeChange}>
              <MenuItem value={true} primaryText="Include" />
              <MenuItem value={false} primaryText="Exclude" />
            </DropDownMenu>
            <DropDownMenu value={this.state.restrict} onChange={this.restrictChange}>
              <MenuItem value={1} primaryText="Equal to (=)" />
              <MenuItem value={2} primaryText="Contains" />
              <MenuItem value={3} primaryText="Starts with" />
            </DropDownMenu>
          </Column>
        </Row>
        <Row>
          <Column>
            <TextField hintText="Example: 'Br'"/>
          </Column>
        </Row>
        <Row>
          <Column className="text-right">
            <RaisedButton label="Save" />
            <FlatButton label="Cancel" />
          </Column>
        </Row>
      </div>
    );
  }
}

export default FilterOptions;
