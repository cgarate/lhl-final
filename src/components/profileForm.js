import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import '../styles/profile.css';


class ProfileForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.saveUser = this.props.saveUser.bind(this);
  }

  render() {

    // const birthday = new Date(this.props.userInfo.dob).toDateString();
    // console.log(birthday);
    let birthday = "2014-03-03";

    return (
      <div>
        <div>
          {/*<form action="http://localhost:8080/api/users/update/?_method=PUT" method="POST">*/}
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="profileFirstName">First Name</label>
                  </td>
                  <td>
                    <input type="text" id="profileFirstName" name="first_name" value={this.props.userInfo.first_name}/>
                    <input type="hidden" id="profileId" name="id" value={this.props.userInfo.id}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileLastName">Last Name</label>
                  </td>
                  <td>
                    <input type="text" id="profileLastName" name="last_name" value={this.props.userInfo.last_name}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileUsername">Username</label>
                  </td>
                  <td>
                    <input type="text" id="profileUsername" name="username" value={this.props.userInfo.username}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileEmail">Email</label>
                  </td>
                  <td>
                    <input type="text" id="profileEmail" name="email" value={this.props.userInfo.email}/>
                  </td>
                </tr>
                {/*<tr>
                  <td>
                    <label htmlFor="profilePassword">Password</label>
                  </td>
                  <td>
                    <input type="text" id="profilePassword" value={this.props.userInfo.first_name}/>
                  </td>
                </tr>*/}
                <tr>
                  <td>
                    <label htmlFor="profileBirthdate">Birthdate</label>
                  </td>
                  <td>
                    <input type="date" id="profileBirthdate" name="dob" defaultValue={birthday}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileBio">Bio</label>
                  </td>
                  <td>
                    <input type="text" id="profileBio" name="bio" value={this.props.userInfo.first_name}/>
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td>
                    <input type="submit" value="Update" onClick={this.props.saveUser}/>
                  </td>
                </tr>
              </tbody>
            </table>
            {/*<img src="./smiley-face.jpg" />*/}
          {/*</form>*/}
        </div>
      </div>
    );
  }
}

export default ProfileForm;