import React, { Component } from 'react';

// Formsy
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class FilterForm extends Component {
  state = {
    canSubmit: false,
    displayFilter: false,
    data: []
  }

  showFilter = () => {
    this.setState({ displayFilter: true });
  }

  hideFilter = () => {
    this.setState({ displayFilter: false });
  }

  enableButton = () => {
    this.setState({ canSubmit: true });
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  }

  submitForm = (formData) => {
    this.props.sendFormData(formData);
    this.hideFilter();
  }

  render() {
    return (
      <div className="grid-5 text-left">

        <div className="row1 column3 text-center">
          <FloatingActionButton disabled={this.state.displayFilter} onClick={this.showFilter}>
            <ContentAdd />
          </FloatingActionButton>
        </div>

        <div className="column3 text-left">
          {this.state.displayFilter ?
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
                    <MenuItem value={'Include'} primaryText="Include" />
                    <MenuItem value={'Exclude'} primaryText="Exclude" />
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
                  <div>
                    <RaisedButton type="submit" label="Submit" disabled={!this.state.canSubmit} />
                    <FlatButton label="Cancel" onClick={this.hideFilter} />
                  </div>
            </Formsy.Form>
          : null }
        </div>

      </div>
    )
  }
}

export default FilterForm;
