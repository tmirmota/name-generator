import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import companies from '../data/companies';

const style = {
  margin: 12,
};

class CompanyName extends Component {
  render() {
    const id = Math.floor(Math.random() * 10) + 1;
    const company = companies.filter((company) => company.id === id)[0];
    return (
      <div>
        <h2>{company.name}</h2>
        <RaisedButton label="New Name" secondary={true} style={style} onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default CompanyName;
