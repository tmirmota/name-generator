import React, { Component } from 'react';

import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table';


class FiltersTable extends Component {
  render() {
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
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>First Letter</TableRowColumn>
            <TableRowColumn>true</TableRowColumn>
            <TableRowColumn>Starts with</TableRowColumn>
            <TableRowColumn>Br</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default FiltersTable;
