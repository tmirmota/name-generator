import React, { Component } from 'react';

// material-ui
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table';

class FiltersTable extends Component {
  render() {
    const data = this.props.data;
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
        {data.map( data =>
        <TableBody>
          <TableRow key={data.id}>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>{data.filterName}</TableRowColumn>
            <TableRowColumn>true</TableRowColumn>
            <TableRowColumn>Starts with</TableRowColumn>
            <TableRowColumn>Br</TableRowColumn>
          </TableRow>
        </TableBody>
        )}
      </Table>
    );
  }
}

export default FiltersTable;
