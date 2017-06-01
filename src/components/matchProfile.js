import React, { Component } from 'react';
import '../styles/profile.css';
import ProfileForm from './profileForm.js';
import Auth from '../modules/Auth';
import Card from 'material-ui/Card';
import MatchProfileForm from './matchProfileForm.js';



class MatchProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: {
        first_name: "",
        last_name: "",
        username: "",
        image: "",
        email: "",
        dob: "",
        bio: "",
        id: 0
      }
    }
  }

  getUserInfo = (userId) => {
    if (userId) {
    // let ten = 6;
    // let id = ten.toString();
    //let that = this;
    let url = 'http://localhost:8080/api/users/'

    fetch(url.concat(userId))
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
      this.setState({ userData: userData1});
      this.state.userData = data[0];
      // that.setState({ datePlans: data });
    });
    }
  }

  componentDidMount() {
    console.log("what am I: ", this.props.matchId);

    var foundUser = this.getUserInfo(this.props.matchId);
  }

  render() {

    return (
      <div className="profileMainSection">
        <div>
            <div className="datePlanMainSection">
              <div className="sectionTitle">Profile</div>
              {/*<MatchProfileForm userInfo={this.state.userData} />*/}
            </div>
        </div>
      </div>
    );
  }
}

export default MatchProfile;
