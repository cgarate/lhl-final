import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import '../styles/profile.css';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';



class ProfileForm extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.saveUser = this.props.saveUser.bind(this);
    this.onChange = this.props.onChange.bind(this);
  }

  render() {

    // const birthday = new Date(this.props.userInfo.dob).toDateString();
    // console.log(birthday);
    // let birthday = new Date(this.props.userInfo.dob);
    let birthday = new Date();


    return (
      <div>
        <div>
          {/*<form action="http://localhost:8080/api/users/update/?_method=PUT" method="POST">*/}
            <Table className="profileTable" selectable={false}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
              >
                <TableRow>
                  <TableHeaderColumn className="tableCellStyle tableCellHeaderStyle"></TableHeaderColumn>
                  <TableHeaderColumn className="tableCellStyle tableCellHeaderStyle">Update Fields</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
              >
              <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileImage">Profile Image:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <img src="./images/smiley-face.jpg" height="250" width="250"/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileFirstName">First Name:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileFirstName" name="first_name" value={this.props.userInfo.first_name} onChange={this.props.onChange}/>
                    <input type="hidden" id="profileId" name="id" value={this.props.userInfo.id}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileLastName">Last Name:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileLastName" name="last_name" value={this.props.userInfo.last_name} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileUsername">Username:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileUsername" name="username" value={this.props.userInfo.username} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileEmail">Email:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileEmail" name="email" value={this.props.userInfo.email} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                {/*<TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileBirthdate">Birthdate:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <div>
                      <DatePicker hintText="Select Date" mode="landscape" defaultDate={birthday} onChange={this.props.onChange}/>
                    </div>
                  </TableRowColumn>
                </TableRow>*/}
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                    <label htmlFor="profileBio">Bio:</label>
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <TextField type="text" id="profileBio" name="bio" value={this.props.userInfo.bio} onChange={this.props.onChange}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className="tableCellStyle">
                  </TableRowColumn>
                  <TableRowColumn className="tableCellStyle">
                    <input type="submit" value="Update" className="profileSubmitButton" onClick={this.props.saveUser}/>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          {/*</form>*/}
          <ImagesUploader
                url="http://localhost:9090/notmultiple"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload a picture"
                />
        </div>
      </div>
    );
  }
}

export default ProfileForm;
