import React, { Component } from 'react';

export default class CompanyName extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.name === this.props.name) {
      return (false);
    } else {
      return (true);
    }
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
