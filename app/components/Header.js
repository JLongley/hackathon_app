import React from 'react';
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <IndexLink to="/" className="navbar-brand">Tinderella</IndexLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
