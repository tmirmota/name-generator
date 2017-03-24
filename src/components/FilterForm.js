import React, { Component } from 'react';

// Formsy
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';

class FilterForm extends Component {
  state = {
    canSubmit: false,
    data: []
  }

  enableButton = () => {
    this.setState({
      canSubmit: true
    });
  }
  disableButton = () => {
    this.setState({
      canSubmit: false
    });
  }

  submitForm = (data) => {
    this.setState({data});
  }

  render() {
    return (
      <Formsy.Form
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm}>
          <FormsyText
            name="filterName"
            required
            floatingLabelText="Filter Name" />
          <RaisedButton type="submit" label="submit" disabled={!this.state.canSubmit} />
      </Formsy.Form>
    )
  }
}

export default FilterForm;
