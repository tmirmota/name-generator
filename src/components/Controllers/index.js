import React from 'react';

// Material UI Components
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export const Controllers = ({ showStart, startApp, backCompany, nextCompany, disableBackBtn, saveCompany, saved }) => {
  return (
    <div>
      { showStart ?
        <RaisedButton label="Start Search" onClick={startApp} /> :
        <div>
          <RaisedButton
            label="Back"
            className="controller-buttons"
            onClick={backCompany}
            disabled={disableBackBtn} />
          <FloatingActionButton onClick={saveCompany} disabled={saved}>
            <ContentAdd />
          </FloatingActionButton>
          <RaisedButton
            label="Next"
            className="controller-buttons"
            onClick={nextCompany} />
        </div>
      }
    </div>
  );
}
