import React, { Component } from 'react';

export default class CompanyName extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
