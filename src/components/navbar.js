import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="siteLogo">Date Plan</div>
        <span>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/myDatePlans">My Date Plans</Link>
            </li>
            <li>
              <Link to="/datePlans">All Date Plans</Link>
            </li>
            <li>
              <Link to="/createDatePlans">Create Date Plan</Link>
            </li>
            <li>events
            </li>
          </ul>
        </span>
      </nav>
    );
  }
}

export default NavBar;
