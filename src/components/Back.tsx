import React from 'react';
import { withRouter } from 'react-router-dom';
import './Back.scss';

/**
 * Simple button which bring the user one step
 * back in browser history
 */

function Back({ history }) {
  return (
    <div className="back" onClick={() => history.goBack()}>
      Back
    </div>
  );
}

export default withRouter(Back);
