import React, { Component } from 'react';
import CompanyName from './CompanyName';

class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <CompanyName name={this.props.company.name} handleChange={this.props.handleChange} />
      </div>
    );
  }
}

export default CompanyProfile;
