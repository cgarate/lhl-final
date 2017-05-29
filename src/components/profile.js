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
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        dob: "",
        id: 0
      }
    }
    // this.getUserInfo = this.getUserInfo.bind(this);
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
    .then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(data => {
      console.log("what: ", data[0]);
      let userData1 = data[0];
      this.setState({ userData: userData1})
      // that.setState({ datePlans: data });
    });
  }

  saveUserInfo = () => {
    let s_first_name = document.getElementById("profileFirstName").value;
    let s_last_name = document.getElementById("profileLastName").value;
    let s_username = document.getElementById("profileUsername").value;
    let s_email = document.getElementById("profileEmail").value;
    let s_dob = document.getElementById("profileBirthdate").value;
    let s_bio = document.getElementById("profileBio").value;
    let s_id = document.getElementById("profileId").value;

    // create a string for an HTTP body message
    const e_first_name = encodeURIComponent(s_first_name);
    const e_last_name = encodeURIComponent(s_last_name);
    const e_username = encodeURIComponent(s_username);
    const e_email = encodeURIComponent(s_email);
    const e_dob = encodeURIComponent(s_dob);
    const e_bio = encodeURIComponent(s_bio);
    const e_id = encodeURIComponent(s_id);
    const formData = `id=${e_id}&first_name=${e_first_name}&last_name=${e_last_name}&username=${e_username}&email=${e_email}&dob=${e_dob}&bio=${e_bio}`;
    
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8080/api/users/update/?_method=PUT');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        xhr.response;
        console.log("response: ", xhr.response);
      }
    })
    xhr.send(formData);

  }


  componentDidMount() {

    this.getUserInfo();
  }

  render() {
    return (
      <div className="profileMainSection">
        <div className="pageTitle">Profile</div>
        <div>
          <ProfileForm userInfo={this.state.userData} saveUser={this.saveUserInfo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Profile;


