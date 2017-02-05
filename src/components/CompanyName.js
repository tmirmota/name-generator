import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Companies from '../data/Companies';

const style = {
  margin: 12,
};

  const id = Math.floor(Math.random() * 10) + 1;
  const company = Companies.filter((company) => company.id === id)[0];

class CompanyName extends Component {
  constructor() {
    super();
    this.state = {company};
  }
  handleClick() {
    const id = Math.floor(Math.random() * 10) + 1;
    const company = Companies.filter((company) => company.id === id)[0];
    this.setState({company});
  }

  render() {
    return (
      <div>
        <h2>{this.state.company.name}</h2>

        <RaisedButton label="New Name" secondary={true} style={style} onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default CompanyName;
