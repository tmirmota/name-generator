import React from 'react';

// Material UI Components
import IconButton from 'material-ui/IconButton';
import Help from 'material-ui/svg-icons/action/help';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';

export const TipToggle = ({ showStart, showTip, toggleTip }) => {
    return (
      <div>
        { !showStart &&
          <IconButton
            onClick={toggleTip}
            tooltip="Tip"
            tooltipPosition="top-center">
            { showTip ? <Help className="text-white" /> : <HelpOutline className="text-white"/> }
          </IconButton> }
      </div>
    );
}
