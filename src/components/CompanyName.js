import React, { Component } from 'react';
import _ from 'lodash';

export default class CompanyName extends Component {
  render() {
    const name = _.capitalize(this.props.name);
    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
  }
}
