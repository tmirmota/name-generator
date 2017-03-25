import React, { Component } from 'react';

// Formsy
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

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
      <div className="text-left">
        <Formsy.Form
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.submitForm}>
            <FormsyText
              name="filterName"
              required
              floatingLabelText="Filter Name" />
            <FormsySelect
              name="included"
              required
              value={true} >
                <MenuItem value={true} primaryText="Included" />
                <MenuItem value={false} primaryText="Excluded" />
             </FormsySelect>
             <FormsySelect
               name="condition"
               required
               hintText="Select a condition" >
                 <MenuItem value={'contains'} primaryText="Contains" />
                 <MenuItem value={'start'} primaryText="Starts with" />
              </FormsySelect>
              <FormsyText
                name="filterValue"
                required
                hintText="Example: value" />
            <RaisedButton type="submit" label="submit" disabled={!this.state.canSubmit} />
        </Formsy.Form>
      </div>
    )
  }
}

export default FilterForm;
