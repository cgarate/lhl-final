import React, { Component } from 'react';

import '../styles/profile.css';


class ProfileForm extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <div>
          <form action="" method="POST">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="profileFirstName">First Name</label>
                  </td>
                  <td>
                    <input type="text" id="profileFirstName"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileLastName">Last Name</label>
                  </td>
                  <td>
                    <input type="text" id="profileLastName"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileUsername">Username</label>
                  </td>
                  <td>
                    <input type="text" id="profileUsername"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileEmail">Email</label>
                  </td>
                  <td>
                    <input type="text" id="profileEmail"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profilePassword">Password</label>
                  </td>
                  <td>
                    <input type="text" id="profilePassword"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileBirthdate">Birthdate</label>
                  </td>
                  <td>
                    <input type="text" id="profileBirthdate"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="profileBio">Bio</label>
                  </td>
                  <td>
                    <input type="text" id="profileBio"/>
                  </td>
                </tr>
              </tbody>
            </table>
            {/*<img src="./smiley-face.jpg" />*/}
          </form>
        </div>
      </div>
    );

  }


}

export default ProfileForm;
