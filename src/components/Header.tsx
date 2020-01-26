import React from 'react';
import Back from './Back';
import './Header.scss';

/**
 * Header with title and back button
 */

function Header() {
  return (
    <div className="header">
      <h3>TV SHOWS</h3>
      <h4>
        <Back></Back>
      </h4>
    </div>
  );
}

export default Header;
