import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth.js';

const Carousel = ( {children} ) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/home">Home</NavLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div>
          <div className="top-bar-right">
            Welcome {Auth.getUserName()}
          </div>
          <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
          </div>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>
    { children }
  </div>
);

Carousel.propTypes = {
  children: PropTypes.object.isRequired
};

export default Carousel;
