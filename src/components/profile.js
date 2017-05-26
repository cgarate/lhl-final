import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import '../styles/profile.css';


class Profile extends Component {


  componentDidMount() {
  }

  render() {
    return (
      <div className="profileMainSection">
        <div className="pageTitle">Profile</div>
        <div>
        </div>
      </div>
    );
  }
}

export default Profile;


