import React, { Component } from 'react';

// Formsy
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';

class FilterForm extends Component {
  render() {
    return (
      <Formsy.Form>
        <FormsyText name="Filter" ref={(ref) => {this.inputTextRef = ref;} } floatingLabelText="Filter" />

        <RaisedButton type="submit" label="submit" onClick={()=> { alert(this.inputTextRef.state._value)}} />
      </Formsy.Form>
    )
  }
}

export default FilterForm;
