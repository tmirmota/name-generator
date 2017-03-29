import React, { Component } from 'react';

export default class CompanyName extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.name === this.props.name) {
      this.props.handleChange();
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
