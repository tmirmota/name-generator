import React, { Component } from 'react';

// material-ui
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table';

class FiltersTable extends Component {
  render() {
    const data = this.props.data;
    if (0 >= data.length) {
      return (null);
    } else {
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Option</TableHeaderColumn>
              <TableHeaderColumn>Condition</TableHeaderColumn>
              <TableHeaderColumn>Filter</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) =>
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{data.filterName}</TableRowColumn>
                <TableRowColumn>{data.included}</TableRowColumn>
                <TableRowColumn>{data.condition}</TableRowColumn>
                <TableRowColumn>{data.filterValue}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      );
    }
  }
}

export default FiltersTable;
