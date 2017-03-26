import React, { Component } from 'react';

// Components
import FiltersTable from './FiltersTable';

// Formsy
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
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

  submitForm = (value) => {
    this.state.data.push(value);
    this.setState({data: this.state.data});
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
              <RaisedButton type="submit" label="submit" disabled={!this.state.canSubmit} onClick={() => this.props.onClick()} />
            <FlatButton label="Cancel" onClick={() => this.props.onClick()}/>
        </Formsy.Form>
        <div>
          <FiltersTable data={this.state.data} />
        </div>
      </div>
    )
  }
}

export default FilterForm;
