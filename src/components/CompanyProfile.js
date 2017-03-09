import React, { Component } from 'react';
import CompanyName from './CompanyName';

export default class CompanyProfile extends Component {
  render() {
    return (
      <div className="company-profile">
        <div className="company-name">
          <CompanyName name={this.props.company.name}/>
        </div>
      </div>
    );
  }
}
