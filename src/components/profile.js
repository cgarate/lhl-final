import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import '../styles/profile.css';
import ProfileForm from './profileForm.js';


class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: {
        first_name: "tom"
      }
    }
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo = () => {
    let ten = 10;
    let id = ten.toString();
    let that = this;
    let url = 'http://localhost:8080/api/users/'

    fetch(url.concat(id))
  // getUserInfo(userId) {
  //   let id = userId.toString();
  //   let that = this;
  //   let url = 'http://localhost:8080/api/plans/plan_user/'

  // fetch(url.concat(id))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      console.log("what: ", data[0]);
      this.setState({ userData: data[0]})
      // that.setState({ datePlans: data });
    });
  }


  componentDidMount() {

    this.getUserInfo();
  }

  render() {
    return (
      <div className="profileMainSection">
        <div className="pageTitle">Profile</div>
        <div>
          <ProfileForm userInfo={this.state.userData}/>
        </div>
      </div>
    );
  }
}

export default Profile;


