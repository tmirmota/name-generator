import React, { Component } from 'react';
import filters from '../data/filters';

// Formsy
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

class FilterForm extends Component {
  state = {
    canSubmit: false
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
              hintText="Select a option" >
                <MenuItem value={true} primaryText="Include" />
                <MenuItem value={false} primaryText="Exclude" />
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
            <FlatButton label="Cancel" />
        </Formsy.Form>
      </div>
    )
  }
}

export default FilterForm;
