import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
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
            <li>profile
            </li>
            <li>
              <Link to="/datePlans">Date Plans</Link>
            </li>
            <li>create plan
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